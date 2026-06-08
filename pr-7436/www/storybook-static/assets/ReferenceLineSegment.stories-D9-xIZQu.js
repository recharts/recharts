import{R as e}from"./iframe-8lQPdWqg.js";import{R as i}from"./zIndexSlice-HgvYxHxO.js";import{C as a}from"./ComposedChart-nJhIiDmQ.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-D1Asfpul.js";import{X as s}from"./XAxis-DJEDKgVX.js";import{Y as c}from"./YAxis-B8-aAKdo.js";import{L as d}from"./Line-DQbvyftM.js";import{R as g}from"./ReferenceLine-DKZ6n_Qh.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BzJ0g7On.js";import"./index-DDpCqwLC.js";import"./index-DuAs5Bye.js";import"./get-BByPkrE2.js";import"./resolveDefaultProps-D5naey2E.js";import"./isWellBehavedNumber-Bo5Fj-TS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-1T0MVTTa.js";import"./index-4GPQXHZz.js";import"./index-DC8gB5sz.js";import"./renderedTicksSlice-BULVvGQu.js";import"./axisSelectors-6HnY6kw7.js";import"./d3-scale-CBB0hoc6.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BwVyT9hr.js";import"./chartDataContext-p8mU6nY6.js";import"./CategoricalChart-DXrGsRNK.js";import"./CartesianAxis-DwSWDszA.js";import"./Layer-CDc8atAP.js";import"./Text-B197qhYG.js";import"./DOMUtils-BTKUKMTR.js";import"./Label-Dm0B15Tp.js";import"./ZIndexLayer-CBi4-krB.js";import"./types-CT--YnpL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-bBnKBK2X.js";import"./step-BSoAUg6l.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DC4nP9_V.js";import"./useAnimationId-Bv0dv7sa.js";import"./ActivePoints-CO3DAqSg.js";import"./Dot-Bl-weaMj.js";import"./RegisterGraphicalItemId-CXVUtMmc.js";import"./ErrorBarContext-B402Fsm3.js";import"./GraphicalItemClipPath-DqeRAZts.js";import"./SetGraphicalItem-BjZEdkKC.js";import"./getRadiusAndStrokeWidthFromDot-CgN7yRoc.js";import"./ActiveShapeUtils-BLPRWSBX.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
