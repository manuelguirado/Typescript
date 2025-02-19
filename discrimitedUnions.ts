type resultado =  
| {tipo :"exito" ,  data: number[]}
| {tipo: "fallo", error: string};
function handleResult(result  : resultado){
    if ( result.tipo === "exito"){
        console.log(result.data);
    }else{
        console.log(result.error);
    }
}
handleResult({tipo: "exito", data: [1,2,3]});
handleResult({tipo: "fallo", error: "Error al cargar los datos"});