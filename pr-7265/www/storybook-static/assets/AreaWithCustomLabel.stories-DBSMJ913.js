import{e as t}from"./iframe-37zUUx_E.js";import{R as c}from"./arrayEqualityCheck-DutKhOGK.js";import{C as d}from"./ComposedChart-BywxKeJQ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C2XVkt7F.js";import{R as u}from"./RechartsHookInspector-CDipa0hp.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B9PzFguX.js";import"./immer-CUnR0E5N.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B76xGR1e.js";import"./index-0-WoshO7.js";import"./hooks-CAbbZjj1.js";import"./axisSelectors-DkFLtXON.js";import"./d3-scale-E5kHX0Us.js";import"./zIndexSlice-D134Hh5h.js";import"./renderedTicksSlice-5LDn2Ezt.js";import"./CartesianChart-8ApklZQP.js";import"./chartDataContext-kqFcMPUE.js";import"./CategoricalChart-CHzXuF8K.js";import"./Curve-aM5GtQmw.js";import"./types-BDojSeLG.js";import"./step-T5zqhKew.js";import"./Layer-Blxm0j6C.js";import"./ReactUtils-Dqk404a0.js";import"./Label-D6SKAk7k.js";import"./Text-CFCBMdCH.js";import"./DOMUtils-BZYNC1iv.js";import"./ZIndexLayer-AHauez6T.js";import"./ActivePoints-EmSMm9zZ.js";import"./Dot-Dh6UB_x_.js";import"./RegisterGraphicalItemId-BFaPkTpC.js";import"./GraphicalItemClipPath-Ck6zBYe3.js";import"./SetGraphicalItem-CUypKyA6.js";import"./useAnimationId-C7xf4RxW.js";import"./getRadiusAndStrokeWidthFromDot-VPgWcsDI.js";import"./graphicalItemSelectors-B-lW1qUQ.js";import"./index-cHRr1rY9.js";import"./ChartSizeDimensions-0RPcwWKr.js";import"./OffsetShower-HjsFwihi.js";import"./PlotAreaShower-lKdypGoe.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
