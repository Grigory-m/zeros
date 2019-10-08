module.exports = function zeros(expression) {
  let arr = expression.split('*');

      function fives(value) {
      let n, signFactorial;
      for (const char of value) {
            let pos = value.indexOf('!', 0);
            n = value.slice(0, pos);
            signFactorial = value.slice(pos, value.length);
        }
        let five =0;
        if (signFactorial.length == 1) {
            for (let i = 1; i <= n; i++) {
            let s = i;
            while (!(s % 5)) {five += 1;s = s / 5;}
            }
        }
        if (signFactorial.length == 2) {
            if (n % 2) {
            for (let i = 1; i <= n; i++) {
                let s = i;
                while (!(s % 5)) {five += 1;s = s / 5;}
                i += 1;
            }      
            } else {
                for (let i = 2; i <= n; i++) {
                let s = i;
                while (!(s % 5)) {five += 1;s = s / 5;}
                i += 1;
            }
            }
        }
      return five;        
    }

    function twos(value) {
      let n, signFactorial;
      for (const char of value) {
        let pos = value.indexOf('!', 0);
        n = value.slice(0, pos);
        signFactorial = value.slice(pos, value.length);
      }
      let two =0;
      if (signFactorial.length == 1) {
        for (let i = 1; i <= n; i++) {
        let s = i;
        while (!(s % 2)) {two += 1;s = s / 2;}
        }
      }
      if (signFactorial.length == 2) {
        if (n % 2) {
          for (let i = 1; i <= n; i++) {
            let s = i;
            while (!(s % 2)) {two += 1;s = s / 2;}
            i += 1;
          }      
        } else {
            for (let i = 2; i <= n; i++) {
              let s = i;
              while (!(s % 2)) {two += 1;s = s / 2;}
              i += 1;
            }
          }
      }
      return two;        
    }
    let numberOfTwos = arr.map(twos).reduce((sum, current) => sum + current, 0);
    let numberOfFives = arr.map(fives).reduce((sum, current) => sum + current, 0);
      
    return numberOfFives >= numberOfTwos ? numberOfTwos : numberOfFives;
    
}
