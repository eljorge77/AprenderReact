function titulo() {
  // Este lenguaje es jsx que es una mezcla entre js y html en su mayoria es html
  const nombre = "Jorge";
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  } else {
    return <h1>Hola Mundo</h1>;
  }
}

export default titulo;
