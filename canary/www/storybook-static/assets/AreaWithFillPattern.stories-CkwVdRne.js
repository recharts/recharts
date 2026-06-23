import{R as t}from"./iframe-Dv5VASSf.js";import{R as p}from"./zIndexSlice-CM9TsEF-.js";import{C as m}from"./ComposedChart-CkKDXzJX.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DtGJuerF.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DhSozQAr.js";import"./index-DkjavtyB.js";import"./index-CvMvJg2Y.js";import"./get-Bs09YXrP.js";import"./resolveDefaultProps-Bff0INFN.js";import"./isWellBehavedNumber-CBezu4RU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DX1uLaD6.js";import"./index-Ben5USOE.js";import"./index-B6-1923T.js";import"./renderedTicksSlice-BO9tlAnq.js";import"./axisSelectors-xODl-OZb.js";import"./d3-scale-BXwJ1MAg.js";import"./CartesianChart-DkI46ifx.js";import"./chartDataContext-CF17-miU.js";import"./CategoricalChart-U0rXY0aa.js";import"./Layer-LJvjQizz.js";import"./AnimatedItems-D5YeeLN_.js";import"./Label-sX9J87v-.js";import"./Text-Dd7f7n_i.js";import"./DOMUtils-DlL30Y-Y.js";import"./ZIndexLayer-CuZjWQGk.js";import"./useAnimationId-MWsls-nH.js";import"./ActivePoints-CEMt9Ilr.js";import"./Dot-D2nW7dgA.js";import"./types-DANPZVh2.js";import"./RegisterGraphicalItemId-BgWpYWle.js";import"./GraphicalItemClipPath-CCozhxOu.js";import"./SetGraphicalItem-nBqj_N_H.js";import"./getRadiusAndStrokeWidthFromDot-C0Qzj9c9.js";import"./ActiveShapeUtils-CEehWVTg.js";import"./Curve-Bq9FIxO9.js";import"./step-Bs8kSgCl.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BoKD1Uav.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
