import React from 'react';

class HeroDetail extends React.Component {

    constructor(props){
        super(props)
    }


    render() {
        const hero = this.props.hero.selectedHero;

        if (!this.props.hero.showHeroes) {
            return null;
        }

        const heroDetail =
            <div>
                <div className="row">
                    <h2>{hero.name} Details</h2>
                    <div><span>ID: </span>{hero.id}</div>
                    <label>Name:
                    <input value={hero.name} name="heroname" onChange={this.props.handleChange} placeholder="name" />
                    </label>
                </div>
                <div className="row">
                    <button className="btn">Back</button>
                </div>
            </div>
        return (
            heroDetail
        );
    }

}

export default HeroDetail;