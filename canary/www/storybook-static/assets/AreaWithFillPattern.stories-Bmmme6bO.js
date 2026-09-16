import{R as t}from"./iframe-14XWblZL.js";import{R as p}from"./zIndexSlice-bTipO816.js";import{C as m}from"./ComposedChart-BWmJnIiB.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CNwPLML_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BdJ0G1gd.js";import"./index-BoYHIswN.js";import"./index-CyB2tElA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CeALBfEq.js";import"./isWellBehavedNumber-MwCzfGE9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DCy9svnE.js";import"./axisSelectors-CIwAjqs7.js";import"./d3-scale-Do0_JEbV.js";import"./index-kqeHVlrV.js";import"./index-CT88W_qc.js";import"./renderedTicksSlice-MhpbyeSe.js";import"./index-0t1fABOK.js";import"./CartesianChart-CccXTSFB.js";import"./chartDataContext-TCJzUoES.js";import"./CategoricalChart-BYZHR-yl.js";import"./Layer-DfNVM8Fr.js";import"./AnimatedItems-Dweh6qvQ.js";import"./Label-CvRLouIN.js";import"./Text-DR2swdHV.js";import"./DOMUtils-BDBx2TYe.js";import"./useId-B0oD1V4p.js";import"./useBackwardsCompatibleTheme-CUWKt_Td.js";import"./ZIndexLayer-BpIepiPk.js";import"./useAnimationId-BF3NsOWV.js";import"./ActivePoints-CmDJ2stf.js";import"./Dot-CVbI_zwl.js";import"./types-DUuownuR.js";import"./RegisterGraphicalItemId-Bdmh3jKn.js";import"./GraphicalItemClipPath-7jxlsFlx.js";import"./SetGraphicalItem-DlBXFH4y.js";import"./getRadiusAndStrokeWidthFromDot-CkcS_CHs.js";import"./ActiveShapeUtils-qHfZYwQx.js";import"./Curve-CiXwsAAl.js";import"./step-JufzNNlH.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-QKGsdlin.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
