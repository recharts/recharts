import{e as t}from"./iframe-BekWtzeP.js";import{R as p}from"./arrayEqualityCheck-Dex07G1y.js";import{C as m}from"./ComposedChart-wZSx9jy7.js";import{A as r}from"./Area-BsgyOM8x.js";import{R as s}from"./RechartsHookInspector-DYfLD4ov.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DM_sVtnW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BLym1DZ5.js";import"./hooks-M7JbNACE.js";import"./axisSelectors-dkELBwuo.js";import"./zIndexSlice-C6dUOqXj.js";import"./renderedTicksSlice-Cs1v0Weq.js";import"./CartesianChart-DBKl6El9.js";import"./chartDataContext-DIse9eKf.js";import"./CategoricalChart-DjOHDvdh.js";import"./Curve-DNeihdYA.js";import"./types-BAUrPFwC.js";import"./Layer-Bfyqa5-M.js";import"./ReactUtils-V0CtXr9z.js";import"./Label-Co8l3-0E.js";import"./Text-GqnKFCwL.js";import"./DOMUtils-BX7aw3nI.js";import"./ZIndexLayer-BEmVcKyp.js";import"./ActivePoints-ECHEl66Y.js";import"./Dot-DROJJWRy.js";import"./RegisterGraphicalItemId-DBrxdiVv.js";import"./GraphicalItemClipPath-CbuKIejK.js";import"./SetGraphicalItem-COH5jwOQ.js";import"./useAnimationId-BhuDd99U.js";import"./getRadiusAndStrokeWidthFromDot-u9pmLcPC.js";import"./graphicalItemSelectors-DvBfqztM.js";import"./index-D7stEGDS.js";import"./ChartSizeDimensions-BIF9SI6Q.js";import"./OffsetShower-BzXSvdvm.js";import"./PlotAreaShower-fI9VNU4p.js";const Q={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const X=["FillPattern"];export{e as FillPattern,X as __namedExportsOrder,Q as default};
