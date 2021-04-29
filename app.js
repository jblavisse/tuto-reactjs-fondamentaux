
class App extends React.Component {

    state = {
        age: 12,
        title: "Mon titre qui tue sa mère!"
    }

    hello = () => {
        console.log(this.state.title);

        // VERY VERY BAD PRATICE. NE MARCHE PAS SVP.
        //this.state.title = "Mon titre qui déglingue tout";

        // Bieeeennnnnnnn
        // this.setState({
        //     title: "Mon titre qui déglingue tout"
        // })

        // this.state.title = this.state.title + "Et ta grand-mère!";
        this.setState({
            title: this.state.title + "Et ta grand-mère!"
        })
    }

    hoverboard() {
        console.log("IL A UN HOVERBOARDDDDDDDD...MCFLY!");
    }

    hiBudgie = () => {
        console.log("coucou petite perruche!");
        console.log(this.state.age);
    }

    render() {

        return (
            <section>
                <h1 onClick={this.hello} onMouseOver={this.hoverboard}>{this.state.title}</h1>
                
                <a href="https://www.google.fr">On souffre</a>

                <h2 className="bidule"><span onClick={this.hello}>J'ai</span> {this.state.age} ans</h2>
                

                <button onClick={this.hiBudgie}>Mon vieil élan</button>
            </section>

        )
    }
}


ReactDOM.render(<App/>, document.querySelector('#app'));