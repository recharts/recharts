import{e as t}from"./iframe-BqavfRSI.js";import{R as c}from"./arrayEqualityCheck-Ra3gjxaW.js";import{C as d}from"./ComposedChart-B1SQxHiJ.js";import{A as l}from"./Area-Drltp5Bl.js";import{R as h}from"./RechartsHookInspector-DIZI_dr5.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BagVy590.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQN53ECK.js";import"./hooks-BhizAxMH.js";import"./axisSelectors-CrlizjCS.js";import"./zIndexSlice-cuW5CNY3.js";import"./CartesianChart-ANLepPjj.js";import"./chartDataContext-eZIgvl_0.js";import"./CategoricalChart-IGjGR71r.js";import"./Curve-Bl7M7m7v.js";import"./types-etyYATxu.js";import"./Layer-7F20iT3S.js";import"./ReactUtils-wyfG9-H0.js";import"./Label-DNJA6zIC.js";import"./Text-D8aeDJgV.js";import"./DOMUtils-BJ4FDKUp.js";import"./ZIndexLayer-BDqdije3.js";import"./ActivePoints-OGEKIs-O.js";import"./Dot-JmokcpW7.js";import"./RegisterGraphicalItemId-BslGmMBw.js";import"./GraphicalItemClipPath-yqNdVZ5Z.js";import"./SetGraphicalItem-Chc8WLtN.js";import"./useAnimationId-CE6HvtJ3.js";import"./getRadiusAndStrokeWidthFromDot-D8tTG8Mp.js";import"./graphicalItemSelectors-CTYjA39m.js";import"./index-BwE92fQv.js";import"./ChartSizeDimensions-uf7awrTX.js";import"./OffsetShower-CmxTasWx.js";import"./PlotAreaShower-RwBV7968.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
