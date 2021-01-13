import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({
    name: 'RocketShoes',
    host: '192.168.15.8',
  })
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
}
