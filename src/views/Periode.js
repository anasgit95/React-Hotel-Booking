import React, {
    Component
} from 'react';

import 'react-day-picker/lib/style.css';
import BasicConcepts from "./BasicConcepts"
import {
    Button
} from 'react-bootstrap';
import Timer from './Timer';
import BallRotate from 'react-loader-spinner'


class Periode extends Component {
    constructor(props) {
        super(props);

        this.state = {

            Show: true,

            periode: "1",


        }


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
                    this.handleClick
                } > Rechercher < /Button>  



                <
                /
                div >
                :
                    <
                    Timer / >




            } <
            /div>


        );


    }
}
export default Periode;