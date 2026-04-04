import{e}from"./iframe-C2tGGjcA.js";import{R as i}from"./arrayEqualityCheck-BU-juwUe.js";import{C as p}from"./ComposedChart-DayldmqV.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CCLgVJuJ.js";import{X as s}from"./XAxis-B3stUdiP.js";import{Y as c}from"./YAxis-BWTDEGMA.js";import{L as d}from"./Line-DJLQaP34.js";import{R as g}from"./ReferenceLine-BO1VaKPQ.js";import{R as f}from"./RechartsHookInspector-OVWL5RuZ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B8hWxOXb.js";import"./immer-_oM2zjxd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3vVxtfU.js";import"./index-D-_8hcei.js";import"./hooks-BZM1IfiG.js";import"./axisSelectors-hCgVeVzv.js";import"./d3-scale-BwpTFf5Z.js";import"./zIndexSlice-C7QkOMmM.js";import"./renderedTicksSlice-DflWSLZG.js";import"./CartesianChart-JwGyw0GC.js";import"./chartDataContext-Mxcb3X27.js";import"./CategoricalChart-CloeZ4Py.js";import"./CartesianAxis-C6X8qFWR.js";import"./Layer-DkBbKCaQ.js";import"./Text-Bh-qeukp.js";import"./DOMUtils-CeJzVK9F.js";import"./Label-CR6_Nrr4.js";import"./ZIndexLayer-CwH7lvHt.js";import"./types-BqNjVw0B.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DgRasAzu.js";import"./ActivePoints-BmxyddQB.js";import"./Dot-DIQAy5B9.js";import"./RegisterGraphicalItemId-CvlZwjiz.js";import"./ErrorBarContext-VVzEJg2g.js";import"./GraphicalItemClipPath-DE_aTN3O.js";import"./SetGraphicalItem-DZyDJnZv.js";import"./useAnimationId-BPqjt2CS.js";import"./getRadiusAndStrokeWidthFromDot-C3Gfg5xu.js";import"./ActiveShapeUtils-EmfZ6gwX.js";import"./isPlainObject-BG4W1lTc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-jZnK6OPy.js";import"./Trapezoid-Cl-OWzTg.js";import"./Sector-IdhW6Sh6.js";import"./Symbols-BW2J6Sn7.js";import"./symbol-CsNNy4jV.js";import"./step-CB6j9muh.js";import"./Curve-3ofIPf5W.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BLdpS26r.js";import"./ChartSizeDimensions-DbZPdrpK.js";import"./OffsetShower-CCVPYATS.js";import"./PlotAreaShower-p59PN-FQ.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
