import{e as t}from"./iframe-C3UZ-t_V.js";import{R as c}from"./arrayEqualityCheck-DIL50JWa.js";import{C as d}from"./ComposedChart-C4m1Eygp.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B3JJgYaC.js";import{R as u}from"./RechartsHookInspector-BFtfPmXC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-aaXGpNRZ.js";import"./immer-Bf7Gcqi0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bsvy-j69.js";import"./index-ClWM-yv2.js";import"./hooks-DPl2sBv5.js";import"./axisSelectors-DmOEhaOy.js";import"./d3-scale-UHw6FirY.js";import"./zIndexSlice-Dx4k4ZlJ.js";import"./renderedTicksSlice-CLnyFrSg.js";import"./CartesianChart-BmK7YYly.js";import"./chartDataContext-BmElG8Xh.js";import"./CategoricalChart-DaGR7SKz.js";import"./Curve-C7Xh0Uh3.js";import"./types-5hKD9RW5.js";import"./step-mUeGDqfh.js";import"./Layer-CI6sC4Pl.js";import"./ReactUtils-BnJyydkM.js";import"./Label-BrcoQVek.js";import"./Text-DPTsyd0A.js";import"./DOMUtils-BUXVBs_y.js";import"./ZIndexLayer-D78RDR2e.js";import"./ActivePoints-Donj28kx.js";import"./Dot-CQmFG6vz.js";import"./RegisterGraphicalItemId-CRHVW6BC.js";import"./GraphicalItemClipPath-CM4WNw68.js";import"./SetGraphicalItem-aZjM1KWs.js";import"./useAnimationId-DB48Qg13.js";import"./getRadiusAndStrokeWidthFromDot-Cj9gBiC7.js";import"./graphicalItemSelectors-tC7p4u8m.js";import"./index-iiKok6sI.js";import"./ChartSizeDimensions-C9L6kdtQ.js";import"./OffsetShower-DbJZQebV.js";import"./PlotAreaShower-B5C3jvki.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
