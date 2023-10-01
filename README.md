<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dtypes2signatures

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Transform a list of array argument data types into a list of signatures.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-base-dtypes2signatures
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var dtypes2signatures = require( '@stdlib/ndarray-base-dtypes2signatures' );
```

#### dtypes2signatures( dtypes, nin, nout )

Transforms a list of array argument data types into a list of signatures, where `nin` is the number of input array arguments and `nout` is the number of output array arguments.

```javascript
var dtypes = [ 'float32', 'float64' ];

var out = dtypes2signatures( dtypes, 1, 1 );
// returns [ '(float32) => (float64)' ]

out = dtypes2signatures( dtypes, 2, 0 );
// returns [ '(float32, float64) => ()' ]

out = dtypes2signatures( dtypes, 0, 2 );
// returns [ '() => (float32, float64)' ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable array-element-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var dtypes2signatures = require( '@stdlib/ndarray-base-dtypes2signatures' );

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
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-dtypes2signatures.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-dtypes2signatures

[test-image]: https://github.com/stdlib-js/ndarray-base-dtypes2signatures/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-dtypes2signatures/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-dtypes2signatures/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-dtypes2signatures?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-dtypes2signatures.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-dtypes2signatures/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-dtypes2signatures/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-dtypes2signatures/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-dtypes2signatures/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-base-dtypes2signatures/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-dtypes2signatures/main/LICENSE

</section>

<!-- /.links -->
