import{e as t}from"./iframe-HCWlV7eT.js";import{g as c}from"./arrayEqualityCheck-Cf1iFAtr.js";import{C as d}from"./ComposedChart-nAk3IKvH.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-DvX_98Kc.js";import{R as u}from"./RechartsHookInspector-DiUR5-Rd.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CKTz6CIA.js";import"./immer-CyT7MAhj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3_OF8yL.js";import"./index-CG6p6UQd.js";import"./hooks-Bu1aMOxG.js";import"./axisSelectors-kc4WL651.js";import"./d3-scale-DGA5oTTZ.js";import"./zIndexSlice-BUPMHSoM.js";import"./renderedTicksSlice-DNGVWtDy.js";import"./CartesianChart-CIcvcNyp.js";import"./chartDataContext-C29Qu4zj.js";import"./CategoricalChart-DsLokalm.js";import"./Curve-B-66MxCQ.js";import"./types-BVJNSeSn.js";import"./step-BzEMV51B.js";import"./Layer-BieoRt7-.js";import"./ReactUtils-C2TKIy08.js";import"./Label-Cz3tNLpR.js";import"./Text-Sb1Xn8CY.js";import"./DOMUtils-Bqm3Lq_z.js";import"./ZIndexLayer-DYTZmJpE.js";import"./ActivePoints-cTIowq9F.js";import"./Dot-CSOnHbFY.js";import"./RegisterGraphicalItemId-S6JUBuqk.js";import"./GraphicalItemClipPath-BdouDh12.js";import"./SetGraphicalItem-C9MUiNjo.js";import"./useAnimationId-BbyheOhI.js";import"./getRadiusAndStrokeWidthFromDot-ClmLFBR-.js";import"./graphicalItemSelectors-BNNBGRzE.js";import"./index-BHZHrA64.js";import"./ChartSizeDimensions-DdWY1IL4.js";import"./OffsetShower-XZyi8iCL.js";import"./PlotAreaShower-KC6xEH0b.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
