let aVerificar = ["(",")"]
console.log(aVerificar)



if (aVerificar.includes("(", ")", "{", "}", "[", "]")) {
    if (aVerificar.includes("(")) {
        if (aVerificar.includes(")")){
            if (aVerificar.includes("{")){
                if (aVerificar.includes("}")){
                    if (aVerificar.includes("[")){
                        if (aVerificar.includes("]")){
                            console.log("ES EQUILIBRADA")
                        } else {
                            console.log("NO ES EQUILIBRADA")
                        }
                    }{
                        console.log("aloo")
                    } 
    
                }else {
                    console.log("NO ES EQUILIBRADA")
                }
            }else {
                if (aVerificar.includes("[")){
                    if (aVerificar.includes("]")){
                        console.log("ES EQUILIBRADA")
                    } else {
                        console.log("NO ES EQUILIBRADA")
                    }
                }else {
                    console.log("Esta Equilibrada")
                } 
            }
    
        }else {
            console.log("NO ES EQUILIBRADA")
        }
    
    }else {
        if (aVerificar.includes("{")){
            if (aVerificar.includes("}")){
                if (aVerificar.includes("[")){
                    if (aVerificar.includes("]")){
                        console.log("ES EQUILIBRADA")
                    } else {
                        console.log("NO ES EQUILIBRADA")
                    }
                }else {
                    console.log("Esta Equilibrada")
                } 

            }else {
                console.log("NO ES EQUILIBRADA")
            }
        }{
            console.log("alo")
        }
    }
}else {
    console.log("No Hay Nada que analizar")
}  









