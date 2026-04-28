import{e as t}from"./iframe-CGwC73OO.js";import{R as p}from"./arrayEqualityCheck-BlziNjUk.js";import{C as m}from"./ComposedChart-8-UPKNFd.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area--a5xzXLh.js";import{R as l}from"./RechartsHookInspector-BOLymao4.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2h9cia6B.js";import"./immer-CURee86N.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMSzhStw.js";import"./index-CByG6IuO.js";import"./hooks-C-sNjqxb.js";import"./axisSelectors-ClgkNKcu.js";import"./d3-scale-BH0-xThR.js";import"./zIndexSlice-Pvig-liy.js";import"./renderedTicksSlice-DBon5NFb.js";import"./CartesianChart-ChaOc86m.js";import"./chartDataContext-CmWRMrC9.js";import"./CategoricalChart-DtqXk2xy.js";import"./Curve-C4VRfueh.js";import"./types-C_6Vkwi_.js";import"./step-zq2neHnY.js";import"./Layer-BBc4ESPC.js";import"./ReactUtils-CYVZdurj.js";import"./Label-CE6Oihdn.js";import"./Text-DyJrB0G7.js";import"./DOMUtils-C1ZRgIwE.js";import"./ZIndexLayer-CAqiJgLq.js";import"./ActivePoints-BTOrd9Zd.js";import"./Dot-By1SCY7k.js";import"./RegisterGraphicalItemId-yX1pqnM-.js";import"./GraphicalItemClipPath-CuaCHgKU.js";import"./SetGraphicalItem-CRoX03qV.js";import"./useAnimationId-B3H-bs7p.js";import"./getRadiusAndStrokeWidthFromDot--GB1IBDa.js";import"./graphicalItemSelectors-Cf4Yzjiy.js";import"./index-CF2MM-Q8.js";import"./ChartSizeDimensions-BPnl0leJ.js";import"./OffsetShower-BHX9YNtn.js";import"./PlotAreaShower-CFsnprFU.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
