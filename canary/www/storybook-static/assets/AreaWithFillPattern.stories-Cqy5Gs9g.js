import{R as t}from"./iframe-qT01O9Sv.js";import{R as p}from"./zIndexSlice-CQsHAgGp.js";import{C as m}from"./ComposedChart-Cdt083mL.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-LMI0P5Qc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D76jGjFc.js";import"./index-CMK8nXr3.js";import"./index-CZve0KBd.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CLCbJ4OP.js";import"./isWellBehavedNumber-D5wQM5xZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-5WR8ig5Z.js";import"./axisSelectors-Ciilyz6p.js";import"./d3-scale-DNrxalK8.js";import"./index-Be2AoQLY.js";import"./index-DrjB0Jj4.js";import"./renderedTicksSlice-CJBkl3kj.js";import"./index-ej6C5682.js";import"./CartesianChart-WF9by-pK.js";import"./chartDataContext-Bb09oFLY.js";import"./CategoricalChart-DQ-LhVLQ.js";import"./Layer-CgXLDOPB.js";import"./AnimatedItems-ByVfA06q.js";import"./Label-dJvVWn2Q.js";import"./Text-DKzR6dpy.js";import"./DOMUtils-fvdo4GSp.js";import"./useId-CyAqziAf.js";import"./useBackwardsCompatibleTheme-BN2NPKue.js";import"./ZIndexLayer-D8adGQSs.js";import"./useAnimationId-CmZNawFJ.js";import"./ActivePoints-6Ngyl1w3.js";import"./Dot-5BUC2hEg.js";import"./types-B4toHZjd.js";import"./RegisterGraphicalItemId-CjZ2fJX7.js";import"./GraphicalItemClipPath-FAcvdPD9.js";import"./SetGraphicalItem-BfkU9VdL.js";import"./getRadiusAndStrokeWidthFromDot-avuw4vHy.js";import"./ActiveShapeUtils-BBHh2Hrz.js";import"./Curve-C2aosV7t.js";import"./step-C8r8uJ0U.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CvGdzJl8.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
