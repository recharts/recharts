import{R as r}from"./iframe-Co7Udrye.js";import{R as c}from"./zIndexSlice-DOrD3bq8.js";import{C as d}from"./ComposedChart-Bbn1F0DT.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Dq7gLz-i.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dj6LZrRJ.js";import"./throttle-Cc_t6lxE.js";import"./index-5ZcPFJjn.js";import"./index-CzbcfkCz.js";import"./RechartsWrapper-CzRhzMVT.js";import"./axisSelectors-e3Zjl34d.js";import"./polarAxisSelectors-c8_8zpzH.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DSuWQh9E.js";import"./index-DQWwvV1b.js";import"./index-CKK_KqSf.js";import"./renderedTicksSlice-Isf4L0Ae.js";import"./index-CXV1GNFt.js";import"./fillDefinitions-CeRUcb47.js";import"./CartesianChart-CFLJJfWX.js";import"./chartDataContext-BKcXeGAI.js";import"./CategoricalChart-DPV1qzDX.js";import"./Layer-C65liL5F.js";import"./dataEntryStyles-KlXlC10J.js";import"./Label-DffVq635.js";import"./Text-DVQecdV7.js";import"./ZIndexLayer-DEtSsufZ.js";import"./ActivePoints-DbiUIU0R.js";import"./Dot-i29ttLNG.js";import"./types-CNLXZtmS.js";import"./activeStyles-dIWWSidH.js";import"./useAnimationId-DDJ6zjpL.js";import"./Symbols-zaaHBVPb.js";import"./symbol-B6ox5qf9.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CrBdfN6J.js";import"./getRadiusAndStrokeWidthFromDot-Bxe1mCKc.js";import"./ActiveShapeUtils-CIdGHQK5.js";import"./Curve-CTNqeiLd.js";import"./step-hcE1AvzR.js";import"./useEffectiveDataKey-C3nLlcoP.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
