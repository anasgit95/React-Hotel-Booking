import Select from 'react-select';
import {
    Button
} from 'react-bootstrap';
import Statistique from './Statistique'
import React, {
    Component
} from 'react'
import BallRotate from 'react-loader-spinner'
import {
    DataIsHere
} from '../actions'
import {

    connect,
}
from 'react-redux';

import {
    tsExpressionWithTypeArguments
} from '@babel/types';
import ShowStatistique from '../reducers/ShowStatistique';
import {
    fromUnixTime
} from 'date-fns';
const options = [{
        value: 'Hotel',
        label: 'Hotel'
    },
    {
        value: 'Hotel',
        label: 'Hotel'
    },
    {
        value: 'Hotel',
        label: 'Hotel'
    },
    {
        value: 'Hotel1',
        label: 'Hotel1'
    },
    {
        value: 'Hotel2',
        label: 'Hotel2'
    },
    {
        value: 'Hotel',
        label: 'Hotel'
    },
    {
        value: 'Hotel',
        label: 'Hotel'
    },
    {
        value: 'Hotel',
        label: 'Hotel'
    },
    {
        value: 'Hotel',
        label: 'Hotel'
    },
    {
        value: 'Hotel',
        label: 'Hotel'
    },
    {
        value: 'Hotel',
        label: 'Hotel'
    },
    {
        value: 'Hotel',
        label: 'Hotel'
    },
    {
        value: 'Hotel',
        label: 'Hotel'
    },
    {
        value: 'Hotel',
        label: 'Hotel'
    },
];
class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ShowStatistique: null,
            selectedOption: null,
            loading: true,
            minutes: 0,
            seconds: 1,
            show: false,
            Statistique: true,
        }
    }
    handleChange = selectedOption => {
        this.setState({
            selectedOption
        });
    };
    handleClick = () => {
        console.log(this.state.ShowStatistique);
        this.setState({
            ShowStatistique: this.props.ShowStatistique
        });

    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            const {

                seconds,
                minutes
            } = this.state

            if (seconds > 0) {
                this.setState(({
                    seconds
                }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({
                        minutes
                    }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }
    componentDidUpdate() {

    }
    componentWillUnmount() {
        clearInterval(this.myInterval)
    }


    render() {

        const {
            selectedOption,
            minutes,
            seconds,
            loading
        } = this.state
        return ( < div className = "HotelSearch" > {
                loading ?
                <
                div >
                <
                BallRotate type = "Puff"
                color = "blue"
                height = {
                    300
                }
                width = {

                    500
                }
                timeout = {
                    1230000
                } //3 secs

                />  <
                h1 style = {
                    {
                        color: "blue",
                        fontWeight: "bold",
                        fontSize: "50px",
                        marginTop: "30px",
                    }
                } > < br / > < /h1>  < /
                div > : < div > <
                    h1 style = {
                        {
                            color: "blue",
                            fontWeight: "bold",
                            fontSize: "50px",
                            marginTop: "30px",
                            marginLeft: "70px"
                        }
                    } >
                    Choisir un hotel < /h1>  <
                img src = "./images/hoteSearch.jpeg" / >
                <
                Select className = "Anas"
                placeholder = ""
                value = {
                    selectedOption
                }
                onChange = {
                    this.handleChange
                }
                options = {
                    options
                }
                / >   <
                Button onClick = {
                    this.props.action
                } > Rechercher < /Button>    < /
                div >
            } {
                minutes === 0 && seconds === 0 && loading ?
                    <
                    div > {

                        this.setState({

                            loading: false,

                        })
                    }

                    <
                    /
                div >: null
            } {}


            <
            /div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        DataIsHere: () => dispatch({
            type: 'DataIsHere'
        }),

    }
}

function mapStateToProps(state) {
    const {
        ShowStatistique
    } = state
    return {
        ShowStatistique: ShowStatistique
    }
}
export default connect(mapStateToProps)(Timer);