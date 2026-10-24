import{R as r}from"./iframe-D_khPHZ1.js";import{R as c}from"./zIndexSlice-KFlckT-7.js";import{C as d}from"./ComposedChart-v5twU8VD.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DwMrdw5c.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BBn7lrSC.js";import"./index-CB03tEHO.js";import"./index-BuxDgG-t.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BBG9DHK8.js";import"./isWellBehavedNumber-DGsU9FBh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Do2gsgG0.js";import"./axisSelectors-CBjKjY28.js";import"./d3-scale-BLOap0UK.js";import"./index-syOpg8yK.js";import"./index-BI2dlpsL.js";import"./renderedTicksSlice-Jho7gpOC.js";import"./index-CHrlhwwU.js";import"./CartesianChart-Ci9HbE6G.js";import"./chartDataContext-DTR5p3jS.js";import"./CategoricalChart-Bfua2ObC.js";import"./Layer-D1docXzT.js";import"./activeStyles-DVSsJDko.js";import"./Label-DNajAghq.js";import"./Text-CRLTQjiS.js";import"./pageBackground-Cdf9H4fo.js";import"./useId-DisFqhsr.js";import"./useBackwardsCompatibleTheme-BLiMjfFD.js";import"./ZIndexLayer-BGvEmvHh.js";import"./dataEntryStyles-2My5Q2VA.js";import"./useAnimationId-BOA4oZA_.js";import"./ActivePoints-B4rNmWdt.js";import"./Dot-DSp-kazZ.js";import"./types-DL7z7syQ.js";import"./RegisterGraphicalItemId-CFGUNGbT.js";import"./SetGraphicalItem-CGqBV4nA.js";import"./getRadiusAndStrokeWidthFromDot-ycj1XfTC.js";import"./ActiveShapeUtils-C8SJzoVE.js";import"./Curve-D4vzOHVD.js";import"./step-BnRh-hkR.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-B2F1WAcU.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
