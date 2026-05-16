import{e as t}from"./iframe-hEzUtsMW.js";import{g as p}from"./arrayEqualityCheck-x5atMu4i.js";import{C as m}from"./ComposedChart-DIb01qKn.js";import{a as s}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-BCGNPX3N.js";import{R as l}from"./RechartsHookInspector-HGLK2tN5.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DVL_2ynI.js";import"./immer-D2mt-X_3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-fdgiBftW.js";import"./index-B2wa4hnc.js";import"./hooks-BpIGMeVK.js";import"./axisSelectors-DpQuKI8d.js";import"./d3-scale-D4Rky8AA.js";import"./zIndexSlice-C-CqVCIy.js";import"./renderedTicksSlice-Dvxj7DTa.js";import"./CartesianChart-D_wgf81F.js";import"./chartDataContext-CIGqpd_s.js";import"./CategoricalChart-CUEc2NUM.js";import"./Curve-DljUrqTb.js";import"./types-CIvV1oOa.js";import"./step-nV8fFjWt.js";import"./Layer-BzjUvoq3.js";import"./ReactUtils-CILnJ9bI.js";import"./Label-DAj1mr9j.js";import"./Text-7nbNQAIW.js";import"./DOMUtils-CHISDaUn.js";import"./ZIndexLayer-D2roQss2.js";import"./ActivePoints-BEj7A802.js";import"./Dot-DjJx9Xmg.js";import"./RegisterGraphicalItemId-DEIEDShO.js";import"./GraphicalItemClipPath-DztVjT6a.js";import"./SetGraphicalItem-JFejgF9M.js";import"./useAnimationId-nSTPw_c2.js";import"./getRadiusAndStrokeWidthFromDot-ZgYi_nYk.js";import"./graphicalItemSelectors-D-zkTuhX.js";import"./index-umLltmbH.js";import"./ChartSizeDimensions-BYr3kQiS.js";import"./OffsetShower-ChvlcA1R.js";import"./PlotAreaShower-kf7JFG6K.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
