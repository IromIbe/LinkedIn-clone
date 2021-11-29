import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets_article'>
      <div className='widgets_articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets_articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className='widgets_header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("PAPA REACT IS BACK!!", "Top News - 800 Readers")}
      {newsArticle("Check Out Irom's Podcasts", "Top News - 7500 Views")}
      {newsArticle(
        "Irom Has Adamantly Refused To Go To a Nigerian Institution",
        "Top News - 4000 Readers"
      )}
      {newsArticle(
        "Arkad Shares Photo Of Beautiful Family",
        "Top News - 300 Readers"
      )}
      {newsArticle(
        "Irom's Twin Otani Reveals Why She Has Chosen To Remain Single",
        "Top News - 8000 Readers"
      )}
      {newsArticle(
        "Alt School Africa Launches its First Tech Summit",
        "Top News - 200 Readers"
      )}
      {newsArticle(
        "Arkad Reveals Why He Chose To Marry His Ex",
        "Top News - 1800 Readers"
      )}
      {newsArticle(
        'Two Murders Happened in "Save A Life Foundation"',
        "Top News - 12000 Readers"
      )}
      {newsArticle("THE RAPTURE!!!", "Top News - 1800000 Readers")}
      {newsArticle(".....")}
    </div>
  );
}

export default Widgets;
