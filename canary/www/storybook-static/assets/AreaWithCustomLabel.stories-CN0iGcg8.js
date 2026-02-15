import{e as t}from"./iframe-yr43iL0r.js";import{R as c}from"./arrayEqualityCheck-CCQ3u8Vd.js";import{C as d}from"./ComposedChart-1KeYqgHX.js";import{A as l}from"./Area-CuIRlbEK.js";import{R as h}from"./RechartsHookInspector-DBIDewuF.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dq1WM_rK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CBwzaw9q.js";import"./hooks-DV8SPP2s.js";import"./axisSelectors-CxU8esto.js";import"./zIndexSlice-BFVNfIo_.js";import"./renderedTicksSlice-C-Ibv-v0.js";import"./CartesianChart-XyvFTYw0.js";import"./chartDataContext-CzToVTlc.js";import"./CategoricalChart-NU99wwp5.js";import"./Curve-BbMbMcrT.js";import"./types-C8fXyDYe.js";import"./Layer-CmzX8B_O.js";import"./ReactUtils-BmYUR6Pw.js";import"./Label-BXAwjjII.js";import"./Text-D8JJ6HaF.js";import"./DOMUtils-Dis7On6r.js";import"./ZIndexLayer-Cs9veiYj.js";import"./ActivePoints-C__HlfVm.js";import"./Dot-DO5eF7L8.js";import"./RegisterGraphicalItemId-CyCvhas2.js";import"./GraphicalItemClipPath-Cvcgdpb5.js";import"./SetGraphicalItem-BOYYMY6l.js";import"./useAnimationId-CevQg5hG.js";import"./getRadiusAndStrokeWidthFromDot-DEWUqlIZ.js";import"./graphicalItemSelectors-oY4HT1sB.js";import"./index-BF6TeZpk.js";import"./ChartSizeDimensions-DVhO3wZZ.js";import"./OffsetShower-po89n_GW.js";import"./PlotAreaShower-uj30a7QU.js";const tt={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const et=["CustomizedLabel"];export{e as CustomizedLabel,et as __namedExportsOrder,tt as default};
