import{R as r}from"./iframe-Cuz0ArBZ.js";import{R as c}from"./zIndexSlice-BM2UDWO3.js";import{C as d}from"./ComposedChart-T-m9qZYj.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BmnUlXPs.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D2UP89es.js";import"./index-D4JBGtbh.js";import"./index-DJ25wrw2.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DFRYrt1w.js";import"./isWellBehavedNumber-BNR7n96m.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C1GsE6D6.js";import"./index-CnjN1eJY.js";import"./index-B7Kpo2ne.js";import"./axisSelectors-Uf2etwQJ.js";import"./d3-scale-BU8ngyGj.js";import"./renderedTicksSlice-DoN5idQ6.js";import"./CartesianChart-D4ZrgDD1.js";import"./chartDataContext-COxhzolJ.js";import"./CategoricalChart-b2JFE4qY.js";import"./Layer-BxHvVvNo.js";import"./AnimatedItems-Bq9Cx-Mo.js";import"./Label-CD264HLQ.js";import"./Text-DWRXNVQj.js";import"./DOMUtils-DmogtD9z.js";import"./useId-CG7ic0vo.js";import"./useBackwardsCompatibleTheme-CTjF-q2C.js";import"./ZIndexLayer-B2d0C2Gc.js";import"./useAnimationId-BcIXJdGX.js";import"./ActivePoints-Q8Q4Ocdm.js";import"./Dot-CF6FpX3d.js";import"./types-DHaro4o6.js";import"./RegisterGraphicalItemId-B9mLA6kv.js";import"./GraphicalItemClipPath-DwzWsDMq.js";import"./SetGraphicalItem-BNqnvDS1.js";import"./getRadiusAndStrokeWidthFromDot-CA2V7d8x.js";import"./ActiveShapeUtils-FehVzgEA.js";import"./Curve-CQxBAVgQ.js";import"./step-D64yDiHt.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BQxh5-Wi.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const pt=["CustomizedLabel"];export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
