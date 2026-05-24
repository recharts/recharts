import{e as t}from"./iframe-CxCywqzA.js";import{g as p}from"./arrayEqualityCheck-yVNwB6mW.js";import{C as m}from"./ComposedChart-CX5jdlg2.js";import{a as s}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-COP_K52Z.js";import{R as l}from"./RechartsHookInspector-DGOvaE6a.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyFfO_sZ.js";import"./immer-B8hoAty4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ReU4AUnJ.js";import"./index-Pf0lqjAZ.js";import"./hooks-bOP2AOQf.js";import"./axisSelectors-DhlA5n5_.js";import"./d3-scale-CxndOeQp.js";import"./zIndexSlice-DVQoyP0x.js";import"./renderedTicksSlice-D6OwKyas.js";import"./CartesianChart-DzAU9ZU1.js";import"./chartDataContext-DIpKw8P8.js";import"./CategoricalChart-Bsvtk9Il.js";import"./Curve-BRrh0cMa.js";import"./types-ou1XrYCh.js";import"./step-IqpDGeuN.js";import"./path-DyVhHtw_.js";import"./Layer-BIf3cKek.js";import"./ReactUtils-9u_I1YpW.js";import"./Label-C7vnjRze.js";import"./Text-D9QqhyNw.js";import"./DOMUtils-C_VBv5EQ.js";import"./ZIndexLayer-DP6IzTUW.js";import"./ActivePoints-C96qswx6.js";import"./Dot-D7kdX87a.js";import"./RegisterGraphicalItemId-BpFbTFO3.js";import"./GraphicalItemClipPath-vFOoMVO7.js";import"./SetGraphicalItem-CwSOO4xE.js";import"./useAnimationId-C-vOWrwQ.js";import"./getRadiusAndStrokeWidthFromDot-cuaaV9XU.js";import"./graphicalItemSelectors-CYtQB4Qt.js";import"./index-DGGA_IR8.js";import"./ChartSizeDimensions-CFycJ4k1.js";import"./OffsetShower-BkZVXWFE.js";import"./PlotAreaShower-BM-3w1mr.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const rt=["FillPattern"];export{e as FillPattern,rt as __namedExportsOrder,et as default};
