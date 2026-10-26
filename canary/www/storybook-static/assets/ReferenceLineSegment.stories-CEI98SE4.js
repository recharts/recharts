import{R as e}from"./iframe-COIGCNXI.js";import{R as i}from"./zIndexSlice-SGGyD0oS.js";import{C as n}from"./ComposedChart-BUtbgPw8.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-4AMzfBUY.js";import{X as s}from"./XAxis-CKJPf7Wd.js";import{Y as c}from"./YAxis-MNgk7gZM.js";import{L as d}from"./Line-ma9HaId0.js";import{R as g}from"./ReferenceLine-DMYIV8MH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CZS8aiFv.js";import"./throttle-BlyN22Fr.js";import"./index-NGI2UEpG.js";import"./index-CUG4PNHE.js";import"./RechartsWrapper-CSAoBtxd.js";import"./axisSelectors-BNkJw-2U.js";import"./polarAxisSelectors-BmRQgzqt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-VptsFP1A.js";import"./index-C5of7-FY.js";import"./index-C_FuKoEm.js";import"./renderedTicksSlice-BSSoKuOA.js";import"./index-BPTy_Aa_.js";import"./CartesianChart-CrElt8Ki.js";import"./chartDataContext-oGIvKB_Y.js";import"./CategoricalChart-CDhmqNu9.js";import"./CartesianAxis-DcbYB9kS.js";import"./Layer-CTEYWFZQ.js";import"./Text-BbaXzr-_.js";import"./pageBackground-B1zZiLSr.js";import"./useId-uRdV4O5l.js";import"./ZIndexLayer-CkLN3vho.js";import"./Label-BzUBYLaO.js";import"./dataEntryStyles-lF4b12oa.js";import"./types-CFJTQnsm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-C5TSA5DD.js";import"./step-C9LyDlWE.js";import"./path-DyVhHtw_.js";import"./activeStyles-DPX8m1qG.js";import"./useAnimationId-C1qK0jXb.js";import"./ActivePoints-C-R45DhW.js";import"./Dot-vDehyzRD.js";import"./RegisterGraphicalItemId-DZ8oXJnI.js";import"./ErrorBarContext-B7OlR22L.js";import"./SetGraphicalItem-D643u_Ng.js";import"./getRadiusAndStrokeWidthFromDot-BWolhaji.js";import"./ActiveShapeUtils-DcPjXX29.js";import"./useEffectiveDataKey-DqlQcCPn.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
