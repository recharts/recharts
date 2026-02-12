import{e as t}from"./iframe-BHl6feHg.js";import{R as p}from"./arrayEqualityCheck-JXPmVnXy.js";import{C as m}from"./ComposedChart-k9Vt-A54.js";import{A as r}from"./Area-YN1oeNzC.js";import{R as s}from"./RechartsHookInspector-CQ8dXbzy.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cbmc1eDK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNWAu01W.js";import"./hooks-Dg4O0IDH.js";import"./axisSelectors-DkCd3lVb.js";import"./zIndexSlice-BJqVcMRI.js";import"./CartesianChart-a-Nu4Djb.js";import"./chartDataContext-U6yYzpZX.js";import"./CategoricalChart-DPTMtwYi.js";import"./Curve-BK3JDrZL.js";import"./types-D0Ktdl0_.js";import"./Layer-lCm_g64d.js";import"./ReactUtils-CAG2pm7w.js";import"./Label-K4IXz_WW.js";import"./Text-D9u3Lv_0.js";import"./DOMUtils-Cw8uC_z6.js";import"./ZIndexLayer-BG8-MmnW.js";import"./ActivePoints-lE0M4Cdi.js";import"./Dot-LpYSBJRo.js";import"./RegisterGraphicalItemId-C0ySl-rG.js";import"./GraphicalItemClipPath-pdN9VU--.js";import"./SetGraphicalItem-Cw07hcJH.js";import"./useAnimationId-BLeXX0yF.js";import"./getRadiusAndStrokeWidthFromDot-R49NH_D9.js";import"./graphicalItemSelectors-J-ZsJNTR.js";import"./index-fMMWXo17.js";import"./ChartSizeDimensions-HMEMc6fo.js";import"./OffsetShower-BfTyamfA.js";import"./PlotAreaShower-DtEQ72Vu.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
