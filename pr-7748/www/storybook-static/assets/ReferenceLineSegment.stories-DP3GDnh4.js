import{R as e}from"./iframe-Gg4ukcCI.js";import{R as i}from"./zIndexSlice-DlNyh_xi.js";import{C as n}from"./ComposedChart-C1UNd2GX.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-C_BDxow-.js";import{X as s}from"./XAxis-DOco_gcc.js";import{Y as c}from"./YAxis-DOuLffri.js";import{L as d}from"./Line-BjKthlHa.js";import{R as g}from"./ReferenceLine-i2T92lWJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DhxEFOug.js";import"./throttle-CUgxKpyu.js";import"./index-C2HXgDT0.js";import"./index-CXFDGi8T.js";import"./RechartsWrapper-D9XD6s1l.js";import"./axisSelectors-a1SI1Wf4.js";import"./polarAxisSelectors-D8GOATX4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Br8c0ClH.js";import"./index-HuopnsCQ.js";import"./index-BeAfusT4.js";import"./renderedTicksSlice-DvSqlga1.js";import"./index-BpeL0xzJ.js";import"./fillDefinitions-ihHkonIl.js";import"./CartesianChart-BjLEuFc_.js";import"./chartDataContext-CnuflyS8.js";import"./CategoricalChart-COQQ2eYQ.js";import"./CartesianAxis-BfWLv6d8.js";import"./Layer-BoT4M5vY.js";import"./Text-b8eoKvTG.js";import"./ZIndexLayer-D5rwnqu2.js";import"./Label-DdUKW8N3.js";import"./types-BPcXCIuq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-DvraL6JM.js";import"./Curve-EfD-yUMs.js";import"./step-ClUmF8Xf.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-oHOQ7SK5.js";import"./ActivePoints-BD-WR_m2.js";import"./Dot-KKWWgG3f.js";import"./activeStyles-tWC5f0r5.js";import"./useAnimationId-DNK2Kfuo.js";import"./Symbols-Dd8eQ8SU.js";import"./symbol-KoL4YSEk.js";import"./ErrorBarContext-CJwSW4gu.js";import"./SetGraphicalItem-_cwLqG8F.js";import"./ActiveShapeUtils-DuHRv64l.js";import"./useEffectiveDataKey-DtjZjT7w.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
