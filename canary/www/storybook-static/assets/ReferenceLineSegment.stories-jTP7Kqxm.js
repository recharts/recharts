import{e}from"./iframe-BeTvSsnM.js";import{R as i}from"./arrayEqualityCheck-D3IRE7yY.js";import{C as a}from"./ComposedChart-BO-NFwBX.js";import{C as p}from"./CartesianGrid-DerBIf9F.js";import{X as n}from"./XAxis-CikzDxWn.js";import{Y as s}from"./YAxis-htB2Xdvz.js";import{L as c}from"./Line-bp10Wzax.js";import{R as d}from"./ReferenceLine-BPAMqREK.js";import{R as g}from"./RechartsHookInspector-CQodTe4G.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bu9sKtx0.js";import"./PolarUtils-CiP_-J6C.js";import"./RechartsWrapper-DqbHfwZA.js";import"./hooks-Buy-B5J7.js";import"./axisSelectors-B3oALCrY.js";import"./zIndexSlice-ClDvfLGt.js";import"./CartesianChart-Btcoj6QB.js";import"./chartDataContext-BveSyHyY.js";import"./CategoricalChart-7psyK6-L.js";import"./CartesianAxis-CLVwDgLN.js";import"./Layer-vwm7UlyD.js";import"./Text-DQUPEW1Z.js";import"./DOMUtils-CPaL2uk1.js";import"./Label-DX1B0Se3.js";import"./ZIndexLayer-D3vvSLkM.js";import"./types-ColG541f.js";import"./ReactUtils-Bt5PnhOQ.js";import"./ActivePoints-B6jpmgBg.js";import"./Dot-DD-hz-w5.js";import"./RegisterGraphicalItemId-ktGcRGkW.js";import"./ErrorBarContext-MJgNid9a.js";import"./GraphicalItemClipPath-CllyT1DZ.js";import"./SetGraphicalItem-T9xLTiUd.js";import"./useAnimationId-CijMLLZk.js";import"./getRadiusAndStrokeWidthFromDot-BZQhgDsT.js";import"./ActiveShapeUtils-DAFlR22H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Do5x2l-c.js";import"./Trapezoid-zw4Ixv-f.js";import"./Sector-CUcldSZb.js";import"./Symbols-Drvhtafw.js";import"./Curve-B6pW5hMh.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BBjIj-68.js";import"./ChartSizeDimensions-8siL2NNx.js";import"./OffsetShower-Bali05F_.js";import"./PlotAreaShower-DNqWhhRF.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
