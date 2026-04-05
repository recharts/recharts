import{e as t}from"./iframe-BM7P_3hj.js";import{R as c}from"./arrayEqualityCheck-Bmgq3ZTz.js";import{C as d}from"./ComposedChart-EZo1iYMi.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CLPntrQA.js";import{R as u}from"./RechartsHookInspector-DIlL8ISE.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZ0zKn9L.js";import"./immer-D-2u7HXy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B8tVHnOf.js";import"./index-Xlum1YFK.js";import"./hooks-BY0xPmaj.js";import"./axisSelectors-Dx6sVhYx.js";import"./d3-scale-B0w3FH9e.js";import"./zIndexSlice-jDjA289q.js";import"./renderedTicksSlice-DVjCr-Qu.js";import"./CartesianChart-Be0mgfMK.js";import"./chartDataContext-CJ-F_waf.js";import"./CategoricalChart-CRvKBBfd.js";import"./Curve-CqITwbJh.js";import"./types-o-wQVJEv.js";import"./step-DyBB5gGy.js";import"./Layer-C6LffHMU.js";import"./ReactUtils-DyDnYFSa.js";import"./Label-BQD1_uHZ.js";import"./Text-CQ7mU3s7.js";import"./DOMUtils-DrlqJZq7.js";import"./ZIndexLayer-D7eOOyk7.js";import"./ActivePoints-CM_0l3Rg.js";import"./Dot-C4-mkX5o.js";import"./RegisterGraphicalItemId-B3DF5B-x.js";import"./GraphicalItemClipPath-DJd9bIYV.js";import"./SetGraphicalItem-BjV3tQT1.js";import"./useAnimationId-CDf7Yg_k.js";import"./getRadiusAndStrokeWidthFromDot-BxdGbl3w.js";import"./graphicalItemSelectors-hwGLjdl7.js";import"./index-BpI1Zh7a.js";import"./ChartSizeDimensions-75IDTK2b.js";import"./OffsetShower-BvXPFVVi.js";import"./PlotAreaShower-Cu3BCYLx.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
