import{e as t}from"./iframe-DwwP6BDm.js";import{R as c}from"./arrayEqualityCheck-CXp0SSuS.js";import{C as d}from"./ComposedChart-DKKiCSIk.js";import{A as l}from"./Area-DP-PbnkS.js";import{R as h}from"./RechartsHookInspector-CJI_KtjH.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-fclRL42w.js";import"./PolarUtils-Dg8SPN1d.js";import"./RechartsWrapper-DfwiyTzK.js";import"./hooks-COs4f3qd.js";import"./axisSelectors-B_EC2kA9.js";import"./zIndexSlice-B2wHCWq0.js";import"./CartesianChart-CSvI-_HL.js";import"./chartDataContext-GZk7dH94.js";import"./CategoricalChart-LzovMGTR.js";import"./Curve-CYEqd5kN.js";import"./types-B_qGOwmF.js";import"./Layer-CFoQxLn1.js";import"./ReactUtils-DUdaZBrS.js";import"./Label-DDS3-7t-.js";import"./Text-BQatnNw9.js";import"./DOMUtils-B0inai4d.js";import"./ZIndexLayer-BDklLudV.js";import"./ActivePoints-C7W41Iaj.js";import"./Dot-Ce0NiHJU.js";import"./RegisterGraphicalItemId-DERA-43u.js";import"./GraphicalItemClipPath-CGcYTlQM.js";import"./SetGraphicalItem-BEgWdOjU.js";import"./useAnimationId-DSGl_EXu.js";import"./getRadiusAndStrokeWidthFromDot-y51lXwYL.js";import"./graphicalItemSelectors-CufL_txW.js";import"./index-BPFUjSxJ.js";import"./ChartSizeDimensions-Bw79VUZb.js";import"./OffsetShower-BCg2GNSc.js";import"./PlotAreaShower-DXMXrPtG.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const tt=["CustomizedLabel"];export{e as CustomizedLabel,tt as __namedExportsOrder,Z as default};
