import Toy from './Toy'

function ToyList({toys}){
    return (
        <div>
            {toys.map(toy => {
                return <Toy key={toy.id} toy={toy}/>
            })}
        </div>
    )
}

export default ToyList