/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable array-element-newline */

'use strict';

var dtypes2signatures = require( './../lib' );

var dtypes = [
	'float64', 'float64',
	'float64', 'generic',

	'float32', 'float32',
	'float32', 'float64',
	'float32', 'generic',

	'generic', 'generic',

	'int32', 'int32',
	'int32', 'uint32',
	'int32', 'float64',
	'int32', 'generic',

	'int16', 'int16',
	'int16', 'int32',
	'int16', 'uint16',
	'int16', 'uint32',
	'int16', 'float32',
	'int16', 'float64',
	'int16', 'generic',

	'int8', 'int8',
	'int8', 'int16',
	'int8', 'int32',
	'int8', 'uint8',
	'int8', 'uint8c',
	'int8', 'uint16',
	'int8', 'uint32',
	'int8', 'float32',
	'int8', 'float64',
	'int8', 'generic',

	'uint32', 'uint32',
	'uint32', 'float64',
	'uint32', 'generic',

	'uint16', 'int32',
	'uint16', 'uint16',
	'uint16', 'uint32',
	'uint16', 'float32',
	'uint16', 'float64',
	'uint16', 'generic',

	'uint8', 'int16',
	'uint8', 'int32',
	'uint8', 'uint8',
	'uint8', 'uint8c',
	'uint8', 'uint16',
	'uint8', 'uint32',
	'uint8', 'float32',
	'uint8', 'float64',
	'uint8', 'generic',

	'uint8c', 'int16',
	'uint8c', 'int32',
	'uint8c', 'uint8',
	'uint8c', 'uint8c',
	'uint8c', 'uint16',
	'uint8c', 'uint32',
	'uint8c', 'float32',
	'uint8c', 'float64',
	'uint8c', 'generic'
];

var sigs = dtypes2signatures( dtypes, 1, 1 );
console.log( sigs );
