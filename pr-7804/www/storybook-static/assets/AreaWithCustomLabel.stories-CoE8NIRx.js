import{R as r}from"./iframe-BFM8x9PA.js";import{R as c}from"./zIndexSlice-Dx9mYmyj.js";import{C as d}from"./ComposedChart-kK9tUW2C.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-G355j-5N.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DqtHcGYb.js";import"./index-BWGXcjC4.js";import"./index-DVzpkoDY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bd_5xcSs.js";import"./isWellBehavedNumber-D4sYzu_F.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DYXkzF69.js";import"./axisSelectors-DiNaBi7F.js";import"./d3-scale-BV6eo-EO.js";import"./index-CngxH_6L.js";import"./index-BWjxNJoO.js";import"./renderedTicksSlice-CjeZk4XK.js";import"./index-CMQv9dM_.js";import"./CartesianChart-CkSZZlig.js";import"./chartDataContext-BTZBL-Eg.js";import"./CategoricalChart-Bte4O3H1.js";import"./Layer-Be0Rd-Q7.js";import"./AnimatedItems-B1_R-VqI.js";import"./Label-Br3cCz6i.js";import"./Text-D2FZ9-P8.js";import"./DOMUtils-eLbycdkH.js";import"./useId-BKuqsutR.js";import"./useBackwardsCompatibleTheme-BTrqDtcc.js";import"./ZIndexLayer-DP5puj9b.js";import"./useAnimationId-B4FOQMwj.js";import"./ActivePoints-BCJal-aM.js";import"./Dot-CpCQ4QvO.js";import"./types-CNyTn7M4.js";import"./RegisterGraphicalItemId-Cv5_OQqk.js";import"./GraphicalItemClipPath-jUcNwVzc.js";import"./SetGraphicalItem-CfBe4xfA.js";import"./getRadiusAndStrokeWidthFromDot-b4U3g1Ny.js";import"./ActiveShapeUtils-Ct3yDoqv.js";import"./Curve-C8AnJvF8.js";import"./step-BN1FmChO.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CRa1F1Pi.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
