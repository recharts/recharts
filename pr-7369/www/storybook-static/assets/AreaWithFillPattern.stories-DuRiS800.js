import{e as t}from"./iframe-D8sYifa2.js";import{d as p}from"./arrayEqualityCheck-y2Q9GogF.js";import{C as m}from"./ComposedChart-DEf9PDgh.js";import{a as s}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-yY4e51qd.js";import{R as l}from"./RechartsHookInspector-DH476wIm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DUx68t71.js";import"./svgPropertiesAndEvents-DLjmXQI2.js";import"./immer-DGWVQIGE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkonLtU6.js";import"./hooks-BU-t5LUJ.js";import"./axisSelectors-BhhfO0Ag.js";import"./d3-scale-Cclz1I6I.js";import"./zIndexSlice-_08NoE64.js";import"./renderedTicksSlice-4e9Z0x6u.js";import"./index-CMJrcCvs.js";import"./CartesianChart-DyRJBMNu.js";import"./chartDataContext-RIukKWW8.js";import"./CategoricalChart-Cy6OSvk9.js";import"./Curve-D7_AU4BE.js";import"./types-C-x3ql1e.js";import"./step-Cv8kCHVT.js";import"./path-DyVhHtw_.js";import"./Layer-D0lgb40K.js";import"./graphicalItemTheme-BorrGmPK.js";import"./Label-DJUogzP7.js";import"./Text-CGRq25Ok.js";import"./DOMUtils-DEL1f2E9.js";import"./ZIndexLayer-BoxbsGwS.js";import"./ActivePoints-DwTRXl_F.js";import"./Dot-IstG4xe6.js";import"./RegisterGraphicalItemId-qsbqe2qd.js";import"./GraphicalItemClipPath-BvTSVrR_.js";import"./SetGraphicalItem-y2OPpJ7-.js";import"./useAnimationId-W_naYXH9.js";import"./getRadiusAndStrokeWidthFromDot-E4UfAf03.js";import"./graphicalItemSelectors-DMIY_pKH.js";import"./index-DmeQCr0O.js";import"./ChartSizeDimensions-HlWxaGyg.js";import"./OffsetShower-BZMcKLdA.js";import"./PlotAreaShower-DYk3IhVP.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const rt=["FillPattern"];export{e as FillPattern,rt as __namedExportsOrder,et as default};
