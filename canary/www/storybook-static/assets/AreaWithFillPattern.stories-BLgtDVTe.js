import{e as t}from"./iframe-uVZDwAjj.js";import{R as p}from"./arrayEqualityCheck-BVLp_fP4.js";import{C as m}from"./ComposedChart-C98EWxS3.js";import{A as r}from"./Area-DCYAiNW3.js";import{R as s}from"./RechartsHookInspector-B8IZQaM2.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-LNwsWh_o.js";import"./immer-ChwPqFH_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-v0y6A39c.js";import"./index-D4nlSVrI.js";import"./hooks-DSaqLgKR.js";import"./axisSelectors-BRBRXOBA.js";import"./d3-scale-0GkopIXO.js";import"./zIndexSlice-CLyAXc3q.js";import"./renderedTicksSlice-DRUH7kK9.js";import"./CartesianChart-BY3Mtf6I.js";import"./chartDataContext-qRr_iUlh.js";import"./CategoricalChart-BqmfIvkg.js";import"./Curve-BRxcZY_5.js";import"./types-B-Xhkkhb.js";import"./step-Prvlnfgp.js";import"./Layer-kSeehgUS.js";import"./ReactUtils-CdVDZBtJ.js";import"./Label-PDV3rnUf.js";import"./Text-BQnpW6GD.js";import"./DOMUtils-Dnhzy72R.js";import"./ZIndexLayer-B6kXppYb.js";import"./ActivePoints-DaG8bHlJ.js";import"./Dot-DIb3YsWy.js";import"./RegisterGraphicalItemId-D_V_V8zu.js";import"./GraphicalItemClipPath-Cd7d-a5W.js";import"./SetGraphicalItem-CQT3WiuH.js";import"./useAnimationId-CLB64h0U.js";import"./getRadiusAndStrokeWidthFromDot-ClrcQxIA.js";import"./graphicalItemSelectors-BE5LE8v2.js";import"./index-Bf-UOCze.js";import"./ChartSizeDimensions-BS0bLTe8.js";import"./OffsetShower-8U00XdUa.js";import"./PlotAreaShower-CDaLw8Um.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
