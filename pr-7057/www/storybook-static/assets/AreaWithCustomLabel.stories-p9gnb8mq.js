import{e as t}from"./iframe-D4_kWiik.js";import{R as c}from"./arrayEqualityCheck-B3HrMvOJ.js";import{C as d}from"./ComposedChart-Ba8l5vfK.js";import{A as l}from"./Area-DetBHWnH.js";import{R as h}from"./RechartsHookInspector-CKRvII-U.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DooOk0ZG.js";import"./immer-0ruqGMtg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CPReM4TO.js";import"./index-DoPLCw_p.js";import"./hooks-6jZB3yL2.js";import"./axisSelectors-BmHnRFxW.js";import"./d3-scale-n7QD4WrB.js";import"./zIndexSlice-C4SzCaYD.js";import"./renderedTicksSlice-CIXKwc0U.js";import"./CartesianChart-sfWAfsuQ.js";import"./chartDataContext-jjjOdAEg.js";import"./CategoricalChart-Csqo5QVJ.js";import"./Curve-DIMr1GZI.js";import"./types-BCRPpXrS.js";import"./step-9zWUSiR2.js";import"./Layer-hulGBcYw.js";import"./ReactUtils-B0Tr3Kw3.js";import"./Label-CWL13-o_.js";import"./Text-CoLcKwL4.js";import"./DOMUtils-Dzu75jG0.js";import"./ZIndexLayer-sXRztW1g.js";import"./ActivePoints-CdDYwwSa.js";import"./Dot-BsouI4yi.js";import"./RegisterGraphicalItemId-DxmtI7AP.js";import"./GraphicalItemClipPath-VQWjMwSl.js";import"./SetGraphicalItem-B_khJyid.js";import"./useAnimationId-Dur5dtsq.js";import"./getRadiusAndStrokeWidthFromDot-DxXAf3lX.js";import"./graphicalItemSelectors-B4ttmFru.js";import"./index-Dx5VrxvW.js";import"./ChartSizeDimensions-DSAP6Fpc.js";import"./OffsetShower-DTklH8sW.js";import"./PlotAreaShower-Cqlm22k_.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
