import './Tour.css'

import { useState } from 'react'

const sizeLimit = 200

const Tour = ({ id, img, name, price, description, remove }) => {
    const [fullText, setFull] = useState(false)
    
    const shortVersion = description.substring(0, sizeLimit)

    const readMore = () => {
        setFull(true)
    }

    const showLess = () => {
        setFull(false)
    }

    const shortJSX = <p>{shortVersion}... <button className='sizer' onClick={readMore}>Read More</button></p>
    const fullJSX = <p>{description} <button className='sizer' onClick={showLess}>Show Less</button></p>

    return <div className='tour'>
        <div className='img-fitter'>
            <img src={img} alt='somethin' />
        </div>
        <div className='text'>
            <div className='top'>
                <h2>{name}</h2>
                <p>${price}</p>
            </div>
            <div className='paragraph'>
                {fullText ? fullJSX : shortJSX}
            </div>
            <div className='bottom'>
                <button onClick={() => remove(id)}>Not Interested</button>
            </div>
        </div>
    </div>
}

export default Tour