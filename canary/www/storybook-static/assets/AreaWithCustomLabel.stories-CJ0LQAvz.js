import{R as r}from"./iframe-D-sDuIqM.js";import{R as c}from"./zIndexSlice-DkRDAG1K.js";import{C as d}from"./ComposedChart-BqFvX779.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Bs-TCbRR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BwwGSoU-.js";import"./index-DOwSNtIW.js";import"./index-D-ZcLjnp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DRUr7G4m.js";import"./isWellBehavedNumber-n1fKw3Ik.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BR0dPwJa.js";import"./axisSelectors-CcFzWzBk.js";import"./d3-scale-D2yJqL8j.js";import"./index-sXSxEpdM.js";import"./index-DlgBIkPT.js";import"./renderedTicksSlice-DoL3t7Bc.js";import"./index-Dfhf8xit.js";import"./CartesianChart-ZdAO4m3f.js";import"./chartDataContext-DR95QKXv.js";import"./CategoricalChart-Bvu_kn7d.js";import"./Layer-C3zxw81n.js";import"./AnimatedItems-CAyQvTlC.js";import"./Label-mzqnfF5y.js";import"./Text-cGP75sAD.js";import"./DOMUtils-BlK1UfYz.js";import"./useId-DJy_IGRL.js";import"./useBackwardsCompatibleTheme-Bt2NRZPB.js";import"./ZIndexLayer-Dl5V_Hf6.js";import"./useAnimationId-BdWTgj5e.js";import"./ActivePoints-Ctj_jtde.js";import"./Dot-nUj7Emhk.js";import"./types-D7y8jC37.js";import"./RegisterGraphicalItemId-BpgvVZBx.js";import"./GraphicalItemClipPath-BqyJWtfu.js";import"./SetGraphicalItem-CoBxoWuP.js";import"./getRadiusAndStrokeWidthFromDot-CyWtRfsI.js";import"./ActiveShapeUtils-B7KMSlGv.js";import"./Curve-CiGjQv1I.js";import"./step-CSXkfkZq.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CglCalgl.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
