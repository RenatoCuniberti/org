/*import { createPortal } from "react-dom"*/
import "./Equipos.css"
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipos = (props) => {

    //Destructuracion

    const {titulo, colorPrimario, id /*colorSecundario,*/} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;
    

    return <>
        
        {colaboradores.length>0 &&
        <section className="equipos" style={{backgroundColor: hexToRgba(colorPrimario, 0.6)}}>
            <input
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(evento) => {
                    actualizarColor(evento.target.value, id)
                }}
            />
            <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map ((colaborador, index)=><Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario} 
                    eliminarColaborador={eliminarColaborador}
                    like={like}/>)
                }
            </div>
        </section>}
        </>
}

export default Equipos