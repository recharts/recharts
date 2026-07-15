import{R as t}from"./iframe-ClcrwGuW.js";import{R as p}from"./zIndexSlice-BIGnlmU8.js";import{C as m}from"./ComposedChart-QFp2QUo8.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BeJIzU0S.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CCS8xgZt.js";import"./index-2ZX0-Izg.js";import"./index-CDmIxHtk.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-9pIX-KZX.js";import"./isWellBehavedNumber-DdPJLAK-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BesFJ4ht.js";import"./index-B0NRpt-4.js";import"./index-DNzarm0L.js";import"./renderedTicksSlice-rMv3D_T6.js";import"./axisSelectors-BOLsAE8g.js";import"./d3-scale-CMtXPpnj.js";import"./CartesianChart-DuIwxUsc.js";import"./chartDataContext-STSGah94.js";import"./CategoricalChart-C5ZgEjVK.js";import"./Layer-3ZpdhJcS.js";import"./AnimatedItems-LJ4rT4-Q.js";import"./Label-Dq1bNHIu.js";import"./Text-BoORctzg.js";import"./DOMUtils-Bjh7wfeW.js";import"./ZIndexLayer-ktmCEwYK.js";import"./useAnimationId-Dr2V8ESg.js";import"./ActivePoints-DpbrBFbr.js";import"./Dot-BJH-Cd7h.js";import"./types-BTRTN-qV.js";import"./RegisterGraphicalItemId-D8phwbUX.js";import"./GraphicalItemClipPath-UUgKir8H.js";import"./SetGraphicalItem-CKgMzTJ0.js";import"./getRadiusAndStrokeWidthFromDot-DBwea6ik.js";import"./ActiveShapeUtils-kn3TCk0Z.js";import"./Curve-CrblFnpJ.js";import"./step-Kzlz86Dk.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DJzLZ4Ei.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["FillPattern"];export{e as FillPattern,$ as __namedExportsOrder,Z as default};
