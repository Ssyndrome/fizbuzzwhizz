'use strict';

function fizbuzzwhizz(a, b, c, number){
    if(number.toString().indexOf('3')!==-1){
        return "fizz";
    }else if(number%a===0){
        if(number%b===0){
            if(number%c===0){
                return `${a},${b},${c},fizzbuzzwhizz`;
            }else{
                return `${a},${b},fizzbuzz`;
            }
        }else if(number%c===0){
            return `${a},${c},fizzwhizz`;
        }else{
            return "fizz";
        }
    }else if(number%b===0){
        if(number%c===0){
            return `${b},${c},buzzwhizz`;
        }else{
            return "buzz";
        }
    }else if(number%c===0){
        return "whizz";
    }
}