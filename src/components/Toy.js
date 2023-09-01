function Toy({toy}){
    return (
        <div>
            <h2>Toy # {toy.id}</h2>
            <h2>Name: {toy.name}</h2>
            <img src={toy.image}/>
        </div>
    )
}

export default Toy;