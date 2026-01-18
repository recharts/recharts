import{e as t}from"./iframe-DZy4Dead.js";import{R as p}from"./arrayEqualityCheck-ApBChTfQ.js";import{C as m}from"./ComposedChart-B1Kc7L3U.js";import{A as r}from"./Area-D5XNwEb-.js";import{R as s}from"./RechartsHookInspector-BQ2LFFE8.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bf5GaSqV.js";import"./PolarUtils-Dc-YJkTz.js";import"./RechartsWrapper-nPRv-TTN.js";import"./hooks-ajKNzoip.js";import"./axisSelectors-CNnm75NT.js";import"./zIndexSlice-BHURSyYA.js";import"./CartesianChart-C9Umwsg3.js";import"./chartDataContext-C_SJIf2I.js";import"./CategoricalChart-Da7z_ebg.js";import"./Curve-ChmxEyvD.js";import"./types-BfEpf9p_.js";import"./Layer-Bpoel1Lp.js";import"./ReactUtils-MfSKnK6Q.js";import"./Label-BnGgD6KR.js";import"./Text-68IXtrlK.js";import"./DOMUtils-DwLev0Y8.js";import"./ZIndexLayer-DncsytRr.js";import"./ActivePoints-Kh0sgV9R.js";import"./Dot-DpvXwtTp.js";import"./RegisterGraphicalItemId-DFrBVe2X.js";import"./GraphicalItemClipPath-DT3FtvpA.js";import"./SetGraphicalItem-6vLNF4l0.js";import"./useAnimationId-C4mX0K92.js";import"./getRadiusAndStrokeWidthFromDot-BGEPQyal.js";import"./graphicalItemSelectors-CKsL1OhO.js";import"./index-SrSy7NGQ.js";import"./ChartSizeDimensions-DagnIVtO.js";import"./OffsetShower-C8_o4Gkp.js";import"./PlotAreaShower-CJCyQCMM.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Q=["FillPattern"];export{e as FillPattern,Q as __namedExportsOrder,N as default};
