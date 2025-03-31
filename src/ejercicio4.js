import fs from 'fs';


const ARCHIVO_ENTRADA           = "./archivo-entrada.txt";

const ARCHIVO_SALIDA            = "./archivo-salida.txt";

console.clear();

copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino){
    fs.readFile(origen, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error leyendo el archivo ${origen}:`, err);
            return;
        }

        fs.writeFile(destino, data, (err) => {
            if (err) {
                console.error(`Error cuando se escribe en ${destino}:`, err);
                return;
            }
            console.log(`Archivo copiado correctamente de ${origen} a ${destino}`);
        });
    });

}