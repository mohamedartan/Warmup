 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
 	if(num % 10 < 2.5){
 		do{num = num - num
 			while(num % 10 < 2.5)
 		  }
 	  
 	}else if(num % 10 === 2.5){
 		do{num = num + num
 			while(num % 10 > 2.5)
 		  }
 	}else{
 		num = num +5
 	}
 	
 }