/**
 * Creates a promise worker instance.
 */
export class PromiseWorker {

  /**
   * Current instance of worker
   */
  private readonly worker: Worker;

  constructor() {
    if (typeof (Worker) === 'undefined') {
      console.warn('The worker is undefined or unsupported browser')
      return;
    }
    // basically the job function that runs inside the worker.
    const scriptUrl = PromiseWorker.normalizedPromiseWorkerScript()

    const tempUrl = URL.createObjectURL(new Blob([scriptUrl],
      {
        type: 'application/javascript'
      }
    ));
    this.worker = new Worker(tempUrl);
    URL.revokeObjectURL(tempUrl)
  }

  /**
   * Run a task into worker thread.
   * @param job
   */
   runTaskOf = <T>(job: PromiseWorkerJob<unknown, unknown>): Promise<PromiseWorkerEvent<T>> => {
    return new Promise<PromiseWorkerEvent<T>>(
      (resolve, reject) => {
        this.worker.onmessage = (ev: MessageEvent) => resolve(ev.data);

        this.worker.onerror = (err) => reject(err);

        this.worker.postMessage({
          args: {
            fnArgs: job.args,
            taskFunction: job.taskFunction.toString()
          }
        });
      }
    );
  }

   terminateTask(): void {
    if (this.worker)
      this.worker.terminate()
  }


  /**
   *  Creates normalized script text including our task fn which will be executed inside worker context.
   */
  private static normalizedPromiseWorkerScript(): string {
    // TODO: since we are using as `new Function("return " + args.taskFunction)()` we'll have to optimize it later to execute securely.
    return `var base = self;
            onmessage = function(m) {
               try{
                    // main data that is passed in post message
                    var data = m.data;
                    // an arg that holds fn, input etc.,
                    var args = data.args;
                    // the input data that be passed to task function and access from there.
                    var fnInput = args.fnArgs;
                    // the incoming is string so we need to convert it into a function.
                    var func = new Function("return " + args.taskFunction)();
                    // finally execute the task as promise.
                   func(fnInput).then(function (result) {
                        base.postMessage({result:result, message: 'done'});
                    }).catch(function (error) {
                        base.postMessage({error:error, message:'failed'});
                    });
                } catch(e){
                  // we might run an issue inside the worker so log it.
                  console.error(e)
                }
            }
            `;
  }
}

/**
 * Creates a promise job worker with return type & argument input type.
 * The first type T is the payload type whereas the second type K is the return type of a task.
 * @see PromiseWorkerEvent
 */
export class PromiseWorkerJob<T, K> {

  /**
   * The token is accessed from the worker with incoming payload of a task argument.
   */
  get args(): T {
    return this._args;
  }

  /**
   * Incoming args of the payload.
   */
  private readonly _args: T;

  constructor(taskFunction: (result: T) => Promise<K>, inputArgs: T) {
    this.taskFunction = taskFunction;
    this._args = inputArgs;
  }

  /**
   * Task fn placeholder def which will then executed inside the worker.
   * @param args input data for the task that can be accessed and used inside worker.
   */
  taskFunction = (args: T): Promise<K> => {
    return Promise.reject('not yet implemented')
  }
}

/**
 * A custom type of job event.
 */
export interface PromiseWorkerEvent<T> {
  /**
   * Final result after the job completes. It'll return as type T
   */
  result: T;
  /**
   * Custom message as an status.
   */
  message?: string;
}
