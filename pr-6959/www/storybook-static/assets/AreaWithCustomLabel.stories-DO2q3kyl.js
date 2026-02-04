import{e as t}from"./iframe-lWBX64pI.js";import{R as c}from"./arrayEqualityCheck-Bc4Ot0PW.js";import{C as d}from"./ComposedChart-C9sU2uaY.js";import{A as l}from"./Area-BYZhELex.js";import{R as h}from"./RechartsHookInspector-DQzLYc7l.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-F9aAykDU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Djqv5WdD.js";import"./hooks-DxrNJMr4.js";import"./axisSelectors-BWmy8ZsX.js";import"./zIndexSlice-DrTdUYuM.js";import"./CartesianChart-Dxi5Jpt2.js";import"./chartDataContext-BrNcW05w.js";import"./CategoricalChart-CNbBFS0r.js";import"./Curve-BU8W3PHf.js";import"./types-CeMusotU.js";import"./Layer-BUTtt9Bz.js";import"./ReactUtils-Caa168vS.js";import"./Label-BnM6Z2ZH.js";import"./Text-Cr9QQRZN.js";import"./DOMUtils-DKHDOrvS.js";import"./ZIndexLayer-BWtmJpZw.js";import"./ActivePoints-4ReyECY6.js";import"./Dot-CQ7tD8sg.js";import"./RegisterGraphicalItemId-nVIwNLcs.js";import"./GraphicalItemClipPath-B0xhchCc.js";import"./SetGraphicalItem-CksZixPS.js";import"./useAnimationId-Bj8WvXUY.js";import"./getRadiusAndStrokeWidthFromDot-C6m3BF6S.js";import"./graphicalItemSelectors-D6Ec4gXc.js";import"./index-04LEDiAf.js";import"./ChartSizeDimensions-BCIgaepb.js";import"./OffsetShower-CEpgJiJ4.js";import"./PlotAreaShower-BJAGaSX0.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
