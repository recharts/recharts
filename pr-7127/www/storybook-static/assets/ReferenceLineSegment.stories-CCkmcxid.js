import{e}from"./iframe-DhSnVUUY.js";import{R as i}from"./arrayEqualityCheck-ItSr43uT.js";import{C as p}from"./ComposedChart-CygvqBNp.js";import{C as a}from"./CartesianGrid-H5SRNHVz.js";import{X as n}from"./XAxis-BK9sGi8f.js";import{Y as s}from"./YAxis-CXFxK72j.js";import{L as c}from"./Line-B0U88ML_.js";import{R as d}from"./ReferenceLine-Df8id3_O.js";import{R as g}from"./RechartsHookInspector-_iSQ6Sv6.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DDCkM2ln.js";import"./immer-ffnfnJI7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-yZud87Hm.js";import"./index-CW6mkywG.js";import"./hooks-DwPTB9f-.js";import"./axisSelectors-DHZbKxu8.js";import"./d3-scale-Ct4dajvC.js";import"./zIndexSlice-CmnFYU-3.js";import"./renderedTicksSlice-aQirpCka.js";import"./CartesianChart-ctNiBsLN.js";import"./chartDataContext-Bt56Um39.js";import"./CategoricalChart-ChCgxSjg.js";import"./CartesianAxis-wTVaN_w2.js";import"./Layer-DqA8yJsy.js";import"./Text-CBNPQM7i.js";import"./DOMUtils-D7qsrRP2.js";import"./Label-CbPieNct.js";import"./ZIndexLayer-qqef8KVB.js";import"./types-B9YiKk4f.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BaLETgkD.js";import"./ActivePoints-BvftcU8L.js";import"./Dot-DMOGBFVp.js";import"./RegisterGraphicalItemId-BW5epSWy.js";import"./ErrorBarContext-CqudBFLS.js";import"./GraphicalItemClipPath-DatVZLDO.js";import"./SetGraphicalItem-C2kFHRye.js";import"./useAnimationId-DocxG_ZJ.js";import"./getRadiusAndStrokeWidthFromDot-DsTA79K5.js";import"./ActiveShapeUtils-BCO2XZGI.js";import"./isPlainObject-DGz3R_rk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2VqkgWSF.js";import"./Trapezoid-DWk3aWgj.js";import"./Sector-D1ZNHkRR.js";import"./Symbols-Dh3_mjCF.js";import"./symbol-DWYWkMAQ.js";import"./step-CbaapRre.js";import"./Curve-BOb3x1Vv.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-AtwlN2q9.js";import"./ChartSizeDimensions-DmcIrBX8.js";import"./OffsetShower-BxnZU9HH.js";import"./PlotAreaShower-CiIWRvtc.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
