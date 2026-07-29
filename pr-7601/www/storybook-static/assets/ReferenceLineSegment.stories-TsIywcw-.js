import{R as e}from"./iframe-B1mwOZ4B.js";import{R as i}from"./zIndexSlice-DpKDqXzy.js";import{C as a}from"./ComposedChart-BJ29ova_.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DBXsj84G.js";import{X as s}from"./XAxis-BJXCAx8k.js";import{Y as c}from"./YAxis-CJdoflUo.js";import{L as d}from"./Line-Doz1RfmB.js";import{R as g}from"./ReferenceLine-5aR0Jj5F.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B9hrHP2z.js";import"./index-CGmAV-n6.js";import"./index-DfE0c-YN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C5OuETHs.js";import"./isWellBehavedNumber-CJikzJGt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CO3J1RuZ.js";import"./index-h2iP9BkR.js";import"./index-CErrAQ9r.js";import"./renderedTicksSlice-CU0BXE-7.js";import"./axisSelectors-CHibCpWI.js";import"./d3-scale-C-ENdXUt.js";import"./CartesianChart-0J6AxZg0.js";import"./chartDataContext-4XOxxqNR.js";import"./CategoricalChart-aKqfV8G8.js";import"./CartesianAxis-DVp2DYfW.js";import"./Layer-BPIZMWg2.js";import"./Text-BvU8EdL8.js";import"./DOMUtils-j3EH7wUz.js";import"./Label-B_N5n860.js";import"./ZIndexLayer-Dgr6-NYc.js";import"./types-D3n9ld0M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-ATwIj2YD.js";import"./isBuffer-Crkas5dz.js";import"./Curve-BdmH34os.js";import"./step-CnGXO0Ja.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CP4Ed5tB.js";import"./useAnimationId-DOfhPbEn.js";import"./ActivePoints-HVYpWw6k.js";import"./Dot-DiSbgsbS.js";import"./RegisterGraphicalItemId-CNYa3zPu.js";import"./ErrorBarContext-BUi-bCeZ.js";import"./GraphicalItemClipPath-B5MjopOD.js";import"./SetGraphicalItem-D7FiLvSi.js";import"./getRadiusAndStrokeWidthFromDot-CB_M050h.js";import"./ActiveShapeUtils-CKuXh55Z.js";import"./CartesianScaleHelper-C9Oze4oB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
