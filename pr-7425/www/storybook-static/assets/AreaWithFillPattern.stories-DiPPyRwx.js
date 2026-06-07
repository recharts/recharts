import{R as t}from"./iframe-DsrD6wpT.js";import{R as p}from"./zIndexSlice-DkgP7dBP.js";import{C as m}from"./ComposedChart-qq8cl2VI.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Dzf6NQOE.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BAPcb6RO.js";import"./index-Z0dAwhZH.js";import"./index-CKvlhhLQ.js";import"./get-C10pg2Pt.js";import"./resolveDefaultProps-DQfgYWkZ.js";import"./isWellBehavedNumber-CgPFccj7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DIY-yJrq.js";import"./index-D23QGT2y.js";import"./index-DLTbKQJZ.js";import"./renderedTicksSlice-VRajnlWn.js";import"./axisSelectors-CJUUuARo.js";import"./d3-scale-CqXFZCr9.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BgP_pNrE.js";import"./chartDataContext-CD2wssdB.js";import"./CategoricalChart-BwGaQnIJ.js";import"./Layer-Cn-q1z5M.js";import"./AnimatedItems-8lESwhOr.js";import"./Label-TNDcrVM2.js";import"./Text-BEnCKmcO.js";import"./DOMUtils-Cn9VGpSS.js";import"./ZIndexLayer-D3qjSsRd.js";import"./useAnimationId-BDJzCpgi.js";import"./ActivePoints-Bk2Pfh1p.js";import"./Dot-Cd38Ah6o.js";import"./types-B5JJF1dm.js";import"./RegisterGraphicalItemId-Ch7WvGaf.js";import"./GraphicalItemClipPath-CeOkm8u8.js";import"./SetGraphicalItem-DZD_Etrn.js";import"./getRadiusAndStrokeWidthFromDot-BIBWddww.js";import"./ActiveShapeUtils-BxUohkw2.js";import"./Curve-CpP-gaVa.js";import"./step-7WGc90nH.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CBTkQduC.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const tt=["FillPattern"];export{e as FillPattern,tt as __namedExportsOrder,$ as default};
