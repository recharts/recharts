import{R as e}from"./iframe-DVB9NpZr.js";import{R as c}from"./zIndexSlice-inUr0xCU.js";import{C as d}from"./ComposedChart-oQ-te1DN.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BCyY6oYa.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-cUFuezMs.js";import"./index-jND3wDEX.js";import"./index-BFwMZWAZ.js";import"./get-DFBBhs2u.js";import"./resolveDefaultProps-B0kvhTPY.js";import"./isWellBehavedNumber-B9edeUWc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-dTztbV_h.js";import"./index-r4smWfCS.js";import"./index-DwUGYNg_.js";import"./renderedTicksSlice-BJczlu3R.js";import"./axisSelectors-ORdVTni-.js";import"./d3-scale-wZkz8Wtl.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DFuv_KZ0.js";import"./chartDataContext-8-Op06e4.js";import"./CategoricalChart-onThNRP3.js";import"./Layer-CznYhS6e.js";import"./AnimatedItems-DN0vzfw4.js";import"./Label-C-9e4xzc.js";import"./Text-RO4N7_ds.js";import"./DOMUtils-b4dXHa1v.js";import"./ZIndexLayer-YpWmKYVa.js";import"./useAnimationId-D_d0Diy_.js";import"./ActivePoints-B3oYHQTk.js";import"./Dot-EUv2v8ot.js";import"./types-CmHpCyOi.js";import"./RegisterGraphicalItemId-Vv-Ra_xy.js";import"./GraphicalItemClipPath-BA-fwdVj.js";import"./SetGraphicalItem-CkCRo3rW.js";import"./getRadiusAndStrokeWidthFromDot-CSFUoSlb.js";import"./ActiveShapeUtils-BQiDuR0w.js";import"./Curve-Ct2rphZk.js";import"./step-CVw2yAQM.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C16TioBL.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const at=["CustomizedLabel"];export{t as CustomizedLabel,at as __namedExportsOrder,it as default};
