import { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Administrador from "../router/administrador/administrador";
import Usuario from "../router/usuario/usuario";

function Routes() {
    const [usuario, setUsuario] = useState(true);
    const [administrador, setAdmintrador] = useState(false);

    if (usuario)
        return <Usuario />

    if (administrador)
        return <Administrador />
}

export default Routes;