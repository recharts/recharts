import{e as t}from"./iframe-Bnj2hik-.js";import{R as c}from"./arrayEqualityCheck-CvUuuvKy.js";import{C as d}from"./ComposedChart-DOtfomr9.js";import{A as l}from"./Area-BuZ0oHvv.js";import{R as h}from"./RechartsHookInspector-C_AeFs2E.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CPe3qGY9.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-B0Rp0hND.js";import"./hooks-Bya6Ssf9.js";import"./axisSelectors-DFI1wFeY.js";import"./zIndexSlice-CXHmHRtI.js";import"./CartesianChart-D6wdmsep.js";import"./chartDataContext-DBEZcAkK.js";import"./CategoricalChart-6PDUcg0C.js";import"./Curve-DmusCa7H.js";import"./types-BDwtxhLH.js";import"./Layer-CTa4OydD.js";import"./ReactUtils-Df0RtsJl.js";import"./Label-CGAHaC0Q.js";import"./Text-CZ97J0qN.js";import"./DOMUtils-JoNXkoCv.js";import"./ZIndexLayer-AOmKG0iq.js";import"./ActivePoints-Zh-g-ty0.js";import"./Dot-pJFhyCMJ.js";import"./RegisterGraphicalItemId-DiJF1Hfp.js";import"./GraphicalItemClipPath-UbaOhT8l.js";import"./SetGraphicalItem-DzQbpKu1.js";import"./useAnimationId-APU2l9w6.js";import"./getRadiusAndStrokeWidthFromDot-DrD-zBLL.js";import"./graphicalItemSelectors-8BfZnAMo.js";import"./index-BXTK0ASf.js";import"./ChartSizeDimensions-fd2MIhjM.js";import"./OffsetShower-h-8uohRc.js";import"./PlotAreaShower-BfrbL-Yz.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
