/**
 * Unique identifier generator util utilizing  `Blob` and `createObjectURL`
 */
export class UuidGenerator {
  uuid(): string {
    // creates something like: `blob:http://mydomain.com/81c00fbc-a692-44c6-9a0e-45fe35a527d0`
    const tempURL = URL.createObjectURL(new Blob());
    const uuid = tempURL.toString();
    // once we're done with url, release it.
    URL.revokeObjectURL(tempURL);
    // remove prefix (e.g. blob:null/, blob:www.domain.com/, ...)
    return uuid.substr(uuid.lastIndexOf('/') + 1).toUpperCase();
  }

  get _uuid(): string {
    return this.uuid();
  }
}
