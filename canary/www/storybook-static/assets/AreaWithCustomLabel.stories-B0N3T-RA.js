import{R as r}from"./iframe-Bw423yT3.js";import{R as c}from"./zIndexSlice-C0Ur0qQv.js";import{C as d}from"./ComposedChart-Cz46LnAr.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Bkwx2OTW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DoQ6jmeU.js";import"./index-CSmn3lR3.js";import"./index-Cmb77t22.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DecYMRDs.js";import"./isWellBehavedNumber-Bhsok9Kl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bq4pCedS.js";import"./index-DY-6WoYl.js";import"./index-Dzxogdh4.js";import"./axisSelectors-DvFF09lq.js";import"./d3-scale-B6w1DC_B.js";import"./renderedTicksSlice-C7gnJRFb.js";import"./CartesianChart-KYAmso8l.js";import"./chartDataContext-ChmL2TgJ.js";import"./CategoricalChart-BFEAf3EH.js";import"./Layer-D4oXIaGo.js";import"./AnimatedItems-hYYLyghD.js";import"./Label-CDuT1dKE.js";import"./Text-C_UyMP2R.js";import"./DOMUtils-B-o7bCMD.js";import"./useId-DVN36WJe.js";import"./useBackwardsCompatibleTheme-BiX6i8Ds.js";import"./ZIndexLayer-BMLxUbw3.js";import"./useAnimationId-Ys0eqrlL.js";import"./ActivePoints-Di-vyWVm.js";import"./Dot-BzofvkeI.js";import"./types-Ds-DwS6F.js";import"./RegisterGraphicalItemId-C_cjgYuq.js";import"./GraphicalItemClipPath-C6OEajox.js";import"./SetGraphicalItem-OiZoorhv.js";import"./getRadiusAndStrokeWidthFromDot-BZS_5G6a.js";import"./ActiveShapeUtils-DXmjz54Y.js";import"./Curve-ROVFdQ-G.js";import"./step-BJpmgVSO.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DR5-8UeR.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
