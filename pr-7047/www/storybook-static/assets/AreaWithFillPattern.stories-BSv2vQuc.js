import{e as t}from"./iframe-NG7xn8us.js";import{R as p}from"./arrayEqualityCheck-DBfkDrHK.js";import{C as m}from"./ComposedChart-D59nZdGq.js";import{A as r}from"./Area-DiKsz2FC.js";import{R as s}from"./RechartsHookInspector-DUqk6vIV.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-wED6QReO.js";import"./immer-B8QNuQuL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BZXpt1WI.js";import"./index-DNpbdYzC.js";import"./hooks-BHzjNaS-.js";import"./axisSelectors-BO092XPC.js";import"./d3-scale-C8XpcDzx.js";import"./zIndexSlice-a1m4fSW4.js";import"./renderedTicksSlice-BnMzv5_X.js";import"./CartesianChart-BQHwW8oQ.js";import"./chartDataContext-CXUKTGqi.js";import"./CategoricalChart-CYSdgUQn.js";import"./Curve-CO2TUzXD.js";import"./types-DHhKLS2Y.js";import"./step-CZRzZlp2.js";import"./Layer-DoTh6aNf.js";import"./ReactUtils-CiPsQej4.js";import"./Label-mpYwp3tS.js";import"./Text-C1Ij1VWt.js";import"./DOMUtils-BH2xyswp.js";import"./ZIndexLayer-BXUSr-Ha.js";import"./ActivePoints-B4qq1bzg.js";import"./Dot-CLcJP3NH.js";import"./RegisterGraphicalItemId-wCSwaH-X.js";import"./GraphicalItemClipPath-CXScC-pK.js";import"./SetGraphicalItem-C8yfvTXJ.js";import"./useAnimationId-DOHX5rOk.js";import"./getRadiusAndStrokeWidthFromDot-CbR_-ksc.js";import"./graphicalItemSelectors-CX62Lrvl.js";import"./index-D29y0xCx.js";import"./ChartSizeDimensions-DBi-EbUV.js";import"./OffsetShower-BpCRw-nU.js";import"./PlotAreaShower-sY7tlQH0.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
