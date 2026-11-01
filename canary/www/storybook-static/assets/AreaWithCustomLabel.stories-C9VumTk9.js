import{R as r}from"./iframe-Bm_JRRDc.js";import{R as c}from"./zIndexSlice-CE1MC-Bj.js";import{C as d}from"./ComposedChart-B5oDJkIg.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BI0KCSHl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cwcw9Llo.js";import"./throttle-Di0g5pz3.js";import"./index-2pvHcFpK.js";import"./index-DwUcBVgp.js";import"./RechartsWrapper-CWqhr_G8.js";import"./axisSelectors-CQbwMXjx.js";import"./polarAxisSelectors-CFmXVpQm.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-_mEsQ66i.js";import"./index-B22Nz6Ed.js";import"./index-C9h-Jb--.js";import"./renderedTicksSlice-DeG-maS7.js";import"./index-CuKK0pvL.js";import"./CartesianChart-BtCYpchS.js";import"./ZIndexPortal-Cd4FT9ez.js";import"./CategoricalChart-Ue3TZSpb.js";import"./Layer-C38IBOtq.js";import"./LabelList-CIhUYtSm.js";import"./Label-v2uuRqjZ.js";import"./Text-nM-LHLsO.js";import"./DOMUtils-C1tRULq9.js";import"./pageBackground-BcaJILnW.js";import"./ZIndexLayer-DBCQDkbL.js";import"./ActivePoints-B-UlNM6M.js";import"./Dot-Cd58ma5-.js";import"./fillDefinitions-D55-ziDc.js";import"./themeFill-DfZYoox_.js";import"./types-BgOFnMuj.js";import"./activeStyles-BuWIAazB.js";import"./useAnimationId-7tWnytho.js";import"./dataEntryStyles-p95uc1IW.js";import"./Symbols-CobU2W6x.js";import"./symbol-EG1r1dzp.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-IhBPl0xA.js";import"./getRadiusAndStrokeWidthFromDot-Z8_eBFcz.js";import"./ActiveShapeUtils-DOiWWiaf.js";import"./Curve-Co0XT7xq.js";import"./step-Og4N4nQm.js";import"./useEffectiveDataKey-1gMAnkt8.js";const nt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},ct=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,ct as __namedExportsOrder,nt as default};
