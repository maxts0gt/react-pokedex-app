import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
	render() {
		const { name, type, exp, img } = this.props;
		return (
			<div className='pokemon'>
				<img
					className='img-container'
					src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${img}.png`}
					alt=''
				/>
				<div className='info'>
					<h1 className='name'>{name}</h1>
					<p className=''>{type}</p>
					<p className='number'>{exp}</p>
				</div>
			</div>
		);
	}
}
export default Pokecard;

{
	/* <Pokecard key={poke.id} name={poke.name} type={poke.type} exp={poke.base_experience} />; */
}
