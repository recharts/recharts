import{R as e}from"./iframe-DFAuwNet.js";import{R as c}from"./zIndexSlice-BwFDZpKd.js";import{C as d}from"./ComposedChart-q9x7DXH3.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C2kVouwH.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-D4TP_Tl0.js";import"./index-D5vqZcHk.js";import"./index-XHGddEUW.js";import"./get-Bfs700CB.js";import"./resolveDefaultProps-DvMn3fRK.js";import"./isWellBehavedNumber-DOBIUQY2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5EEfMW7.js";import"./index-Bdvp9zfN.js";import"./index-CzPHYk5P.js";import"./renderedTicksSlice-C1GYWdqG.js";import"./axisSelectors-rO5_sQtu.js";import"./d3-scale-Bflz5-05.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DsW2iWMz.js";import"./chartDataContext-qOKnmm5w.js";import"./CategoricalChart-F9q04IPB.js";import"./Layer-pSJwYJA9.js";import"./AnimatedItems-BG4KszHn.js";import"./Label-BiYGQ8wu.js";import"./Text-D4VTZiA_.js";import"./DOMUtils-Cjgkd6jo.js";import"./ZIndexLayer-CzNUPV7f.js";import"./useAnimationId-BPtcTRZO.js";import"./ActivePoints-BsPL6iaG.js";import"./Dot-B8AKLV5l.js";import"./types-CKCIF696.js";import"./RegisterGraphicalItemId-CzkMeR6l.js";import"./GraphicalItemClipPath-DXkB_bbX.js";import"./SetGraphicalItem-CYy4gzAa.js";import"./getRadiusAndStrokeWidthFromDot-rwyYVhSm.js";import"./ActiveShapeUtils-CrgbqME0.js";import"./Curve-qtCfGxfc.js";import"./step-BT8dCn-b.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DvYTlKS4.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
