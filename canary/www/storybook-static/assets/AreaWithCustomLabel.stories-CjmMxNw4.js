import{e as t}from"./iframe-DOn8u-oa.js";import{R as c}from"./arrayEqualityCheck-DYxn46f5.js";import{C as d}from"./ComposedChart-t7zVwPF-.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DpBmXvI-.js";import{R as u}from"./RechartsHookInspector-_EcWBN5R.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dy27g2E0.js";import"./immer-Bn8Wu2FH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Beeq_QLd.js";import"./index-TviLRVzQ.js";import"./hooks-DyTxkSEO.js";import"./axisSelectors-RYA-f3bs.js";import"./d3-scale-CBg01hSj.js";import"./zIndexSlice-B2AKnG3y.js";import"./renderedTicksSlice-DoBNzF3G.js";import"./CartesianChart-BOVmLEcH.js";import"./chartDataContext-dTDP7YNY.js";import"./CategoricalChart-Dpd8P6f3.js";import"./Curve-woVlpOcO.js";import"./types-CESDZ_aX.js";import"./step-Cq5Zx23d.js";import"./Layer-05H6paB_.js";import"./ReactUtils-PhcFEJ80.js";import"./Label-BcScPf1_.js";import"./Text-BwE_mk8T.js";import"./DOMUtils-CpIY6Kx5.js";import"./ZIndexLayer-y8FotD-G.js";import"./ActivePoints-COmAN0pa.js";import"./Dot-CRgfPISn.js";import"./RegisterGraphicalItemId-DTK05cjv.js";import"./GraphicalItemClipPath-BB5-oLdp.js";import"./SetGraphicalItem-BPar8aEt.js";import"./useAnimationId-DEVWAil3.js";import"./getRadiusAndStrokeWidthFromDot-Ep1HaBq8.js";import"./graphicalItemSelectors-3hY-3fCN.js";import"./index-DQsTRZku.js";import"./ChartSizeDimensions-C0-3hV0F.js";import"./OffsetShower-CB8ZCxWG.js";import"./PlotAreaShower-B8Dg5b0X.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
