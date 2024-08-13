module.exports = function toReadable (number) {
  const str = number.toString();
  let result = ''
    if(number === 0 ){
        result = 'zero'
    }
    if(str.length ===1){
    switch(str[0]){
        case '1': result +='one' 
        break
        case '2': result += 'two'
        break
        case '3': result += 'three'
        break
        case '4': result += 'four'
        break
        case '5': result += 'five'
        break
        case '6': result += 'six'
        break
        case '7':result  += 'seven'
        break
        case '8':result  += 'eight'
        break
        case '9': result += 'nine'
        break
    } 
 } else if(str.length ===2 && str[0]==='1'){
        switch(str[1]){
           case '0': result = 'ten'
           break
           case '1': result = 'eleven' 
           break
           case '2': result = 'twelve'
           break
           case '3': result = 'thirteen'
           break
           case '4': result = 'fourteen'
           break 
           case '5': result = 'fifteen'
           break
           case '6': result = 'sixteen'
           break
           case '7': result = 'seventeen'
           break
           case '8': result = 'eighteen'
           break
           case '9':result = 'nineteen'
           break
         } 
    } 
    else if(str.length ===2 && str[0]!='1') {
         switch(str[0]){
         case '2': result += 'twenty'
         break
         case '3': result += 'thirty'
         break
         case '4': result += 'forty'
         break
         case '5': result += 'fifty'
         break
         case '6': result += 'sixty'
         break
         case '7': result += 'seventy'
         break
         case '8': result += 'eighty'
         break
         case '9': result += 'ninety'
         break
        }
        switch(str[1]){
            case '1': result +=' one'
            break
            case '2': result += ' two'
            break
            case '3': result += ' three'
            break
            case '4': result += ' four'
            break
            case '5': result += ' five'
            break
            case '6': result += ' six'
            break
            case '7':result  += ' seven'
            break
            case '8':result  += ' eight'
            break
            case '9': result += ' nine'
            break
      } 
    }
       else if (str.length === 3){
        switch(str[0]){
            case '1': result +='one' 
            break
            case '2': result += 'two'
            break
            case '3': result += 'three'
            break
            case '4': result += 'four'
            break
            case '5': result += 'five'
            break
            case '6': result += 'six'
            break
            case '7':result  += 'seven'
            break
            case '8':result  += 'eight'
            break
            case '9': result += 'nine'
            break
        }
            result += ' hundred'
            if(str[1]==='1') {
            switch(str[2]){
                case '0': result += ' ten'
                break
                case '1': result += ' eleven' 
                break
                case '2': result += ' twelve'
                break
                case '3': result += ' thirteen'
                break
                case '4': result += ' fourteen'
                break 
                case '5': result += ' fifteen'
                break
                case '6': result += ' sixteen'
                break
                case '7': result += ' seventeen'
                break
                case '8': result += ' eighteen'
                break
                case '9':result += ' nineteen'
                break
              } } else {
                switch(str[1]){
                case '0': result += ''
                break
                case '2': result += ' twenty'
                break
                case '3': result += ' thirty'
                break
                case '4': result += ' forty'
                break
                case '5': result += ' fifty'
                break
                case '6': result += ' sixty'
                break
                case '7': result += ' seventy'
                break
                case '8': result += ' eighty'
                break
                case '9': result += ' ninety'
                break
               }
               switch(str[2]){
                case '0': result += '' 
                break
                case '1': result +=' one'
                break
                case '2': result += ' two'
                break
                case '3': result += ' three'
                break
                case '4': result += ' four'
                break
                case '5': result += ' five'
                break
                case '6': result += ' six'
                break
                case '7':result  += ' seven'
                break
                case '8':result  += ' eight'
                break
                case '9': result += ' nine'
                break
              }  } }
        return result; 
            }
