import{R as t}from"./iframe-Bi3q5ica.js";import{R as p}from"./zIndexSlice-3OSmdeIU.js";import{C as m}from"./ComposedChart-BJ-4k_4i.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DNdf0Edg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CZI3Ns_R.js";import"./index-B0qzmCsN.js";import"./index-BFXu3aHt.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DHzWDEtS.js";import"./isWellBehavedNumber-DYrnpjB-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BIVD6JFp.js";import"./axisSelectors-BxvzYEcA.js";import"./d3-scale-Dy9_TWZx.js";import"./index-ngMl_c_9.js";import"./index-BUn-OEAP.js";import"./renderedTicksSlice-DRFwN4j3.js";import"./index-BVwc-Jau.js";import"./CartesianChart-Dl2J0BS7.js";import"./chartDataContext-D-hMyVvi.js";import"./CategoricalChart-hTIoEyr2.js";import"./Layer-CtQIi_dM.js";import"./AnimatedItems-C5QOwiw_.js";import"./Label-BY0KH6BI.js";import"./Text-Dc41Ok3C.js";import"./DOMUtils-Daz026gj.js";import"./useId-WQ4DmC28.js";import"./useBackwardsCompatibleTheme-CbD5lCDD.js";import"./ZIndexLayer-D_YH5dyV.js";import"./useAnimationId-Wfo4M9rJ.js";import"./ActivePoints-DNbrAlaG.js";import"./Dot-8HK_808i.js";import"./types-3e9Y1DlN.js";import"./RegisterGraphicalItemId-DY8suQGI.js";import"./GraphicalItemClipPath-DaMNa-IP.js";import"./SetGraphicalItem-ChWBfBoT.js";import"./getRadiusAndStrokeWidthFromDot-Co8c106b.js";import"./ActiveShapeUtils-CMwbxzD5.js";import"./Curve-C2iAxlmR.js";import"./step-BPB7nuaq.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BkNHKZMP.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
