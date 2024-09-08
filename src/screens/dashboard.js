
import React from 'react';
import "../css/dashboard.css"
import ProfileSection from '../components/screens_component/dashboard_components/profile_section';
import FilterSection from '../components/screens_component/dashboard_components/filter_section';
import SearchSection from '../components/screens_component/dashboard_components/search_section';

import EnquirySection from '../components/screens_component/dashboard_components/enquiries_section';

// import styled from 'styled-components';



function Dashboard() {

    const options = ["People", "Companies", "Job Project", "Lead List", "Reports", "My Team"];
  

    return (

        <>
            <div className='dashboard-background'>
                <div className='filter-n-profile'>
                    <ProfileSection />
                    <FilterSection datalist={options} />
                </div>
                <div className='enquiry-section'>
                    <SearchSection />


                    <div className='enquiry-and-enquiry-detail'>

                        
                    <EnquirySection/>
                    <div className='enquiry-detail'>
                        
                    </div>

                    </div>
                </div>

            </div>
        </>);
}

export default Dashboard