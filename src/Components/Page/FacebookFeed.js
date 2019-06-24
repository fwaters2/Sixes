import React from "react";

function FBfeed() {
  return (
    <div style={{position:"absolute",width:"100%",height:"100%",margin:"center",top:"50%"}}>
    <div
      className="fb-page"
      data-href="https://www.facebook.com/pohangultimate/"
      data-tabs="timeline"
      data-width=""
      data-height=""
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote
        cite="https://www.facebook.com/pohangultimate/"
        className="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/pohangultimate/">SIX on the BEACH</a>
      </blockquote>
    </div>
    </div>
  );
}
export default FBfeed;
