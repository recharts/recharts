import{R as e}from"./iframe-BaaAHsSG.js";import{R as i}from"./zIndexSlice-BDxXfDj3.js";import{C as n}from"./ComposedChart-Be2dfBSe.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-9wE0RfBT.js";import{X as s}from"./XAxis-aYI2fpM3.js";import{Y as c}from"./YAxis-ChlB0m7y.js";import{L as d}from"./Line-DieT9HS4.js";import{R as g}from"./ReferenceLine-Cmr7HUss.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cr73uuZ7.js";import"./throttle-Dj8lvlLv.js";import"./index-D4xmIBj5.js";import"./index-CE_XEtoH.js";import"./RechartsWrapper-23oR8mwB.js";import"./axisSelectors-D3-EkVgN.js";import"./polarAxisSelectors-DEr0nz1I.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ck8yTiZB.js";import"./index-H_I4rIPo.js";import"./index-wqmW4YDp.js";import"./renderedTicksSlice-BIfFMhm7.js";import"./index-DlVxU2VG.js";import"./CartesianChart-C2TNi3kH.js";import"./ZIndexPortal-uu5Z5Bf6.js";import"./CategoricalChart-BheijUwq.js";import"./CartesianAxis-DPnfQAxf.js";import"./Layer-CoUaFIbR.js";import"./Text-DTGEXNgB.js";import"./pageBackground-B7fTEEtp.js";import"./ZIndexLayer-CjMMPibs.js";import"./Label-Bv3DZIw1.js";import"./types-B5Uvpfau.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BPWuJn0g.js";import"./step-YRU5Bg_6.js";import"./path-DyVhHtw_.js";import"./LabelList-D5T0UDIp.js";import"./ActivePoints-BGknUoTd.js";import"./Dot-CzIAlgyO.js";import"./activeStyles-NrCYIabX.js";import"./useAnimationId-BBJNRgOy.js";import"./dataEntryStyles-B1dajl5B.js";import"./Symbols-D2tZDjg2.js";import"./symbol-BJVAlnOc.js";import"./ErrorBarContext-Cye9geJm.js";import"./SetGraphicalItem-WQYWKVUP.js";import"./getRadiusAndStrokeWidthFromDot-D47qw3YP.js";import"./ActiveShapeUtils-BWukeBwd.js";import"./useEffectiveDataKey-Dr89jUol.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
