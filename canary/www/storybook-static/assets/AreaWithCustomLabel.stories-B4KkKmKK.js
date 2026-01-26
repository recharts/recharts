import{e as t}from"./iframe-BtSIgQK6.js";import{R as c}from"./arrayEqualityCheck-DE2iBB4w.js";import{C as d}from"./ComposedChart-D2t4vYg_.js";import{A as l}from"./Area-BcrolUWu.js";import{R as h}from"./RechartsHookInspector-CTyYdRny.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-tnH-YOXI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-y4jP1OLx.js";import"./hooks-3j04d5vi.js";import"./axisSelectors-CGAxpLYE.js";import"./zIndexSlice-BxfsWazG.js";import"./CartesianChart-CbG0k6t0.js";import"./chartDataContext-DyC7E7bB.js";import"./CategoricalChart-CKsWezcf.js";import"./Curve-CPkDoGPV.js";import"./types-CCc-_PPP.js";import"./Layer-C0Jzn9sV.js";import"./ReactUtils-CkWZzFSr.js";import"./Label-CWG_XmjD.js";import"./Text-B5GBCwiW.js";import"./DOMUtils-1anFrXHc.js";import"./ZIndexLayer-GjRfBXiF.js";import"./ActivePoints-DmeZ1ufV.js";import"./Dot-B1qpgIfY.js";import"./RegisterGraphicalItemId-B0VNE0Pd.js";import"./GraphicalItemClipPath-MWrfhZxI.js";import"./SetGraphicalItem-C03tHeu5.js";import"./useAnimationId-B8iQHdnT.js";import"./getRadiusAndStrokeWidthFromDot-BqZRZ_5P.js";import"./graphicalItemSelectors-DPcHFcIc.js";import"./index-D1fEpgHD.js";import"./ChartSizeDimensions-k7v_FXVx.js";import"./OffsetShower-4wP9Bq0X.js";import"./PlotAreaShower-FD68gciE.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
