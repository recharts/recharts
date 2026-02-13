import{e as t}from"./iframe-8rINPBCK.js";import{R as p}from"./arrayEqualityCheck-C3wBHH11.js";import{C as m}from"./ComposedChart-Uze9vmcd.js";import{A as r}from"./Area-BQaqNlPw.js";import{R as s}from"./RechartsHookInspector-DhGNdH08.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-wjmL_qr9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C_hkcN4D.js";import"./hooks-Bk__qHm-.js";import"./axisSelectors-CvWz5XTo.js";import"./zIndexSlice-DaWAVY1S.js";import"./CartesianChart-BO1mb6Fl.js";import"./chartDataContext-Djz4dVa4.js";import"./CategoricalChart-_BatnBQS.js";import"./Curve-D7sQ6QWi.js";import"./types-BtRlzhwr.js";import"./Layer-rS2qKox4.js";import"./ReactUtils-BygGLMXM.js";import"./Label-CPR5zbup.js";import"./Text-aD2aJQms.js";import"./DOMUtils-CWnqia8Q.js";import"./ZIndexLayer-BIlvRP3G.js";import"./ActivePoints-BLBDxNan.js";import"./Dot-DDl1biMb.js";import"./RegisterGraphicalItemId-BjvKjhdQ.js";import"./GraphicalItemClipPath-BLYpZTZk.js";import"./SetGraphicalItem-DdHorGvs.js";import"./useAnimationId-D141hJYN.js";import"./getRadiusAndStrokeWidthFromDot-K8DspZJi.js";import"./graphicalItemSelectors-eI3_Fu9E.js";import"./index--Y6JWCN_.js";import"./ChartSizeDimensions-CAkoMsi5.js";import"./OffsetShower-CYXSrIBv.js";import"./PlotAreaShower-PTRY2LvG.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Q=["FillPattern"];export{e as FillPattern,Q as __namedExportsOrder,N as default};
