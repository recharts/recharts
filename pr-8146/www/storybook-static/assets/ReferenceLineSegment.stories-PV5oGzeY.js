import{R as e}from"./iframe-BSZdIOb1.js";import{R as i}from"./zIndexSlice-x95uaAeG.js";import{C as n}from"./ComposedChart-CDWJbZ6n.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CjVxY4bS.js";import{X as s}from"./XAxis-G0FofNWa.js";import{Y as c}from"./YAxis-BidQV3Bs.js";import{L as d}from"./Line-CwNvjckU.js";import{R as g}from"./ReferenceLine-BwPO9IIH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D3SG1Voa.js";import"./throttle-CSUb4-AW.js";import"./index-MExGibHi.js";import"./index-zsHkXx4R.js";import"./RechartsWrapper-BkCZoC17.js";import"./axisSelectors-YkanTYDO.js";import"./polarAxisSelectors-3PQGkC2Y.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-4UnkzbhN.js";import"./index-bJBh3omb.js";import"./index-TMoyXsD5.js";import"./renderedTicksSlice-BJuGaZyZ.js";import"./index-KnfBFAge.js";import"./fillDefinitions-DxVVI7tr.js";import"./CartesianChart-Bw5m5b1-.js";import"./ZIndexPortal-4kIQjZh0.js";import"./CategoricalChart-DA0Cyxxs.js";import"./CartesianAxis-DAsXTQiH.js";import"./Layer-uHX297jU.js";import"./Text-Bz3RDDRF.js";import"./DOMUtils-bqeGnrQd.js";import"./ZIndexLayer-yq1Eddx2.js";import"./Label-Cim8hMW4.js";import"./types-Dvrgl9IY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-ClwfprbW.js";import"./step-DTMXh9wp.js";import"./path-DyVhHtw_.js";import"./LabelList-lC_U3aX6.js";import"./ActivePoints-x8Ig6mBR.js";import"./Dot-BTQ1Y3aj.js";import"./activeStyles-DKcFBEEB.js";import"./useAnimationId-CA_zjy4c.js";import"./dataEntryStyles-CFBEHlKQ.js";import"./Symbols-CWFcXiNy.js";import"./symbol-DRMp_7qO.js";import"./ErrorBarContext-Co8GUKFe.js";import"./SetGraphicalItem-C-eJsLZg.js";import"./getRadiusAndStrokeWidthFromDot-CVUy3O5W.js";import"./ActiveShapeUtils-D_M0EMWZ.js";import"./useEffectiveDataKey-e2XyZYHS.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,he as __namedExportsOrder,fe as default};
