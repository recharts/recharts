import{R as t}from"./iframe-Bu5r_UoW.js";import{R as p}from"./zIndexSlice-BoZi0EKL.js";import{C as m}from"./ComposedChart-CGLPX3yw.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-L-HhY4Bp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BDfy-Y9N.js";import"./throttle-BpoLTe0M.js";import"./index-CP6mH--B.js";import"./index-DnT_Ya4A.js";import"./RechartsWrapper-BqfNjaYX.js";import"./axisSelectors-Bhk2XSO9.js";import"./polarAxisSelectors-n0CqqZCi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DImarRMe.js";import"./index-pIfafh94.js";import"./index-C9YbC-S9.js";import"./renderedTicksSlice-CEkp7Ia_.js";import"./index-D8NerNAW.js";import"./fillDefinitions-BYA-kAp9.js";import"./CartesianChart-CmgmeyYa.js";import"./chartDataContext-epTHr0-d.js";import"./CategoricalChart-DkHDaSrl.js";import"./Layer-DFVqeIzd.js";import"./dataEntryStyles-C66iRC8T.js";import"./Label-0RpFXi-A.js";import"./Text-Whpl_RQm.js";import"./ZIndexLayer-BpE6rRDX.js";import"./ActivePoints-elCSEGa9.js";import"./Dot-Bi1b_c85.js";import"./types-Bn2H5HlC.js";import"./activeStyles-8B2_TUAk.js";import"./useAnimationId-BnIWNy46.js";import"./Symbols-Cn0dRiyA.js";import"./symbol-DRsT_y42.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CpMZVpWB.js";import"./getRadiusAndStrokeWidthFromDot-95VsLoAR.js";import"./ActiveShapeUtils-BGxbUkvX.js";import"./Curve-CsvMXB6L.js";import"./step-D2ytnSwm.js";import"./useEffectiveDataKey-BxhAq3wv.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
