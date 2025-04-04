import { getCountry } from 'currency-map-country';

function obtenerMoneda(codigoPais) {
    const moneda = JSON.stringify(getCountry(codigoPais));

    if (!moneda) {
        console.warn(`Código de país inválido o no encontrado: ${codigoPais}`);
        return null;
    }

    return moneda;
}

const codigos = ['ARG', 'USA'];

codigos.forEach(codigo => {
    const moneda = obtenerMoneda(codigo);
    console.log(`La moneda del país ${codigo} es: ${moneda}`);
});
