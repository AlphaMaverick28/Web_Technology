 //remove duplicate from array
 let arr = [1,2,2,3,4,5];
 let uniquearr = []

  for (let i = 0; i < arr.length; i++) {
    if (!uniquearr.includes(arr[i])) {
      uniquearr.push(arr[i]);
    }

  }
  console.log(uniquearr)
