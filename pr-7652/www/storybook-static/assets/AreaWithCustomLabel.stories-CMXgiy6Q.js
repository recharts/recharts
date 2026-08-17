import{R as r}from"./iframe-B8V7BJ0L.js";import{R as c}from"./zIndexSlice-D-1XQb3V.js";import{C as d}from"./ComposedChart-ixqus0AO.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CVXQcWaX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CesEnXHC.js";import"./index-CEyD9286.js";import"./index-BrHErK0F.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BVc4-u0s.js";import"./isWellBehavedNumber-DJ8Z02p0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BnC-Jwam.js";import"./index-CpRh0f3d.js";import"./index-I3Tcx3uB.js";import"./axisSelectors-CtDpom86.js";import"./d3-scale-C_Pwa9HE.js";import"./renderedTicksSlice-BEoD_C5H.js";import"./CartesianChart-DbV6u1bg.js";import"./chartDataContext-DkhpcBdG.js";import"./CategoricalChart-CRJAPCFd.js";import"./Layer-DSZQNu8u.js";import"./AnimatedItems-D2zk6WJL.js";import"./Label-eqtAA7cE.js";import"./Text-DNMx3NKa.js";import"./DOMUtils-BPFNazbq.js";import"./useBackwardsCompatibleTheme-DRsZnCOS.js";import"./ZIndexLayer-D9SG3bxa.js";import"./useAnimationId-D0vrdmF4.js";import"./ActivePoints-Bcxj_Z9o.js";import"./Dot-CtEJdvTp.js";import"./types-Bynmgm1l.js";import"./RegisterGraphicalItemId-BrpEQBfx.js";import"./GraphicalItemClipPath-C5JNAsGG.js";import"./SetGraphicalItem-Cww5wWY0.js";import"./getRadiusAndStrokeWidthFromDot-CrG0xVOS.js";import"./ActiveShapeUtils-EzXi-ssF.js";import"./Curve-_vFkPdEp.js";import"./step-Dn4gXRUd.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Docn_iQt.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
