import React from 'react';
import '../App.css';
import HeroDetailComponent from './HeroDetail';

class MainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            heroes: [],
            selectedHero: {
                id: "",
                name: ""
            },
            showHeroes: false

        }

        this.onNameChange = this.onNameChange.bind(this);

        this.onHeroSelect = this.onHeroSelect.bind(this);

    }

    componentDidMount() {

        const heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];

        this.setState({
            heroes: heroes
        });

    }

    onHeroSelect(hero) {
        this.setState({
            selectedHero: hero,
            showHeroes: true
        })
    }

    onNameChange(event) {

        var newHero = Object.assign({}, this.state.selectedHero, {
            name: event.target.value
        })
        var newHeroes = this.state.heroes.map((hero) => {
            if (hero.id === newHero.id) {
                hero.name = newHero.name;
            }
            return hero;
        })

        this.setState({
            heroes: newHeroes,
            selectedHero: newHero
        })
    }

    render() {


        const heroes = this.state.heroes.map((hero) =>

            <li key={hero.id} onClick={() => this.onHeroSelect(hero)}>
                <span className="badge">{hero.id}</span> {hero.name}
            </li>

        )

        const header =
            <div className="row">
                <h2>My Heroes</h2>
                <ul className="heroes">{heroes}</ul>
                <HeroDetailComponent hero={this.state} handleChange={this.onNameChange} />
            </div>

        return (
            header
        );
    }
}



export default MainComponent;
