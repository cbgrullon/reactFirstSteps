import React from "react";
import ReactLoading from "react-loading";
import ShowIf from "./ShowIf";
function Loading({ isLoading }) {
  return (
    <ShowIf isVisible={isLoading}>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.35)",
          top:0,
          position:"absolute",
          left:0,
          zIndex:999
        }}
      >
        <div
          style={{ position: "fixed", left: "50%", top: "50%", zIndex: 1000 }}
        >
          <ReactLoading type={"bars"} color={"#595959"}></ReactLoading>
          <h3 style={{ color: "#595959" }}>Loading...</h3>
        </div>
      </div>
    </ShowIf>
  );
}
export default Loading;
