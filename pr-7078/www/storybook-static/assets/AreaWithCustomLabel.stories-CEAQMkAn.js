import{e as t}from"./iframe-VPJyTU3C.js";import{R as c}from"./arrayEqualityCheck-CXN3l8IH.js";import{C as d}from"./ComposedChart-BcIOapvV.js";import{A as l}from"./Area-Caw8YXpw.js";import{R as h}from"./RechartsHookInspector-vDuc6y-U.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BvWNwQsu.js";import"./immer-BfJiACOe.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCl2bEfe.js";import"./index-DQ7yK4Y3.js";import"./hooks-nSftgnTX.js";import"./axisSelectors-saXNBwIQ.js";import"./d3-scale-DGhAz-7E.js";import"./zIndexSlice-Dq9melht.js";import"./renderedTicksSlice-Eh1g0N0V.js";import"./CartesianChart-hKkJhyE8.js";import"./chartDataContext-cb_R-PX2.js";import"./CategoricalChart-Cn-cyvDx.js";import"./Curve-C7OUetYn.js";import"./types-CXB2nDIk.js";import"./step-AwB8z33l.js";import"./Layer-7CDZtGSl.js";import"./ReactUtils-DXFU76qs.js";import"./Label-9AdH7Mzz.js";import"./Text-DR-p8moo.js";import"./DOMUtils-CEVaRraF.js";import"./ZIndexLayer-Bu1rH0K3.js";import"./ActivePoints-BG43CjVF.js";import"./Dot-DKFvoc5_.js";import"./RegisterGraphicalItemId-Ba6mil3n.js";import"./GraphicalItemClipPath-CQ7JIwC5.js";import"./SetGraphicalItem-Dq4tocaN.js";import"./useAnimationId-83t5rQCc.js";import"./getRadiusAndStrokeWidthFromDot-CLsj08-5.js";import"./graphicalItemSelectors-6cqjPRUY.js";import"./index-C07bsWnd.js";import"./ChartSizeDimensions-CmjLLHly.js";import"./OffsetShower-3s1Vs-j5.js";import"./PlotAreaShower-B0po3Iq4.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
