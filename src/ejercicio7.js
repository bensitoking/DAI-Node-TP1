import { getCurrency } from 'currency-map-country';

function obtenerMoneda(codigoPais) {
    try {
        const moneda = getCurrency(codigoPais);
        console.log(`Resultado de getCurrency('${codigoPais}'):`, moneda);
        return moneda || null;
    } catch (error) {
        console.error(`Error al obtener la moneda para ${codigoPais}: ${error.message}`);
        return null;
    }
}

const codigos = ['AR', 'US', 'UZA'];

codigos.forEach(codigo => {
    const moneda = obtenerMoneda(codigo);
    console.log(`La moneda del país ${codigo} es: ${moneda}`);
});
