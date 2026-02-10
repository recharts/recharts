import{e as t}from"./iframe-D1NCNqUw.js";import{R as p}from"./arrayEqualityCheck-CQjIdQCx.js";import{C as m}from"./ComposedChart-3m62MgnI.js";import{A as r}from"./Area-ClLkIZOw.js";import{R as s}from"./RechartsHookInspector-ZreWXCAw.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Djsbq22w.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DHOsEYDB.js";import"./hooks-JIh16Fdo.js";import"./axisSelectors-I3OUkjeV.js";import"./zIndexSlice-B6vCGJts.js";import"./CartesianChart-JOI6h5bX.js";import"./chartDataContext-Dg8xMp5I.js";import"./CategoricalChart-Dz9zkg_l.js";import"./Curve-C3pHY6tL.js";import"./types-gvwBC4-3.js";import"./Layer-BCRy6dX1.js";import"./ReactUtils-BB1Bvtm-.js";import"./Label-BNrwDKuI.js";import"./Text-IRTIkJKa.js";import"./DOMUtils-DHPWyRpf.js";import"./ZIndexLayer-DGrkiEgC.js";import"./ActivePoints-B3fzw2dP.js";import"./Dot-Cs7zSf6c.js";import"./RegisterGraphicalItemId-C1aQBUzf.js";import"./GraphicalItemClipPath-BqkTWDYP.js";import"./SetGraphicalItem-D7KZSAt9.js";import"./useAnimationId-CaRLwgfn.js";import"./getRadiusAndStrokeWidthFromDot-CMWXAyTc.js";import"./graphicalItemSelectors-DXCn_-5D.js";import"./index-BmYae47F.js";import"./ChartSizeDimensions-CQGmt7Jm.js";import"./OffsetShower-jlBTnn9Z.js";import"./PlotAreaShower-CLC5srun.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
