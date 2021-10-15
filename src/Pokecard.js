import React, { Component } from 'react';
import './Pokecard.css';

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
	render() {
		let imgSrc = `${POKE_API}${this.props.id.toString().padStart(3, '0')}.png`;
		const { name, type, exp, img } = this.props;
		return (
			<div className='Pokecard'>
				<h2 className='Pokecard-title'>{name}</h2>
				<div className='Pokecard-image'>
					<img className='img-container' src={imgSrc} alt={name} />
				</div>
				<div className='Pokecard-data'>Type: {type}</div>
				<div className='Pokecard-data'>EXP: {exp}</div>
			</div>
		);
	}
}
export default Pokecard;

{
	/* <Pokecard key={poke.id} name={poke.name} type={poke.type} exp={poke.base_experience} />; */
}
