import{R as r}from"./iframe-BkEvAth1.js";import{R as c}from"./zIndexSlice-nf1W2Gc-.js";import{C as d}from"./ComposedChart-DoYpCRnR.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B77fwtpy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D101QSOu.js";import"./index-WgwKlZAp.js";import"./index-DEguUzrn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-0lxOPE_6.js";import"./isWellBehavedNumber-CFPi8ujN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQMoxy31.js";import"./axisSelectors-Tv8O7Qi2.js";import"./d3-scale-CLBHc1rG.js";import"./index-B8WpKNcF.js";import"./index-BRKc8NTQ.js";import"./renderedTicksSlice-DA-CVNBV.js";import"./index-BKOJ-Qmj.js";import"./CartesianChart-ByLTz-Wk.js";import"./chartDataContext-DQU-1klM.js";import"./CategoricalChart-CFWcsDQS.js";import"./Layer-B86MwzYN.js";import"./AnimatedItems-DAE7yXHk.js";import"./Label-C6aq5sgc.js";import"./Text-BZ3mS1RC.js";import"./DOMUtils-BcdnRDzA.js";import"./useId-C4p8DCEP.js";import"./useBackwardsCompatibleTheme-C9UXAGCH.js";import"./ZIndexLayer-CV-ewbAJ.js";import"./useAnimationId-BXkgTCLA.js";import"./ActivePoints-BpS_UUeT.js";import"./Dot-DqgMg3tu.js";import"./types-CCpLRaHh.js";import"./RegisterGraphicalItemId-7FSphn26.js";import"./GraphicalItemClipPath-B-LRUwBU.js";import"./SetGraphicalItem-CKJc8ABb.js";import"./getRadiusAndStrokeWidthFromDot-DpGWIpus.js";import"./ActiveShapeUtils-l5lysgay.js";import"./Curve-oC0QJw4U.js";import"./step-2sMLUC-_.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-C648VAOs.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
