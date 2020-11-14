import React, {Component} from 'react'
import CustomLink from './Links'

export default class CustomList extends Component{
    constructor(){
        super()
        this.state= {
            listItems: []
        }
    }

    componentDidMount(){
        this.getListItems()
    }
    

    getListItems = () => {
        this.setState({
            listItems: this.props.listItems
        })
    }    
    render(){

        const listStyle = {
            listStyleType: 'none',
            margin: '0px'
        }



        const listItems = this.state.listItems.map((item,index) =>
        <li style={listStyle} key={index}>
        <CustomLink linkStyle={{ color: '#138496', padding: '10px' }}  to={item} text={item} />
        </li>
  );
        return(
            <div>
                {listItems}
            </div>
        )
    }
}