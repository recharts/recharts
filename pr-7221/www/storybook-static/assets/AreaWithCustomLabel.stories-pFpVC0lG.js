import{e as t}from"./iframe-1sJLl6DZ.js";import{R as c}from"./arrayEqualityCheck-CBQMjkzv.js";import{C as d}from"./ComposedChart-B5sHxVOV.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BHNUQW6K.js";import{R as u}from"./RechartsHookInspector-FiK4LEfR.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BwudvEcy.js";import"./immer-D3lmb_Hz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BarrelpQ.js";import"./index-BefZ4p5Z.js";import"./hooks-BSV0CDFu.js";import"./axisSelectors-DfOHronC.js";import"./d3-scale-UoHoc1Us.js";import"./zIndexSlice-DewuM9Kl.js";import"./renderedTicksSlice-B18XtuK2.js";import"./CartesianChart-DajRV7bT.js";import"./chartDataContext-BDPauSBm.js";import"./CategoricalChart-Bp51RrNo.js";import"./Curve-D1t5c_n4.js";import"./types-OZuhW1zj.js";import"./step-CdTAn4vV.js";import"./Layer-gI7ebry7.js";import"./ReactUtils-E47kjf1a.js";import"./Label-B09ck5aR.js";import"./Text-D1w4IOeM.js";import"./DOMUtils-Cz4f8MMH.js";import"./ZIndexLayer-D-ka0Tcp.js";import"./ActivePoints-7h-OJP_5.js";import"./Dot-CHPbrrnb.js";import"./RegisterGraphicalItemId-B5rT-TGw.js";import"./GraphicalItemClipPath-CGdaFH3i.js";import"./SetGraphicalItem-BDCPoYU4.js";import"./useAnimationId-BG884krZ.js";import"./getRadiusAndStrokeWidthFromDot-B2FefomC.js";import"./graphicalItemSelectors-BmMD1dgr.js";import"./index-CQyn9y4S.js";import"./ChartSizeDimensions-D07aYOSB.js";import"./OffsetShower-CPwA5xGr.js";import"./PlotAreaShower-7dIAXo4S.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
