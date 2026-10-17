import{R as e}from"./iframe-Cf4rQ-NM.js";import{R as i}from"./zIndexSlice-DMD_kE2u.js";import{C as n}from"./ComposedChart-D9NfWs3n.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Dijd34fp.js";import{X as s}from"./XAxis-BIvdIl6o.js";import{Y as c}from"./YAxis-CNqs_HAY.js";import{L as d}from"./Line-D7eG1rq4.js";import{R as g}from"./ReferenceLine-DJGOACMO.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B2HUKrsu.js";import"./index-BCa2sd2-.js";import"./index-DeMDRv06.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dge1pFTV.js";import"./isWellBehavedNumber-DGgr4zRD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BteUr7Vj.js";import"./axisSelectors-9PR0sTvr.js";import"./d3-scale-Lc72VcRD.js";import"./index-xRR_iGj4.js";import"./index-1RjEuLS2.js";import"./renderedTicksSlice-CE9QQLn-.js";import"./index-BsaRhs6B.js";import"./CartesianChart-CpdyhfTD.js";import"./chartDataContext-Dx7ZG5X9.js";import"./CategoricalChart-BUsdXEus.js";import"./CartesianAxis-DkanQVq_.js";import"./Layer-Cw23EJyc.js";import"./Text-CI7nXg92.js";import"./pageBackground-ja8baDve.js";import"./useId-CX6V0BQ1.js";import"./useBackwardsCompatibleTheme-Beid_g9Z.js";import"./Label-DJuA9Y4I.js";import"./ZIndexLayer-DsOZ8kUq.js";import"./types-PE1Wk2R_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-Dr4UIWQ5.js";import"./step-Bcwq9xqU.js";import"./path-DyVhHtw_.js";import"./activeStyles-Do9UPxka.js";import"./useAnimationId-D_Che_T2.js";import"./dataEntryStyles-DPFF45fD.js";import"./ActivePoints-C6euMq8T.js";import"./Dot-B2NKpqWj.js";import"./ErrorBarContext-CaHoTzTO.js";import"./GraphicalItemClipPath-Dmqa19CH.js";import"./SetGraphicalItem-Dfb9XQen.js";import"./getRadiusAndStrokeWidthFromDot-DixpZj8q.js";import"./ActiveShapeUtils-BaLJZ67g.js";import"./useEffectiveDataKey-BQAfbWh7.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
