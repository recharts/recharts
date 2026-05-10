import{e as t}from"./iframe-Cl35quqC.js";import{R as c}from"./arrayEqualityCheck-D9UIghxi.js";import{C as d}from"./ComposedChart-uUijpKq4.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CSvcliY4.js";import{R as u}from"./RechartsHookInspector-BZ6jgrdq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BhrqjrLa.js";import"./immer-CY0Lk3WW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-jOGgq2Y2.js";import"./index-_ky2ePMv.js";import"./hooks-CNddY0Tb.js";import"./axisSelectors-DeCbtXoM.js";import"./d3-scale-BkxfZ9aI.js";import"./zIndexSlice-DkkJQXQO.js";import"./renderedTicksSlice-BLU8jnqb.js";import"./CartesianChart-CGp9HSBf.js";import"./chartDataContext-ZINcULtA.js";import"./CategoricalChart-0NzQu1bM.js";import"./Curve-hm8tQy1x.js";import"./types-D677_BtS.js";import"./step-BlMx9OF4.js";import"./Layer-CeD-uJbZ.js";import"./ReactUtils-DZzHwFX5.js";import"./Label-DLz8rNT7.js";import"./Text-DNnOYqaK.js";import"./DOMUtils-DIh1PeI4.js";import"./ZIndexLayer-H1bn9xe9.js";import"./ActivePoints-B4P09zpr.js";import"./Dot-BR2Bc69w.js";import"./RegisterGraphicalItemId-BLnqRJKY.js";import"./GraphicalItemClipPath-Dk-2dIcR.js";import"./SetGraphicalItem-CECI28wk.js";import"./useAnimationId-BL2H4qbR.js";import"./getRadiusAndStrokeWidthFromDot-BWrVeHgV.js";import"./graphicalItemSelectors-DG-5Ar8J.js";import"./index-BdngFJZK.js";import"./ChartSizeDimensions-Dc6hCc8f.js";import"./OffsetShower-DCGl5kEz.js";import"./PlotAreaShower-D3XS0cIi.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
