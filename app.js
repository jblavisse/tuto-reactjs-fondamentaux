
class App extends React.Component {

    state = {
        age: 12
    }

    hello() {
        console.log("coucouuuuuuu");
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
                <h1 onClick={this.hello} onMouseOver={this.hoverboard}>Youhou la familleeeeeee!</h1>
                
                <a href="https://www.google.fr">On souffre</a>

                <h2 className="bidule"><span onClick={this.hello}>J'ai</span> {this.state.age} ans</h2>
                

                <button onClick={this.hiBudgie}>Mon vieil élan</button>
            </section>

        )
    }
}


ReactDOM.render(<App/>, document.querySelector('#app'));