import{R as r}from"./iframe-C3lSaTFw.js";import{R as c}from"./zIndexSlice-CVjGcfFW.js";import{C as d}from"./ComposedChart-ByMiL3yy.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BRHtjSZ3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BAVesAqd.js";import"./index-8Y4ihDcT.js";import"./index-CyFP1eEz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cy9S0LxM.js";import"./isWellBehavedNumber-tLnZyTMG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CM9ySMEh.js";import"./axisSelectors-BkcaIfMI.js";import"./d3-scale-3ZX1sJwh.js";import"./index-Dt3obc0C.js";import"./index-BruKCsOi.js";import"./renderedTicksSlice-BCrJLlNF.js";import"./index-CCHBt1wf.js";import"./CartesianChart-66zTmp_E.js";import"./chartDataContext-8kJMOLTT.js";import"./CategoricalChart-PbT_m_Z4.js";import"./Layer-DCoygAxl.js";import"./AnimatedItems-BIU8Piw-.js";import"./Label-DRjcihT7.js";import"./Text-H-IPTcTj.js";import"./DOMUtils-DW6zNYNN.js";import"./useId-ByxRmCjV.js";import"./useBackwardsCompatibleTheme-BMLwE0D6.js";import"./ZIndexLayer-BIuAiCXb.js";import"./useAnimationId-Dtjg15yn.js";import"./ActivePoints-CS5Q6FEx.js";import"./Dot-zciZMpDM.js";import"./types-BmaDYfeO.js";import"./RegisterGraphicalItemId-C6IEzR7X.js";import"./GraphicalItemClipPath-CWU7eMW9.js";import"./SetGraphicalItem-BLqiLXhC.js";import"./getRadiusAndStrokeWidthFromDot-p4PngwyL.js";import"./ActiveShapeUtils-Dqjt7W9Y.js";import"./Curve-D4S8erUE.js";import"./step-DxtN-o39.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-B93Md1_E.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
