import{R as e}from"./iframe-DG1yZPWZ.js";import{R as i}from"./zIndexSlice-asfAkO72.js";import{C as n}from"./ComposedChart-Bg3J3jLh.js";import{p}from"./Page-Cj8EiXz7.js";import{C as a}from"./CartesianGrid-Y-jvjIpU.js";import{X as s}from"./XAxis-Cx1v_iob.js";import{Y as c}from"./YAxis-D8fDz-Jg.js";import{L as d}from"./Line-DiHguxZv.js";import{R as g}from"./ReferenceLine-cFLDnnAh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-zC97C8Ii.js";import"./throttle-QLzPTGhw.js";import"./index-B8R5wD7Q.js";import"./index-Cm9Dvuha.js";import"./RechartsWrapper-Bchp_o7p.js";import"./axisSelectors-BLyrYAI0.js";import"./polarAxisSelectors-D8A3KxdK.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-p1mp5kit.js";import"./index-BlTUNZQc.js";import"./index-Bt1QYmkD.js";import"./renderedTicksSlice-DtyZfQXr.js";import"./index-D_9rD6su.js";import"./CartesianChart-JxE9ej3_.js";import"./ZIndexPortal-iKAZRpeg.js";import"./CategoricalChart-C_RyWiZg.js";import"./CartesianAxis-D2CTuJLk.js";import"./Layer-DzG8YxQe.js";import"./Text-jtW7RKFp.js";import"./DOMUtils-CnKUAWGq.js";import"./ZIndexLayer-Bf1pNdwz.js";import"./Label-CP0s7Q77.js";import"./types-DqMoKlmp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-D_uX30kF.js";import"./fillDefinitions-C7BJRYTP.js";import"./Curve-DcJDRZ_G.js";import"./step-U1uI6C26.js";import"./path-DyVhHtw_.js";import"./LabelList-DDOiPfis.js";import"./ActivePoints-CGsYeesF.js";import"./Dot-BvOm6Swm.js";import"./activeStyles-BM7qy7T1.js";import"./useAnimationId-C_9VGehw.js";import"./dataEntryStyles-B8PPCs32.js";import"./Symbols-0F73g9aR.js";import"./symbol-B3qgj-xo.js";import"./ErrorBarContext-C4LHoflN.js";import"./SetGraphicalItem-Cvt15Nbt.js";import"./getRadiusAndStrokeWidthFromDot-Bzdqwx5x.js";import"./ActiveShapeUtils-Dl04D47U.js";import"./useEffectiveDataKey-Qa_0ZIQ7.js";import"./CartesianScaleHelper-C9Oze4oB.js";const he={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},le=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,le as __namedExportsOrder,he as default};
