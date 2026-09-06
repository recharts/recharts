import{R as r}from"./iframe-CdBlg-At.js";import{R as c}from"./zIndexSlice-Bd2ctzyz.js";import{C as d}from"./ComposedChart-Ba360Gul.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DU-nLu-x.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BMwUG5uc.js";import"./index-Yyk8WWPT.js";import"./index-D9Herklh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BE0meIIe.js";import"./isWellBehavedNumber-DGTEliAX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BtwnjrPH.js";import"./axisSelectors-B8B8qq9w.js";import"./d3-scale-BBzFAB1R.js";import"./index-BTlZQ11f.js";import"./index-COSgbA9u.js";import"./renderedTicksSlice-D-b_FiBU.js";import"./index-B_ni8hx5.js";import"./CartesianChart-5haPaxu4.js";import"./chartDataContext-8OMpeo_C.js";import"./CategoricalChart-KxwhOg8o.js";import"./Layer-DJ6KlbON.js";import"./AnimatedItems-DF8TZk9M.js";import"./Label-BhvRy9p8.js";import"./Text-B72QzR_J.js";import"./DOMUtils-B8jV7L5A.js";import"./useId-CTQIK8VB.js";import"./useBackwardsCompatibleTheme-DVBTPBZT.js";import"./ZIndexLayer-BRtQaXip.js";import"./useAnimationId-C5J-XAz0.js";import"./ActivePoints-DeQkjxY4.js";import"./Dot-6-JAF9mR.js";import"./types-BwgN4eIA.js";import"./RegisterGraphicalItemId-CHEBFfi8.js";import"./GraphicalItemClipPath-DCCqyqY0.js";import"./SetGraphicalItem-BiBqIxpO.js";import"./getRadiusAndStrokeWidthFromDot-D0f765St.js";import"./ActiveShapeUtils-DmMWVfaj.js";import"./Curve-C6WQoFll.js";import"./step-CSVR4QN1.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Df1fayRD.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
