import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Logo extends Component {
    render(){
        const cls1 = {
            fill:'#00acda'
        }
        const cls2 ={
            fontSize:'142.25px',
            fill:'#252525',
            fontFamily:"'Exotic350BT-DemiBold', 'Exotc350 DmBd BT'",
            fontWeight:'300'
        }
        const cls3 = {
            letterSpacing:'0em'
        }
        return(
            <div style={{display: 'inline-block'}}>
                <Link to={this.props.to}>
                    <svg style={{padding: '10px'}} height={this.props.height} width={this.props.width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 788 567">
                        <title>Logo - fm devndesign</title>
                        <g id="Layer_5" data-name="Layer 5">
                            <path style={cls1} d="M88,175.63l161-96s20-13,27,4v51s3,13-10,18c-15,7-109,60-109,60l105,59,8,5s6,1,6,11v53s-2,14-22,5c-24-13-194-111-194-111a10.7,10.7,0,0,1-8-12v-21s-1-4,5-8S88,175.63,88,175.63Z"/>
                            <path style={cls1} d="M700,175.63l-161-96s-20-13-27,4v51s-3,13,10,18c15,7,109,60,109,60l-105,59-8,5s-6,1-6,11v53s2,14,22,5c24-13,194-111,194-111a10.7,10.7,0,0,0,8-12v-21s1-4-5-8S700,175.63,700,175.63Z"/>
                            <path style={cls1} d="M390,142.31s60-106,67-113c2-5,5-13,24-9,17,9,16,12,14,21s-20,78-24,89c-15,64-43,130-77,171,0,0,12,47-17,69-10,7-16,17-95,34-8-1-22-4-6-18,8-7,22-14,24-33,1-13-7-55,40-70C339,255.31,365,180.31,390,142.31Z"/>
                            <text style={cls2} transform="translate(19 514.09)">fm dev<tspan style={cls1} x="344.86" y="0">n</tspan><tspan style={cls3} x="409.59" y="0">design</tspan></text>
                        </g>
                    </svg>
                </Link>
            </div>
        )
    }
}

export default Logo;