import{R as t}from"./iframe-Ca1UrYHb.js";import{R as p}from"./zIndexSlice-DkJuOKqH.js";import{C as m}from"./ComposedChart-BQRHe03d.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-7ea9QB8L.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C7Zn3GIw.js";import"./throttle-CQ25M_Sr.js";import"./index-DyyWsaDx.js";import"./index-BL3iJc3a.js";import"./RechartsWrapper-DpgD45ps.js";import"./axisSelectors-Dxz5Fo81.js";import"./polarAxisSelectors-BJjdmelv.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BSpvxsSq.js";import"./index-CGbgMVTZ.js";import"./index-CeJ-_gAW.js";import"./renderedTicksSlice-C6Llf2gZ.js";import"./index-CXh6mJLx.js";import"./fillDefinitions-CGDilicc.js";import"./CartesianChart-Ahhse01G.js";import"./chartDataContext-Nvu6nj5u.js";import"./CategoricalChart-Cbl_4Ofw.js";import"./Layer-YpjF2SE4.js";import"./dataEntryStyles-HIGj4PG3.js";import"./Label-Df_VmgSa.js";import"./Text-CG61ars6.js";import"./ZIndexLayer-84bYvzQv.js";import"./ActivePoints-DFCTzNYL.js";import"./Dot-7od_5Z4B.js";import"./types-DxtdvItD.js";import"./activeStyles-gkqlHaiP.js";import"./useAnimationId-Dpl0bF--.js";import"./Symbols-DCcF1Btd.js";import"./symbol-C0Dz9CIF.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BYm76vy-.js";import"./getRadiusAndStrokeWidthFromDot-B4kLZYpF.js";import"./ActiveShapeUtils-83_vs6lS.js";import"./Curve-_7igEkPt.js";import"./step-BwzpgB8P.js";import"./useEffectiveDataKey-mZIPn9UL.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
