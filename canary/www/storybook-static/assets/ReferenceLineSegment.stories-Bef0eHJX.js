import{R as e}from"./iframe-CMDkES_H.js";import{R as i}from"./zIndexSlice-CEXNkTXm.js";import{C as n}from"./ComposedChart-AN7xQ-23.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BqeRaqC0.js";import{X as s}from"./XAxis-B5q3F6Uy.js";import{Y as c}from"./YAxis-C3tuYQmx.js";import{L as d}from"./Line-Cw74JevM.js";import{R as g}from"./ReferenceLine-CgX6jwf4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BBu38DQb.js";import"./throttle-BV0akTiG.js";import"./index-nmLk2qd-.js";import"./index-Cycxm7rW.js";import"./RechartsWrapper-YdCgLXYS.js";import"./axisSelectors-BgqFub1M.js";import"./polarAxisSelectors-B2-HhSnm.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Vem8QkvK.js";import"./index-CDFg-t_S.js";import"./index-CQ6GchDM.js";import"./renderedTicksSlice-BzpVxRSL.js";import"./index-Dwicv9nR.js";import"./fillDefinitions-aMvFJMZF.js";import"./CartesianChart-D9ZN9vwZ.js";import"./chartDataContext-U2SqLEu1.js";import"./CategoricalChart-CNCtCgVg.js";import"./CartesianAxis-KTct3My8.js";import"./Layer-Dxo4pAJK.js";import"./Text-CXN2lt2h.js";import"./ZIndexLayer-Dr7m0amd.js";import"./Label-DkUV91yB.js";import"./types-BRdSNrFn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-lt9C0hSq.js";import"./step-CtpAouP5.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CQKyrMQS.js";import"./ActivePoints-BkO0kzKb.js";import"./Dot-DVBxqdJG.js";import"./activeStyles-uNCwuaQZ.js";import"./useAnimationId-Br5Fw6SL.js";import"./Symbols-KRGqLXgG.js";import"./symbol-CkUX_hdb.js";import"./ErrorBarContext-DWVCzs9M.js";import"./SetGraphicalItem-BWtk-2FX.js";import"./getRadiusAndStrokeWidthFromDot-DhdxEzB3.js";import"./ActiveShapeUtils-BI-HqHtF.js";import"./useEffectiveDataKey-DEHLWy8h.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
