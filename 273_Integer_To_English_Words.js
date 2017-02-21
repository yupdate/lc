/**
 * @param {number} num
 * @return {string}
 */
const less_than_20 = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const thousands = ['', 'Thousand', 'Million', 'Billion'];
    

var numberToWords = function(num) {
    if(num === 0) {
        return 'Zero';
    }

    let i = 0;
    let word = '';
    
    num = parseInt(num);
    
    while(num>0) {
        if(num%1000 !== 0) {
            word = helper(num%1000) + thousands[i] + ' ' + word;
        }
        i++;
        num = parseInt(num/1000);
    }
    
    return word.trim();
};

var helper = function(num) {
    if(num === 0) {
        return '';
    }else if(num < 20) {
        return less_than_20[num] + ' ';
    }else if(num<100) {
        return tens[parseInt(num/10)] + ' ' + helper(num%10);
    }else{
        return less_than_20[parseInt(num/100)] + ' Hundred ' + helper(num%100);
    }
};

//float issue
//get rid of float presicion such as 0.2 + 0.4 = 0.6000000001
var getFloat = (str) => {
      let isZeroTail = true;
      
      let num = 0;
      let base = 1;
      
      const arr = str.split('');
      while(arr.length) {
          let temp = arr.pop();
          if(!isZeroTail || temp !== '0') {
              isZeroTail = false;
              temp*=base;
              num+=parseInt(temp);
              base*=10;
          }
      }
      
      return num + '/' + base;
};
