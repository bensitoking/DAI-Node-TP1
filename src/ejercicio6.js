let miUrl    = null;

let miObjeto = null;

miUrl    = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';

miObjeto = parsearUrl (miUrl);

console.log(miObjeto);


function parsearUrl(laURL){

    try {
        
        const urlObjeto = new URL(laURL);

        return {
            host: urlObjeto.origin,              
            pathname: urlObjeto.pathname,         
            parametros: Object.fromEntries(urlObjeto.searchParams)
        };
    } catch (error) {
        
        console.error(`Error al parsear la URL: ${error.message}`);
        return { host: null, pathname: null, parametros: {} };
    }

}