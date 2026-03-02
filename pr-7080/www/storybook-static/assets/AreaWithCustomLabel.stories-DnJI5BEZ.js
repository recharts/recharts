import{e as t}from"./iframe-DtsdDKdZ.js";import{R as c}from"./arrayEqualityCheck-Droc7dSW.js";import{C as d}from"./ComposedChart-DJd-FMM5.js";import{A as l}from"./Area-s0Qadzz_.js";import{R as h}from"./RechartsHookInspector-BlgcmNAN.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CYphw90L.js";import"./immer-Cl4pjRPT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BHAf4vKZ.js";import"./index-C-dV99_B.js";import"./hooks-BeulUkkW.js";import"./axisSelectors-DFbwRFUO.js";import"./d3-scale-C3JQrokV.js";import"./zIndexSlice-C9mn4FBr.js";import"./renderedTicksSlice-DiHGExst.js";import"./CartesianChart-dUJOPO3Y.js";import"./chartDataContext-BYoNMw3_.js";import"./CategoricalChart-G5xMZxW2.js";import"./Curve-DR4nUNk7.js";import"./types-8PVRu1dQ.js";import"./step-BAMUjg0M.js";import"./Layer-SH7Pqpr5.js";import"./ReactUtils-D2snZVWC.js";import"./Label-DA1oiymG.js";import"./Text-DywitbW7.js";import"./DOMUtils-_7Ng8zPY.js";import"./ZIndexLayer-DBoKoGoH.js";import"./ActivePoints-BpXmKIch.js";import"./Dot-W3eXNr9t.js";import"./RegisterGraphicalItemId-CUTcSbcF.js";import"./GraphicalItemClipPath-BnsyXWl3.js";import"./SetGraphicalItem-B8wIveBb.js";import"./useAnimationId-BeYERtYV.js";import"./getRadiusAndStrokeWidthFromDot-Fg5nPjko.js";import"./graphicalItemSelectors-DjSkvU14.js";import"./index-txaMAxKK.js";import"./ChartSizeDimensions-RUaYI8h3.js";import"./OffsetShower-Cc_Brw8F.js";import"./PlotAreaShower-Ch2pfbhA.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
