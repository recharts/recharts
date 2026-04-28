import{e as t}from"./iframe-IYV0DWV_.js";import{R as c}from"./arrayEqualityCheck-Bd9te8h5.js";import{C as d}from"./ComposedChart--vw2gJgx.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-dKh6mx8m.js";import{R as u}from"./RechartsHookInspector-F4E7g6Er.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DW10euc9.js";import"./immer-C5y28x1y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CiV29pyr.js";import"./index-C-_sV-M9.js";import"./hooks-CYsU2mzH.js";import"./axisSelectors-D7Iryj26.js";import"./d3-scale-gSH8fZ7r.js";import"./zIndexSlice-DeGAM3mJ.js";import"./renderedTicksSlice-oy8dviAt.js";import"./CartesianChart-DeU7jjaP.js";import"./chartDataContext-DpSq4A2Y.js";import"./CategoricalChart-C5NFGp4t.js";import"./Curve-DbGLQtgf.js";import"./types-wRdleKl8.js";import"./step-A9nbxnob.js";import"./Layer-BlQSfqc0.js";import"./ReactUtils--lF51C7F.js";import"./Label-Ue-uNxNq.js";import"./Text-CljAKOCB.js";import"./DOMUtils-lNitbhsw.js";import"./ZIndexLayer-CuF5EOOK.js";import"./ActivePoints-CQCkaYoR.js";import"./Dot-BVl4fcd6.js";import"./RegisterGraphicalItemId-hvr3G_mi.js";import"./GraphicalItemClipPath-CJMuL245.js";import"./SetGraphicalItem-DeMSd0nu.js";import"./useAnimationId-Bm2M_Pz2.js";import"./getRadiusAndStrokeWidthFromDot-BrQDVO0Z.js";import"./graphicalItemSelectors-DQE5uuAe.js";import"./index-DlrvcT1S.js";import"./ChartSizeDimensions-qhfaRB1O.js";import"./OffsetShower-CVu4qLNi.js";import"./PlotAreaShower-B-AaQufv.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
