import{R as r}from"./iframe-CgNYO6-5.js";import{R as c}from"./zIndexSlice-BB8bPu9P.js";import{C as d}from"./ComposedChart-CSBQfKzg.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D5yJvKEY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CLMZeuK1.js";import"./index-CP-P0bP3.js";import"./index-CNUb9tOf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DdU6Jg07.js";import"./isWellBehavedNumber-hgWpBQUm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQslZ_yd.js";import"./index-Dqgfl7Xj.js";import"./index-xSjlJOhZ.js";import"./axisSelectors-O08Nn3VB.js";import"./d3-scale-Bd_S1jK4.js";import"./renderedTicksSlice-BBv91KB4.js";import"./CartesianChart-BI9vfx5j.js";import"./chartDataContext-NHEnIpFz.js";import"./CategoricalChart-JtBUTVNJ.js";import"./Layer-TfcNVFTj.js";import"./AnimatedItems-CL4P6dH7.js";import"./Label-DE97QbhK.js";import"./Text-CjIgHDXs.js";import"./DOMUtils-Cwa2E0AM.js";import"./useId-BaSa9afh.js";import"./useBackwardsCompatibleTheme-CvkC2w7r.js";import"./ZIndexLayer-BByjeLs4.js";import"./useAnimationId-B1M8XMfI.js";import"./ActivePoints-CdA3IFED.js";import"./Dot-DR-c-Eu3.js";import"./types-Un7Q3Ppr.js";import"./RegisterGraphicalItemId-5U6GT5jV.js";import"./GraphicalItemClipPath-CdOc_skb.js";import"./SetGraphicalItem-CAAg-5Jk.js";import"./getRadiusAndStrokeWidthFromDot-B5DnJ6_A.js";import"./ActiveShapeUtils-DOY9-ZZr.js";import"./Curve-D6U3M4gK.js";import"./step-D20fkZ91.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B07WpZoW.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
