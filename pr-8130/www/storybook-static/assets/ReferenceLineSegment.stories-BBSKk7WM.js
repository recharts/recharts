import{R as e}from"./iframe-DP_a1dmY.js";import{R as i}from"./zIndexSlice-rjLYhejy.js";import{C as n}from"./ComposedChart-CSr8xtVa.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CGuJ-d56.js";import{X as s}from"./XAxis-1vjsoN9j.js";import{Y as c}from"./YAxis-DqctmLMG.js";import{L as d}from"./Line-B0f2Q_SE.js";import{R as g}from"./ReferenceLine-BjRZUE-S.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BUA_ea65.js";import"./throttle-BChPb-_m.js";import"./index-Cpxqs5RX.js";import"./index-CZaxsyUC.js";import"./RechartsWrapper-B4nQvyyr.js";import"./axisSelectors-DEw1mS80.js";import"./polarAxisSelectors-C8froBOH.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CQwtQXkW.js";import"./index-B7p3ZvHO.js";import"./index-BKlw8SLM.js";import"./renderedTicksSlice-vKkijtCh.js";import"./index-CDLzOnEQ.js";import"./fillDefinitions-ClRF1Jdn.js";import"./CartesianChart-BUksmgNb.js";import"./ZIndexPortal-DjdaUnXL.js";import"./CategoricalChart-Cb54doQf.js";import"./CartesianAxis-C1uxWw-Y.js";import"./Layer-CZaWfsGO.js";import"./Text-Dp_r5yDX.js";import"./DOMUtils-mf3xp45a.js";import"./ZIndexLayer-DlEiCgSn.js";import"./Label-ja-Sj5Q7.js";import"./types-CDz_n5r5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BWt9Gc4p.js";import"./step-D5N_P6yo.js";import"./path-DyVhHtw_.js";import"./LabelList-DL3Ydiqu.js";import"./ActivePoints-DnIoFkEo.js";import"./Dot-FQPok2YB.js";import"./activeStyles-BV6CK3cL.js";import"./useAnimationId-CFEdeYhu.js";import"./dataEntryStyles-4JNZcrwL.js";import"./Symbols-rf6N_jcM.js";import"./symbol-DeF3ladi.js";import"./ErrorBarContext-tkKb7Nex.js";import"./SetGraphicalItem-5vhsybgs.js";import"./getRadiusAndStrokeWidthFromDot-BgEfcfUu.js";import"./ActiveShapeUtils-DC7CnxCS.js";import"./useEffectiveDataKey-D45Rikd2.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
