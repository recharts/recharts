import{R as r}from"./iframe-B5EBEutQ.js";import{R as c}from"./zIndexSlice-BS5hvVSM.js";import{C as d}from"./ComposedChart-BL8Vy27a.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BISTujbd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CBLh7NYz.js";import"./throttle-B9WW5VMA.js";import"./index-C_XmK0o8.js";import"./index-C5geO6kL.js";import"./RechartsWrapper-BC-brhau.js";import"./axisSelectors-CLoHgdoC.js";import"./polarAxisSelectors-CqmKpuRO.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-iNRnE1hH.js";import"./index-BF-QrOX1.js";import"./index-DOPYkGg1.js";import"./renderedTicksSlice-B_QLVgTg.js";import"./index-DxeJdFG6.js";import"./fillDefinitions-FU64iHqp.js";import"./CartesianChart-YkNn32dh.js";import"./ZIndexPortal-D0P5glPn.js";import"./CategoricalChart-DwIu15RM.js";import"./Layer-BYAjyABW.js";import"./LabelList-BsIU2Cho.js";import"./Label-Bho88syw.js";import"./Text-BVXkgzAF.js";import"./DOMUtils-EesDyIQg.js";import"./ZIndexLayer-2f9RfWsU.js";import"./ActivePoints-GUWB2UUS.js";import"./Dot-DmpikD8L.js";import"./types-BmtCPhIx.js";import"./activeStyles-CuQ8L2cy.js";import"./useAnimationId-5jS9WdgM.js";import"./dataEntryStyles-DbY2Nm9f.js";import"./Symbols-BFE2HVM6.js";import"./symbol-Uauys67f.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-WzwPCAJ5.js";import"./getRadiusAndStrokeWidthFromDot-BJYN0Za2.js";import"./ActiveShapeUtils-CrbC1Zls.js";import"./Curve-Di7q2eVu.js";import"./step-DSuuF4zz.js";import"./useEffectiveDataKey-BNkN63Yq.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,st as __namedExportsOrder,pt as default};
