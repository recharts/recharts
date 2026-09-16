import{R as r}from"./iframe-CIqnkIPF.js";import{R as c}from"./zIndexSlice-C4_auGQK.js";import{C as d}from"./ComposedChart-D4NhPDr5.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CI01RW-N.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DQoqhRFH.js";import"./index-9S55HN04.js";import"./index-BLp3voyE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BFyfbVPX.js";import"./isWellBehavedNumber-qR6709gc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BI930gKz.js";import"./axisSelectors-tSjH_GJH.js";import"./d3-scale-Bhl30Eoo.js";import"./index-Dd4tpery.js";import"./index-CmdQhCAH.js";import"./renderedTicksSlice-CvMTSVT4.js";import"./index-DK82_Rv1.js";import"./CartesianChart-CjwJjVuV.js";import"./chartDataContext-StRUZ171.js";import"./CategoricalChart-kSvqIkP0.js";import"./Layer-BamNj_61.js";import"./AnimatedItems-DeKxEgFK.js";import"./Label-Drah4wki.js";import"./Text-DQlwJtIP.js";import"./DOMUtils-DNJKvmAc.js";import"./useId-Bxa3d20C.js";import"./useBackwardsCompatibleTheme-tny2gIbf.js";import"./ZIndexLayer-CdFbga_E.js";import"./useAnimationId-Cd4eq7V7.js";import"./ActivePoints-BXMF2o4n.js";import"./Dot-CwC_vt7v.js";import"./types-t2__B9uA.js";import"./RegisterGraphicalItemId-CTUnkLRc.js";import"./GraphicalItemClipPath-Cq4Ga7ez.js";import"./SetGraphicalItem-A5whYu6T.js";import"./getRadiusAndStrokeWidthFromDot-CfFHUr4w.js";import"./ActiveShapeUtils-BeOi9VVh.js";import"./Curve-B3_VtN3j.js";import"./step-CbHMrxnl.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BPBVnbd3.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
