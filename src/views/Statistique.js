import React, {
  Component,

} from 'react';
import {
  Line
} from 'react-chartjs-2';
import {

  Card,
  CardBody,

  CardTitle,
  Col,

  Row,

} from 'reactstrap';
import {
  CustomTooltips
} from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {
  getStyle,
} from '@coreui/coreui/dist/js/coreui-utilities'


const brandInfo = getStyle('--info')










class Statistique extends Component {
  constructor(props) {
    super(props);
    console.log(props.data);

    this.state = {
      ws: new WebSocket('ws://localhost:3000/ws'),
      mainChart: {
        labels: ['14', '14 ', '15  ', "16  ", '17  ', "18  ", '19  ', "20  ", '17  ', "18  ", '19  ', "20", ],
        datasets: [{


            label: 'Hotel Price',
            backgroundColor: 'blue',
            borderColor: brandInfo,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: this.props.data
          },


        ],
      },
      mainChartOpts: {
        tooltips: {
          enabled: false,
          custom: CustomTooltips,
          intersect: true,
          mode: 'index',
          position: 'nearest',
          callbacks: {
            labelColor: function (tooltipItem, chart) {
              return {
                backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor
              }
            }
          }
        },
        maintainAspectRatio: false,
        legend: {
          display: true,
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: true,
            },
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 12,
              stepSize: 10,
              max: 100,
            },
          }],
        },
        elements: {
          point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 10,
            hoverBorderWidth: 3,
          },
        },
      }

    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  componentDidMount() {
    console.log(this.props);
    this.state.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }

    this.state.ws.onmessage = evt => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data)
      this.setState({
        dataFromServer: message
      })
      console.log(message)
    }

    this.state.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss

    }

  }




  loading = () => < div className = "animated fadeIn pt-1 text-center" > Loading... < /div>

  render() {

    return ( <
      div className = "animated fadeIn" >

      <
      Row >
      <
      Col >
      <
      Card >
      <
      CardBody >
      <
      Row >
      <
      Col sm = "3" >
      <
      CardTitle className = "mb-0" > Statistique < /CardTitle> <
      div className = "small text-muted" > 2019 / 2020 < /div> < /
      Col >

      <
      /Row> <
      div className = "chart-wrapper"
      style = {
        {
          height: 300 + 'px',
          marginTop: 4 + 'px',
          backgroundColor: "white"
        }
      } >
      <
      Line data = {
        this.state.mainChart
      }
      options = {
        this.state.mainChartOpts
      }
      height = {
        300
      }
      /> < /
      div > <
      /CardBody>

      <
      /Card> < /
      Col > <
      /Row>



      <
      /div>
    );
  }
}

export default Statistique;