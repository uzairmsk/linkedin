import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets () {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
          <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
            </div> 
          <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
            </div>  
        </div>
    );
return (
<div className="widgets">
    <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
    </div>
    {newsArticle("Blazing a trail at Paris 2024", "11d ago • 522 readers")}
    {newsArticle("Gen Z set to transform agriculture", "16d ago • 192 readers")}
    {newsArticle("Defying trends in frontline workforce", "5d ago • 816 readers")}
    {newsArticle("FMCG giants take on D2C brands", "5d ago • 3,636 readers")}
    {newsArticle("Sales to take automation route", "10d ago • 304 readers")}

{/* {stopped at 3:55} */}





</div>
);
}
export default Widgets;