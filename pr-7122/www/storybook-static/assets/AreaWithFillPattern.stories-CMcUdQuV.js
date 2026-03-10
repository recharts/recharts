import{e as t}from"./iframe-DuNEY226.js";import{R as p}from"./arrayEqualityCheck-DDMqu3f1.js";import{C as m}from"./ComposedChart-DmWeIfHx.js";import{A as r}from"./Area-CQBsMzNq.js";import{R as s}from"./RechartsHookInspector-CfHmmsr6.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C-2Byojj.js";import"./immer-BVAwiqUd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CEqZKjHf.js";import"./index-D7ubYLAP.js";import"./hooks-DB_oXYxy.js";import"./axisSelectors-DAR8t-c9.js";import"./d3-scale-CgGCPdr7.js";import"./zIndexSlice-CRDA7WbI.js";import"./renderedTicksSlice-BQwvsrpL.js";import"./CartesianChart-v-wDegKF.js";import"./chartDataContext-D8l2QHPQ.js";import"./CategoricalChart-C_g1w3w0.js";import"./Curve-ipLw690D.js";import"./types-D9KOomKd.js";import"./step-CHzygN7O.js";import"./Layer-D_n9WiuW.js";import"./ReactUtils-DRluxBO3.js";import"./Label-DKCGVJ9i.js";import"./Text-Dc6VXTKK.js";import"./DOMUtils-C-AY4UId.js";import"./ZIndexLayer-CZdiz2vD.js";import"./ActivePoints-Ckq0cMoj.js";import"./Dot-Cr0aUliX.js";import"./RegisterGraphicalItemId-BWMdn6qI.js";import"./GraphicalItemClipPath-CeHrZ0UX.js";import"./SetGraphicalItem-CfNV3Vyt.js";import"./useAnimationId-DN_Wn8rj.js";import"./getRadiusAndStrokeWidthFromDot-DIHVKzb4.js";import"./graphicalItemSelectors-D39jZ08p.js";import"./index-CE1COEz0.js";import"./ChartSizeDimensions-CTe7q-3t.js";import"./OffsetShower-CpVXhOAG.js";import"./PlotAreaShower-CXvEQ9OL.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
