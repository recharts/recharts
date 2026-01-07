import{e as t}from"./iframe-DmHHE4lP.js";import{R as c}from"./arrayEqualityCheck-t0Foyoao.js";import{C as d}from"./ComposedChart-6GwosE_U.js";import{A as l}from"./Area-C9L46kbX.js";import{R as h}from"./RechartsHookInspector-BtHYkDer.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BLzxoPkq.js";import"./PolarUtils-BW7uHe1I.js";import"./RechartsWrapper-C1weQJJR.js";import"./hooks-bj9uygVC.js";import"./axisSelectors-Cnyrx2M2.js";import"./zIndexSlice-hpqEhuIa.js";import"./CartesianChart-C2N9FbeV.js";import"./chartDataContext-DxXmJ6_0.js";import"./CategoricalChart-dxXdOniQ.js";import"./Curve-Dz5aWL22.js";import"./types-BHzH6qVj.js";import"./Layer-B8hcK7zD.js";import"./ReactUtils-ChDQdCA9.js";import"./Label-BJNNtMeT.js";import"./Text-CR1SXK76.js";import"./DOMUtils-v_MlezWk.js";import"./ZIndexLayer-Cu-NSXrz.js";import"./ActivePoints-B0pAIqrf.js";import"./Dot-DWsi5cp1.js";import"./RegisterGraphicalItemId-D2_orhVu.js";import"./GraphicalItemClipPath-CceA_Jya.js";import"./SetGraphicalItem-CnsK4wo_.js";import"./useAnimationId-DURIfTWV.js";import"./getRadiusAndStrokeWidthFromDot-aytWJAnv.js";import"./graphicalItemSelectors-BuXcKGQd.js";import"./index-B2ii1mag.js";import"./ChartSizeDimensions-DBLPZq_x.js";import"./OffsetShower-D9qv0nDO.js";import"./PlotAreaShower-rpYBhLSK.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
