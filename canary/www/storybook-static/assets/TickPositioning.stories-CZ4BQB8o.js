import{c as t}from"./iframe-CJZgj0uU.js";import{g as m}from"./zIndexSlice-BZ2O-OQH.js";import{L as s}from"./LineChart-DNpykYrR.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-BFiCebMO.js";import{X as l}from"./XAxis-BSW-Wlgv.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BIrrzgtK.js";import"./index-BaU2Z89k.js";import"./index-BRhVkoAq.js";import"./get-BEAZ2r52.js";import"./resolveDefaultProps-FKfcMfmF.js";import"./isWellBehavedNumber-Nplq3bnb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQ7nKJcr.js";import"./index-CU49z8K0.js";import"./index-KU4xeJqQ.js";import"./renderedTicksSlice-Bd5uuDyd.js";import"./axisSelectors-Q9vNN-fQ.js";import"./d3-scale-DdptYiWa.js";import"./CartesianChart-BaL0sKso.js";import"./chartDataContext-BuQzXvR1.js";import"./CategoricalChart-Q8RRHSJw.js";import"./Curve-Cyl-l43N.js";import"./types-CiRy8kfJ.js";import"./step-DNKj4THz.js";import"./path-DyVhHtw_.js";import"./Layer-ydyUpJJb.js";import"./ReactUtils-GZ1OoiCv.js";import"./Label-CJIrHnSQ.js";import"./Text-D112bEeq.js";import"./DOMUtils-BgafkoVk.js";import"./ZIndexLayer-DPHRw4Ib.js";import"./ActivePoints-IwLpaKOt.js";import"./Dot-BRBzm1sk.js";import"./RegisterGraphicalItemId-Y2xEXS3n.js";import"./ErrorBarContext-CS0wxcMb.js";import"./GraphicalItemClipPath-DHmOdu8W.js";import"./SetGraphicalItem-xXSm9JS4.js";import"./useAnimationId-Bs6-Zm7y.js";import"./getRadiusAndStrokeWidthFromDot-D1SY7hYV.js";import"./ActiveShapeUtils-BjI4G98c.js";import"./CartesianAxis-BX7jntaJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0] as const;
    return <ResponsiveContainer>
        <LineChart data={ticks}
      // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => <XAxis dataKey="value" key={intervalOption} interval={intervalOption} xAxisId={index} label={intervalOption} height={70} />)}
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ot=["TickPositioning"];export{r as TickPositioning,ot as __namedExportsOrder,it as default};
