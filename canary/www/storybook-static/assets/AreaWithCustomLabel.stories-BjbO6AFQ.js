import{R as r}from"./iframe-C2DTpPl5.js";import{R as c}from"./zIndexSlice-BA0v7Oer.js";import{C as d}from"./ComposedChart-DhPH0eg5.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D7vBCKVF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DTXNpE5t.js";import"./index-5V0YvSc1.js";import"./index-Cmgx4ukp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D8zMOS_0.js";import"./isWellBehavedNumber-C10dxuDW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbTeQzXN.js";import"./index-b8OMPhKV.js";import"./index-PELgc84d.js";import"./axisSelectors-DI7xvKPh.js";import"./d3-scale-CRpbK976.js";import"./renderedTicksSlice-B1AYXvSw.js";import"./CartesianChart-DveAlEiH.js";import"./chartDataContext-zaCSk4E3.js";import"./CategoricalChart-9si9MCW4.js";import"./Layer-C1G5_il7.js";import"./AnimatedItems-3hjUFG-5.js";import"./Label-CwiguCux.js";import"./Text-kmupVaPK.js";import"./DOMUtils-8MPdkl0j.js";import"./useId-CX7EaZRb.js";import"./useBackwardsCompatibleTheme-DFA95kD1.js";import"./ZIndexLayer-BzV-OpAF.js";import"./useAnimationId-en1pQLdR.js";import"./ActivePoints-JZ0NgfaJ.js";import"./Dot-0HxiRhRw.js";import"./types-C_I2Qi1-.js";import"./RegisterGraphicalItemId-7_0Fa0Or.js";import"./GraphicalItemClipPath-Q21k0d2A.js";import"./SetGraphicalItem-BC-u-qk6.js";import"./getRadiusAndStrokeWidthFromDot-D3vyunVf.js";import"./ActiveShapeUtils-DeKqyUUr.js";import"./Curve-BQfn95_j.js";import"./step-BpdWCqp5.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DqOVzhXB.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
