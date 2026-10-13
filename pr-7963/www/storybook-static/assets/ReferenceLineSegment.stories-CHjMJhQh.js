import{R as e}from"./iframe-Bd2Bk_ai.js";import{R as i}from"./zIndexSlice-CvsBboU2.js";import{C as n}from"./ComposedChart-C6UPQc6u.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Dgfbzh10.js";import{X as s}from"./XAxis-CypmBaco.js";import{Y as c}from"./YAxis-Dddzu0fc.js";import{L as d}from"./Line-BYwtVnuU.js";import{R as g}from"./ReferenceLine-YchqBEyE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BgaPtkTt.js";import"./index-YOlWJ3UI.js";import"./index-BgWJcO-O.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BB0elGzE.js";import"./isWellBehavedNumber-DBLq0YlU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DzNno5mi.js";import"./axisSelectors-hjszmlUK.js";import"./d3-scale-DCtwXSpz.js";import"./index-DJuU84IJ.js";import"./index-nQQMczPK.js";import"./renderedTicksSlice-Cpd-xLFY.js";import"./index-Qipw3yHd.js";import"./CartesianChart-CrlTsjwB.js";import"./chartDataContext-BPm9-wzB.js";import"./CategoricalChart-CcrqLwDF.js";import"./CartesianAxis-DlgdGNPk.js";import"./Layer-Db-kRrip.js";import"./Text-oE3Ppk29.js";import"./pageBackground-S_W44ttK.js";import"./useId-CHbendDP.js";import"./useBackwardsCompatibleTheme-C0u865U4.js";import"./Label-O_u7VAtA.js";import"./ZIndexLayer-DQoX8EpG.js";import"./types-BTpVoC26.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-5l5JQbBY.js";import"./step-BGDWO4Dz.js";import"./path-DyVhHtw_.js";import"./activeStyles-C6x8xDfA.js";import"./useAnimationId-Cm1DhMix.js";import"./dataEntryStyles-BtdfRJJQ.js";import"./ActivePoints-kKexF7Xi.js";import"./Dot-DaQEzLOP.js";import"./ErrorBarContext-RrbFFwNs.js";import"./GraphicalItemClipPath-Dc7-6XW3.js";import"./SetGraphicalItem-Br5gILYL.js";import"./getRadiusAndStrokeWidthFromDot-D0dtyr_V.js";import"./ActiveShapeUtils-Dy2jST-f.js";import"./useEffectiveDataKey-_q65TZZ4.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
