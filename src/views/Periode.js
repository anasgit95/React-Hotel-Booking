import React, {
    Component
} from 'react';

import 'react-day-picker/lib/style.css';
import BasicConcepts from "./BasicConcepts"
import {
    Button
} from 'react-bootstrap';


class Periode extends Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);

        this.state = {

            Show: true,

            periode: "1",


        }


    }
    handler() {
        alert("je suis le pere ");
    }
    handleClick = () => {

        this.setState({
            Show: false,


        })
    }
    handleeChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {

        return (

            <
            div className = "Periode" > {
                this.state.Show ?
                <
                div >

                <
                div className = "Calender1" > <
                BasicConcepts name = "De" / > < /div> <
                div className = "Calender1" > <
                BasicConcepts name = "A " / > < /div>





                <
                Button onClick = {
                    this.props.action
                } > Rechercher < /Button>  



                <
                /
                div >
                :
                    null






            } <
            /div>


        );


    }
}
export default Periode;