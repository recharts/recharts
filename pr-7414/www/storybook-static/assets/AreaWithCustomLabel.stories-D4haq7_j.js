import{R as e}from"./iframe-Cx28kabR.js";import{R as c}from"./zIndexSlice-BJophbSs.js";import{C as d}from"./ComposedChart-Dhi_mSXs.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DZGkzFPn.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C9z4Tvb1.js";import"./index-CXdTgtXr.js";import"./index-Cl_UPhhU.js";import"./get-B9lrw7-x.js";import"./resolveDefaultProps-DKQmb89J.js";import"./isWellBehavedNumber-CMbzImp5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DI8RF6tE.js";import"./index-DVR_r8nO.js";import"./index-D-WuKlNL.js";import"./renderedTicksSlice-fyKJy_9M.js";import"./axisSelectors-Bitj5C0u.js";import"./d3-scale-Dbt5vd1_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Ub9LiVnx.js";import"./chartDataContext-BAHJZWaV.js";import"./CategoricalChart-CC4_m9gZ.js";import"./Layer-DvLhXWX-.js";import"./AnimatedItems-BxtLfWI4.js";import"./Label-BDMWILCu.js";import"./Text-CTvgLWx7.js";import"./DOMUtils-XPvxL8R9.js";import"./ZIndexLayer-CZAm4j4p.js";import"./useAnimationId-DLl-Zvtm.js";import"./ActivePoints-Bq-7Nh5y.js";import"./Dot-Iy9OPdn2.js";import"./types-UeNFcMv5.js";import"./RegisterGraphicalItemId-Blf5kOwl.js";import"./GraphicalItemClipPath-B8CVXRQ2.js";import"./SetGraphicalItem-Dk5vZuTC.js";import"./getRadiusAndStrokeWidthFromDot-pD6-2pnW.js";import"./ActiveShapeUtils-CP3CGhpS.js";import"./Curve-BhQA-w3U.js";import"./step-JKjbkiwo.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DpikqHET.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
