import{e as t}from"./iframe-B3JCtExw.js";import{R as p}from"./arrayEqualityCheck-BI5ikbve.js";import{C as m}from"./ComposedChart-BpG742gi.js";import{A as r}from"./Area-CBLSSp91.js";import{R as s}from"./RechartsHookInspector-B6PrNXux.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-HcHTA_b-.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-D9I6VAiu.js";import"./hooks-Cf16Eb3m.js";import"./axisSelectors-Bj5LT4A-.js";import"./zIndexSlice-CzadPF-N.js";import"./CartesianChart-DfwgXX5-.js";import"./chartDataContext-B7pD_95p.js";import"./CategoricalChart-HwleueHs.js";import"./Curve-CrR1QL9p.js";import"./types-CzJtAzjL.js";import"./Layer-m9bU_GMN.js";import"./ReactUtils-YAdCW6ic.js";import"./Label-DjeP5w8o.js";import"./Text-DN2HTHOh.js";import"./DOMUtils-k31lOHZq.js";import"./ZIndexLayer-BuYvVcNP.js";import"./ActivePoints-Cr18JU0C.js";import"./Dot-BO3IuXC8.js";import"./RegisterGraphicalItemId-DL15PSpi.js";import"./GraphicalItemClipPath-DJH2B78L.js";import"./SetGraphicalItem-CgnveGex.js";import"./useAnimationId-YJOXYlAT.js";import"./getRadiusAndStrokeWidthFromDot-CZJ1soND.js";import"./graphicalItemSelectors-1_pZjmlj.js";import"./index-DqnQGlGG.js";import"./ChartSizeDimensions-CMi2DnfJ.js";import"./OffsetShower-DLnhG5IQ.js";import"./PlotAreaShower-CnaAKLan.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
