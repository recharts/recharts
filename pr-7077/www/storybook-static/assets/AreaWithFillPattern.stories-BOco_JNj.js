import{e as t}from"./iframe-XFn8o3qI.js";import{R as p}from"./arrayEqualityCheck-DoWZ8Al-.js";import{C as m}from"./ComposedChart-CqHuuwTM.js";import{A as r}from"./Area-Cbxfqk2e.js";import{R as s}from"./RechartsHookInspector-D90IXMov.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DasUcEmR.js";import"./immer-Hw8ZlrcX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bqol093Z.js";import"./index-DNZJK2gS.js";import"./hooks-CgDMZSu6.js";import"./axisSelectors-B-8e66Qc.js";import"./d3-scale-BECtu2Jj.js";import"./zIndexSlice-BaTuqdfU.js";import"./renderedTicksSlice-Dl0HjFeM.js";import"./CartesianChart-CtYhkutQ.js";import"./chartDataContext-C4USeiES.js";import"./CategoricalChart-BM4cINHZ.js";import"./Curve-C3P9kzpN.js";import"./types-Bj0G5aQF.js";import"./step-DeRmKfqt.js";import"./Layer-DCadlIaL.js";import"./ReactUtils-B41U7gki.js";import"./Label-BlYwY5-1.js";import"./Text-Bl76oSnc.js";import"./DOMUtils-DhQP54ma.js";import"./ZIndexLayer-DWBavU2w.js";import"./ActivePoints-BMnMeirf.js";import"./Dot-BXU7GTUQ.js";import"./RegisterGraphicalItemId-JBTo95SG.js";import"./GraphicalItemClipPath-Cv74D6gd.js";import"./SetGraphicalItem-gSI2Cn_M.js";import"./useAnimationId-DlDP6-K6.js";import"./getRadiusAndStrokeWidthFromDot-YxhzX5we.js";import"./graphicalItemSelectors-Cido0Juo.js";import"./index-BCvGM1bQ.js";import"./ChartSizeDimensions-BgEuIf6D.js";import"./OffsetShower-2hoMWt5-.js";import"./PlotAreaShower-D2hH_gCG.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
