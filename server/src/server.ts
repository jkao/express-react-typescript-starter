import app from './app';

const API_SERVER_PORT: number | undefined = (Number.parseInt(<string> process.env['API_SERVER_PORT']));
const SERVER_ENV: string | undefined = process.env['SERVER_ENV'];

if (!API_SERVER_PORT) {
  throw 'API_SERVER_PORT expected'
}
if (SERVER_ENV !== 'dev' && SERVER_ENV !== 'prod') {
  throw 'SERVER_ENV must be "dev" or "prod"'
}

const server = app.listen(
  API_SERVER_PORT,
  () => {
    console.log(
      "App is running at http://localhost:%d in %s mode\n",
      API_SERVER_PORT,
      SERVER_ENV
    );
    console.log("Press CTRL-C to stop\n");
  }
);

export default server;
