import{e as t}from"./iframe-DKyU_iXE.js";import{R as p}from"./arrayEqualityCheck-CBuQt-LQ.js";import{C as m}from"./ComposedChart-W1r0Y87Q.js";import{A as r}from"./Area-Dz4pPxMS.js";import{R as s}from"./RechartsHookInspector-Dv9I4YHQ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-cUmGB5BP.js";import"./immer-CaNK2Wnd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1k7PNNo.js";import"./index-Bc9uivsf.js";import"./hooks-CcwQQS4K.js";import"./axisSelectors-CdP5XGoN.js";import"./d3-scale-frJU2Btm.js";import"./zIndexSlice-w00ysM4m.js";import"./renderedTicksSlice-CWpXf5qL.js";import"./CartesianChart-DR1aPl1R.js";import"./chartDataContext-B1YWbHj7.js";import"./CategoricalChart-BzovAk5i.js";import"./Curve-CExLt2Iv.js";import"./types-DZPKaEAC.js";import"./step-DMWIYdYk.js";import"./Layer--fTJnsnP.js";import"./ReactUtils-CiNFkB-2.js";import"./Label-kMa1V762.js";import"./Text-D31e4mTY.js";import"./DOMUtils-BSHfgs8I.js";import"./ZIndexLayer-6WeTgCgn.js";import"./ActivePoints-sa10AzyA.js";import"./Dot-CKbtf96r.js";import"./RegisterGraphicalItemId-BtuRgDxJ.js";import"./GraphicalItemClipPath-f-LT7H0l.js";import"./SetGraphicalItem-geCsQwmc.js";import"./useAnimationId-De9-pIXx.js";import"./getRadiusAndStrokeWidthFromDot-DnCZvFUa.js";import"./graphicalItemSelectors-Dq1ctxKl.js";import"./index-CAiBL-v8.js";import"./ChartSizeDimensions-BOJu1RXr.js";import"./OffsetShower-CJI2DXcR.js";import"./PlotAreaShower-Bq5ePm5q.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
