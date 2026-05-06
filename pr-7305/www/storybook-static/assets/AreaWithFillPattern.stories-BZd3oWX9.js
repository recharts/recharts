import{e as t}from"./iframe-Cj3nIKoJ.js";import{R as p}from"./arrayEqualityCheck-v-UGwrho.js";import{C as m}from"./ComposedChart-Dhhe2-Q1.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CBnOlyVQ.js";import{R as l}from"./RechartsHookInspector-CgEoNM9X.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CYnAxRaf.js";import"./immer-CXMyIV6A.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-nuhidKGe.js";import"./index-CtKFKGEW.js";import"./hooks-CnwONrTD.js";import"./axisSelectors-ih1f_cEF.js";import"./d3-scale--Y87SVPH.js";import"./zIndexSlice-8UDJ1IOD.js";import"./renderedTicksSlice-DXSuE5WB.js";import"./CartesianChart-BbEdEZ48.js";import"./chartDataContext-xuwFndC5.js";import"./CategoricalChart-DuiVKTDX.js";import"./Curve-DYzz3tk1.js";import"./types-DeBW_iJF.js";import"./step-D6uncFX6.js";import"./Layer-CPT9BEuO.js";import"./ReactUtils-QSjTdxzv.js";import"./Label-DlqlafMm.js";import"./Text-CC8Nd2bY.js";import"./DOMUtils-BfkiDds5.js";import"./ZIndexLayer-Vexd0w0T.js";import"./ActivePoints-C9K5tudt.js";import"./Dot-Dqd07VXK.js";import"./RegisterGraphicalItemId-BGPBjniu.js";import"./GraphicalItemClipPath-C9-KmWZG.js";import"./SetGraphicalItem-CBRb4w4Y.js";import"./useAnimationId-CBqAdaPb.js";import"./getRadiusAndStrokeWidthFromDot-ZJxzi4-O.js";import"./graphicalItemSelectors-CCPPW5sM.js";import"./index-BsChK6M4.js";import"./ChartSizeDimensions-DFfD3d93.js";import"./OffsetShower-YtXoM0wF.js";import"./PlotAreaShower-BLMgNHzI.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
