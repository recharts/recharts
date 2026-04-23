import{e as t}from"./iframe-CUdKgdkG.js";import{R as c}from"./arrayEqualityCheck-BSmSVrdu.js";import{C as d}from"./ComposedChart-B_srWo8L.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-OGd6iHZr.js";import{R as u}from"./RechartsHookInspector-Cq0IOlAH.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-FNj3XcfL.js";import"./immer-Cj2VbGf6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cw3qTPi-.js";import"./index-CFMZ10nV.js";import"./hooks-CQ9pmujM.js";import"./axisSelectors-B4cxlRHn.js";import"./d3-scale-Cybfxil2.js";import"./zIndexSlice-R-FfD4BY.js";import"./renderedTicksSlice-CKVu5O47.js";import"./CartesianChart-2AvxhW1F.js";import"./chartDataContext-C6IOAwjY.js";import"./CategoricalChart-Cyn18alE.js";import"./Curve-CaswtT1y.js";import"./types-Du7cRNSr.js";import"./step-DvWhuTZk.js";import"./Layer-DmKN-F8X.js";import"./ReactUtils-C73Q90p0.js";import"./Label-DglRGLXy.js";import"./Text-DGg_g2qE.js";import"./DOMUtils-BpuSrLFt.js";import"./ZIndexLayer-CDgenCRH.js";import"./ActivePoints-a6uvGFsO.js";import"./Dot-BZIhq4qY.js";import"./RegisterGraphicalItemId-MhTEXlyY.js";import"./GraphicalItemClipPath-doETQzOU.js";import"./SetGraphicalItem-D9_vCp7v.js";import"./useAnimationId-AqfbREG9.js";import"./getRadiusAndStrokeWidthFromDot-D4zfOBB4.js";import"./graphicalItemSelectors-CZNxFwGu.js";import"./index-D6AtQ2XN.js";import"./ChartSizeDimensions-BX1J8uWf.js";import"./OffsetShower-Ba03E4d5.js";import"./PlotAreaShower-CBo6UyYv.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
