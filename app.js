
class App extends React.Component {

    state = {
        // 1. On crée un état, dont on sait qu'on veut que ça change avec le temps
        // avec une valeur au départ
        age: ""
    }

    // 3. On crée la fonction qui se lance au onChange
    changeAge = (event) => {

        // L'élément sur lequel il y a eu interaction de changement
        // Hors ici, il s'agit du champ de texte ageInput
        console.log(event.target)

        // 4. La valeur de age sera dorénavant égal à ce qu'il y avait précédemment + 
        // La nouvelle action de l'utilisateur
        // Si l'utilisateur appuie sur suppr: event.target.value y a une lettre en moins

        // Si l'utilisateur ajoute une lettre: event.target.value va être égal à ce qu'il y  
        // avait avant avec cette lettre en plus
        this.setState({
            age: event.target.value
        })
    }

    render() {

        return (
            <section>
                <h1 className="maintitle">J'ai {this.state.age} ans</h1>
                

                <form className="form">
                    <label htmlFor="ageInput">Ton âge:</label>

                    {/* 
                    2. Ici, on vient modifier mon état âge grâce à un champ de texte
                        Dès qu'on appuie sur une touche, onChange se lance
                        La valeur du champ de texte est relié à l'état âge
                    */}
                    <input type="text" id="ageInput" 
                        onChange={this.changeAge} 
                        value={this.state.age} />
                </form>
                
            </section>

        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#app'));