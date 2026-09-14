import{R as t}from"./iframe-bFSgLdPD.js";import{R as p}from"./zIndexSlice-D5upya8o.js";import{C as m}from"./ComposedChart-rnVwwIMy.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CIrcGCg_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-u-v2gKhP.js";import"./index-Dx35Wad7.js";import"./index-Bahp64_w.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dwo3cyUv.js";import"./isWellBehavedNumber-CxGT-_DT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BY-4gTQl.js";import"./axisSelectors-jpWGPgQR.js";import"./d3-scale-DJKaPyhK.js";import"./index-CNz3Scut.js";import"./index-XM-eSlQm.js";import"./renderedTicksSlice-BcG7Kuye.js";import"./index-DzQCF7Uo.js";import"./CartesianChart-tk8PYi9A.js";import"./chartDataContext-DUbpY4V-.js";import"./CategoricalChart-DBfHTq3P.js";import"./Layer-B9YPmvvS.js";import"./AnimatedItems-C1Ji84_q.js";import"./Label-CpotZ0Ob.js";import"./Text-BFarDq7U.js";import"./DOMUtils-DvIkXWfS.js";import"./useId-CXlgEyVd.js";import"./useBackwardsCompatibleTheme-DabWIItU.js";import"./ZIndexLayer-B1KbNkPu.js";import"./useAnimationId-C-HuNRtZ.js";import"./ActivePoints-t5f1lIKd.js";import"./Dot-DYaRHvIo.js";import"./types-D_jE8zAs.js";import"./RegisterGraphicalItemId-Ch2aaSbQ.js";import"./GraphicalItemClipPath-D0Gpm_sI.js";import"./SetGraphicalItem-BK4LEDF0.js";import"./getRadiusAndStrokeWidthFromDot-BeJ6jSsg.js";import"./ActiveShapeUtils-Tc7vH23C.js";import"./Curve-C65UunW2.js";import"./step-my7iJLmD.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BF3Qfnje.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
