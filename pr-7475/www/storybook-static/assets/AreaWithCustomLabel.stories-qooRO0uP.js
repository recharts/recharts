import{R as e}from"./iframe-DhLiHYA9.js";import{R as c}from"./zIndexSlice-0EuGNLI-.js";import{C as d}from"./ComposedChart-CGZKvMzU.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-f48soo4x.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-T8RsDcjn.js";import"./index-NG-Tdzng.js";import"./index-BeAu05Eb.js";import"./get-BqOTE_u_.js";import"./resolveDefaultProps-CBPzFJH6.js";import"./isWellBehavedNumber-BNidD9Ks.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CvYHcQFm.js";import"./index-xOxo7x3f.js";import"./index-DKmBjdDb.js";import"./renderedTicksSlice-B1LCQJVr.js";import"./axisSelectors-DL47bbYB.js";import"./d3-scale-B_WyWKG3.js";import"./CartesianChart-BdXEaLDP.js";import"./chartDataContext-Bcb5nIkO.js";import"./CategoricalChart-CN-mt1-6.js";import"./Layer-DglRvEKa.js";import"./AnimatedItems-C2gGUiAe.js";import"./Label-Cv4QmxCb.js";import"./Text-D4hUpX6-.js";import"./DOMUtils-BQBCpy3J.js";import"./ZIndexLayer-CvBhZ60T.js";import"./useAnimationId-PUY_wn7H.js";import"./ActivePoints-CK5L63lz.js";import"./Dot-pp5BV2FH.js";import"./types-CH1fGuRR.js";import"./RegisterGraphicalItemId-BJxK6F3S.js";import"./GraphicalItemClipPath-Bu7CM1zV.js";import"./SetGraphicalItem-t7MzgWgu.js";import"./getRadiusAndStrokeWidthFromDot-DKfDk9su.js";import"./ActiveShapeUtils-CPYzaIXa.js";import"./Curve-rXpWLPqx.js";import"./step-DzpE9YVj.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BUjTqtHs.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
