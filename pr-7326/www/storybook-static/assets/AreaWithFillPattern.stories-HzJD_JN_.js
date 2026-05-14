import{e as t}from"./iframe-Dx3F1CSe.js";import{R as p}from"./arrayEqualityCheck-DMaNZfsY.js";import{C as m}from"./ComposedChart-CNQE5BNL.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BiyWq-Kf.js";import{R as l}from"./RechartsHookInspector-BAwm_Fvn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CXoJrQ_A.js";import"./immer-CPegyDWk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C_B5nhKu.js";import"./index-BeZ_ypUT.js";import"./hooks-aYl0koFW.js";import"./axisSelectors-DmW2duOw.js";import"./d3-scale-BnGwHyKU.js";import"./zIndexSlice-CPXQUw6s.js";import"./renderedTicksSlice-S30Bo7Xq.js";import"./CartesianChart-2VGagNAy.js";import"./chartDataContext-CVXqCkfR.js";import"./CategoricalChart-ByIQfQbt.js";import"./Curve-ZDUjen4G.js";import"./types-Fk51O_d2.js";import"./step-BGsv1v0H.js";import"./Layer-BatgHwMu.js";import"./ReactUtils-Cd33UQfd.js";import"./Label-B3UU_HSI.js";import"./Text-ClY5nVeB.js";import"./DOMUtils-Bny8fRsV.js";import"./ZIndexLayer-BTGGDCgU.js";import"./ActivePoints-DBEXRMMQ.js";import"./Dot-DyEp_Y2i.js";import"./RegisterGraphicalItemId--5sq17ZQ.js";import"./GraphicalItemClipPath-CgpTlQpM.js";import"./SetGraphicalItem-z01-aQ6e.js";import"./useAnimationId-CaQxO-lU.js";import"./getRadiusAndStrokeWidthFromDot-CIhR-EWT.js";import"./graphicalItemSelectors-Ga0SKfSp.js";import"./index-DBIJZBCi.js";import"./ChartSizeDimensions-CO9342qd.js";import"./OffsetShower-C0Ua3cjt.js";import"./PlotAreaShower-jcM5E0P2.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
