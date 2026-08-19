import{R as r}from"./iframe-Ce2LNmzq.js";import{R as c}from"./zIndexSlice-1iBSzntV.js";import{C as d}from"./ComposedChart-D8QzjQGV.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Bwag7-Uv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BPcDKDas.js";import"./index-CwWtniec.js";import"./index-A8_rJiXz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bt6qRPyP.js";import"./isWellBehavedNumber-LiGS8Ktg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-NruqEuMP.js";import"./index-CWtZ9yph.js";import"./index-C0AYEPvF.js";import"./axisSelectors-nf5d_TCI.js";import"./d3-scale-uRAm4Q4g.js";import"./renderedTicksSlice-DRhSVK4R.js";import"./CartesianChart-C3QGU_Gm.js";import"./chartDataContext-mV7HyGJe.js";import"./CategoricalChart-CdBHij7l.js";import"./Layer-CmHiQhsD.js";import"./AnimatedItems-EYOrwSGz.js";import"./Label-E5RSdERr.js";import"./Text-1GNKdZPR.js";import"./DOMUtils-DXjDSVEa.js";import"./useBackwardsCompatibleTheme-C9k5uHL0.js";import"./ZIndexLayer-hciQBMwm.js";import"./useAnimationId-DJBKMCXo.js";import"./ActivePoints-BV19snok.js";import"./Dot-BtvWNtdQ.js";import"./types-D9eaN5qP.js";import"./RegisterGraphicalItemId-BhPsp4dD.js";import"./GraphicalItemClipPath-DPYSwVHo.js";import"./SetGraphicalItem-CX7uV2i5.js";import"./getRadiusAndStrokeWidthFromDot-D3ct2NHr.js";import"./ActiveShapeUtils-DVN9EFMa.js";import"./Curve-pGKyKnaa.js";import"./step-B81xmQ7d.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Dq6j4bYq.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
