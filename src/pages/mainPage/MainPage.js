import React from "react";
import s from './main.module.css'
import Description from "../../component/Description ";



function MainPage() {
  const mainDescription = {
    title: "Title",
    description: "description"
  };

    return (
      <div className={s.container} >
        <h1 className={s.Main}>Main Page</h1>
        <Description {...mainDescription}/>
      </div>
    );
  }

export default MainPage  