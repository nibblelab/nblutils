# nblutils

JS and angularjs modules with many useful functions like factories for days and provinces

## Getting Started

Simply include the lib into your project (with momentjs as well) and add the dependency in your angular module 

```
bower install nblutils
```

```
<script src="bower_components/moment/min/moment-with-locales.min.js"></script>
<script src="bower_components/nblutils/dist/js/nblutils.min.js"></script>
```

```
angular.module('your_module', ['nblutils']);
```

### Using


1 - Getting provinces array

```
var provinces = $provinces.get('br');
```

2 - Getting months array

```
var months = $months.get('br');
```

3 - Getting days array

```
var days = $days.get('br');
```

4 - Wrapper for localstorage object

```
$localstorage.set('key', value);
var v = $localstorage.get('key' [, defalt_value]);


$localstorage.setObject('key', valueObject);
var obj = $localstorage.getObject('key' [, default_object_value]);
```

5 - Loading Spinner

In your HTML add this to the bottom

```
<div id="loadingdiv">
    <img src="path_to_your_ajax_loading_image" class="ajax-loader"/>
</div>
```

Include CSS

```
<link href="bower_components/nblutils/dist/css/nblutils.min.css" rel="stylesheet" type="text/css" media="screen, print, projection">
```

Add config to your angular module

```
    .config(['$httpProvider', function($httpProvider) {
            $httpProvider.defaults.headers.common = {};
            $httpProvider.defaults.headers.post = {};
            $httpProvider.defaults.headers.get = {};
            $httpProvider.defaults.headers.put = {};
            $httpProvider.defaults.headers.patch = {};
            $httpProvider.interceptors.push('loadingInterceptor');
            var spinnerFunction = function (data, headersGetter) {
                angular.element('#loadingdiv').show();
                return data;
            };
            $httpProvider.defaults.transformRequest.push(spinnerFunction);
        }
    ])
```

This will execute the loading spinner on every HTTP request

6 - Format Money

Use this extension method to convert float into money formatted strings:

```
var money_str = money_float.formatMoney(number_of_decimals [, decimal_point [, thousand_separator]]);
```

7 - Replace Last

Use this extension method to replace the last occurence of a substring in a string

```
var original_str = "This is only the beginning";
var new_str = original_str.replaceLast('th'); // This is only e beginning
```

8 - Replace All

Use this extension method to replace all occurences of a substring in a string

```
var original_str = "This is only the beginning";
var new_str = original_str.replaceAllt('th'); // is is only e beginning
```



## i18n

To add provinces, days or months simply extend nblutilsdata object

```
nblutilsdata.days['us'] = [
    { code: "Sun", num: '0', name: "Sunday" },
    { code: "Mon", num: '1', name: "Monday" },
    { code: "Tue", num: '2', name: "Tuesday" },
    { code: "Wed", num: '3', name: "Wednesday" },
    { code: "Thu", num: '4', name: "Thursday" },
    { code: "Fri", num: '5', name: "Friday" },
    { code: "Sat", num: '6', name: "Saturday" }
]
```


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


## Inspiration 

* formatMoney from krosti: https://gist.github.com/krosti/4026177

