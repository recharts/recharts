import{R as r}from"./iframe-F7LhK7Eo.js";import{R as c}from"./zIndexSlice-B_tReVy-.js";import{C as d}from"./ComposedChart-mcVYsTsk.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CqOzatBc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C_DYoZtt.js";import"./index-BHnugEqK.js";import"./index-D2U0SDM0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BWBKDxpl.js";import"./isWellBehavedNumber-DjIyZMF-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ay4Rio5L.js";import"./axisSelectors-u93D5o3N.js";import"./d3-scale-Cx-l4XO1.js";import"./index-C3Rm0W8c.js";import"./index-DQvCajjI.js";import"./renderedTicksSlice-B1tuu0tD.js";import"./index-BWf5kuaX.js";import"./CartesianChart-B3D6zv8Y.js";import"./chartDataContext-DhRxggLS.js";import"./CategoricalChart-D6bN-RZ3.js";import"./Layer-DYdC0UVh.js";import"./AnimatedItems-9NyDgZfV.js";import"./Label-Cunaqz8i.js";import"./Text-DW85mx3b.js";import"./DOMUtils-BT8dLI2y.js";import"./useId-DyKnYw8e.js";import"./useBackwardsCompatibleTheme-IFXQGVV2.js";import"./ZIndexLayer-BeZh5IO9.js";import"./useAnimationId-1tb1AqGd.js";import"./ActivePoints-DqbOcZnl.js";import"./Dot-0_Q3awJ6.js";import"./types-Cc5FeE6i.js";import"./RegisterGraphicalItemId-G1rEfZcP.js";import"./GraphicalItemClipPath-DGCCZDh5.js";import"./SetGraphicalItem-DG_xI-Un.js";import"./getRadiusAndStrokeWidthFromDot-CT63cvvB.js";import"./ActiveShapeUtils-B1DBYTAd.js";import"./Curve-DmoJ01pM.js";import"./step-BQbq2B-X.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CZAMumnN.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
