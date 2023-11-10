function curday(symbol) {
    const today = new Date();
    const dd = String(today.getDate())
    const mm = String(today.getMonth() + 1)
    const yyyy = today.getFullYear();
    
    return mm + symbol + dd + symbol + yyyy;
  }
  
  console.log(curday('*')); 
  console.log(curday('-')); 
