import{e as t}from"./iframe-CcI14rjx.js";import{R as c}from"./arrayEqualityCheck-B8tVyMzV.js";import{C as d}from"./ComposedChart-FcFBNN0D.js";import{A as l}from"./Area-BkDr32fl.js";import{R as h}from"./RechartsHookInspector-BirTV-4S.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-po8mUv-4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ds5PaNoP.js";import"./hooks-CRZN5urL.js";import"./axisSelectors-RKSisFMT.js";import"./zIndexSlice-BZyTHnj4.js";import"./CartesianChart-DnBMHEHS.js";import"./chartDataContext-BY-Xyvma.js";import"./CategoricalChart-DcuTq1rr.js";import"./Curve-CHXnr1rt.js";import"./types-Ce3J44ym.js";import"./Layer-8dVuGqJD.js";import"./ReactUtils-C84uddRP.js";import"./Label-Dpi6i3BM.js";import"./Text-D_czYdq0.js";import"./DOMUtils-BjGcEiQ0.js";import"./ZIndexLayer-DuQEL0lP.js";import"./ActivePoints-Ca2XV1yH.js";import"./Dot-B9LqMTkT.js";import"./RegisterGraphicalItemId-hDx3Uu0O.js";import"./GraphicalItemClipPath-CPgfiSVt.js";import"./SetGraphicalItem-GKBrKzuX.js";import"./useAnimationId-B5oI4zFf.js";import"./getRadiusAndStrokeWidthFromDot-TOKn8Uzz.js";import"./graphicalItemSelectors-BKqXZH6g.js";import"./index-DRUD6mwN.js";import"./ChartSizeDimensions-DOkJnWBq.js";import"./OffsetShower-CLsXqqyI.js";import"./PlotAreaShower-BWzOW3_u.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
