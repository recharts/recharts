import{e as t}from"./iframe-Dx3F1CSe.js";import{R as c}from"./arrayEqualityCheck-DMaNZfsY.js";import{C as d}from"./ComposedChart-CNQE5BNL.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BiyWq-Kf.js";import{R as u}from"./RechartsHookInspector-BAwm_Fvn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CXoJrQ_A.js";import"./immer-CPegyDWk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C_B5nhKu.js";import"./index-BeZ_ypUT.js";import"./hooks-aYl0koFW.js";import"./axisSelectors-DmW2duOw.js";import"./d3-scale-BnGwHyKU.js";import"./zIndexSlice-CPXQUw6s.js";import"./renderedTicksSlice-S30Bo7Xq.js";import"./CartesianChart-2VGagNAy.js";import"./chartDataContext-CVXqCkfR.js";import"./CategoricalChart-ByIQfQbt.js";import"./Curve-ZDUjen4G.js";import"./types-Fk51O_d2.js";import"./step-BGsv1v0H.js";import"./Layer-BatgHwMu.js";import"./ReactUtils-Cd33UQfd.js";import"./Label-B3UU_HSI.js";import"./Text-ClY5nVeB.js";import"./DOMUtils-Bny8fRsV.js";import"./ZIndexLayer-BTGGDCgU.js";import"./ActivePoints-DBEXRMMQ.js";import"./Dot-DyEp_Y2i.js";import"./RegisterGraphicalItemId--5sq17ZQ.js";import"./GraphicalItemClipPath-CgpTlQpM.js";import"./SetGraphicalItem-z01-aQ6e.js";import"./useAnimationId-CaQxO-lU.js";import"./getRadiusAndStrokeWidthFromDot-CIhR-EWT.js";import"./graphicalItemSelectors-Ga0SKfSp.js";import"./index-DBIJZBCi.js";import"./ChartSizeDimensions-CO9342qd.js";import"./OffsetShower-C0Ua3cjt.js";import"./PlotAreaShower-jcM5E0P2.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
