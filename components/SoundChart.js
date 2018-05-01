import React from 'react'
import {connect} from 'react-redux'
import {PieChart, Pie, Tooltip, Legend, Cell} from 'recharts'
import {getSoundAnalysisAction} from '../actions/getSoundAction'

class SoundChart extends React.Component {

  componentDidMount() {
    this.props.dispatch(getSoundAnalysisAction())
  }

  render() {
    const sound = this.props.sound_analysis
    const COLORS = ['#0088FE', '#e23e22', '#FFBB28']
    let sound_analysis = []
    if (sound) {
      sound.forEach(element => {
        let data = {
          name: element.type_name,
          value: element.total_sound
        }
        sound_analysis.push(data)
      })
    }
    return (
      <div>
        <div className='panel'>
          <PieChart width={400} height={200} >
            <Pie
              data={sound_analysis}
              cx={190}
              cy={80}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
            >
            {(() => {
              if (sound) {
                return (
                  sound.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                )
              }
            })()
            }
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        <style jsx>{`
          .panel {
            display: inline-block;
            background: #ffffff;
            min-height: 100px;
            height: 200px;
            box-shadow:0px 0px 5px 5px #C9C9C9;
            -webkit-box-shadow:2px 2px 5px 5x #C9C9C9;
            -moz-box-shadow:2px 2px 5px 5px #C9C9C9;
            margin: 10px;
            padding: 10px;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = ({sound_analysis}) => ({
  sound_analysis: sound_analysis.data
})

export default connect(mapStateToProps)(SoundChart)
