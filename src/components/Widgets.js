import React from 'react';
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./Widgets.css"

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article' >
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon/> 
      </div>

      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon/>
      </div>

      {newsArticle("Eurozone returns to growth", "Eurozone returns to growth; Bank of England raises interest rates.")}
      {newsArticle("Supreme Court hearing on Article 370 abrogation", "The Supreme Court on Wednesday heard a batch of petitions challenging the abrogation of Article 370 of the Constitution.")}

    </div>
  )
}

export default Widgets