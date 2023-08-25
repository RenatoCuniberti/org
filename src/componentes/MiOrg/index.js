import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado-hooks
    //useState()
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)

 /*   const [mostrar, actualizarMostrar] = useState(true)
    const manejarClick = () => {
        console.log("Mostrarocultarelemento", !mostrar);
        actualizarMostrar(!mostrar);
    }
*/

    return <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={/*manejarClick*/props.cambiarMostrar}/>
    </section>
}

export default MiOrg