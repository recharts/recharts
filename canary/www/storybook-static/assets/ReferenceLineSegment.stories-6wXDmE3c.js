import{R as e}from"./iframe-nnpNEl0c.js";import{R as i}from"./zIndexSlice-BIxplyvp.js";import{C as n}from"./ComposedChart-CNqzZLnk.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DkQzXODW.js";import{X as s}from"./XAxis-DmxowzrZ.js";import{Y as c}from"./YAxis-EeSB_m0u.js";import{L as d}from"./Line-BBeoyI6l.js";import{R as g}from"./ReferenceLine-BgH0DkqU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D1Co5jVK.js";import"./throttle-CIO-2ra4.js";import"./index-B_vNRzQ4.js";import"./index-BjMcvTtw.js";import"./RechartsWrapper-VFnYK8V7.js";import"./axisSelectors-DWnmhIgM.js";import"./polarAxisSelectors-jvUDxmEV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-WiXCw0il.js";import"./index-Db30zo8R.js";import"./index-DcZvMf-G.js";import"./renderedTicksSlice-BMWsCoi3.js";import"./index-CONo-L8r.js";import"./CartesianChart-CujBFFkW.js";import"./ZIndexPortal-Cp9AMkdy.js";import"./CategoricalChart-BMMRGjAS.js";import"./CartesianAxis-BqAJOGeS.js";import"./Layer-CzHD4ald.js";import"./Text-D0rrhxSu.js";import"./pageBackground-BLVyr9N2.js";import"./ZIndexLayer-BDSIPNIK.js";import"./Label-tyPo7vJI.js";import"./dataEntryStyles-BmV4LTxI.js";import"./types-BmjMrM54.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BBlYovqd.js";import"./step-BJvIh3cb.js";import"./path-DyVhHtw_.js";import"./LabelList-BNO7oHuM.js";import"./ActivePoints-J_iA54Fy.js";import"./Dot-BfnVBDM9.js";import"./activeStyles-iZJvEVBW.js";import"./useAnimationId-CJPhZ8Cq.js";import"./Symbols-B8oOAKpP.js";import"./symbol-OKw49DjP.js";import"./RegisterGraphicalItemId-DWpzbaDo.js";import"./ErrorBarContext-BjOiJE8k.js";import"./SetGraphicalItem-CRQScpdw.js";import"./getRadiusAndStrokeWidthFromDot-DWNEs6NN.js";import"./ActiveShapeUtils-DRqheEEB.js";import"./useEffectiveDataKey-DTKrhjFl.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
