import{R as t}from"./iframe-Dz7fOwcI.js";import{R as p}from"./zIndexSlice-DlvYonxh.js";import{C as m}from"./ComposedChart-Dj2W9R-k.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-D5M4YZ3q.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-P3hcp8f5.js";import"./index-ClEhXPgh.js";import"./index-CItZCrSt.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-iMaSxvai.js";import"./isWellBehavedNumber-BNED1DFM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGGSKz0I.js";import"./index-wFbpiefS.js";import"./index-DeBQrWVz.js";import"./renderedTicksSlice-DgHHusta.js";import"./axisSelectors-BrQnrxrh.js";import"./d3-scale-DvZHjVYW.js";import"./CartesianChart-B9Hxpjtk.js";import"./chartDataContext-_X11uzVv.js";import"./CategoricalChart-DAJpY1kv.js";import"./Layer-Cbl9ckF3.js";import"./AnimatedItems-DmM_DoTI.js";import"./Label-DdFPLPtR.js";import"./Text-Bb3XY4nD.js";import"./DOMUtils-ChsYv9qG.js";import"./ZIndexLayer-uLTirNmh.js";import"./useAnimationId-DXftpzbd.js";import"./ActivePoints-DujeTKJ8.js";import"./Dot-DKtI2fI_.js";import"./types-BbykzSU1.js";import"./RegisterGraphicalItemId-nSw_C2Ok.js";import"./GraphicalItemClipPath-BgvZ3vl9.js";import"./SetGraphicalItem-Dj4x9kmg.js";import"./getRadiusAndStrokeWidthFromDot-uAG-X1Nw.js";import"./ActiveShapeUtils-CpKGxq0o.js";import"./Curve-DkNdhu-H.js";import"./step-Dr4bnBR_.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-zHfIRokA.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
