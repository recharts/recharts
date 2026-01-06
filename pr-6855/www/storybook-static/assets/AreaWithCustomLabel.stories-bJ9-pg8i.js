import{e as t}from"./iframe-DLhPWxyK.js";import{R as c}from"./arrayEqualityCheck-m1RhjOmx.js";import{C as d}from"./ComposedChart-DNdReU5t.js";import{A as l}from"./Area-CzXzvydB.js";import{R as h}from"./RechartsHookInspector-HNjcmSsy.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-E8e_3mlR.js";import"./PolarUtils-C6JBvuC0.js";import"./RechartsWrapper-DgQpMTik.js";import"./hooks-CPfFhdP1.js";import"./axisSelectors-H2aLd2HR.js";import"./zIndexSlice-CkjTQxGc.js";import"./CartesianChart-C_LwKB0K.js";import"./chartDataContext-DLN8QOpK.js";import"./CategoricalChart-B42UgGES.js";import"./Curve-DeIwtCC2.js";import"./types-DGdi1KYp.js";import"./Layer-T-_zDyRj.js";import"./ReactUtils-CkbQi9iw.js";import"./Label-Cfm9uiYS.js";import"./Text-1NI18g4k.js";import"./DOMUtils-DXMqjRDX.js";import"./ZIndexLayer-CE4rF1P8.js";import"./ActivePoints-CMJVeQ-U.js";import"./Dot-BSI9AMQL.js";import"./RegisterGraphicalItemId-BfrmZf1G.js";import"./GraphicalItemClipPath-B90mhSGP.js";import"./SetGraphicalItem-FkCdxtAh.js";import"./useAnimationId-CcCb5ZgY.js";import"./getRadiusAndStrokeWidthFromDot-CualhsEn.js";import"./graphicalItemSelectors-C6bwYjmT.js";import"./index-DdNKA2qu.js";import"./ChartSizeDimensions-2_L3pVFL.js";import"./OffsetShower-Bubd5l8I.js";import"./PlotAreaShower-DZzXcMEl.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
