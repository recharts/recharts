import{R as e}from"./iframe-BhYIBUmE.js";import{R as c}from"./zIndexSlice-iZ75WhkA.js";import{C as d}from"./ComposedChart-CSJIRxEz.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DMCADZH-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Y6Q35rOn.js";import"./index-DEEvK7wS.js";import"./index-D-p5hhZ6.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BDtRZXkF.js";import"./isWellBehavedNumber-XdoKmyaC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQUmtvyG.js";import"./index-BoNxyHn5.js";import"./index-B02QR74t.js";import"./renderedTicksSlice-BvbBXc0R.js";import"./axisSelectors-XMI2B6JU.js";import"./d3-scale-Ca87_qMg.js";import"./CartesianChart-CnNFNMoi.js";import"./chartDataContext-DqiOTlWU.js";import"./CategoricalChart-DhAV5rxK.js";import"./Layer-Di4CjYT0.js";import"./AnimatedItems-BLN0wGQm.js";import"./Label-D4aavVkg.js";import"./Text-DvhjqfeR.js";import"./DOMUtils-0OARPr3L.js";import"./ZIndexLayer-DzEhLRNI.js";import"./useAnimationId-BPiSh6IJ.js";import"./ActivePoints-GDUXfCj4.js";import"./Dot-DorxToFy.js";import"./types-98-DlTag.js";import"./RegisterGraphicalItemId-BXUxqLaU.js";import"./GraphicalItemClipPath-gTOFxICa.js";import"./SetGraphicalItem-ZzJW--aO.js";import"./getRadiusAndStrokeWidthFromDot-Bno7EZgK.js";import"./ActiveShapeUtils-Di4Bw8dO.js";import"./Curve-BFWIv3Fl.js";import"./step-Dbe6DqiS.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CadEeGVz.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
