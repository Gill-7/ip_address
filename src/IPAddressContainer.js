import React, { Component } from 'react'

class IPAddressContainer extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
    }

    render() {
        var { isLoaded, items } = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else{
            return (
                <div>
                    <ul>
                        {items.map(item => (
                            <h3><li key={items.id}>
                                Name: {item.name} | Email: {item.email}
                            </li>
                            </h3>
                        ))};
                    </ul>
                </div>
            )
        }
    }
}

export default IPAddressContainer
