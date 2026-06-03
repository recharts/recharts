import{c as t}from"./iframe-BL0vDUY1.js";import{g as m}from"./zIndexSlice-DAAOwj36.js";import{L as s}from"./LineChart-DfiqPNx9.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DW5G8Isa.js";import{X as l}from"./XAxis-BqoRDN9a.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-gfsZ7y3h.js";import"./index-vndO0F7c.js";import"./index-BQNr1vMH.js";import"./get-m6Gdqips.js";import"./resolveDefaultProps-ZSI9VFO3.js";import"./isWellBehavedNumber-C9kFBhSy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DJ0hXPGE.js";import"./index-C8Q9Qlzv.js";import"./index-B3rgiiof.js";import"./renderedTicksSlice-DgGULbP3.js";import"./axisSelectors-DLsK43Oc.js";import"./d3-scale-DCyWVOsR.js";import"./CartesianChart-BhVqKQAk.js";import"./chartDataContext-BU-8Dj6p.js";import"./CategoricalChart-Dx4CHgqj.js";import"./Curve-Cc4T7AcR.js";import"./types-C45pB88z.js";import"./step-BQd4YsZo.js";import"./path-DyVhHtw_.js";import"./Layer-CaYvEIsW.js";import"./ReactUtils-2UhHZda9.js";import"./Label-C0g2piVD.js";import"./Text-0yUJxWRz.js";import"./DOMUtils-DBRkXAWK.js";import"./ZIndexLayer-BGBBuQwI.js";import"./ActivePoints-DnbgDyGh.js";import"./Dot-BQDzh87g.js";import"./RegisterGraphicalItemId-CkGBqTpZ.js";import"./ErrorBarContext-rpVVIvWF.js";import"./GraphicalItemClipPath-CzWahSjY.js";import"./SetGraphicalItem-CpMSDPev.js";import"./useAnimationId-Dpb32_8Y.js";import"./getRadiusAndStrokeWidthFromDot-BPkJ8Kki.js";import"./ActiveShapeUtils-BDjEEgo3.js";import"./CartesianAxis-D1s0-vhb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
