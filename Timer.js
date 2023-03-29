function countdown(num) {
    const timer = setInterval(() => {
      num--;
      console.log(num);
      if (num === 0) {
        console.log('DONE!');
        clearInterval(timer);
      }
    }, 1000);
  }
  