import{R as r}from"./iframe-CJ35PD5A.js";import{R as c}from"./zIndexSlice-CXvAqe1u.js";import{C as d}from"./ComposedChart-fAwm7BMd.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-OwiN4hc4.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BvFenjAj.js";import"./index-DCTwsO2l.js";import"./index-BTcur_ii.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B4ysfGm0.js";import"./isWellBehavedNumber-DCFZS65F.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxyVG0mr.js";import"./index-D5VY6D4m.js";import"./index-DuaQKKCa.js";import"./axisSelectors-BMiLu3pU.js";import"./d3-scale-BMNy9LMQ.js";import"./renderedTicksSlice-BOsENmMF.js";import"./CartesianChart-M-BqrDCQ.js";import"./chartDataContext-3LBg74Yj.js";import"./CategoricalChart-CE-ZSJzH.js";import"./Layer-DSIl_tFJ.js";import"./AnimatedItems-DkvJpJ1L.js";import"./Label-cSvk2bVk.js";import"./Text-C5ltUD8c.js";import"./DOMUtils-DuAj34SJ.js";import"./useId-BZocWyjW.js";import"./useBackwardsCompatibleTheme-BQ1enFxD.js";import"./ZIndexLayer-BbmNpztl.js";import"./useAnimationId-BrX_XnAR.js";import"./ActivePoints-Ch1REeHD.js";import"./Dot-BpKSJ4gZ.js";import"./types-C2sHPoqW.js";import"./RegisterGraphicalItemId-B595cwUV.js";import"./GraphicalItemClipPath-DCmI04ho.js";import"./SetGraphicalItem-y646d7k1.js";import"./getRadiusAndStrokeWidthFromDot-DIhYmtUO.js";import"./ActiveShapeUtils-B17w6t33.js";import"./Curve-T8FgtlQU.js";import"./step-Bm6k0KcJ.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BlAHB7pR.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
