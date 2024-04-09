function analizarCadena(cadena: string): void {
  if (cadena === cadena.toUpperCase()) {
    console.log("La cadena está formada sólo por mayúsculas.");
  } else if (cadena === cadena.toLowerCase()) {
    console.log("La cadena está formada sólo por minúsculas.");
  } else {
    console.log("La cadena está formada por una mezcla de mayúsculas y minúsculas.");
  }
}