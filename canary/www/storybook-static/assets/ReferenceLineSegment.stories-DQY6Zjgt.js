import{e}from"./iframe-C75Mon5f.js";import{R as i}from"./arrayEqualityCheck-CCinF1xg.js";import{C as a}from"./ComposedChart-ZGVCoeE1.js";import{C as p}from"./CartesianGrid-q5_-yTof.js";import{X as n}from"./XAxis-D7rtUFHm.js";import{Y as s}from"./YAxis-BkOESioE.js";import{L as c}from"./Line-C-l_POkv.js";import{R as d}from"./ReferenceLine-CzzEEOVC.js";import{R as g}from"./RechartsHookInspector-DeYlN7PD.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DdslWj5k.js";import"./PolarUtils-gc7ouCGw.js";import"./RechartsWrapper-DtD9QMMH.js";import"./hooks-CF17bvZj.js";import"./axisSelectors-DwNVm2PQ.js";import"./zIndexSlice-Ch2lslkG.js";import"./CartesianChart-BO0IyvRA.js";import"./chartDataContext-CSddlAqh.js";import"./CategoricalChart-CjaXzYYa.js";import"./CartesianAxis-DsQ2XPjm.js";import"./Layer-DOYjA-jF.js";import"./Text-s5ZlGFzn.js";import"./DOMUtils-Bv5mFBkh.js";import"./Label-BHT6Zr6z.js";import"./ZIndexLayer-1hGb0ezX.js";import"./types-CgyKhdli.js";import"./ReactUtils-D5lwbz2E.js";import"./ActivePoints-wA62MW9B.js";import"./Dot-BY3Oxjgr.js";import"./RegisterGraphicalItemId-6Y3WjFD5.js";import"./ErrorBarContext-Dgxj0rk9.js";import"./GraphicalItemClipPath-CJQxttXy.js";import"./SetGraphicalItem-CMCPtKvr.js";import"./useAnimationId-BM6GD1p3.js";import"./getRadiusAndStrokeWidthFromDot-ChRl9x7G.js";import"./ActiveShapeUtils-PNhhpaVz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DTY1SpY4.js";import"./Trapezoid-D1lAuCqF.js";import"./Sector-PYXr-REd.js";import"./Symbols-BKwRHYAq.js";import"./Curve-uThrsaDe.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B1HMmzG7.js";import"./ChartSizeDimensions-DU3pXVrB.js";import"./OffsetShower-C98qoUcb.js";import"./PlotAreaShower-CzYV5sJZ.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
