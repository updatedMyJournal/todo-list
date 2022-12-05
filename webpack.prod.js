import common from './webpack.common.js';
import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';

export default merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true
        },
      }),
    ],
  },
});
