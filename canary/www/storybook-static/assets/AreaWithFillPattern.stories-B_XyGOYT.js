import{R as t}from"./iframe-Cuc-3wmn.js";import{R as p}from"./zIndexSlice-BsVN3Oy1.js";import{C as m}from"./ComposedChart-CD6T7lY1.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Cw7Ikwl_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BHv1OzUd.js";import"./index-Dr1iXWUa.js";import"./index-DGxMJQlb.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DeE8fKkX.js";import"./isWellBehavedNumber-BQdzkgjM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-3cu-hXPY.js";import"./axisSelectors-DM_2WB9O.js";import"./d3-scale-BS_R9TF_.js";import"./index-Dz3k4zem.js";import"./index-Do_NM7xQ.js";import"./renderedTicksSlice-BXySsU0c.js";import"./index-CYT75Ewh.js";import"./CartesianChart-C6H_Qcxl.js";import"./chartDataContext-B7_SZBh7.js";import"./CategoricalChart-DrO7g7YL.js";import"./Layer-D8rIily6.js";import"./activeStyles-CdxeGYpW.js";import"./Label-CIwD5k1e.js";import"./Text-BXtcMZ2N.js";import"./pageBackground-DrpZqn_y.js";import"./useId-CpeFYMDs.js";import"./useBackwardsCompatibleTheme-Cg1iNggS.js";import"./ZIndexLayer-LfSwjZQ4.js";import"./useAnimationId-BpVC87C1.js";import"./dataEntryStyles-BJ1Gca6t.js";import"./ActivePoints-CVhx80tt.js";import"./Dot-DyPF6Lbp.js";import"./types-GMU9tJsf.js";import"./GraphicalItemClipPath-SJq0vZIV.js";import"./SetGraphicalItem-CaNq7kdy.js";import"./getRadiusAndStrokeWidthFromDot-iwqqPDMx.js";import"./ActiveShapeUtils-CkArj8ub.js";import"./Curve-DkDc-div.js";import"./step-DLRB17DG.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-rVy1qnot.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,rt as __namedExportsOrder,et as default};
