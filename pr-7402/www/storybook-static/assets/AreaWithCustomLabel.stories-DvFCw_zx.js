import{c as e}from"./iframe-CbFBC3pt.js";import{g as c}from"./zIndexSlice-B8XantvI.js";import{C as d}from"./ComposedChart-Bc5HbX-g.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-Izlx5UVK.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BwRByMMH.js";import"./index-ZsssZYUM.js";import"./index-C2rCfHQ6.js";import"./get-CeJ-O4Ro.js";import"./resolveDefaultProps-DZFSM3t8.js";import"./isWellBehavedNumber-D0PjXqnv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C8YdywQb.js";import"./index-C4IztgfQ.js";import"./index-TGdP4Icg.js";import"./renderedTicksSlice-DaB_pXBU.js";import"./axisSelectors-DV4HNdRQ.js";import"./d3-scale-C98YhsaH.js";import"./CartesianChart-ByXMh7XU.js";import"./chartDataContext-DASovuhK.js";import"./CategoricalChart-BMWFvZBg.js";import"./Curve-BlF3DWpa.js";import"./types-CX4nwvsZ.js";import"./step-NntPL7PC.js";import"./path-DyVhHtw_.js";import"./Layer-DTzSPWpf.js";import"./ReactUtils-PDSB0db_.js";import"./Label-8xdcvYL4.js";import"./Text-BLKgh8ue.js";import"./DOMUtils-rSL8yp4p.js";import"./ZIndexLayer-BgzH297Q.js";import"./ActivePoints-losSAyHn.js";import"./Dot-rYx1Cydy.js";import"./RegisterGraphicalItemId-BWff6MJa.js";import"./GraphicalItemClipPath-3Dbzdjfh.js";import"./SetGraphicalItem-D4AnrrJM.js";import"./useAnimationId-B6jMJ5_9.js";import"./getRadiusAndStrokeWidthFromDot-Dg3y-0Vr.js";import"./graphicalItemSelectors-BU-bA2Rl.js";const rt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ot=["CustomizedLabel"];export{t as CustomizedLabel,ot as __namedExportsOrder,rt as default};
