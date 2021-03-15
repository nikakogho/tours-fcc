import Tour from './Tour'

const TourList = ({tours, remove}) => {
    return <div id='tours'>
        {tours.map(tour => <Tour key={tour.id} {...tour} remove={remove} />)}
    </div>
}

export default TourList