const codigo = (strings) => {
  const cursos = [ ,'Medicina','Enfermagem', , ,'Farmacia','Fisioterapia', , , ,'Psicologia',,,,,,,,,,,,,'Odontologia',]
  let codigo = 0;

  cursos.filter((e, index) =>{
    if(e == strings) {
      codigo = index
    }
  })

  return codigo;
}

export default codigo
