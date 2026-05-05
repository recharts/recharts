import{e as t}from"./iframe-r2w7kZeJ.js";import{R as p}from"./arrayEqualityCheck-0L0A4nkz.js";import{C as m}from"./ComposedChart-LwEwWDis.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-cXflaJuR.js";import{R as l}from"./RechartsHookInspector-DcB-Xcfd.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-EjMTnW0n.js";import"./immer-CfvCTpDj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-1HJqk7Yh.js";import"./index-W-AgMbp-.js";import"./hooks-B_Z23ri5.js";import"./axisSelectors-CJgn9_ry.js";import"./d3-scale-CTtR7bXz.js";import"./zIndexSlice-DqYPZFIv.js";import"./renderedTicksSlice-B-NBeGNG.js";import"./CartesianChart-BFAKYLf8.js";import"./chartDataContext-BjsyC2cu.js";import"./CategoricalChart-Beyzarg4.js";import"./Curve-E_V9yRSe.js";import"./types-ywkvGoUt.js";import"./step-CB3ZoZU9.js";import"./Layer-CMwqxUY2.js";import"./ReactUtils-BYDoU0L1.js";import"./Label-m6h3W7WS.js";import"./Text-DLc1wT1a.js";import"./DOMUtils-KJq6QJZu.js";import"./ZIndexLayer-CC246p5z.js";import"./ActivePoints-Ddlw9Tet.js";import"./Dot-JZESmYel.js";import"./RegisterGraphicalItemId-Bf-Aw6v0.js";import"./GraphicalItemClipPath-uc4YpIA_.js";import"./SetGraphicalItem-C7uPVjvE.js";import"./useAnimationId-BkxSeEj0.js";import"./getRadiusAndStrokeWidthFromDot-B1ykn1OV.js";import"./graphicalItemSelectors-Ydq13X9y.js";import"./index-Dof6etCE.js";import"./ChartSizeDimensions-lBZtOA5X.js";import"./OffsetShower-vABa0YEq.js";import"./PlotAreaShower-BZ07GFyt.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
