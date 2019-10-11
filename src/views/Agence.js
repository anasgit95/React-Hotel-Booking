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
        this.handler = this.handler.bind(this);
        this.handlerPeriod = this.handlerPeriod.bind(this);
        this.state = {
            selectedOption: null,
            loading: false,
            data: [],
            Show: false,
            ShowStatistique: false,
            ShowPeriod: true,
            ShowTimer: false,
            periode: "1",
            someVar: '',

        }

    }

    handleeChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });


    }
    handler() {
        this.setState({

            ShowStatistique: true
        });
    }

    handlerPeriod() {
        this.setState({
            ShowTimer: true,
            ShowPeriod: false
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
                div className = "PeriodePos1" > {
                    this.state.ShowPeriod ?
                    <
                    Periode action = {
                        this.handlerPeriod
                    }
                    / > :
                    null
                } {
                    this.state.ShowTimer ?
                        <
                        Timer action = {
                            this.handler
                        }
                    />: null
                } <
                /
                div > <
                div className = "PeriodePos2" > {
                    this.state.ShowStatistique ?
                    <
                    Statistique / >
                    :
                        <
                        div >
                        <
                        div className = "FirstBlack" >
                        <
                        div className = "Paneau1" >
                        <
                        img src = "./images/flight2.png" / >
                        <
                        p > flight reservation < /p>  < /
                    div > <
                    div className = "Paneau2" >
                    <
                    img src = "./images/hotel.png" / >
                    <
                    p > hotel reservation < /p>   < /
                    div >


                    <
                    /div>  <
                    div className = "SecondeBlack" >
                    <
                    div className = "Paneau1" >
                    <
                    img src = "./images/metro.png" / >
                    <
                    p > buy your ticket < /p>  < /
                    div > <
                    div className = "Paneau2" >
                    <
                    img src = "./images/Anas.png" / >
                    <
                    p > Call
                    for information < /p>   < /
                    div >

                    <
                    /div> < /
                    div >
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
            }



            <

            /div> );
        }
    }




    export default Agence;