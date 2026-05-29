import{e as t}from"./iframe-Dq2D9WMR.js";import{g as p}from"./zIndexSlice-CMIgpwRl.js";import{C as m}from"./ComposedChart-Ctt5r4_8.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-XAWM8X8a.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DBox_88Y.js";import"./get-Dg89qnmN.js";import"./resolveDefaultProps-CL0P-2Ye.js";import"./isWellBehavedNumber-CElaIhJa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Coa45hTw.js";import"./index-Vw7ge0ya.js";import"./index-toY2TPxE.js";import"./index-ComImMI9.js";import"./renderedTicksSlice-CfboEt5t.js";import"./axisSelectors-sK2-dJnb.js";import"./d3-scale-CJAlquTP.js";import"./CartesianChart-DTsAEBhV.js";import"./chartDataContext-DSYMXmV-.js";import"./CategoricalChart-DqFO3fer.js";import"./Curve-B4KKsiQU.js";import"./types-C93vTFKm.js";import"./step-uPZi_6ZX.js";import"./path-DyVhHtw_.js";import"./Layer-CNg3jf3H.js";import"./ReactUtils-CnckncOE.js";import"./Label-DafpBHua.js";import"./Text-DsY1ckdl.js";import"./DOMUtils-DuGpXxvH.js";import"./ZIndexLayer-BazpBvjE.js";import"./ActivePoints-Cd1Z09h4.js";import"./Dot-CjWxaC-Q.js";import"./RegisterGraphicalItemId-27foWtUc.js";import"./GraphicalItemClipPath-DwKkk3VM.js";import"./SetGraphicalItem-D7EoJphE.js";import"./useAnimationId-uSyAtuoQ.js";import"./getRadiusAndStrokeWidthFromDot-D25HmC7L.js";import"./graphicalItemSelectors-Di7DaTSh.js";const X={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Y=["FillPattern"];export{e as FillPattern,Y as __namedExportsOrder,X as default};
