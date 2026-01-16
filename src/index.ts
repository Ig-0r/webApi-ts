import 'dotenv/config';
import { server } from './server/server';
const PORT = Number(process.env.PORT);


server.listen(PORT, () => console.log('App rodando!'));