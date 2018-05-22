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
var new_str = original_str.replaceAll('th'); // is is only e beginning
```

9 - Format CNJP

```
var cnpj = "00111222000101";
var formatted = cnpj.formatCNPJ(); // 00.111.222/0001-01
```

10 - Format Time

```
var time = "133001";
var formatted = time.formatTime(); // 13:30:01
```

11 - Format CEP

```
var cep = "0100570";
var formatted = cep.formatCEP(); // 01005-70
```

12 - Format Phone

```
var phone = "12345678";
var formatted = phone.formatPhone(); // 1234-5678

var phone = "3412345678";
var formatted = phone.formatPhone(); // (34) 1234-5678

var phone = "34912345678";
var formatted = phone.formatPhone(); // (34) 9 1234-5678

var phone = "0800401402";
var formatted = phone.formatPhone(); // 0800 401-402

var phone = "08004014130";
var formatted = phone.formatPhone(); // 0800 401-4130
```


13 - Clean Money String

```
var money_str = "1.250,75";
var money_clean = money_str.cleanMoney(); // 1250.75 (string)
```

14 - Convert Money string to float

```
var money_str = "1.250,75";
var money_clean = money_str.cleanMoney(); // 1250.75 (float)
```


15 - Check if string only contains numbers 

```
var a = "1.250,75";
var b = "1250.75";
if(a.isNumeric()) {  } // false
if(b.isNumeric()) {  } // true
```

16 - Check if string is valid CPF

```
var a = "123.456.789-00";
var b = "825.858.524-07";
if(a.validCPF()) {  } // false
if(b.validCPF()) {  } // true
```


17 - Check if string is valid CNPJ

```
var a = "12.234.456/7890-01";
var b = "06.848.185/0001-75";
if(a.validCNPJ()) {  } // false
if(b.validCNPJ()) {  } // true
```

18 - Generate random sequence of digits

```
getRandomSequence(5); // 80325
getRandomSequence(7); // 9982063
```

19 - Generate random ID

```
getRandomId(); // 201709070705318032520630
```

20 - Generate a blank image

```
var img = UtilImage.whiteOne;
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

21 - Email validation

To validate email strings use

```
if(email_string_var.validEmail()) {
    //it's valid
}
```

22 - Accented Letters

To convert accented letters into not accented ones

```
var accented = "Isto é um teste de pão";
var not_accented = accented.removeAccentedLetters(); // returns Isto e um teste de pao
```

23 - Capitalize First Letter

To capitalize the first letter in string

```
var str = "not capitalized";
var cap_str = str.capitalizeFirstLetter(); // returns Not capitalized
```

24 - Array shuffle

To shuffle an array 

```
var arr = [1,2,3,4,5];
var arr_suffled = arr.shuffle(); // returns shuffled arr
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


## Inspiration 

* formatMoney from krosti: https://gist.github.com/krosti/4026177
* array shuffle from think49: https://gist.github.com/think49/800308/d427fc5fbdeedfaa1df393cb82b2b61cd3d506d2

