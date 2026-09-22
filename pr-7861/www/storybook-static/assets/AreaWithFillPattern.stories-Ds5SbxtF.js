import{R as t}from"./iframe-Bnv6kU7L.js";import{R as p}from"./zIndexSlice-DX-eN-rE.js";import{C as m}from"./ComposedChart-B1DqhSVN.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-a6cRTbdi.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C8n004OX.js";import"./index-6B8fwti2.js";import"./index-B1qZkGH5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C4JEpLWp.js";import"./isWellBehavedNumber-p1Jk9e7e.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BdebKPLC.js";import"./axisSelectors-W-alhPkw.js";import"./d3-scale-BHEdKRtF.js";import"./index-DLmKm2EF.js";import"./index-C7lLa1F-.js";import"./renderedTicksSlice-B5DhdENT.js";import"./index-DoLpWonQ.js";import"./CartesianChart-4rkSr6qB.js";import"./chartDataContext-DQDeMryS.js";import"./CategoricalChart-a21GUZij.js";import"./Layer-LCeVZLuX.js";import"./AnimatedItems-BMX-ziY5.js";import"./Label-IhJ6Pxyk.js";import"./Text--hmlT8ZH.js";import"./DOMUtils-CsnJkvN_.js";import"./useId-6CZAolK0.js";import"./useBackwardsCompatibleTheme-C_K8id13.js";import"./ZIndexLayer-BRXf-lni.js";import"./useAnimationId-DYSRVMST.js";import"./ActivePoints-DPnTwfCa.js";import"./Dot-CcU1d5Kn.js";import"./types-CI78TRyx.js";import"./RegisterGraphicalItemId-DzNK_j43.js";import"./GraphicalItemClipPath-H0CINiNQ.js";import"./SetGraphicalItem-Gy1IhQNd.js";import"./getRadiusAndStrokeWidthFromDot-CAEUp3rE.js";import"./ActiveShapeUtils-BfWUUsmh.js";import"./Curve-CLFCklxA.js";import"./step-DsteWZ2Z.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CQh8XILo.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
