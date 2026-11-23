import{R as r}from"./iframe-Cwhg5Alw.js";import{R as c}from"./zIndexSlice-Fv3NhYWW.js";import{C as d}from"./ComposedChart-BUfd6mLX.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BoBPQvBT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CkDxtqDz.js";import"./throttle-Du5pgiUX.js";import"./index-B9mn7cyH.js";import"./index-BEds7S3I.js";import"./RechartsWrapper-BxNvZ3mc.js";import"./axisSelectors-BXhIMUYz.js";import"./polarAxisSelectors-Dj6PmZ2B.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-buNRHlZ7.js";import"./index-Ce6E5z2B.js";import"./index-Dq-nqpA7.js";import"./renderedTicksSlice-DNRadS3G.js";import"./index-DS0QJhYL.js";import"./fillDefinitions-zsPlWl9g.js";import"./CartesianChart-dk4HvrTk.js";import"./chartDataContext-plFejdmf.js";import"./CategoricalChart-DmZKpDkp.js";import"./getRadiusAndStrokeWidthFromDot-CzKUA028.js";import"./Layer-Cvk4I16t.js";import"./dataEntryStyles-Dl4kQBD7.js";import"./Label-DOhfAK-3.js";import"./Text-Cv-7zpF9.js";import"./ZIndexLayer-Zh5FqFCx.js";import"./ActivePoints-SiU-4rgE.js";import"./Dot-DINU8znu.js";import"./types-B4BwHuKZ.js";import"./activeStyles-C2N6Ab6e.js";import"./useAnimationId-B8-WGiI8.js";import"./Symbols-C1fO_1Gx.js";import"./symbol-D2NP4cwA.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-BZTwfoQJ.js";import"./ActiveShapeUtils-NTKJrLNa.js";import"./Curve-D9P_AzdW.js";import"./step-BizBXnVe.js";import"./useEffectiveDataKey-EnHAhUcJ.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
