function divisiblesfive(x){
    let number_next = 0
    
    while(x % 5 !=0 ){
        x++
        contador++
    }   
    return number_next
}


function resultado(nota){
    
    if (nota <= 40){
        console.log(Reprobaste)
    }
    if(nota > 40){
        if( nota % 5 == 0){
            console.log("Tu nota es :", nota)
        }else{
             let z = divisiblesfive(nota)
             if( z - nota <= 3 ){
                 
                 console.log("Tu nota es: ", z)
                 
             }else{
                 console.log("Tu nota es:", nota)
             }
             
        }
    }
    
    
}

resultado(50)
