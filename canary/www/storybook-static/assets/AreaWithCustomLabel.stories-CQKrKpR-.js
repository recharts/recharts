import{e as t}from"./iframe-C1zBrMCd.js";import{R as c}from"./arrayEqualityCheck-Df8r3poz.js";import{C as d}from"./ComposedChart-BvN08KBc.js";import{A as l}from"./Area-kd-_Azr6.js";import{R as h}from"./RechartsHookInspector-BISA2G0k.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BsIlMHa7.js";import"./PolarUtils-_NKSevVn.js";import"./RechartsWrapper-Cv1tlCaV.js";import"./hooks-WF-Co-wK.js";import"./axisSelectors-DB8TkCkM.js";import"./zIndexSlice-hFBZ82Qc.js";import"./CartesianChart-B5UDYtnc.js";import"./chartDataContext-DI2kF2Ct.js";import"./CategoricalChart-2Vole5cF.js";import"./Curve-BNkJ4mrR.js";import"./types-HpBDQdg7.js";import"./Layer-D3PE35Mq.js";import"./ReactUtils-D752dz6O.js";import"./Label-6nnLE5h5.js";import"./Text-dJAbnPql.js";import"./DOMUtils-DOdR4DF9.js";import"./ZIndexLayer-BetO650l.js";import"./ActivePoints-CGgxDnb1.js";import"./Dot-BCpEYGUg.js";import"./RegisterGraphicalItemId-Bok-rErT.js";import"./GraphicalItemClipPath-M-I7Ebzy.js";import"./SetGraphicalItem-ZpSJ1YOV.js";import"./useAnimationId-D3t9NmUg.js";import"./getRadiusAndStrokeWidthFromDot-DliVvnt0.js";import"./graphicalItemSelectors-BJxE6ryu.js";import"./index-D7UfPOGu.js";import"./ChartSizeDimensions-Dtypf1Rq.js";import"./OffsetShower-DOhEeiaZ.js";import"./PlotAreaShower-B0-XWkzL.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
