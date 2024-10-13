//this functtions change the result depends is string or number

function unionTypes(parameter1 : any, parameter2 :any) : any{
    if (typeof parameter1 == "string" && typeof parameter2 == "string"){
        if (parameter1.length > parameter2.length){
             console.log(parameter1 + "has more length than " + parameter2) 
        }else{
            console.log(parameter2 + "has more length than" + parameter1)
        }
    }else{
        if (parameter1 > parameter2){
            console.log(parameter1 + "is greater than" + parameter2)
        }else{
            console.log(parameter2 + "is greater than " + parameter1)
        }
    }
}
unionTypes(4,5);
unionTypes("hello","mamahuevo");
