/*
 * This file is part of the Pattern Library Builder project.
 *
 * Copyright (c) 2017-present LIN3S <info@lin3s.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Beñat Espiña <benatespina@gmail.com>
 */

'use strict';

import {Webpack} from 'lin3s-distribution';

const options = {
  entry: {
    'patternlibrary': './js/index.js',
  },
  input: {
    base: '',
    scss: `scss`
  },
  output: {
    jsPath: './build',
    jsPublicPath: '/',
    jsFilename: '[name].js',
    jsFilenameProduction: '[name].[chunkhash].js',

    cssPath: '',
    cssPublicPath: '/',
    cssFilename: '[name].css',
    cssFilenameProduction: '[name].[contenthash].css'
  },
  postcss: {
    autoprefixer: {
      browsers: ['last 2 versions']
    }
  },
  manifest: '../../manifest.json'
};

export default Webpack(options);