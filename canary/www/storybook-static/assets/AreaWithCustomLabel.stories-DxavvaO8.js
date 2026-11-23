import{R as r}from"./iframe-DmqRNFpA.js";import{R as c}from"./zIndexSlice-B1K-Cx6E.js";import{C as d}from"./ComposedChart-C16lvRll.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-mZI1aImN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BjqyIxlF.js";import"./throttle-DniwHdPI.js";import"./index-DLLiFttT.js";import"./index-DKIkITg9.js";import"./RechartsWrapper-CTNqlU94.js";import"./axisSelectors-CgQoXC7y.js";import"./polarAxisSelectors-DfZjHeTi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-a0YrBx9c.js";import"./index-DugFJa8I.js";import"./index-D2BlTs7T.js";import"./renderedTicksSlice-rJsNFgC5.js";import"./index-7-eYjlBn.js";import"./fillDefinitions-D0KLDOLI.js";import"./CartesianChart-DvjgB_s_.js";import"./chartDataContext-7iFWy2pv.js";import"./CategoricalChart-BK3tVtDO.js";import"./getRadiusAndStrokeWidthFromDot-GdhkPv0Q.js";import"./Layer-BMG2yPM5.js";import"./dataEntryStyles-ClWs31k0.js";import"./Label-CGOHFUUI.js";import"./Text-CUDSRJfa.js";import"./ZIndexLayer-Rp2F5wBf.js";import"./ActivePoints-G7jUCSXZ.js";import"./Dot-BXNT0rJn.js";import"./types-ClR1fgnQ.js";import"./activeStyles-2GMTQ11y.js";import"./useAnimationId-BfPOVraS.js";import"./Symbols-DJo18KTa.js";import"./symbol-BhHhN8K0.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-B1qkE8Ui.js";import"./ActiveShapeUtils-wD2P373B.js";import"./Curve-DXM7d3l8.js";import"./step-KG3W8n3J.js";import"./useEffectiveDataKey-1IVWV8C0.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
