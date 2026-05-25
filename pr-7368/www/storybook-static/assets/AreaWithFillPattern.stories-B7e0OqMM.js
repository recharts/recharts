import{e as t}from"./iframe-C6nv2cAy.js";import{g as p}from"./arrayEqualityCheck-B6TrlJO6.js";import{C as m}from"./ComposedChart-CelmCkFr.js";import{a as s}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-BYFvSxCP.js";import{R as l}from"./RechartsHookInspector-DL3_bzE2.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dz2DdWhQ.js";import"./immer-Cni8-JSk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BW8puFa7.js";import"./index-B73x1Khd.js";import"./hooks-BtR6DFBi.js";import"./axisSelectors-DvgT42C4.js";import"./d3-scale-BCthX3a6.js";import"./zIndexSlice-J7b4XvEa.js";import"./renderedTicksSlice-CAeDVDJj.js";import"./CartesianChart-DXKuJw3U.js";import"./chartDataContext-CzxDQN7p.js";import"./CategoricalChart-QgKXQZGT.js";import"./Curve-BpVF0X8n.js";import"./types-QOd3xFvZ.js";import"./step-BkDQQW3z.js";import"./path-DyVhHtw_.js";import"./Layer-wqnfjYdM.js";import"./ReactUtils-DhUlF_RS.js";import"./Label-DLbKprA1.js";import"./Text-Ceq4AYN-.js";import"./DOMUtils-5JKzP-3C.js";import"./ZIndexLayer-B79SyOov.js";import"./ActivePoints-CD6NnglB.js";import"./Dot-DL_sWwqm.js";import"./RegisterGraphicalItemId-D4TYIl8u.js";import"./GraphicalItemClipPath-DfRR2I58.js";import"./SetGraphicalItem-Cgl-K06p.js";import"./useAnimationId-CQiwipC5.js";import"./getRadiusAndStrokeWidthFromDot-BvPf9mB3.js";import"./graphicalItemSelectors-CGet36BX.js";import"./index-DweZMxE9.js";import"./ChartSizeDimensions-BY1_-T9T.js";import"./OffsetShower-DDAPU-JD.js";import"./PlotAreaShower-XRHlYJYB.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
