import React, {
    Component
} from 'react';
import Timer from './Timer'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Periode from './Periode'
import './style.css';
import Statistique from './Statistique';


class Agence extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: null,
            loading: false,
            data: [],
            Show: false,
            ShowStatistique: false,

            periode: "1",
            someVar: '',

        }

    }

    handleeChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });


    }

    render() {




        return ( <
            div className = "Main" > {
                !this.state.Show ?
                <
                div className = "DottedBox" >
                <
                div className = "headDash" >
                <
                ul >
                <
                li > < a href = "default.asp" > Home < /a></li >
                <
                li > < a href = "news.asp" > News < /a></li >
                <
                li > < a href = "contact.asp" > Contact < /a></li >
                <
                li > < a href = "about.asp" > About < /a></li >
                <
                /ul>



                <
                /div> <
                div className = "Agence" >
                <
                div className = "PeriodePos1" >
                <
                Periode /
                >
                <
                /
                div > <
                div className = "PeriodePos2" > {
                    this.state.ShowStatistique ?
                    <
                    Statistique / >
                    :
                        null
                }

                <
                /
                div > < /
                div > <
                /
                div >


                :
                    null
            } {
                this.state.loading ?
                    <
                    div className = "DottedBox1" >
                    <
                    Timer

                secondes = {
                    [
                        (this.state.periode * 10) / 60, (this.state.periode * 2) % 60
                    ]
                }
                / > < /
                div >
                    : null
            } {
                this.state.ShowStatistique ?
                    <
                    Statistique data = {
                        this.state.data
                    }
                / >:
                null
            }




            <

            /div> );
        }
    }




    export default Agence;