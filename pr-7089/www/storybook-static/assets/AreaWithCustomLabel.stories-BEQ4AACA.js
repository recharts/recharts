import{e as t}from"./iframe-BOKMyF_X.js";import{R as c}from"./arrayEqualityCheck-CqOdBUpx.js";import{C as d}from"./ComposedChart-CM0vmQ8b.js";import{A as l}from"./Area-BklcZmB3.js";import{R as h}from"./RechartsHookInspector-CyXtWZCT.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D-2ZbLU8.js";import"./immer-BWwXhaAr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BbOfJK_v.js";import"./index-DyqnJuAH.js";import"./hooks-BSpUdl1W.js";import"./axisSelectors-DKV-tPdL.js";import"./d3-scale-DFwrAk_i.js";import"./zIndexSlice-5HlspQCC.js";import"./renderedTicksSlice-BzcMdbXv.js";import"./CartesianChart-DhtZ13KG.js";import"./chartDataContext-CzpIjlkZ.js";import"./CategoricalChart-BuHiBizY.js";import"./Curve-B4PvFjai.js";import"./types-BRMSpD9x.js";import"./step-CSZdFR4k.js";import"./Layer-jqqI8J4h.js";import"./ReactUtils-D8BtYMdD.js";import"./Label-D-SjomvA.js";import"./Text-v3vniUMj.js";import"./DOMUtils-BpFKs9GQ.js";import"./ZIndexLayer-BPVGtKRn.js";import"./ActivePoints-BkUW_jI5.js";import"./Dot-BV_14ZK_.js";import"./RegisterGraphicalItemId-CT98v8Eq.js";import"./GraphicalItemClipPath-C2O7VO_H.js";import"./SetGraphicalItem-C9j26hww.js";import"./useAnimationId-CQeaLNgU.js";import"./getRadiusAndStrokeWidthFromDot-BEKHGib6.js";import"./graphicalItemSelectors-Ct946g8y.js";import"./index-C_V29KK9.js";import"./ChartSizeDimensions-BzpSoNcH.js";import"./OffsetShower-DzkfGY4a.js";import"./PlotAreaShower-Djb9Eb2x.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
