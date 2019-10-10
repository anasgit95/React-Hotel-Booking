import React from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

export default class BasicConcepts extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            selectedDay: undefined,
        };
    }

    handleDayClick(day) {

        this.setState({
            selectedDay: day
        });
    }

    render() {
        return ( <
                div >

                <
                DayPicker onDayClick = {
                    this.handleDayClick
                }
                /> {
                this.state.selectedDay ? ( <
                    p style = {
                        {
                            marginLeft: "10%",
                            color: "blue",
                            fontWeight: "bold",
                            fontSize: "23px",
                            borderBottom: "inset",
                            marginBottom: "15%"

                        }
                    } > < img src = "./images/calendrier.png" / > {
                        this.state.selectedDay.toLocaleDateString()
                    } < /p>
                ) : ( <
                    p style = {
                        {
                            marginLeft: "5%",
                            color: "green",
                            fontWeight: "bold",
                            fontSize: "15px",
                            borderBottom: "inset",
                            marginBottom: "15%"


                        }
                    } > < img src = "./images/calendrier.png" / > < /p>
                )
            } <
            /div>
    );
}
}