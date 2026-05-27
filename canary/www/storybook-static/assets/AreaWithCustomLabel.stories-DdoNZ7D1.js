import{e as t}from"./iframe-DJXOgax2.js";import{g as c}from"./arrayEqualityCheck-k7PS2xak.js";import{C as d}from"./ComposedChart-CQeCmrJf.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-DUNHIU9Z.js";import{R as u}from"./RechartsHookInspector-s82vtdQF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DPbWDBA5.js";import"./immer-2a_xTrdV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BaSgqIB_.js";import"./index-BNAJMwXV.js";import"./hooks-CZ0TOrWM.js";import"./axisSelectors-Dr5KL0ZI.js";import"./d3-scale-DuWCsZHZ.js";import"./zIndexSlice-B--1gOPM.js";import"./renderedTicksSlice-Bl5jCaCZ.js";import"./CartesianChart-BFo4vKxS.js";import"./chartDataContext-kJxPcL-i.js";import"./CategoricalChart-Bx8_lMCZ.js";import"./Curve-BPyFb2hT.js";import"./types-CX2SK57G.js";import"./step-Bwlnh61x.js";import"./path-DyVhHtw_.js";import"./Layer-PAWXt2PX.js";import"./ReactUtils-DyBcDzzn.js";import"./Label-C8y2_6Vy.js";import"./Text-npnYAvG4.js";import"./DOMUtils-i2w-QAqd.js";import"./ZIndexLayer-DVdyi4xb.js";import"./ActivePoints-kdx1y4B7.js";import"./Dot-BmjogDci.js";import"./RegisterGraphicalItemId-BxDB977O.js";import"./GraphicalItemClipPath-BH4qa2aX.js";import"./SetGraphicalItem-W-67q1_i.js";import"./useAnimationId-B1Sa6L7Z.js";import"./getRadiusAndStrokeWidthFromDot-CioYRZbs.js";import"./graphicalItemSelectors-gJ1uXDK1.js";import"./index-Bnctlgv-.js";import"./ChartSizeDimensions-Dwe9HRTS.js";import"./OffsetShower-BjMyZ4ga.js";import"./PlotAreaShower-6s_jSFmp.js";const mt={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const pt=["CustomizedLabel"];export{e as CustomizedLabel,pt as __namedExportsOrder,mt as default};
