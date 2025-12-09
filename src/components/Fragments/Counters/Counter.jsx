import React from "react";
class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            counter : 1,
        };
        this.handleplus = this.handleplus.bind(this);
        this.handleminus = this.handleminus.bind(this);
    }
  handleplus () {
    this.setState(
        (state) => {
            if(state.counter == 10) {
                return {
                    counter: 0,
                };
            }else{
                return {
                    counter: state.counter +1,
                };
            }
        },
        () => console.log("counter", this.state.counter)
    );
        // this.setState({counter: this.state.counter +1});
    }
  handleminus () {
    this.setState(
        (state) => {
            if(state.counter <= 0) {
                return {
                    counter: 0,
                };
            }else{
                return {
                    counter: state.counter - 1,
                };
            }
        },
        () => console.log("counter", this.state.counter)
    );

        // this.setState({counter: this.state.counter -1});
    }
    componentDidMount(){
        console.log("did mount");
    }
    componentDidUpdate(prevProps, prevState){
        console.log("updateee")
    }
    render() {
        const {counter} = this.state;
        return (
            <>
            <h3 className="font-Latoblack">contoh class component</h3>
            <div className="flex translate-x-10"></div>
            <div className="capitalize flex space-x-2">
            <button className="bg-orange-950 text-white rounded-lg px-2"
            onClick={this.handleminus}>-</button>
            <div>{counter}</div>
            <button className="bg-orange-950 text-white rounded-lg px-2"
            onClick={this.handleplus}>+</button>
            </div>
            </>
        );
    }
}

export default Counter;