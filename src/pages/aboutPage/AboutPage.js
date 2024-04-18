import React from "react";
import s from './abaut.module.css'
import Description from "../../component/Description ";

function AboutPage() {
  const aboutDescription = {
    title: "Title 2",
    description: "description 2"
  };
    return (
      <div className={s.container}>
        <h1 className={s.Main}>About Page</h1>
        <Description {...aboutDescription}/>
      </div>
    );
  }

export default AboutPage