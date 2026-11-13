import{R as t}from"./iframe-CXZlrf2U.js";import{R as p}from"./zIndexSlice-BjX2jCNd.js";import{C as m}from"./ComposedChart-Cd7Rssjf.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DhWYjEGJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DzsDYtS8.js";import"./throttle-CeMcgCrB.js";import"./index-BXews0N3.js";import"./index-BQ37V211.js";import"./RechartsWrapper-DH-5ZOsj.js";import"./axisSelectors-CXSRT8oe.js";import"./polarAxisSelectors-C9d2CYxT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmN7CMF4.js";import"./index-CPNldOVQ.js";import"./index-Dwq43-hP.js";import"./renderedTicksSlice-CNKxG0p9.js";import"./index-B6CEgg-5.js";import"./fillDefinitions-CXni0F_U.js";import"./CartesianChart-BF67_Mbn.js";import"./chartDataContext-Cr6H1IFD.js";import"./CategoricalChart-C5S6zTyC.js";import"./Layer-cEFsn6Cd.js";import"./dataEntryStyles-CAbAzZrW.js";import"./Label-DMZfCKi2.js";import"./Text-ypQmpcnA.js";import"./ZIndexLayer-oMBe6LXA.js";import"./ActivePoints-BSxRgFzT.js";import"./Dot-jYZs8or3.js";import"./types-BoOwr3-k.js";import"./activeStyles-guaYkALv.js";import"./useAnimationId-Bvdrz9cO.js";import"./Symbols-BDMCO_-i.js";import"./symbol-BZ1H3BIy.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-GFUHKXGI.js";import"./getRadiusAndStrokeWidthFromDot-CwxjjF24.js";import"./ActiveShapeUtils-DAjhd_ui.js";import"./Curve-DIPpxfHS.js";import"./step-CMXLmVWU.js";import"./useEffectiveDataKey-ojW0Z0fn.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,et as __namedExportsOrder,tt as default};
