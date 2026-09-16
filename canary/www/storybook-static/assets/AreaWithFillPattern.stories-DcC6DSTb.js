import{R as t}from"./iframe-DpsH3FWg.js";import{R as p}from"./zIndexSlice-DpXR3r86.js";import{C as m}from"./ComposedChart-CPIOfZdo.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BGMG7oVi.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-pd_IuHQK.js";import"./index-nXowbRrq.js";import"./index-DYUXUABx.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B653NMBN.js";import"./isWellBehavedNumber-CtQQO4KW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-WUMeUOBJ.js";import"./axisSelectors-Cnsws1ta.js";import"./d3-scale-Cs9sdONk.js";import"./index-CIajmslP.js";import"./index-DxSZbnRs.js";import"./renderedTicksSlice-DrH2a5-v.js";import"./index-CVZddw2l.js";import"./CartesianChart-C8K3fZMD.js";import"./chartDataContext-_uRDQIfr.js";import"./CategoricalChart-DsF0HvmF.js";import"./Layer-Btr6yg86.js";import"./AnimatedItems-BAz_Z0dD.js";import"./Label-3DC01MfC.js";import"./Text-SIhZd4Wm.js";import"./DOMUtils-BqoTnLQ5.js";import"./useId-T5MCLwe8.js";import"./useBackwardsCompatibleTheme-Buw_TzFQ.js";import"./ZIndexLayer-DviGCp3_.js";import"./useAnimationId-CkVnF8is.js";import"./ActivePoints-8WobBp4l.js";import"./Dot-ykdJ8Wuo.js";import"./types-FBSj3Ggh.js";import"./RegisterGraphicalItemId-Byr_SbEj.js";import"./GraphicalItemClipPath--FUz8cke.js";import"./SetGraphicalItem-eZDMBVc_.js";import"./getRadiusAndStrokeWidthFromDot-BIoTJvPK.js";import"./ActiveShapeUtils-DHwgxjaA.js";import"./Curve-CkFcG6My.js";import"./step-DUO82dEI.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DH6n4cBQ.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
