import{e as t}from"./iframe-IedaLeal.js";import{R as c}from"./arrayEqualityCheck-CDeFCuAt.js";import{C as d}from"./ComposedChart-BLFle0FW.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CCz7NRHm.js";import{R as u}from"./RechartsHookInspector-5qOOtg04.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DinctDfH.js";import"./immer-Dd6dXjxy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0o5SV0j_.js";import"./index-YtVhwzFk.js";import"./hooks-C5y3PU4C.js";import"./axisSelectors-Bx341r0C.js";import"./d3-scale-BX13yOxW.js";import"./zIndexSlice-BZ8DgwR3.js";import"./renderedTicksSlice-DOzQfNkA.js";import"./CartesianChart-DtUsH4ee.js";import"./chartDataContext-DqUMO5tY.js";import"./CategoricalChart-DAXIc6R-.js";import"./Curve-BzqwREyl.js";import"./types-Ci9gDE8O.js";import"./step-CR-qwJGd.js";import"./Layer-COpu_kTm.js";import"./ReactUtils-De7AqaLg.js";import"./Label-NwC3LlsS.js";import"./Text-ko_k4IV7.js";import"./DOMUtils-BYFJFnuE.js";import"./ZIndexLayer-JYekqGDv.js";import"./ActivePoints-Dn2oKCMT.js";import"./Dot-CXXTrQ7H.js";import"./RegisterGraphicalItemId-wI9lHTwH.js";import"./GraphicalItemClipPath-B96rVctv.js";import"./SetGraphicalItem-BzrdUKT-.js";import"./useAnimationId-D3Yn3hG9.js";import"./getRadiusAndStrokeWidthFromDot-B2hN5pbW.js";import"./graphicalItemSelectors-DDSx4B9l.js";import"./index-sBYFadDc.js";import"./ChartSizeDimensions-DwT6nbul.js";import"./OffsetShower-RAcVZiZd.js";import"./PlotAreaShower-DRI9galD.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
