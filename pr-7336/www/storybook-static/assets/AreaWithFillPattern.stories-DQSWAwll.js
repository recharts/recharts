import{e as t}from"./iframe-pel8cYCN.js";import{g as p}from"./arrayEqualityCheck-C_lOmCrI.js";import{C as m}from"./ComposedChart-BXIuO7D7.js";import{a as s}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-DDzs4hFv.js";import{R as l}from"./RechartsHookInspector-Dg66sE1s.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-YrDhwYNk.js";import"./immer-BJQdivTr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSDFgvQ-.js";import"./index-BtBEICN3.js";import"./hooks-D-fRP47Y.js";import"./axisSelectors-Bb4Kms9I.js";import"./d3-scale-CX31JByl.js";import"./zIndexSlice-ymPJrgdD.js";import"./renderedTicksSlice-DOQ_XGYo.js";import"./CartesianChart-BlzYSjsM.js";import"./chartDataContext-Edg6lPwK.js";import"./CategoricalChart-B61I782z.js";import"./Curve-DUNlDEm2.js";import"./types-Xh1xXsKt.js";import"./step-DDfuaYno.js";import"./Layer-CNeytfD9.js";import"./ReactUtils-MkRs3AIp.js";import"./Label-LVsFLhHv.js";import"./Text-CYIA95SW.js";import"./DOMUtils-ctqdh0oB.js";import"./ZIndexLayer-BvzXDAda.js";import"./ActivePoints-DvhKq6eb.js";import"./Dot-CC60-gqd.js";import"./RegisterGraphicalItemId-DwjBwfbK.js";import"./GraphicalItemClipPath-BGEnX0Xy.js";import"./SetGraphicalItem-fB0iJna-.js";import"./useAnimationId-v_N6QXXH.js";import"./getRadiusAndStrokeWidthFromDot-Co4GzyJq.js";import"./graphicalItemSelectors-CfGjo9QD.js";import"./index-Db97PsMK.js";import"./ChartSizeDimensions-KFbSwMPV.js";import"./OffsetShower-D-gSoeld.js";import"./PlotAreaShower-BJPLXysn.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
