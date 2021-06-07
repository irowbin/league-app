import { environment } from 'projects/league-result/src/environments/environment';
import { io } from 'socket.io-client';

export const socket = !environment.production ? io('localhost:3000') : io();
