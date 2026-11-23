import{R as e}from"./iframe-Bo9DV_RF.js";import{R as i}from"./zIndexSlice-ChGxP5I9.js";import{C as n}from"./ComposedChart-BSjH4eO6.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Wpeq6wtu.js";import{X as s}from"./XAxis-hzMML8e7.js";import{Y as c}from"./YAxis-CK1muElb.js";import{L as d}from"./Line-A1JFBNP7.js";import{R as g}from"./ReferenceLine-uIXoynVF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D7E8wIuA.js";import"./throttle-CaIo9_rk.js";import"./index-Bm5Sdcd_.js";import"./index-BpsrDHro.js";import"./RechartsWrapper-D6SFyLdk.js";import"./axisSelectors-BUIYbOzk.js";import"./polarAxisSelectors-DgJeannD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BoInTKj4.js";import"./index-Dj5W-yVu.js";import"./index-PvdQicqP.js";import"./renderedTicksSlice-BwP3mXWs.js";import"./index-9iDWVYtT.js";import"./fillDefinitions-CP3VVI6H.js";import"./CartesianChart-8vtQlYBx.js";import"./chartDataContext-PPXpQSNc.js";import"./CategoricalChart-BdPgBmoC.js";import"./CartesianAxis-_PdJmc1T.js";import"./Layer-C6lb2zxM.js";import"./Text-DQn8LN2h.js";import"./ZIndexLayer-D-AkOEB1.js";import"./Label-BywaPoTf.js";import"./types-DltK9JsS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-CqTAMhL0.js";import"./Curve-Dm-GvmWp.js";import"./step-5knHZEdX.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DVGQZ3dA.js";import"./ActivePoints-CviyBCS_.js";import"./Dot-DxKRRRBk.js";import"./activeStyles-mw-DKPXy.js";import"./useAnimationId-TvJ5tZp1.js";import"./Symbols-CudC3e00.js";import"./symbol-4lof-nfP.js";import"./ErrorBarContext-BobbhAG8.js";import"./SetGraphicalItem-BA1U1Prk.js";import"./ActiveShapeUtils-Cnqk-jZd.js";import"./useEffectiveDataKey-Er14ucR5.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
