import{e as t}from"./iframe-BbZhTIjX.js";import{R as c}from"./arrayEqualityCheck-DkKqnDzt.js";import{C as d}from"./ComposedChart-DswvV8lx.js";import{A as l}from"./Area-n4WGHqay.js";import{R as h}from"./RechartsHookInspector-BEtvb3d9.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DpK6kTo-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNXfyTKD.js";import"./hooks-xGvQVXJu.js";import"./axisSelectors-tXY5A5QT.js";import"./zIndexSlice-Dz-zn5zm.js";import"./renderedTicksSlice-Bw2BSgf6.js";import"./CartesianChart-CjVvsiSP.js";import"./chartDataContext-DGmstLWk.js";import"./CategoricalChart-B-wga6Ud.js";import"./Curve-DGXqFy3O.js";import"./types-BKBSpGfD.js";import"./Layer-BRjxkTBT.js";import"./ReactUtils-B2BAtUcS.js";import"./Label-Be7TSIhI.js";import"./Text-DoKSXl81.js";import"./DOMUtils-BPmVZuXj.js";import"./ZIndexLayer-C9gNEIfS.js";import"./ActivePoints-C1EnRHYt.js";import"./Dot-oTf8G_NC.js";import"./RegisterGraphicalItemId-NnVsob8d.js";import"./GraphicalItemClipPath-DCNpup2d.js";import"./SetGraphicalItem-yYMMJ8ci.js";import"./useAnimationId-DVyCRxxH.js";import"./getRadiusAndStrokeWidthFromDot-CULUnYYv.js";import"./graphicalItemSelectors-m4p6KSQc.js";import"./index-BeB1Guy7.js";import"./ChartSizeDimensions-CT9Oervl.js";import"./OffsetShower-D-jScXPc.js";import"./PlotAreaShower-FMUTuolU.js";const tt={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const et=["CustomizedLabel"];export{e as CustomizedLabel,et as __namedExportsOrder,tt as default};
