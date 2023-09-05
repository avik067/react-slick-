import './index.css'

const PlanetItem = ({children}) => {
  console.log(children)

  return (
    <div className="col align-center" data-testid="planets">
      <img
        className="image-carousel"
        src={children.imageUrl}
        alt={`planet ${children.name}`}
      />

      <h1 className="planet-name">{children.name}</h1>
      <p className="description">{children.description}</p>
    </div>
  )
}

export default PlanetItem
