import{R as t}from"./iframe-DQVzMSYD.js";import{R as p}from"./zIndexSlice-COaPk7HG.js";import{C as m}from"./ComposedChart-C_Pl0aog.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-k1vdxgV5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B_q_xmSS.js";import"./throttle-RO9RTr3r.js";import"./index-BwLkx-9j.js";import"./index-E8O3UkuU.js";import"./RechartsWrapper-C-LDIUUV.js";import"./axisSelectors-D2aZ2Nk7.js";import"./polarAxisSelectors-BSp_MBDw.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CB3Nn2aV.js";import"./index-mH-U0iC2.js";import"./index-BedQbpOM.js";import"./renderedTicksSlice-h-EAnLPI.js";import"./index-eU6OKF0g.js";import"./CartesianChart-DUEad30c.js";import"./chartDataContext-FD6VhEJQ.js";import"./CategoricalChart-Doih-QNH.js";import"./Layer-Bj9bz4HQ.js";import"./activeStyles-BOapb_qi.js";import"./Label-D0zJX0d_.js";import"./Text-CPLLX1IN.js";import"./pageBackground-Bn8h5x5L.js";import"./useId-DXg-zq7I.js";import"./ZIndexLayer-BnIZToy7.js";import"./dataEntryStyles-CJ67-Ft7.js";import"./useAnimationId-BChg9XFS.js";import"./ActivePoints-rQZSXr73.js";import"./Dot-BkzLITlZ.js";import"./types-DP1nwDJM.js";import"./RegisterGraphicalItemId-B0YbUPXE.js";import"./SetGraphicalItem-DFlRgyvC.js";import"./getRadiusAndStrokeWidthFromDot-C00hbLzP.js";import"./ActiveShapeUtils-Cp3IBj9J.js";import"./Curve-Bt3n70L8.js";import"./step-BQC9MPym.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-CkAzTA5N.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
