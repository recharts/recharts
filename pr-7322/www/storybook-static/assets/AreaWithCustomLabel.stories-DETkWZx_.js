import{e as t}from"./iframe-Br7b33cR.js";import{R as c}from"./arrayEqualityCheck-BDKsVEjv.js";import{C as d}from"./ComposedChart-BA7IAlKp.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-noY2kAVa.js";import{R as u}from"./RechartsHookInspector-DLRUlTlC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CdmMjLyp.js";import"./immer-BhWlJGD4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D63T188Y.js";import"./index-DVsOwuOo.js";import"./hooks-BC1xVB-F.js";import"./axisSelectors-hQ7yLifF.js";import"./d3-scale-DdreInNE.js";import"./zIndexSlice-DsbsVgFf.js";import"./renderedTicksSlice-BcwlNeh2.js";import"./CartesianChart-Cn-qy5pU.js";import"./chartDataContext-CpalcXUw.js";import"./CategoricalChart-xWzy3I98.js";import"./Curve-BrUwP9tn.js";import"./types-CjQO2tSW.js";import"./step-BTmPe7Fi.js";import"./Layer-IwfPtrhx.js";import"./ReactUtils-WaUbZ0sz.js";import"./Label-SApjRgym.js";import"./Text-D-_zWi9U.js";import"./DOMUtils-B_HE9eSD.js";import"./ZIndexLayer-D-LZtBsa.js";import"./ActivePoints-DDCoLWpR.js";import"./Dot-D2QBiTth.js";import"./RegisterGraphicalItemId-Bvds7-Cj.js";import"./GraphicalItemClipPath-B3sq3Fvy.js";import"./SetGraphicalItem-rBYE9Kbl.js";import"./useAnimationId-DXRTa-xv.js";import"./getRadiusAndStrokeWidthFromDot-CxbakQi2.js";import"./graphicalItemSelectors-BxWopPOu.js";import"./index-Cr6FWzjz.js";import"./ChartSizeDimensions-D_sBOB8N.js";import"./OffsetShower-dRSZPBrC.js";import"./PlotAreaShower-BUasdGew.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
