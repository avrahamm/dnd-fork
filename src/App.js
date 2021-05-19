import React from "react";
import {useSelector} from "react-redux";

import HeaderRow from "./components/HeaderRow";
import TrRow from "./components/TrRow";

function App() {
    const ids = useSelector( state => state.rows.ids);

    return (
        <div className="App">

            <HeaderRow id="header"/>

            {
                ids.map( (id, key) => <TrRow key={key} id={id} /> )
            }

        </div>
    );
}

export default App;
