import React from "react";
import Banner_img from "./BannerImg";
import "./App.css";


function App() {

  let bannerImgs = ["https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"]
    return (<>
  <div id="banner_screen" >
      <Banner_img bannerList={bannerImgs}/>
  </div>
    </>);
}

export default App;
