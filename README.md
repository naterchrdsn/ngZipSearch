# ng-ZipSearch

A really simple directive for a zip code search field.



Tested with angularjs-1.2.20



## Examples

[Example Plunker - Basic Usage](http://plnkr.co/edit/zLb4Ek?p=preview)

## Usage

Declare a dependency on the `ngZipSearch` module
``` javascript
var app = angular.module('myModule', ['ngZipSearch']);
```

Add the directive to a textbox

``` javascript
    <input type="text" zip-search ng-model="formData.zipcode" />
```

## Documentation


## Author

**Nate Richardson** (http://github.com/naterchrdsn)

## Credits

Zip Code lookup API: http://www.getziptastic.com/

## Copyright and license

    The MIT License

    Copyright (c) 2014 Nate Richardson

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.