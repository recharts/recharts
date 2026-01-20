import{e as t}from"./iframe-BJE3gYiz.js";import{R as c}from"./arrayEqualityCheck-DOpOKb7k.js";import{C as d}from"./ComposedChart-CjmpYIzW.js";import{A as l}from"./Area-BzJrHxJ9.js";import{R as h}from"./RechartsHookInspector-CmJjyPOL.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKNlGFt8.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-6YVSs0X2.js";import"./hooks-CzpWgTi2.js";import"./axisSelectors-BAfv6-Wm.js";import"./zIndexSlice-CPc0PYoJ.js";import"./CartesianChart-Dvfq7kHx.js";import"./chartDataContext-dCefmzkT.js";import"./CategoricalChart-BCQDahMf.js";import"./Curve-9wsGsorR.js";import"./types-BgpWyLLK.js";import"./Layer-BpHZQDe5.js";import"./ReactUtils-DpOzmnGs.js";import"./Label-8Du7WhKH.js";import"./Text-CV7Ey6jK.js";import"./DOMUtils-DGjslG0U.js";import"./ZIndexLayer-PGry8EqE.js";import"./ActivePoints-B4GG4aUL.js";import"./Dot-ELwl5DRr.js";import"./RegisterGraphicalItemId-DDZY4GcH.js";import"./GraphicalItemClipPath-VPQqj0Oy.js";import"./SetGraphicalItem-Bs3LcTS6.js";import"./useAnimationId-xUHk75MJ.js";import"./getRadiusAndStrokeWidthFromDot-T6tgT4MC.js";import"./graphicalItemSelectors-SX_V_YVq.js";import"./index-BZmliZtD.js";import"./ChartSizeDimensions-kmApRxRi.js";import"./OffsetShower-Cu7vEAUz.js";import"./PlotAreaShower-3gxA0MT2.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
