import{e}from"./iframe-D1NCNqUw.js";import{R as i}from"./arrayEqualityCheck-CQjIdQCx.js";import{C as a}from"./ComposedChart-3m62MgnI.js";import{C as p}from"./CartesianGrid-Bd5YNvuL.js";import{X as n}from"./XAxis-u0hdrjRw.js";import{Y as s}from"./YAxis-A9YbMvOB.js";import{L as c}from"./Line-6NLHKn5o.js";import{R as d}from"./ReferenceLine-ngLjU-GP.js";import{R as g}from"./RechartsHookInspector-ZreWXCAw.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Djsbq22w.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DHOsEYDB.js";import"./hooks-JIh16Fdo.js";import"./axisSelectors-I3OUkjeV.js";import"./zIndexSlice-B6vCGJts.js";import"./CartesianChart-JOI6h5bX.js";import"./chartDataContext-Dg8xMp5I.js";import"./CategoricalChart-Dz9zkg_l.js";import"./CartesianAxis-C56nwzMo.js";import"./Layer-BCRy6dX1.js";import"./Text-IRTIkJKa.js";import"./DOMUtils-DHPWyRpf.js";import"./Label-BNrwDKuI.js";import"./ZIndexLayer-DGrkiEgC.js";import"./types-gvwBC4-3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BB1Bvtm-.js";import"./ActivePoints-B3fzw2dP.js";import"./Dot-Cs7zSf6c.js";import"./RegisterGraphicalItemId-C1aQBUzf.js";import"./ErrorBarContext-DeYCKUhW.js";import"./GraphicalItemClipPath-BqkTWDYP.js";import"./SetGraphicalItem-D7KZSAt9.js";import"./useAnimationId-CaRLwgfn.js";import"./getRadiusAndStrokeWidthFromDot-CMWXAyTc.js";import"./ActiveShapeUtils-5Ae3vqBy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNiHE16P.js";import"./Trapezoid-BR4vRuXB.js";import"./Sector-TTqZtEvI.js";import"./Symbols-DMX5HiXT.js";import"./Curve-C3pHY6tL.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BmYae47F.js";import"./ChartSizeDimensions-CQGmt7Jm.js";import"./OffsetShower-jlBTnn9Z.js";import"./PlotAreaShower-CLC5srun.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
