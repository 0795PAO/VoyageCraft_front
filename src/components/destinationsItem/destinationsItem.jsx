/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const DestinationsItem = ({destination}) => {
    return (
        <li
            className="my-6 rounded-lg flex justify-center items-center relative w-[70vw] h-28 bg-center overflow-hidden transform transition-transform duration-300 hover:scale-105 focus:scale-105 focus:outline-none"
            style={{ backgroundImage: `url('../../assets/images/barcelona3.jpg')` }}
            tabIndex="0"
        >
            <Link to='/details'>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative text-white">
                    <h3 className="text-lg font-bold">{destination.name}</h3>
                </div>
            </Link>
        </li>
    )
}
export default DestinationsItem   
