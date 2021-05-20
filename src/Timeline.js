import React from 'react';

const Timeline = ({meows})=>(
    <div className="Timeline">
        {meows.map((meow, index)=>(
            <Meow key={index} meow={meow} />
        ))}

    </div>

)
export default Timeline;