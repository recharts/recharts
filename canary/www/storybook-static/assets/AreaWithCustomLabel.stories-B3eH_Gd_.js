import{R as r}from"./iframe-1ThqpvbR.js";import{R as c}from"./zIndexSlice-D1UhtHk3.js";import{C as d}from"./ComposedChart-C-kp7sV2.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BGXPeM47.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C73VAA69.js";import"./index-DoTHKFlr.js";import"./index-QzMa9_Xi.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DArzca5M.js";import"./isWellBehavedNumber-B7CQu1xd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DcjLdZwM.js";import"./index-CfQ7Fwii.js";import"./index-CktiEatn.js";import"./axisSelectors-1futPsBe.js";import"./d3-scale-nVhhBbRx.js";import"./renderedTicksSlice-0CGdVobN.js";import"./CartesianChart-dewq0r_z.js";import"./chartDataContext-DvyAzMjZ.js";import"./CategoricalChart-XR-igInW.js";import"./Layer-CO3sdEK1.js";import"./AnimatedItems-CScMa6hv.js";import"./Label-Dga6ObK8.js";import"./Text-MDWEE3g_.js";import"./DOMUtils-BsT2H8yg.js";import"./useId-Cq2DHNjh.js";import"./useBackwardsCompatibleTheme-CdEwSBID.js";import"./ZIndexLayer-B6xphlKa.js";import"./useAnimationId-xKJzFs5I.js";import"./ActivePoints-DT7ZsPv5.js";import"./Dot-fVKNfdE9.js";import"./types-BACZxUTO.js";import"./RegisterGraphicalItemId-DZFAuRVF.js";import"./GraphicalItemClipPath-Tv0C2Wnw.js";import"./SetGraphicalItem-DGTvGn78.js";import"./getRadiusAndStrokeWidthFromDot-Zg2QbZcY.js";import"./ActiveShapeUtils-BlimohsT.js";import"./Curve-BFr4LVo1.js";import"./step-K_9BfkCY.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-GcNb_05X.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
