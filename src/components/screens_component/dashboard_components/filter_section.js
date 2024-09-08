import React from "react";

function FilterSection(props) {
    return(<div className='filter-section'>

        {props.datalist.map((item, index) => (
            
            <div key={index} className='filter-component'>
                <text className='filter-text'>{item}</text>
            </div>
        ))}

    </div>);
}

export default FilterSection