import{e as t}from"./iframe-BI_pAXBB.js";import{R as p}from"./arrayEqualityCheck-BKrbAl8r.js";import{C as m}from"./ComposedChart-BqcTxN08.js";import{A as r}from"./Area-B4JpSkpM.js";import{R as s}from"./RechartsHookInspector-BVifdKxh.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BfThY2qm.js";import"./immer-DS7uv6B4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DROe6fuT.js";import"./index-BzE7Pa11.js";import"./hooks-B_MXrk3m.js";import"./axisSelectors-CXWTfjJ6.js";import"./d3-scale-CUPcwIhM.js";import"./zIndexSlice-Blq0MPxS.js";import"./renderedTicksSlice-CafZfga-.js";import"./CartesianChart-KFRCLVOt.js";import"./chartDataContext-VgXSPlUI.js";import"./CategoricalChart-NTGK7QHa.js";import"./Curve-C08bjkMC.js";import"./types-CyZr-7-n.js";import"./step-aPk3qf3o.js";import"./Layer-BbCwBMrP.js";import"./ReactUtils-C8LT_WKY.js";import"./Label-BRAbHYpb.js";import"./Text-DDIiPn9R.js";import"./DOMUtils-Clx04LAZ.js";import"./ZIndexLayer-BIA7rzZS.js";import"./ActivePoints-CKakRG7P.js";import"./Dot-IX9Hy7RV.js";import"./RegisterGraphicalItemId-DUukUl_8.js";import"./GraphicalItemClipPath-Bfi93Jqz.js";import"./SetGraphicalItem-d6KR3BLJ.js";import"./useAnimationId-CIydZ5LQ.js";import"./getRadiusAndStrokeWidthFromDot-RglsRcI2.js";import"./graphicalItemSelectors-CaNHPxp5.js";import"./index-D4zEKe7v.js";import"./ChartSizeDimensions-B1IFVDHL.js";import"./OffsetShower-PutuTgHL.js";import"./PlotAreaShower-CbV6UHYA.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
