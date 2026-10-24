import{R as r}from"./iframe-CHJ8qNn-.js";import{R as c}from"./zIndexSlice-DNIXTlyt.js";import{C as d}from"./ComposedChart-Gh2_Mw5N.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BCmb8RqM.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-XqMRt2jJ.js";import"./index-D97GqZNj.js";import"./index-D2V1f5dZ.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DpVu8JOQ.js";import"./isWellBehavedNumber-BRib7OTz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJlTvsU4.js";import"./axisSelectors-BBd7_xKf.js";import"./d3-scale-Tozs6n73.js";import"./index-BKlKJCZc.js";import"./index-BzI6syEB.js";import"./renderedTicksSlice-C8683P8v.js";import"./index-CoSZFYA7.js";import"./CartesianChart-BhRxeAbm.js";import"./chartDataContext-BkqAIBWa.js";import"./CategoricalChart-CQg4LCLR.js";import"./Layer-D78kPmJv.js";import"./activeStyles-ujvHG1pk.js";import"./Label-B11lJlmF.js";import"./Text-CNSLXPSH.js";import"./pageBackground-DmOvuMA2.js";import"./useId-DMQKzmZX.js";import"./useBackwardsCompatibleTheme-BpzyF9ZD.js";import"./ZIndexLayer-D300_86G.js";import"./dataEntryStyles-DVh89c5p.js";import"./useAnimationId-CQYAMcX9.js";import"./ActivePoints-DnpLdJfX.js";import"./Dot-C7lzuZIa.js";import"./types-Dz3e-B0c.js";import"./RegisterGraphicalItemId-BoIM166p.js";import"./GraphicalItemClipPath-CRFACIVC.js";import"./SetGraphicalItem-CGS7hoc8.js";import"./getRadiusAndStrokeWidthFromDot-Dlc5cKW5.js";import"./ActiveShapeUtils-5-Co5jK-.js";import"./Curve-Dy3LXOkF.js";import"./step-BMByuFVF.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BD8sCJ8W.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
