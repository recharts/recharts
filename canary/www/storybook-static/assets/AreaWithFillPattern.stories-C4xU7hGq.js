import{e as t}from"./iframe-5nyyyA4e.js";import{R as p}from"./arrayEqualityCheck-DhH-5wr2.js";import{C as m}from"./ComposedChart-Cxl5hqIP.js";import{A as r}from"./Area-CvuwAPjS.js";import{R as s}from"./RechartsHookInspector-Bic4nxDU.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CeTTuEfb.js";import"./immer-2somCEQQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbfL-s84.js";import"./index-DrSxOYtm.js";import"./hooks-CdfksvpZ.js";import"./axisSelectors-CobE02gZ.js";import"./d3-scale-puoPpyC3.js";import"./zIndexSlice-C6txXD1x.js";import"./renderedTicksSlice-Cm-fMS3n.js";import"./CartesianChart-CFvpoJB5.js";import"./chartDataContext-SxjdhjDb.js";import"./CategoricalChart-DI7k_Lzd.js";import"./Curve-CtxNRaVC.js";import"./types-BpXzUYak.js";import"./step-CMCDVxPb.js";import"./Layer-DviFQGNi.js";import"./ReactUtils-BrfFtQHh.js";import"./Label-CduFeyI1.js";import"./Text-CE1WfcL6.js";import"./DOMUtils-Dq_WTVX1.js";import"./ZIndexLayer-OUT57C2H.js";import"./ActivePoints-C08M__J8.js";import"./Dot-YnFnwCT3.js";import"./RegisterGraphicalItemId-Co9Ixth9.js";import"./GraphicalItemClipPath-4mU8FIdV.js";import"./SetGraphicalItem-YjHvOXLE.js";import"./useAnimationId-C32uUUSq.js";import"./getRadiusAndStrokeWidthFromDot-BSz_BA2S.js";import"./graphicalItemSelectors-Bbe84aqu.js";import"./index-ltgFEkuv.js";import"./ChartSizeDimensions-CHqoYXte.js";import"./OffsetShower-pvxB70aB.js";import"./PlotAreaShower-CC7NhsKv.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
