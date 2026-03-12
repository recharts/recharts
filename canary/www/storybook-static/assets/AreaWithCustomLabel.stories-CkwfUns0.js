import{e as t}from"./iframe-COcG-qbh.js";import{R as c}from"./arrayEqualityCheck-BeOMvnb3.js";import{C as d}from"./ComposedChart-Bj1Kn6Ah.js";import{A as l}from"./Area-gX8wfMF4.js";import{R as h}from"./RechartsHookInspector-D4zrFLHG.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B_uk6Xbm.js";import"./immer-Ca_zwxaB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C1tql2K4.js";import"./index-L5JLgxKc.js";import"./hooks-B6EdczHv.js";import"./axisSelectors-CYW86iHh.js";import"./d3-scale-CT6TP1ZB.js";import"./zIndexSlice-DLKXsrK7.js";import"./renderedTicksSlice-CPg6Eb9Y.js";import"./CartesianChart-C0k3xA_C.js";import"./chartDataContext-BfM2rVtS.js";import"./CategoricalChart-DbHJ5slW.js";import"./Curve-C3xLkezj.js";import"./types-BmPLOBN4.js";import"./step-CYjHyJAh.js";import"./Layer-vnezQjXg.js";import"./ReactUtils-ByNOpxgT.js";import"./Label-DoQmsUBD.js";import"./Text-C_7F8gzT.js";import"./DOMUtils-DToY1wG2.js";import"./ZIndexLayer-BbjqRzm7.js";import"./ActivePoints-BrEavqGN.js";import"./Dot-CVahyVSD.js";import"./RegisterGraphicalItemId-DgZGaJJ7.js";import"./GraphicalItemClipPath-B0HdbPwh.js";import"./SetGraphicalItem-D9CK4gaX.js";import"./useAnimationId-C4wu98Fe.js";import"./getRadiusAndStrokeWidthFromDot-BeBm-eBn.js";import"./graphicalItemSelectors-9vdvgeJj.js";import"./index-R98a5OxC.js";import"./ChartSizeDimensions-DH_xn-IL.js";import"./OffsetShower-aZbRgbm7.js";import"./PlotAreaShower-Dce4f1ZD.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
