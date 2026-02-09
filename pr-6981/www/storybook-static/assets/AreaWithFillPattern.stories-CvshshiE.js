import{e as t}from"./iframe-_ezCe_To.js";import{R as p}from"./arrayEqualityCheck-OWAMtNJc.js";import{C as m}from"./ComposedChart-BZQ3F3Nq.js";import{A as r}from"./Area-DznWK7XI.js";import{R as s}from"./RechartsHookInspector-D5tzqIDa.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-R_saYEpi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3l68k8X.js";import"./hooks-DGCPXX4G.js";import"./axisSelectors-LsrbDDJC.js";import"./zIndexSlice-Dca2j4f-.js";import"./CartesianChart-C47j_-ZF.js";import"./chartDataContext-Bh5VlY_Q.js";import"./CategoricalChart-BLLc755m.js";import"./Curve-C2x4bgof.js";import"./types-DgqTh4_l.js";import"./Layer-BtA8wuUB.js";import"./ReactUtils-B0BDd-2i.js";import"./Label-CHFqoGJt.js";import"./Text-CYvn3qP_.js";import"./DOMUtils-CBHTypWU.js";import"./ZIndexLayer-CWThG05g.js";import"./ActivePoints-CJI24LGC.js";import"./Dot-C4tiY8Du.js";import"./RegisterGraphicalItemId-C1YzkRSv.js";import"./GraphicalItemClipPath-BQEIoeEz.js";import"./SetGraphicalItem-DNE92K4u.js";import"./useAnimationId-BzKwp2Yk.js";import"./getRadiusAndStrokeWidthFromDot-D-FWk1PK.js";import"./graphicalItemSelectors-DUHvhoPV.js";import"./index-DsSUOPyu.js";import"./ChartSizeDimensions-BekARe9N.js";import"./OffsetShower-DpjGgrQ9.js";import"./PlotAreaShower-OcEMvBwg.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
