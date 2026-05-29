import{c as t}from"./iframe-ayfxMcMc.js";import{g as p}from"./zIndexSlice-CBS9H6Fq.js";import{C as m}from"./ComposedChart-DzAczIPs.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-G3vN3bbV.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CvfGnc1k.js";import"./index-ChfXHuaM.js";import"./index-uB2AF80P.js";import"./get-DE-GTO8K.js";import"./resolveDefaultProps-DUvm9h9z.js";import"./isWellBehavedNumber-0ySD8Cyp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dt3ctKzU.js";import"./index-CnDnhuhh.js";import"./index-qYP6YSZE.js";import"./renderedTicksSlice-kyxhp8XW.js";import"./axisSelectors-DiADRWeJ.js";import"./d3-scale-DvksmR-t.js";import"./CartesianChart-asOappaa.js";import"./chartDataContext-ncJihXoM.js";import"./CategoricalChart-YvgC-s3M.js";import"./Curve-CTFqdp98.js";import"./types-DKuO6oNB.js";import"./step-C4Edu8du.js";import"./path-DyVhHtw_.js";import"./Layer-DRx_WgZU.js";import"./ReactUtils-D4TRRjvu.js";import"./Label-ii_PgfeB.js";import"./Text-D472vA6a.js";import"./DOMUtils-DhrlxvLL.js";import"./ZIndexLayer-ChQFeTnT.js";import"./ActivePoints-BHkOA6iP.js";import"./Dot-DTml05Ju.js";import"./RegisterGraphicalItemId-B5JbPzoa.js";import"./GraphicalItemClipPath-D8mHMzmD.js";import"./SetGraphicalItem-B-R5cRe6.js";import"./useAnimationId-CPZ6UJKm.js";import"./getRadiusAndStrokeWidthFromDot-CyMjRM5q.js";import"./graphicalItemSelectors-3LsDXjJv.js";const Y={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const Z=["FillPattern"];export{e as FillPattern,Z as __namedExportsOrder,Y as default};
