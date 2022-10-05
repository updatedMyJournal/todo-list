import common from './webpack.common.js';
import { merge } from 'webpack-merge';

export default merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    watchFiles: './src/index.html',
    port: 8000,
    open: true,
  },
});
