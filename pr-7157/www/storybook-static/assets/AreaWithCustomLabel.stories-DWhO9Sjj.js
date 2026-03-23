import{e as t}from"./iframe-C-50EfA7.js";import{R as c}from"./arrayEqualityCheck-C4RXKFVZ.js";import{C as d}from"./ComposedChart-Ck4Ct4W9.js";import{A as l}from"./Area-BV8ahs-k.js";import{R as h}from"./RechartsHookInspector-B1kq2kh2.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyfkEz9s.js";import"./immer-4zqQKvZM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-4XlXwyP0.js";import"./index-DgChmAdf.js";import"./hooks-B8m9isT1.js";import"./axisSelectors-CpmXiDAA.js";import"./d3-scale-B6NfZS7A.js";import"./zIndexSlice-B4bKHPxl.js";import"./renderedTicksSlice-DmzhzySp.js";import"./CartesianChart-CGym5D6x.js";import"./chartDataContext-CVjjKugU.js";import"./CategoricalChart-BhkXQps_.js";import"./Curve-BrkfeITg.js";import"./types--ddu9raC.js";import"./step-D-hsF5Bn.js";import"./Layer-CjzK_mik.js";import"./ReactUtils-CO3iMEw6.js";import"./Label-D4RxJjz3.js";import"./Text-Bjbs5yvb.js";import"./DOMUtils-BJ8awGJ7.js";import"./ZIndexLayer-CEEBNKDA.js";import"./ActivePoints-DJzgHe1Z.js";import"./Dot-DJCM9NbX.js";import"./RegisterGraphicalItemId-CwXq2ePK.js";import"./GraphicalItemClipPath-BG4MlZY6.js";import"./SetGraphicalItem-k5xaJlVz.js";import"./useAnimationId-DEOKae8V.js";import"./getRadiusAndStrokeWidthFromDot-Bfo0EhLe.js";import"./graphicalItemSelectors-B3Le0wjm.js";import"./index-D0wRUjZQ.js";import"./ChartSizeDimensions-CLZ_38hy.js";import"./OffsetShower-B2bw8EI-.js";import"./PlotAreaShower-GeIkbIXn.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
