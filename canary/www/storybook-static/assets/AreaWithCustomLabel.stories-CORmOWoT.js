import{e as t}from"./iframe-3u-Q1UnB.js";import{R as c}from"./arrayEqualityCheck-4YdFFnIZ.js";import{C as d}from"./ComposedChart-B88mQwK1.js";import{A as l}from"./Area-CJKdZARv.js";import{R as h}from"./RechartsHookInspector-CGCoL2RB.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cxetozbj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DTxIwYKV.js";import"./hooks-CA6mXnfo.js";import"./axisSelectors-tXlpibGR.js";import"./zIndexSlice-DFZrsegf.js";import"./CartesianChart-CPrM6Y72.js";import"./chartDataContext-oduysAeX.js";import"./CategoricalChart-C1AjKJFD.js";import"./Curve-BQlmvtvx.js";import"./types-DeBO-UOQ.js";import"./Layer-BUQITwlU.js";import"./ReactUtils-BnoVNewt.js";import"./Label-DEySkZO8.js";import"./Text-C0k6XBru.js";import"./DOMUtils-B1iHjA53.js";import"./ZIndexLayer-BBlPVpqD.js";import"./ActivePoints-Cqa4c3Nf.js";import"./Dot-B1g7vVO3.js";import"./RegisterGraphicalItemId-C95CQYm2.js";import"./GraphicalItemClipPath-Cj9n1sb1.js";import"./SetGraphicalItem-BCGPdk9x.js";import"./useAnimationId-BDwu_fLm.js";import"./getRadiusAndStrokeWidthFromDot-Bk3bWelV.js";import"./graphicalItemSelectors-NQ4w2H4q.js";import"./index-BW-nQ8nH.js";import"./ChartSizeDimensions-BtJ4zNfJ.js";import"./OffsetShower-CS2dm1Mz.js";import"./PlotAreaShower-DAGea8GQ.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
