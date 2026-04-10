import{e as t}from"./iframe-BnepZbIT.js";import{R as p}from"./arrayEqualityCheck-Bzj1NFbL.js";import{C as m}from"./ComposedChart-84ez2dEG.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-vBmWzUx7.js";import{R as l}from"./RechartsHookInspector-C4hunDdt.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CCq0BlxP.js";import"./immer-CMcm_nUx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DvbGdFiP.js";import"./index-BYgM4v9S.js";import"./hooks-CP1-TJLt.js";import"./axisSelectors-DQBdr2e5.js";import"./d3-scale-rflYLnZy.js";import"./zIndexSlice-C8s-XU9n.js";import"./renderedTicksSlice-CSId2xIn.js";import"./CartesianChart-90suVU5n.js";import"./chartDataContext-DCbFY6Je.js";import"./CategoricalChart-Dkb_r9k9.js";import"./Curve-DKZiYoJj.js";import"./types-Df0IzV2Z.js";import"./step-BFaHnM_e.js";import"./Layer-Ca-NGzhu.js";import"./ReactUtils-64sNutUM.js";import"./Label-CvQfGABs.js";import"./Text-CPTRxDfj.js";import"./DOMUtils-DlCDOcC9.js";import"./ZIndexLayer-CaJTwElI.js";import"./ActivePoints-KKzFiWPz.js";import"./Dot-CQLqFjtJ.js";import"./RegisterGraphicalItemId-DInnBgXa.js";import"./GraphicalItemClipPath-BLvis0SJ.js";import"./SetGraphicalItem-Dwsy_PTG.js";import"./useAnimationId-0FE8S7Lc.js";import"./getRadiusAndStrokeWidthFromDot-xaimMp6X.js";import"./graphicalItemSelectors-Ch9PMA32.js";import"./index-D2gJFJUM.js";import"./ChartSizeDimensions-YfbBA8uv.js";import"./OffsetShower-DpIwysro.js";import"./PlotAreaShower-BdzDALPX.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
