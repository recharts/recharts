import{e as t}from"./iframe-CdO7Aj1B.js";import{R as c}from"./arrayEqualityCheck-DSjGda-c.js";import{C as d}from"./ComposedChart-D7sGpZBQ.js";import{A as l}from"./Area-CQvGBKO0.js";import{R as h}from"./RechartsHookInspector-8WkUE3nw.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dyq-HTDO.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CFINL4TS.js";import"./hooks-ByFk5pNE.js";import"./axisSelectors-Cz6m7_H_.js";import"./zIndexSlice-Cqlz5Qvk.js";import"./CartesianChart-K1VjCNnA.js";import"./chartDataContext-CXvLn27W.js";import"./CategoricalChart-CJknGgTn.js";import"./Curve-BvwXZ_2X.js";import"./types-DFIEYgnV.js";import"./Layer-oFeUaaGY.js";import"./ReactUtils-D5Zl77ai.js";import"./Label-BR3nHz9_.js";import"./Text-gQNQGlDJ.js";import"./DOMUtils-Dc62r5Je.js";import"./ZIndexLayer-Dre2jW6R.js";import"./ActivePoints-qmc9cdem.js";import"./Dot-BR-Bd9Ri.js";import"./RegisterGraphicalItemId-DmbEzUCY.js";import"./GraphicalItemClipPath-C-aricuY.js";import"./SetGraphicalItem-Bu99Otwj.js";import"./useAnimationId-Ci_KtL1a.js";import"./getRadiusAndStrokeWidthFromDot-CcsWdYYV.js";import"./graphicalItemSelectors-Cis3iNGY.js";import"./index-B2k25Twf.js";import"./ChartSizeDimensions-ximU9rqf.js";import"./OffsetShower-zZ47YVPO.js";import"./PlotAreaShower-D_H3WfKK.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
