angular.module('nblutils', [])
        .factory('$localstorage', ['$window', function ($window) {
            return {
                set: function (key, value) {
                    $window.localStorage[key] = value;
                },
                get: function (key, defaultValue) {
                    return $window.localStorage[key] || defaultValue;
                },
                setObject: function (key, value) {
                    $window.localStorage[key] = JSON.stringify(value);
                },
                getObject: function (key, defaultValue) {
                    return JSON.parse($window.localStorage[key] || '{}') || defaultValue;
                }
            };
        }])
        .factory('$estados', function () {
            
            var estados = [
                { sigla: "AC", nome: "Acre" },
                { sigla: "AL", nome: "Alagoas" },
                { sigla: "AM", nome: "Amazonas" },
                { sigla: "AP", nome: "Amapá" },
                { sigla: "BA", nome: "Bahia" },
                { sigla: "CE", nome: "Ceará" },
                { sigla: "DF", nome: "Distrito Federal" },
                { sigla: "ES", nome: "Espírito Santo" },
                { sigla: "GO", nome: "Goiás" },
                { sigla: "MA", nome: "Maranhão" },
                { sigla: "MG", nome: "Minas Gerais" },
                { sigla: "MS", nome: "Mato Grosso do Sul" },
                { sigla: "MT", nome: "Mato Grosso" },
                { sigla: "PA", nome: "Pará" },
                { sigla: "PB", nome: "Paraíba" },
                { sigla: "PE", nome: "Pernambuco" },
                { sigla: "PI", nome: "Piauí" },
                { sigla: "PR", nome: "Paraná" },
                { sigla: "RJ", nome: "Rio de Janeiro" },
                { sigla: "RN", nome: "Rio Grande do Norte" },
                { sigla: "RO", nome: "Rondônia" },
                { sigla: "RR", nome: "Roraima" },
                { sigla: "RS", nome: "Rio Grande do Sul" },
                { sigla: "SC", nome: "Santa Catarina" },
                { sigla: "SE", nome: "Sergipe" },
                { sigla: "SP", nome: "São Paulo" },
                { sigla: "TO", nome: "Tocantins" }
            ];
            
            return {
                get: function() {
                    return estados;
                },
                getBySigla: function(sigla) {
                    for(var k in estados)
                    {
                        if(estados[k].sigla == sigla)
                        {
                            return estados[k];
                        }
                    }
                    
                    return {};
                }
            };
        })
        .factory('$dias', function () {
            return {
                get: function() {
                    
                    var estados = [
                        { sigla: "Dom", nome: "Domingo" },
                        { sigla: "Seg", nome: "Segunda" },
                        { sigla: "Ter", nome: "Terça" },
                        { sigla: "Qua", nome: "Quarta" },
                        { sigla: "Qui", nome: "Quinta" },
                        { sigla: "Sex", nome: "Sexta" },
                        { sigla: "Sáb", nome: "Sábado" }
                    ];
                    
                    return estados;
                    
                }
            };
        })
        .factory('$meses', function () {
            return {
                get: function() {
                    
                    var estados = [
                        { sigla: "01", nome: "Janeiro" },
                        { sigla: "02", nome: "Fevereiro" },
                        { sigla: "03", nome: "Março" },
                        { sigla: "04", nome: "Abril" },
                        { sigla: "05", nome: "Maio" },
                        { sigla: "06", nome: "Junho" },
                        { sigla: "07", nome: "Julho" },
                        { sigla: "08", nome: "Agosto" },
                        { sigla: "09", nome: "Setembro" },
                        { sigla: "10", nome: "Outubro" },
                        { sigla: "11", nome: "Novembro" },
                        { sigla: "12", nome: "Dezembro" }
                    ];
                    
                    return estados;
                    
                }
            };
        })
        .factory('loadingInterceptor', function ($q, $window) {
            return {
                response: function (response) {
                    angular.element('#loadingdiv').hide();
                    return response;
                },
                responseError: function (response) {
                    angular.element('#loadingdiv').hide();
                    return $q.reject(response);
                }
            };
        })
        ;

Number.prototype.formatMoney = function(c, d, t){
    if(this == undefined || this == null) return '0,00';
    var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "," : d, 
    t = t == undefined ? "." : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

String.prototype.replaceLast = function (what, replacement) {
    return this.split(' ').reverse().join(' ').replace(new RegExp(what), replacement).split(' ').reverse().join(' ');
};

String.prototype.replaceAll = function (target, replacement) {
    return this.split(target).join(replacement);
};

String.prototype.formatCNPJ = function () {
    return this.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
};

String.prototype.formatTempo = function () {
    return this.replace(/^(\d{2})(\d{2})(\d{2})/, "$1:$2:$3");
};

String.prototype.formatCEP = function () {
    return this.replace(/^(\d{5})(\d{3})/, "$1-$2");
};

String.prototype.formatTelefone = function () {
    var n = this;
    if (n.length == 10) {
        return n.replace(/^(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    }
    return n.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4");
};

String.prototype.cleanMoney = function () {
    if(this.includes(',')) {
        return this.replaceAll('.', '').replaceAll(',', '.');
    }
    return this;
};

String.prototype.toMoneyFloat = function () {
    var n = this;
    n = n.replaceAll('.', '');
    n = n.replaceAll(',', '.');
    return parseFloat(n);
};

String.prototype.isNumeric = function () {
    var str = this;
    return !isNaN(parseFloat(str)) && isFinite(str);
};

String.prototype.validCPF = function () {
    var cpf_in = this;
    if(cpf_in.length <= 0)
        return false;
    
    var numeros, digitos, soma, i, resultado, digitos_iguais;
    var cpf = '';
    
    if(!isNumeric(cpf_in)) {
        for(i = 0; i < cpf_in.length; i++) {
            if(!isNaN(cpf_in.charAt(i)) && cpf_in.charAt(i) != ' ') {
                cpf += cpf_in.charAt(i);
            }
        }
    }
    else {
        cpf = cpf_in;
    }
    
    digitos_iguais = 1;
    
    if (cpf.length < 11)
        return false;
    

    for (i = 0; i < cpf.length - 1; i++) {
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    }

    if (!digitos_iguais) {
        numeros = cpf.substring(0,9);
        digitos = cpf.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        numeros = cpf.substring(0,10);
        soma = 0;
        for (i = 11; i > 1; i--) {
            soma += numeros.charAt(11 - i) * i;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        return true;
    }
    else {
        return false;
    }
};

String.prototype.validCNPJ = function () {
    var cnpj_in = this;
    if(cnpj_in.length <= 0)
        return false;
    
    var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
    var cnpj = '';
    
    if(!isNumeric(cnpj_in)) {
        for(i = 0; i < cnpj_in.length; i++) {
            if(!isNaN(cnpj_in.charAt(i)) && cnpj_in.charAt(i) != ' ') {
                cnpj += cnpj_in.charAt(i);
            }
        }
    }
    else {
        cnpj = cnpj_in;
    }
    
    digitos_iguais = 1;
    if (cnpj.length < 14 && cnpj.length < 15) {
        return false;
    }

    for (i = 0; i < cnpj.length - 1; i++) {
        if (cnpj.charAt(i) != cnpj.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    }

    if (!digitos_iguais) {
        tamanho = cnpj.length - 2
        numeros = cnpj.substring(0,tamanho);
        digitos = cnpj.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }

        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0)) {
            return false;
        }

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0,tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }

        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1)) {
            return false;
        }

        return true;
    }
    else {
        return false;
    }
};

function getRandomSequence(size) {
    var arr = ['0','1','2','3','4','5','6','7','8','9'];
    var seq = '';
    for(var i = 0; i < size; i++)
    {
        seq += arr[Math.floor(Math.random() * 10)];
    }
    
    return seq;
}

function getRandomId() {
    return (moment().format('YYYYMMDDHHMMSS') + getRandomSequence(10));
}

