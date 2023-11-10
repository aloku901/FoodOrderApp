import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2,
            userinfo: {
                name: "dummy",
                location: "Azamgarh",
            },
        };
    }

    async componentDidMount () {
        const data = await fetch("https://api.github.com/users/aloku901");
        const json = await data.json();
        this.setState({
            userinfo: json,
        });
    }

    

    render() {

        // const {name, location} = this.props;
        const {name, location, avatar_url } = this.state.userinfo;
        const {count, count2} = this.state;
        return (
            <div>
                <h1>Count: {count}</h1>
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count +1,
                        })
                    }}
                >Increase</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count - 1,
                        })
                    }}
                >Decrease</button>
                
                <h1>Count2: {count2}</h1>
                <hr></hr>
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @aloku901@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;
