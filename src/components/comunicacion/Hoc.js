import React, {Component} from 'react';

const withCount = (Comp) => {
    return class extends Component {
        state = {
            num: 0
        };

        add = () => {
            this.setState({
                num: this.state.num + 1
            })            
        }

        render() {
            return(
                <Comp num={this.state.num} add={this.add} />
            )
        }
    }
}

const Componente = ({num, add}) => {
    return(
        <div>
            <h2>{num}</h2>
            <button onClick={add}>add</button>
        </div>
    )
}

export default withCount(Componente);