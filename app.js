
class App extends React.Component {

    state = {
        age: 12
    }

    render() {

        return (
            <section>
                <h1>Youhou la familleeeeeee! {Math.random()}</h1>
                <p>Lorem ipsum dolor {"sit amet".toUpperCase()} consectetur adipisicing elit. A, accusantium?</p>
                <a href="https://www.google.fr">On souffre</a>

                <h2 className="bidule">J'ai {this.state.age} ans</h2>
            </section>

        )
    }
}


ReactDOM.render(<App/>, document.querySelector('#app'));