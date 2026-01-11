import{e as t}from"./iframe-YjsnRhKk.js";import{R as c}from"./arrayEqualityCheck-BJwRC6MI.js";import{C as d}from"./ComposedChart-DHA8rPkN.js";import{A as l}from"./Area-BsNYEbUZ.js";import{R as h}from"./RechartsHookInspector-B9NqqHZV.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Z_TS6-YD.js";import"./PolarUtils-CY6yHRxS.js";import"./RechartsWrapper-D804dJFF.js";import"./hooks-ybSWjp7E.js";import"./axisSelectors-DDrqqiFr.js";import"./zIndexSlice-CrYhtLvr.js";import"./CartesianChart-BXbZQS9i.js";import"./chartDataContext-DdZy89Ic.js";import"./CategoricalChart-DshWcI8J.js";import"./Curve-C9YHabA2.js";import"./types-B3ZyTjxE.js";import"./Layer-B5j-14SA.js";import"./ReactUtils-DPXAlJoJ.js";import"./Label-CLhSutXl.js";import"./Text-B-IGFYif.js";import"./DOMUtils-B8xMLIPn.js";import"./ZIndexLayer-B9GJT-1H.js";import"./ActivePoints-DAneNfUf.js";import"./Dot-CkNBEorS.js";import"./RegisterGraphicalItemId-iR66q9wz.js";import"./GraphicalItemClipPath-Ctr3letV.js";import"./SetGraphicalItem-CpQPspCO.js";import"./useAnimationId-BZSEvVKv.js";import"./getRadiusAndStrokeWidthFromDot-frfqIR4_.js";import"./graphicalItemSelectors-BtIB5oqM.js";import"./index-D4ADZzYF.js";import"./ChartSizeDimensions-pADZR5mB.js";import"./OffsetShower-BC6NiJ8x.js";import"./PlotAreaShower-B40cJmGZ.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
