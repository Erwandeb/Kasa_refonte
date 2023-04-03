import { useState } from 'react';


const Background = ({photo, baseline}) => {

    return(
        <div className="background-home"  style={{ background: `url(${photo})` }} >
            { baseline ? 
                <span className="slogan-home">{baseline}</span>
                :
                null
            }
        </div>
    )
}

export default Background;
