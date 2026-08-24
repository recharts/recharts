import{R as r}from"./iframe-CIi4aQFr.js";import{R as c}from"./zIndexSlice-Dh5k7YSi.js";import{C as d}from"./ComposedChart-B_APHvQA.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DpYlVUYN.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DwQobNkr.js";import"./index-b81EtH6z.js";import"./index-glf-Y2ea.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DFD1zbAv.js";import"./isWellBehavedNumber-C0qU1KvT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ZkQqyZzz.js";import"./index-DIad8aWY.js";import"./index-DQ9ajMSc.js";import"./axisSelectors-B5t0SRDA.js";import"./d3-scale-DpZDns7V.js";import"./renderedTicksSlice-CDlJiGOR.js";import"./CartesianChart-D66kwqNc.js";import"./chartDataContext-Dyx-NDOp.js";import"./CategoricalChart-DmxebrUR.js";import"./Layer--pVrB_zY.js";import"./AnimatedItems-BDFnApNF.js";import"./Label-_CQ4siSe.js";import"./Text-MCLT9Uur.js";import"./DOMUtils-BGqmQoYm.js";import"./useId-6CqpgxoT.js";import"./useBackwardsCompatibleTheme-rhWVmcC-.js";import"./ZIndexLayer-1sxgmC4q.js";import"./useAnimationId-DYWYqd07.js";import"./ActivePoints-B-l9jXx9.js";import"./Dot-D1RE6CX3.js";import"./types-jFK-aXqG.js";import"./RegisterGraphicalItemId-Bb9-v4SQ.js";import"./GraphicalItemClipPath-3c2R7Wr9.js";import"./SetGraphicalItem-BSa5SMWZ.js";import"./getRadiusAndStrokeWidthFromDot-Bp1zRMUA.js";import"./ActiveShapeUtils-DOGuq5rw.js";import"./Curve-CmPgMf6O.js";import"./step-WUQpfHT0.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DDMdjh60.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
