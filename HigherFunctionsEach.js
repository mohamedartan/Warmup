	// 1) 'negativeAll' create function that accept array as input and check the element 
    //     if it's positive make it negative 
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
          func(array[i]);
        }
    }
	function negativeAll(array) {
		var empArr = [];
		each(array, function (item, i) {
			if(item >= 0){
				empArr.push(item * -1);
			}else{
			empArr.push(item);
		}
		})
		return empArr;
	}

	/*
	2) using improved each write function that multiply each element in array with
	 4 if index multiply of 4 

	 var x = [2, 4, 6, 8, 10, 12, 14, 16]
		multiplyOfFour(x);  => [16, 64 , 256] 
    */
   
    function each(array, func) {
        for (var i = 0; i < array.length; i++) {
            func(array[i], i);
        }
    }
	function multiplyOfFour(array) {
		var temArr = [];
	    each(array, function (item, i) {
	    	if(i % 4 === 0){
	    	   temArr.push(item * 4)
	    	}
	    })
	    return temArr;
	}
