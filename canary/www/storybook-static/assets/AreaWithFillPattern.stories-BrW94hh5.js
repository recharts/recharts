import{e as t}from"./iframe-9z1u-Aav.js";import{R as p}from"./arrayEqualityCheck-BxC1vNgX.js";import{C as m}from"./ComposedChart-BYDqkFXo.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CE1Vpc7i.js";import{R as l}from"./RechartsHookInspector-CPy6deVf.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-hYLPXQk1.js";import"./immer-Bw5e914R.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCPy8B0Q.js";import"./index-B2EC147Y.js";import"./hooks-6Kt3djxY.js";import"./axisSelectors-COp_2eg-.js";import"./d3-scale-Gw1yRTSk.js";import"./zIndexSlice-CgHKAdAg.js";import"./renderedTicksSlice-BHud9xuy.js";import"./CartesianChart-BYVE1KsL.js";import"./chartDataContext-C3cOG7oG.js";import"./CategoricalChart-BSBYVT05.js";import"./Curve-CaIVque-.js";import"./types-DkmL6Els.js";import"./step-DgnayOtY.js";import"./Layer-CQ8qv4WV.js";import"./ReactUtils-BhZgkjsQ.js";import"./Label-CLPrmfez.js";import"./Text-hlTX4MHR.js";import"./DOMUtils-C8Hk5ID2.js";import"./ZIndexLayer-DD6-9cCr.js";import"./ActivePoints-BrNY2xuv.js";import"./Dot-Bkkq57cb.js";import"./RegisterGraphicalItemId-BFftKPbg.js";import"./GraphicalItemClipPath-BPP11Y5p.js";import"./SetGraphicalItem-DhXUBNxa.js";import"./useAnimationId-DEUiQ2FH.js";import"./getRadiusAndStrokeWidthFromDot-OHnzfSYw.js";import"./graphicalItemSelectors-B_mo8ZnZ.js";import"./index-CQ_nBmPz.js";import"./ChartSizeDimensions-Dl068BxX.js";import"./OffsetShower-DaW6uSre.js";import"./PlotAreaShower-B88-OHCb.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
