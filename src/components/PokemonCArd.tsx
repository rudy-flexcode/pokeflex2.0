





function PokemonCard({pokemon}){

   
    return(
<>
    <h2>{pokemon.name}</h2>
    {pokemon.imgSrc ?(
        <img  src={pokemon.imgSrc} alt={pokemon.name}/>
    ):(<p>"???"</p>)} 
    
</> 
    )
}
export default PokemonCard