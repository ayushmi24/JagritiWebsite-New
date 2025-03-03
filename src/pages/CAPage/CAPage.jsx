import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./CAPage.css";
import CAForm from "../../components/CA Form/Ca-Form";

const CAPage = () => {
  const formRef = useRef();
  const divRef = useRef();

  useLayoutEffect(() => {
    divRef.current.style.height = `${formRef.current.clientHeight + 100}px`;
  }, [formRef, divRef]);

  useEffect(() => {
    document.title = "Campus Ambassador Program | Jagriti IIT (BHU)"
  }, [])
  

  return (
    <div ref={divRef} style={{ position: "relative" }}>
      <CAForm ref={formRef} />
      <div className="skewed-bg" />
    </div>
  );
};

export default CAPage;
