import React  from "react";
import profile from '../../../assets/svg/profile.svg';

function CardDetail(params) {

    return (<div className='detail-card'>
        <div className="card-profile">
            <img src={profile} className='card-profile-image' />
            <text className='card-profile-title'>Abheeteja Halli</text>
        </div>
    </div>);
}

export default   CardDetail