import{e as t}from"./iframe-C75Mon5f.js";import{R as s}from"./arrayEqualityCheck-CCinF1xg.js";import{L as m}from"./LineChart-D9vPXV-U.js";import{L as c}from"./Line-C-l_POkv.js";import{X as d}from"./XAxis-D7rtUFHm.js";import{R as l}from"./RechartsHookInspector-DeYlN7PD.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DdslWj5k.js";import"./PolarUtils-gc7ouCGw.js";import"./RechartsWrapper-DtD9QMMH.js";import"./hooks-CF17bvZj.js";import"./axisSelectors-DwNVm2PQ.js";import"./zIndexSlice-Ch2lslkG.js";import"./CartesianChart-BO0IyvRA.js";import"./chartDataContext-CSddlAqh.js";import"./CategoricalChart-CjaXzYYa.js";import"./Layer-DOYjA-jF.js";import"./ReactUtils-D5lwbz2E.js";import"./Label-BHT6Zr6z.js";import"./Text-s5ZlGFzn.js";import"./DOMUtils-Bv5mFBkh.js";import"./ZIndexLayer-1hGb0ezX.js";import"./ActivePoints-wA62MW9B.js";import"./Dot-BY3Oxjgr.js";import"./types-CgyKhdli.js";import"./RegisterGraphicalItemId-6Y3WjFD5.js";import"./ErrorBarContext-Dgxj0rk9.js";import"./GraphicalItemClipPath-CJQxttXy.js";import"./SetGraphicalItem-CMCPtKvr.js";import"./useAnimationId-BM6GD1p3.js";import"./getRadiusAndStrokeWidthFromDot-ChRl9x7G.js";import"./ActiveShapeUtils-PNhhpaVz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DTY1SpY4.js";import"./Trapezoid-D1lAuCqF.js";import"./Sector-PYXr-REd.js";import"./Symbols-BKwRHYAq.js";import"./Curve-uThrsaDe.js";import"./CartesianAxis-DsQ2XPjm.js";import"./index-B1HMmzG7.js";import"./ChartSizeDimensions-DU3pXVrB.js";import"./OffsetShower-C98qoUcb.js";import"./PlotAreaShower-CzYV5sJZ.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
