import{e as t}from"./iframe-BgwmBjfB.js";import{R as p}from"./arrayEqualityCheck-B1qnogVb.js";import{C as m}from"./ComposedChart-QYakg_VE.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BPouHa28.js";import{R as l}from"./RechartsHookInspector-OzbFILx_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-qucNpk_A.js";import"./immer-L1QYf-NE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BzFnIirW.js";import"./index-Dw-9JZxy.js";import"./hooks-BBhaKEpc.js";import"./axisSelectors-p-DsPcsN.js";import"./d3-scale-C0r8W7gC.js";import"./zIndexSlice-9mnJo3WO.js";import"./renderedTicksSlice-kbflTFpl.js";import"./CartesianChart-C8IYYlhJ.js";import"./chartDataContext-DR_cij4x.js";import"./CategoricalChart-DrEP-5RI.js";import"./Curve-D2S6CN-2.js";import"./types-CFdz9x_M.js";import"./step-BxFdL0zf.js";import"./Layer-sKAIqvEC.js";import"./ReactUtils-Dla0XjmI.js";import"./Label-BeTMxE7h.js";import"./Text-D7VqnjvF.js";import"./DOMUtils-CUsjemqf.js";import"./ZIndexLayer-DX-nM8qM.js";import"./ActivePoints-DDZpcuUc.js";import"./Dot-n89jEX-l.js";import"./RegisterGraphicalItemId-CtttlxaS.js";import"./GraphicalItemClipPath-bS3Dkt_2.js";import"./SetGraphicalItem-CbRoDUDG.js";import"./useAnimationId-nEXiQ4wd.js";import"./getRadiusAndStrokeWidthFromDot-BAwr8WJt.js";import"./graphicalItemSelectors-Dh2mUMx0.js";import"./index-B_0cWXev.js";import"./ChartSizeDimensions-BOdb3hAs.js";import"./OffsetShower-NinoivPu.js";import"./PlotAreaShower-BvfC-KbU.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
