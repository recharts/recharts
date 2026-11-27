import{R as e}from"./iframe-WNWxHA5w.js";import{R as i}from"./zIndexSlice-BVgHV45y.js";import{C as n}from"./ComposedChart-DpKMEvwE.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DHdAq2Ns.js";import{X as s}from"./XAxis-DfMY5qBP.js";import{Y as c}from"./YAxis-C2XMsDVi.js";import{L as d}from"./Line-lsf5adcu.js";import{R as g}from"./ReferenceLine-BHUh4aIh.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B2gYQvk0.js";import"./get-CjriyByo.js";import"./throttle-DWlA00LM.js";import"./index-C5BrRLOu.js";import"./index-B_zAmF-o.js";import"./RechartsWrapper-MLPBuzwi.js";import"./axisSelectors-DqPRQxzX.js";import"./polarAxisSelectors-CgU14Zha.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-zFOgTZT_.js";import"./index-CWM66Coj.js";import"./index-CN82-OMW.js";import"./renderedTicksSlice-DXbq9Sus.js";import"./index-Ihw2JtUd.js";import"./fillDefinitions-Byjs2RvA.js";import"./CartesianChart-CStGKL8K.js";import"./chartDataContext-CQ2a4iuz.js";import"./CategoricalChart-DxS1nkjF.js";import"./CartesianAxis-BHmhgeQf.js";import"./Layer-DaOdaJ8o.js";import"./Text-Cw_EXTQi.js";import"./ZIndexLayer-yj-imWcv.js";import"./Label-CezBD4yi.js";import"./types-jc9vmIop.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-7Ou40HZN.js";import"./Curve-aBjBuLLa.js";import"./step-QSf3RYd6.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-Dk4XNyaK.js";import"./ActivePoints-Dr8JqR2c.js";import"./Dot-DNElWDLL.js";import"./activeStyles-CeKhNTWp.js";import"./useAnimationId-PYVmWLIg.js";import"./Symbols-DIUF60nI.js";import"./symbol-Cx8bofxp.js";import"./ErrorBarContext-Bqg4FQ8M.js";import"./SetGraphicalItem-Cb_G_uW5.js";import"./ActiveShapeUtils-MT88_CXC.js";import"./useEffectiveDataKey-Dv_aTiOG.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
