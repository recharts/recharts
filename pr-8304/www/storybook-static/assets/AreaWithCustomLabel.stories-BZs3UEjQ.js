import{R as r}from"./iframe-Cg_iar9N.js";import{R as c}from"./zIndexSlice-BjUOfyjh.js";import{C as d}from"./ComposedChart-BFCZD_8N.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C08A7xBL.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DTSDaMdx.js";import"./get-CjriyByo.js";import"./throttle-BblIHJT1.js";import"./index-7C4ywAbx.js";import"./index-CwdEjpHW.js";import"./RechartsWrapper-C7ImdcI0.js";import"./axisSelectors-CZOBtonL.js";import"./polarAxisSelectors-B1d4qlCW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DPBNOBhz.js";import"./index-VP3OIQj6.js";import"./index-jWuQwiwF.js";import"./renderedTicksSlice-CLd9gyLd.js";import"./index-V_wxvl63.js";import"./fillDefinitions-DSB60PQ6.js";import"./CartesianChart-B4msnQ_2.js";import"./chartDataContext-BigsU9AL.js";import"./CategoricalChart-CPdnXejQ.js";import"./getRadiusAndStrokeWidthFromDot-DxfCADw-.js";import"./Layer-Bzrsb6mZ.js";import"./dataEntryStyles-CxwfrkTv.js";import"./Label-BJnLd782.js";import"./Text-B2P7H0Ri.js";import"./ZIndexLayer-CSE-z-0P.js";import"./ActivePoints-b69yWwyo.js";import"./Dot-BA3Hs1sQ.js";import"./types-ltSKN6AB.js";import"./activeStyles-BGKrSIuv.js";import"./useAnimationId-9EHB1qr6.js";import"./Symbols-HGWe4NLb.js";import"./symbol-BYuJahfe.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-B4YPaENS.js";import"./ActiveShapeUtils-CsQyYPRe.js";import"./Curve-CPf1VG57.js";import"./step-DiiLfVQZ.js";import"./useEffectiveDataKey-Cs5zYK5x.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
