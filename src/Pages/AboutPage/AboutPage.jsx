import React from 'react';
import AboutPageBanner from '../../Components/AboutPageComponent/Banner/AboutPageBanner';
import AboutPageTimeline from '../../Components/AboutPageComponent/Timeline/AboutPageTimeline';
import AboutPageMeetTeam from '../../Components/AboutPageComponent/MeetTeam/AboutPageMeetTeam';
import AboutPageUserStory from '../../Components/AboutPageComponent/UserStory/AboutPageUserStory';
import AboutPageEsterEgg from '../../Components/AboutPageComponent/EsterEgg/AboutPageEsterEgg';
import AboutPageLiveCounter from '../../Components/AboutPageComponent/LiveCounter/AboutPageLiveCounter';


const AboutPage = () => {
    return (
        <div>
            <AboutPageBanner></AboutPageBanner>
            <AboutPageTimeline></AboutPageTimeline>
            <AboutPageMeetTeam></AboutPageMeetTeam>
            <AboutPageLiveCounter></AboutPageLiveCounter>
            <AboutPageUserStory></AboutPageUserStory>
            <AboutPageEsterEgg></AboutPageEsterEgg>
           
        </div>
    );
};

export default AboutPage;