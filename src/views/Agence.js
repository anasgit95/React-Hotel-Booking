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
            date1: "2019-10-20",
            date2: "2019-10-20",
            periode: "1",


        }

    }

    handleClick = () => {

        this.setState({
            Show: true,
            ShowStatistique: false,
            loading: true,

        })
    }
    handleeChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });


    }

    handleClick1 = () => {
        ;
        this.setState({
            selected: [],

            data: ['5', '17', '18', '30', '17', '18', '30'],
            ShowStatistique: true,
            Show: false,
        })
    }
    render() {

        const {
            selectedOption
        } = this.state;



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
                Periode / >
                <
                div className = "PeriodePost2" >
                <
                /div> < /
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
                    Timer secondes = {
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