import { useState } from 'react';
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import Header from './componentes/Header/Header';
import MiOrg from './componentes/MiOrg';
import Equipos from './componentes/Equipos';
import Footer from './componentes/Footer';
import { v4 as uuid } from 'uuid';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState ([
    {
      id: uuid (), 
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid (), 
      equipo: "Programacion",
      foto: "https://github.com/genesysrm.png",
      nombre: "Genesys Rondon",
      puesto: "Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuid (), 
      equipo: "UX y Diseno",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid (), 
      equipo: "Programacion",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuid (), 
      equipo: "Innovacion y Gestion",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    }

  ])
  const [equipos, actualizarEquipos] = useState ([
    {id: uuid (), titulo: "Programacion", colorPrimario:"#57c278", colorSecundario:"#d9f7f9"},
    {id: uuid (), titulo: "Front End",colorPrimario:"#82CFFA",colorSecundario:"#E8F8FF"},
    {id: uuid (), titulo: "Data Science",colorPrimario:"#A6D157",colorSecundario:"#F0F8E2"},
    {id: uuid (), titulo: "Dev Ops", colorPrimario:"#E06B69",colorSecundario:"#FDE7E8"},
    {id: uuid (), titulo: "UX y Diseno",colorPrimario:"#DB6EBF",colorSecundario:"#FAE9F5"},
    {id: uuid (), titulo: "Movil", colorPrimario:"#FFBA05",colorSecundario:"#FFF5D9"},
    {id: uuid (), titulo: "Innovacion y Gestion", colorPrimario: "#FF8A29",colorSecundario:"#FFEEDF"}
])
  
  //ternario -> condicion ? seMuestra : noSeMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log ("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id!==id)
    actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar color 
  
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo)=>{
      if (equipo.id===id){
        equipo.colorPrimario=color
      }
      return equipo;
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos ([...equipos, {...nuevoEquipo, id:uuid}])
  }

  //Like

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
  }

  return (
    <div>
      <Header/>
      {/*mostrarFormulario ? <Formulario/> : <></>*/}
      {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo)=>equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        />}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {

        equipos.map((eq)=>{
          return <Equipos 
          datos={eq} 
          key={eq.titulo}
          colaboradores={colaboradores.filter(colaborador=>colaborador.equipo===eq.titulo)}
          eliminarColaborador = {eliminarColaborador}
          actualizarColor = {actualizarColor}
          like = {like}
          />
        })

      }
      <Footer/>
        
    </div>
  );
}

export default App;
