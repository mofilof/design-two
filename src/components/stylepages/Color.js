import React from "react";

function Color() {
  return (
    <>
    <main>
      <h1>Color awareness</h1>
      <p>We whould be aware of how we use colors and it is importent for a brand to make all its products and services resemble each other. When the products and services uses the companies colors, people will associate it with the compani both consciously and unconsciously. So remember to use the style guide so our company has a unique look, that people associate with all our products and services!</p>

      <p>Avoid colors that are to similar if you use tints. Be aware that there are multiple types of colorblind people and some color contrasts can be hard to see. The same goes for tints that has to little “contrast” from one another and the colorblind person would struggle to tell them apart and therefore not see text or details.</p>

      <h1>Palette</h1>
      <div className="container-fluid">
        <div className="col darkblue"><p>#384899</p></div>
        <div className="col lightblue"><p>#579ad4</p></div>
        <div className="col brown"><p>#cc5e39</p></div>
        <div className="col beige"><p>#ffc6a1</p></div>
      </div>

      <h1>Text colors</h1>
      <p>Dark blue for the header menu and headings. Black for paragraph text (80% black on printed materials). It is ok to use the other colors on headers and materials if it works better with the images</p>


      <h1>Buttons</h1>
      <p>The buttons show how we want our developers to style them. They also show how we want the :hover and :active styled. Please hover over and click on all the button examples.</p>
      <button className="darkBlue">Trykk</button>
      <button className="lightBlue">Trykk</button>
      <button className="brown">Trykk</button>
      <button className="beige">Trykk</button>
    </main>
    </>
  );
}
export default Color;
