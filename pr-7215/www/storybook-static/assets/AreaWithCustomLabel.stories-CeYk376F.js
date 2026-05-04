import{e as t}from"./iframe-W4Sx2LmA.js";import{R as c}from"./arrayEqualityCheck-nt69rbNg.js";import{C as d}from"./ComposedChart-DVlgHodQ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DSnsVUgB.js";import{R as u}from"./RechartsHookInspector-Ft4_PiAb.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2Cae6Gg7.js";import"./immer-B5uHt3-v.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-V_uqMe0M.js";import"./index-C0P2H7BI.js";import"./hooks-Dtno9pbE.js";import"./axisSelectors-CLSq_PV7.js";import"./d3-scale-Cc2KV_M4.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-B4A5_8Yi.js";import"./renderedTicksSlice-dCK1eX84.js";import"./CartesianChart-v8Cliy-Y.js";import"./chartDataContext-D35ia9Nl.js";import"./CategoricalChart-BDjWSCBE.js";import"./Layer-BaLfWC67.js";import"./AnimatedItems-ORWSBWd2.js";import"./Label-aDrplQOD.js";import"./Text-CLwKs2sm.js";import"./DOMUtils-D7MEc4ch.js";import"./ZIndexLayer-Icro7Prq.js";import"./useAnimationId-BhZqgZTb.js";import"./ActivePoints-C0fyqzJF.js";import"./Dot-BiRIcMlM.js";import"./types-C7u7ujMp.js";import"./RegisterGraphicalItemId-CmKLmlaQ.js";import"./GraphicalItemClipPath-DGbYSZbB.js";import"./SetGraphicalItem-DZ57qSXA.js";import"./getRadiusAndStrokeWidthFromDot-CMxbT_Fy.js";import"./ActiveShapeUtils-B164ljio.js";import"./isPlainObject-OTvoF1ix.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJERAndb.js";import"./Trapezoid-U3hbbJ2B.js";import"./Sector-CSPavfQA.js";import"./Symbols-DLTvK8m8.js";import"./symbol-DpMzgL8C.js";import"./step-01ontriS.js";import"./Curve-BQ0Kb0jt.js";import"./graphicalItemSelectors-CZa159lu.js";import"./index-CXRjpi5i.js";import"./ChartSizeDimensions-BbncuPUL.js";import"./OffsetShower-DPIr9odL.js";import"./PlotAreaShower-DUcsSPBD.js";const ut={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:e,y:o}=n;return t.createElement("text",{key:s,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},r={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var m,a,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const ft=["CustomizedLabel"];export{r as CustomizedLabel,ft as __namedExportsOrder,ut as default};
