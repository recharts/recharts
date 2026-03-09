import{e as t}from"./iframe-zNZ6gtuS.js";import{R as c}from"./arrayEqualityCheck-Dt2SCAs7.js";import{C as d}from"./ComposedChart-Dsj55aBj.js";import{A as l}from"./Area-CUetqbGN.js";import{R as h}from"./RechartsHookInspector-C4FQcsDn.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DRoPYLx6.js";import"./immer-M5VU9jjz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C9d9AYjY.js";import"./index-FhY_ESTg.js";import"./hooks-CbBhgown.js";import"./axisSelectors-CtziQzAW.js";import"./d3-scale-B2IzxI2Z.js";import"./zIndexSlice-DvWemZ8b.js";import"./renderedTicksSlice-D_TKCYvY.js";import"./CartesianChart-C4jVrU_0.js";import"./chartDataContext-Cti6NzM5.js";import"./CategoricalChart-B0XYoVAJ.js";import"./Curve-o1yhe_oH.js";import"./types-ynSAt5pr.js";import"./step-CCZqHQ-h.js";import"./Layer-BQ0S_2Uh.js";import"./ReactUtils-CDHy-yxP.js";import"./Label-BCeegupp.js";import"./Text-BklBVUCs.js";import"./DOMUtils-FYWG6Ion.js";import"./ZIndexLayer-BqvP1SAm.js";import"./ActivePoints-CYKr6AgU.js";import"./Dot-DYFOoPhj.js";import"./RegisterGraphicalItemId-B9AuoKeF.js";import"./GraphicalItemClipPath-CbT-MflU.js";import"./SetGraphicalItem-C5rIwT1-.js";import"./useAnimationId-C73SjrYi.js";import"./getRadiusAndStrokeWidthFromDot-OAyCmPPZ.js";import"./graphicalItemSelectors-Cw8dX2Q4.js";import"./index-NY9m0Yqy.js";import"./ChartSizeDimensions-kkrl-9fd.js";import"./OffsetShower-ZOCzTQ0h.js";import"./PlotAreaShower-CmvJo0mK.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
