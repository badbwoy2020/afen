import React from "react";
import "./BannerOptions.css";

function BannerOptions({ title, Icon, color }) {
  return (
    <div className='bannerOptions'>
      {Icon && (
        <Icon className='bannerOptions__icon' style={{ color: color }} />
      )}
      {Icon ? <h4>{title}</h4> : <h4>{title}</h4>}
    </div>
  );
}

export default BannerOptions;
