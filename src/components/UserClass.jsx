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
        // const {count, count2} = this.state;
        return (
            <div className="m-4 p-4 w-[350px] rounded-lg bg-gray-100 hover:bg-gray-200 flex flex-col items-center shadow-2xl">
                {/* <h1>Count: {count}</h1>
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
                <hr></hr> */}
                
                <img src={avatar_url} className="w-72 rounded-lg"/>
                <h2 className="p-4 font-bold text-2xl">Name: {name}</h2>
                <h3 className="font-semibold text-lg">Location: {location}</h3>
                <h4 className="text-xs">Contact: aloku901@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;
