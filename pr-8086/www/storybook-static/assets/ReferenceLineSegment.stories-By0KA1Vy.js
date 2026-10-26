import{R as e}from"./iframe-BK3Sisey.js";import{R as i}from"./zIndexSlice-BetgAyCc.js";import{C as n}from"./ComposedChart-D1QZxiQE.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-6-enjERH.js";import{X as s}from"./XAxis-DZM3ZRq3.js";import{Y as c}from"./YAxis-D-L_pdrV.js";import{L as d}from"./Line-XxjUVcCS.js";import{R as g}from"./ReferenceLine-BLjom-JS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C_F1VMOc.js";import"./throttle-biJe8rDV.js";import"./index-DRUOZNOo.js";import"./index-de72ObtI.js";import"./RechartsWrapper-DORC7p_L.js";import"./axisSelectors-BspbFoiI.js";import"./polarAxisSelectors-DUPrNhEV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bzw5IHoB.js";import"./index-c0twB4Fw.js";import"./index-B0fPjlHo.js";import"./renderedTicksSlice-By71GZi8.js";import"./index-LqSrX9BA.js";import"./CartesianChart-BDnUkJu9.js";import"./chartDataContext-DOIuQ-MV.js";import"./CategoricalChart-CF961821.js";import"./CartesianAxis-DZgjpOyW.js";import"./Layer-D1HH46xf.js";import"./Text-CRgN4x4u.js";import"./pageBackground-CgvVcPsa.js";import"./useId-zAfHK1iY.js";import"./ZIndexLayer-BE0p1xel.js";import"./Label-UVuQgYwr.js";import"./dataEntryStyles-B4V6KkDF.js";import"./types-DkavCTl8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DG5NWTvD.js";import"./step-DmrcgL_N.js";import"./path-DyVhHtw_.js";import"./activeStyles-Tawg351V.js";import"./useAnimationId-CS-FJwCc.js";import"./ActivePoints-D-7HMJrF.js";import"./Dot-SPXRnAns.js";import"./Symbols-PPNvVUUW.js";import"./symbol-BQrXtAQf.js";import"./RegisterGraphicalItemId-BBZLH_Nk.js";import"./ErrorBarContext-HVXU_-2l.js";import"./SetGraphicalItem-Cx8SQgq9.js";import"./getRadiusAndStrokeWidthFromDot-Bj490LjI.js";import"./ActiveShapeUtils-CgpbZaR3.js";import"./useEffectiveDataKey-Cwm-IkPM.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
