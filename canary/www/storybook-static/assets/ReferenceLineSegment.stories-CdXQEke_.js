import{R as e}from"./iframe-KA27XLgH.js";import{R as i}from"./zIndexSlice-B5jZTfpG.js";import{C as n}from"./ComposedChart-NCoKrWfI.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Df2RxOFB.js";import{X as s}from"./XAxis-BELMhMr5.js";import{Y as c}from"./YAxis-Db8yqFFW.js";import{L as d}from"./Line-BBMiCx56.js";import{R as g}from"./ReferenceLine-BLqGIB3v.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DljT9-ag.js";import"./get-CjriyByo.js";import"./throttle-CoiFOdIR.js";import"./index-CkBS2fzk.js";import"./index-Ckg884lQ.js";import"./RechartsWrapper-TR_xYtI_.js";import"./axisSelectors-C9UcFeRr.js";import"./polarAxisSelectors-C3Tv-TSh.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C3G3_Gqb.js";import"./index-DRgQ1v-L.js";import"./index-DjOzCNYa.js";import"./renderedTicksSlice-m7yN3OkN.js";import"./index-B2SGDklF.js";import"./fillDefinitions-BQM9erML.js";import"./CartesianChart-fWhWe39l.js";import"./chartDataContext-BllWN6wY.js";import"./CategoricalChart-Bne8SWuB.js";import"./CartesianAxis-DSAJb9yU.js";import"./Layer-MjJu6ARy.js";import"./Text-8iqEDvQJ.js";import"./ZIndexLayer-R6ZlJQ0g.js";import"./Label-B69AByr3.js";import"./types-CQ5wDBZk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-BbOzSNOE.js";import"./Curve-C0q5au3B.js";import"./step-Dw4WzDeI.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CRFv6Bpc.js";import"./ActivePoints-deQG4rJH.js";import"./Dot-CKQX6HZM.js";import"./activeStyles-Rsdle8Gs.js";import"./useAnimationId-ByBbFw3W.js";import"./Symbols-CazKqwF3.js";import"./symbol-CGclnZ-V.js";import"./ErrorBarContext-DNhP_BG0.js";import"./SetGraphicalItem-gJWf9_t-.js";import"./ActiveShapeUtils-BAOEM0H-.js";import"./useEffectiveDataKey-BN70kZIV.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
