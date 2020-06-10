/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

const RelayFlowGenerator = require('relay-compiler/lib/language/javascript/RelayFlowGenerator');

const formatGeneratedModule = require('./formatGeneratedModule');

const {find} = require('relay-compiler/lib/language/javascript/FindGraphQLTags');

import type {PluginInterface} from '../RelayLanguagePluginInterface';

module.exports = (): PluginInterface => ({
  inputExtensions: ['js', 'jsx'],
  outputExtension: 'js',
  typeGenerator: RelayFlowGenerator,
  formatModule: formatGeneratedModule,
  findGraphQLTags: find,
});
