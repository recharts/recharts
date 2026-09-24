import{R as r}from"./iframe-DNbvw14a.js";import{R as c}from"./zIndexSlice-BHD22v5p.js";import{C as d}from"./ComposedChart-x_AAjUrD.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-ClSMW_BQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-TrQ-NrIz.js";import"./index-ChGtG0Z1.js";import"./index-mPJfSQ4a.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dv9OS7x0.js";import"./isWellBehavedNumber-B4X7Ovgo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-vWLTzty1.js";import"./axisSelectors-B6LUaqOe.js";import"./d3-scale-DdoY8Kw0.js";import"./index-CiQ39v7Z.js";import"./index-CqQ_TYAw.js";import"./renderedTicksSlice-DnMPpzr7.js";import"./index-BcAi-B8x.js";import"./CartesianChart-D_zqHIPC.js";import"./chartDataContext-mj0-05pU.js";import"./CategoricalChart-DTINRHZI.js";import"./Layer-Ca0bY5rb.js";import"./AnimatedItems-wgqiGiqn.js";import"./Label-B7KQBAEU.js";import"./Text-BgAYGcmu.js";import"./DOMUtils-gpe3mW7P.js";import"./useId-BIiTcBjO.js";import"./useBackwardsCompatibleTheme-CUWrJJ-Y.js";import"./ZIndexLayer-aQMxqOVX.js";import"./useAnimationId-DYgsmh0H.js";import"./ActivePoints-DVti48Uk.js";import"./Dot-DUpVpfPG.js";import"./types-BqFGOrry.js";import"./RegisterGraphicalItemId-C8sRnX7V.js";import"./GraphicalItemClipPath-CB7JJ2kx.js";import"./SetGraphicalItem-nJGBA7YQ.js";import"./getRadiusAndStrokeWidthFromDot-DuDTJHD_.js";import"./ActiveShapeUtils-Bvp6wNuu.js";import"./Curve-DfXzeARC.js";import"./step-DhjEjZzQ.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CCeSwNH2.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
