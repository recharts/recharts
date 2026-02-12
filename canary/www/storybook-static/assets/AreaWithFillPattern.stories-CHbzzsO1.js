import{e as t}from"./iframe-C_JnpPxC.js";import{R as p}from"./arrayEqualityCheck-sT-8H7T8.js";import{C as m}from"./ComposedChart-BOL0KSYh.js";import{A as r}from"./Area-DwgxhxnN.js";import{R as s}from"./RechartsHookInspector-C-nhVX4u.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DMs63srN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Be1xWQVx.js";import"./hooks-CilDgeMs.js";import"./axisSelectors-BYc0e3fJ.js";import"./zIndexSlice-DoGitowx.js";import"./CartesianChart-DVAMnmgu.js";import"./chartDataContext-DiOyHIUd.js";import"./CategoricalChart-CBvXep6K.js";import"./Curve-qS1_4eph.js";import"./types-BnNymUFW.js";import"./Layer-WpsYuzZU.js";import"./ReactUtils-D29wERIN.js";import"./Label-CxS5BAR7.js";import"./Text-BdVB7IGp.js";import"./DOMUtils-CDXVQVNr.js";import"./ZIndexLayer-B-ShVZV-.js";import"./ActivePoints-JrhNNaZp.js";import"./Dot-DS8ISMrc.js";import"./RegisterGraphicalItemId-DO88ATNs.js";import"./GraphicalItemClipPath-CZbJihCA.js";import"./SetGraphicalItem-oGTsK5LX.js";import"./useAnimationId-BOqolhoS.js";import"./getRadiusAndStrokeWidthFromDot-DoVJFvmy.js";import"./graphicalItemSelectors-jcBTwPg8.js";import"./index-BwFDqC8u.js";import"./ChartSizeDimensions-b9L3p-kX.js";import"./OffsetShower-D08e_oKq.js";import"./PlotAreaShower-g5XUniHF.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
