import{R as e}from"./iframe-Knpgl7bH.js";import{R as i}from"./zIndexSlice-D_JvDPdC.js";import{C as n}from"./ComposedChart-Bz1qQazH.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BgJ1w8c3.js";import{X as s}from"./XAxis-C-pGSkx8.js";import{Y as c}from"./YAxis-BPwWglGS.js";import{L as d}from"./Line-CN57dnng.js";import{R as g}from"./ReferenceLine-B6Cl7Zda.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-E9uQbFMh.js";import"./throttle-CxSZxpUT.js";import"./index-CMcZZbu7.js";import"./index-flTgedm9.js";import"./RechartsWrapper-RFuLYV8r.js";import"./axisSelectors-DzWAhEt3.js";import"./polarAxisSelectors-_ossNi2Y.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-loN--ZL0.js";import"./index-DBy5LZ5m.js";import"./index-CtQ1gC2H.js";import"./renderedTicksSlice-BhGylDYr.js";import"./index-DCjquko5.js";import"./fillDefinitions-D-i4EmzR.js";import"./CartesianChart-BRDQdhrJ.js";import"./chartDataContext-DMJoTbMZ.js";import"./CategoricalChart-BP24IEWh.js";import"./CartesianAxis-d_ZDtRCQ.js";import"./Layer-BPxKddK_.js";import"./Text-2mzzLjyY.js";import"./ZIndexLayer-B7sLboyu.js";import"./Label-CUqt0NPv.js";import"./types-TSpqzzom.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-OQ1wYRa8.js";import"./Curve-CoppqT_1.js";import"./step-CX6BMVFF.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CP1LR4vd.js";import"./ActivePoints-CLrwMv3j.js";import"./Dot-B0z7ItJf.js";import"./activeStyles-Dx-Bb5mv.js";import"./useAnimationId-sq4gt-Rn.js";import"./Symbols-DbPd2MPF.js";import"./symbol-D5IcYaCj.js";import"./ErrorBarContext-CNCcQkpF.js";import"./SetGraphicalItem-CJ2jMQXm.js";import"./ActiveShapeUtils-DmSfMRR5.js";import"./useEffectiveDataKey-DbJ28nvU.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
