import{R as e}from"./iframe-DTHZbTt-.js";import{R as i}from"./zIndexSlice-CwvyUZAf.js";import{C as n}from"./ComposedChart-BGyl5BrV.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DcCVUBM2.js";import{X as s}from"./XAxis-DNNXvE0w.js";import{Y as c}from"./YAxis-D2uAEQ_1.js";import{L as d}from"./Line-BAiXLkVa.js";import{R as g}from"./ReferenceLine-B3qhxQmZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-_YZWlOkj.js";import"./index-Fy1PXU7Z.js";import"./index-Daz8taF-.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-kDJk6VzV.js";import"./isWellBehavedNumber-Bozcvyc-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BEg2HwJ0.js";import"./axisSelectors-BOmHsD9v.js";import"./d3-scale-BmJqysRF.js";import"./index-DguN7IkA.js";import"./index-CIOmtNBi.js";import"./renderedTicksSlice-D7ZIJ8O6.js";import"./index-CrHWP68A.js";import"./CartesianChart-CFx76W2A.js";import"./chartDataContext-HhXd6bIQ.js";import"./CategoricalChart-BuK74uML.js";import"./CartesianAxis-Ck9hBcPI.js";import"./Layer-DW8M9VQm.js";import"./Text-D1xR-i1r.js";import"./pageBackground-D-Popr0j.js";import"./useId-BWpg6He6.js";import"./useBackwardsCompatibleTheme-Cm_dQqJG.js";import"./Label-0KYVoNB4.js";import"./ZIndexLayer--bHJC1rV.js";import"./types-DfO2mLHa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BFSDmDlA.js";import"./step-BNxJFgbJ.js";import"./path-DyVhHtw_.js";import"./activeStyles-C3naVa7V.js";import"./useAnimationId-Dfuq3lyA.js";import"./dataEntryStyles-DkIuZeQk.js";import"./ActivePoints-XYXWcFmf.js";import"./Dot-BoMbzqSu.js";import"./ErrorBarContext-BnuvGJQ5.js";import"./GraphicalItemClipPath-EAO5wM-I.js";import"./SetGraphicalItem-SNY8eCLu.js";import"./getRadiusAndStrokeWidthFromDot-BBjNZ8_1.js";import"./ActiveShapeUtils-CMR5ure_.js";import"./useEffectiveDataKey-5jqQvgZD.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
