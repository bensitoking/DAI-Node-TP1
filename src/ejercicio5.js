let miUrl    = null;

let miObjeto = null;

miUrl    = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';

miObjeto = parsearUrl (miUrl);

console.log(miObjeto);


function parsearUrl(laURL){

     
     const urlObjeto = new URL(laURL);

   
     return {
         host: urlObjeto.origin,             
         pathname: urlObjeto.pathname,         
         parametros: Object.fromEntries(urlObjeto.searchParams) 
     };

}