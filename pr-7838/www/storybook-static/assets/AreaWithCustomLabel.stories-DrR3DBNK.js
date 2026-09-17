import{R as r}from"./iframe-Bo128pRc.js";import{R as c}from"./zIndexSlice-WbjY_zmo.js";import{C as d}from"./ComposedChart-Cw7mlXQ9.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Cs_AOTH4.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DKRp2Cpf.js";import"./index-BFq8L4Qf.js";import"./index-Cj2yGnH8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CR_Daah7.js";import"./isWellBehavedNumber-DSGzbKJq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DmrtgzWA.js";import"./axisSelectors-BYCa1KQi.js";import"./d3-scale-EUAW_uXn.js";import"./index-CTI4te1e.js";import"./index-9RfS0P5N.js";import"./renderedTicksSlice-BJhZejFa.js";import"./index-CNXfLYdJ.js";import"./CartesianChart-Df4TbwdF.js";import"./chartDataContext-BfZakhMa.js";import"./CategoricalChart-D4todBvL.js";import"./Layer-DR8K2tDR.js";import"./AnimatedItems-BX9wZRAd.js";import"./Label-ghQ3JhC7.js";import"./Text-BFaLgVB9.js";import"./DOMUtils-DyhgREL4.js";import"./useId-DR5HNXG4.js";import"./useBackwardsCompatibleTheme-DyPyGrUA.js";import"./ZIndexLayer-DD1XEuiL.js";import"./useAnimationId-CQmNoSKE.js";import"./ActivePoints-Bl65ih3N.js";import"./Dot-eLqrzeMr.js";import"./types-CsIyy1S-.js";import"./RegisterGraphicalItemId-CwYw7hzr.js";import"./GraphicalItemClipPath-RiFLM0LL.js";import"./SetGraphicalItem-qyOUVGvM.js";import"./getRadiusAndStrokeWidthFromDot-DoOeRTU4.js";import"./ActiveShapeUtils-wH4Ic5EK.js";import"./Curve-BOVvH2tq.js";import"./step-C7Pxf4sj.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-B2TrnUL8.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
