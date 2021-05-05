import React, {Component} from 'react';

class ListItem extends Component {
    render(){
        return(
            <div>
                <li> Make the List</li>
                <li>{this.props.doThis}</li>
            </div>
        )
    }

}

export default ListItem