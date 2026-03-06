import{e as t}from"./iframe-B82KKzsZ.js";import{R as p}from"./arrayEqualityCheck-Cg0idRhp.js";import{C as m}from"./ComposedChart-D9FBDa9m.js";import{A as r}from"./Area-C2q9Th6e.js";import{R as s}from"./RechartsHookInspector-Dn_N91Ha.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cz2WpobP.js";import"./immer-Cjr4YINx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dy52E8zA.js";import"./index-BPhr2cwx.js";import"./hooks-C_Bk0iWL.js";import"./axisSelectors-BlY0RvlZ.js";import"./d3-scale-gdEhlQZC.js";import"./zIndexSlice-DoZOUHwV.js";import"./renderedTicksSlice-D6QyWwDV.js";import"./CartesianChart-DjM6_Ohn.js";import"./chartDataContext-BVeH-QEp.js";import"./CategoricalChart-BF433tP-.js";import"./Curve-BsV_hxX6.js";import"./types-DaFthwO7.js";import"./step-D_vNME6r.js";import"./Layer-ug_gWv5Y.js";import"./ReactUtils-CyWe8bPC.js";import"./Label-CoPQcGVn.js";import"./Text-C1AVdMVq.js";import"./DOMUtils-DQZy4jxA.js";import"./ZIndexLayer-CCx46f1u.js";import"./ActivePoints-Bp-xuhXe.js";import"./Dot-BzE5qBfr.js";import"./RegisterGraphicalItemId-tJqvGPQR.js";import"./GraphicalItemClipPath-Chx7G7zK.js";import"./SetGraphicalItem-BNPEWY7y.js";import"./useAnimationId-BjMwuZHe.js";import"./getRadiusAndStrokeWidthFromDot-VGAN5l6V.js";import"./graphicalItemSelectors-DUfLVgT0.js";import"./index-BDwCI-pI.js";import"./ChartSizeDimensions-DGlceztD.js";import"./OffsetShower-BguOTWfQ.js";import"./PlotAreaShower-CC5s-Y7u.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
