import{R as e}from"./iframe-BLYaiTCo.js";import{R as c}from"./zIndexSlice-lQffsUG8.js";import{C as d}from"./ComposedChart-q7FEtfJu.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CPnuBwYN.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-ILyg-GW3.js";import"./index-DnQ-U2Qg.js";import"./index-BI_7Ub3B.js";import"./get-C6fkE9tv.js";import"./resolveDefaultProps-DpWzBvps.js";import"./isWellBehavedNumber-BqumoSwm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DuKK4DBL.js";import"./index-CCG5587O.js";import"./index-RDG97xsP.js";import"./renderedTicksSlice-kJn42Rl8.js";import"./axisSelectors-D6Dyr_Wd.js";import"./d3-scale-B2LK6XqV.js";import"./CartesianChart-C6NG5vyr.js";import"./chartDataContext-Bb8xEPvd.js";import"./CategoricalChart-CQ3ECWGQ.js";import"./Layer-Cjsn70fL.js";import"./AnimatedItems-LYPYqGuf.js";import"./Label-BDDWEbHy.js";import"./Text-OjYntAZR.js";import"./DOMUtils-CIYC9pgo.js";import"./ZIndexLayer-BDdQieuE.js";import"./useAnimationId-e0tJBS7c.js";import"./ActivePoints-BabG5O7K.js";import"./Dot-BrwJ_7NM.js";import"./types-B8ff9nYs.js";import"./RegisterGraphicalItemId-C8Ak7Vaq.js";import"./GraphicalItemClipPath-D0PBT0ws.js";import"./SetGraphicalItem-DCGW6Zln.js";import"./getRadiusAndStrokeWidthFromDot-LiorCCqR.js";import"./ActiveShapeUtils-B7KxHmGn.js";import"./Curve-DeQy-y-t.js";import"./step-BTBSj6ja.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-7Wfrp7_u.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
