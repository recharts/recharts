import{e as t}from"./iframe-D0NgTmOF.js";import{g as p}from"./arrayEqualityCheck-CwgUv_ht.js";import{C as m}from"./ComposedChart-DJ5Lkyrz.js";import{a as s}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-CYB3KXeE.js";import{R as l}from"./RechartsHookInspector-5yLt0C9L.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C2iJSQuR.js";import"./immer-DnKwXwYM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5gUoFOn.js";import"./index-DvYw8x0Z.js";import"./hooks-BjdflWes.js";import"./axisSelectors-D-soVtjN.js";import"./d3-scale-CuJiQ300.js";import"./zIndexSlice-B6knb3no.js";import"./renderedTicksSlice-B6w59eqG.js";import"./CartesianChart-vOQQa6wo.js";import"./chartDataContext-B3eSYf3f.js";import"./CategoricalChart-Cw-_htEg.js";import"./Curve-CmeNNcZa.js";import"./types-BAabENvn.js";import"./step-Dotb7kAI.js";import"./Layer-CdU29MCm.js";import"./ReactUtils-CP67hvAP.js";import"./Label-CwJJPXCN.js";import"./Text-CYJBI_N5.js";import"./DOMUtils-B93EOx77.js";import"./ZIndexLayer-CgbYN4dr.js";import"./ActivePoints-Bqu6MNFU.js";import"./Dot-DXucPl9o.js";import"./RegisterGraphicalItemId-CIKun5N4.js";import"./GraphicalItemClipPath-DIWpokpF.js";import"./SetGraphicalItem-7Ry64uPY.js";import"./useAnimationId-BMh-hzSk.js";import"./getRadiusAndStrokeWidthFromDot-BgAjRsmY.js";import"./graphicalItemSelectors-CrhQHOrv.js";import"./index-CUywKB4R.js";import"./ChartSizeDimensions-KQoM2E8Q.js";import"./OffsetShower-18-bLdR4.js";import"./PlotAreaShower-C4z2y4fi.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
