import{R as e}from"./iframe-DfPB0Wpx.js";import{R as i}from"./zIndexSlice-Vk5rQcki.js";import{C as n}from"./ComposedChart-CjfhBU-E.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DpWT8FbB.js";import{X as s}from"./XAxis-COzQcKyh.js";import{Y as c}from"./YAxis-BQ4oN9O6.js";import{L as d}from"./Line-CJuI2uq-.js";import{R as g}from"./ReferenceLine-DR7z49s4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bt24D4BM.js";import"./throttle-DIfZf6Rg.js";import"./index-Ax9OSmSr.js";import"./index-jmk38lRQ.js";import"./RechartsWrapper-DGPnCUTJ.js";import"./axisSelectors-CYP2U9Wf.js";import"./polarAxisSelectors-UZRyPZtr.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CsMflnTp.js";import"./index-TI8GAjTb.js";import"./index-C7rcjmTF.js";import"./renderedTicksSlice-DnnXNCqP.js";import"./index-DZEvNl2j.js";import"./CartesianChart-C7bLJAaP.js";import"./ZIndexPortal-BHohkWL-.js";import"./CategoricalChart-B65nKayz.js";import"./CartesianAxis-CNCSz6Km.js";import"./Layer-8vRP1mbc.js";import"./Text-DaqQgel7.js";import"./DOMUtils-C1IGffYG.js";import"./ZIndexLayer-no9MVuHN.js";import"./Label-2zEOllgr.js";import"./types-D0-9LK1x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Curve-NvY6PR48.js";import"./step-C1TIQlMm.js";import"./path-DyVhHtw_.js";import"./LabelList-Nkxiy7Jt.js";import"./ActivePoints-RRa8EpH6.js";import"./Dot-DTEgYyAs.js";import"./activeStyles-ChnEmJqB.js";import"./useAnimationId-C0yM1MFO.js";import"./dataEntryStyles-Dc4guk2V.js";import"./Symbols-DuFTa5a3.js";import"./symbol-DWiA1K--.js";import"./ErrorBarContext-CQDbXt_x.js";import"./SetGraphicalItem-BxFlQPUr.js";import"./getRadiusAndStrokeWidthFromDot-CgvxCR2o.js";import"./ActiveShapeUtils-CvH07gq7.js";import"./useEffectiveDataKey-DKbAeGMk.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
