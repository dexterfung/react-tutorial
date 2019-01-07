import React, {Component} from 'react';
import Table from './Table'

class App extends Component {
    state = {
        characters: [
            {
                'name': 'DenDen',
                'job': 'Dog'
            },
            {
                'name': 'Mund',
                'job': 'IT Dog'
            },
            {
                'name': 'Bob',
                'job': 'IT Dog'
            }, 
            {
                'name': 'Bill',
                'job': 'Dog'
            }
        ]
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((characters, i) => {
                return i !== index;
            })
        })
    }

    render () {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <Table 
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
            </div>
        );
    }
}

export default App