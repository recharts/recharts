import{e}from"./iframe-D-0IUJGK.js";import{R as i}from"./arrayEqualityCheck-C2_-Uu4b.js";import{C as p}from"./ComposedChart-COT4sTDA.js";import{C as a}from"./CartesianGrid-wYYb_ETo.js";import{X as n}from"./XAxis-CVV4DzFI.js";import{Y as s}from"./YAxis-DgsPqkY3.js";import{L as c}from"./Line-CSAZjpQX.js";import{R as d}from"./ReferenceLine-C_ZNcCmf.js";import{R as g}from"./RechartsHookInspector-ByAlRvo4.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-6ZRnbExh.js";import"./immer-BqKqj1gc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CufL0AhU.js";import"./index-BKZ6_UMT.js";import"./hooks-DdYzpI7S.js";import"./axisSelectors-I9kb0cKY.js";import"./d3-scale-bTazPGJf.js";import"./zIndexSlice-DSGfPW9M.js";import"./renderedTicksSlice-CBi406A9.js";import"./CartesianChart-D1C4weRi.js";import"./chartDataContext-CpBPNMx6.js";import"./CategoricalChart-Cvik2JIp.js";import"./CartesianAxis-BpaKC44j.js";import"./Layer-CTviFarP.js";import"./Text-7HuLOFJ_.js";import"./DOMUtils-CyqmOfaO.js";import"./Label-CQuheRKb.js";import"./ZIndexLayer-dNEhzNo8.js";import"./types-D1PFdIYW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DhoIBDOK.js";import"./ActivePoints-D-j70f6P.js";import"./Dot-9wQhAS5v.js";import"./RegisterGraphicalItemId-BG4vqgbk.js";import"./ErrorBarContext-CnqimuFK.js";import"./GraphicalItemClipPath-6R7g6XV3.js";import"./SetGraphicalItem-WLE6T4Wd.js";import"./useAnimationId-C9TFjIVY.js";import"./getRadiusAndStrokeWidthFromDot-CyGkBVNU.js";import"./ActiveShapeUtils-BDOyHxHs.js";import"./isPlainObject-BJcM5Fjp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-xceTB-v2.js";import"./Trapezoid-D-5x7DqH.js";import"./Sector-SAKjVkNh.js";import"./Symbols-CM5rDsvy.js";import"./symbol-DIeWOW3k.js";import"./step-DIrgAirM.js";import"./Curve-CUbaL9A5.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CvEiFoUh.js";import"./ChartSizeDimensions-BThuhk--.js";import"./OffsetShower-DnIfcGdO.js";import"./PlotAreaShower-BUKTEC4c.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
