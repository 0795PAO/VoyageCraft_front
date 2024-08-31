/* eslint-disable react/prop-types */
import DestinationsItem from "../destinationsItem/destinationsItem"

const DestinationsContainer = ({ destinations }) => {
    return (
        <ul>
            {
            destinations.map((destination) => (
                <DestinationsItem key={destination.id} destination={destination} />
            ))
            }
        </ul>
    )
}
export default DestinationsContainer
