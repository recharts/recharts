import{R as e}from"./iframe-DEalUshl.js";import{R as i}from"./zIndexSlice-CAksOI_1.js";import{C as n}from"./ComposedChart-CdALL1sF.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CkISHoQE.js";import{X as s}from"./XAxis-BITqqVCe.js";import{Y as c}from"./YAxis-DlX9l8Ve.js";import{L as d}from"./Line-KtdY_z4O.js";import{R as g}from"./ReferenceLine-Lh9aFpop.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BRTQsXjp.js";import"./throttle-DufRm-wd.js";import"./index-Bi7Cs1mM.js";import"./index-DdKBddy3.js";import"./RechartsWrapper-BK5G7zbx.js";import"./axisSelectors-DjgJ2Mrx.js";import"./polarAxisSelectors-BYiBdmVV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-R09LkYsV.js";import"./index-XZ5w84xu.js";import"./index-C7wIczSG.js";import"./renderedTicksSlice-f1LuiShq.js";import"./index-DCjef1wh.js";import"./CartesianChart-BhhkInk7.js";import"./ZIndexPortal-CZV1ifs7.js";import"./CategoricalChart-pEhIoip4.js";import"./CartesianAxis-kcZBykzp.js";import"./Layer-Bw1dSYwu.js";import"./Text-DnHyAqDr.js";import"./pageBackground-CVwWBmc5.js";import"./ZIndexLayer-BXnvY1k7.js";import"./Label-CBgDJ6T5.js";import"./types-CObAiW_q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BXiJvEeV.js";import"./step-BwbLlF7G.js";import"./path-DyVhHtw_.js";import"./LabelList-hToPfPST.js";import"./ActivePoints-CRXr9H7D.js";import"./Dot-DCVDv1q-.js";import"./activeStyles-DOcC-AXu.js";import"./useAnimationId-_MrDTWeG.js";import"./dataEntryStyles-D4Y7WVvW.js";import"./Symbols-BT8pREls.js";import"./symbol-DXqIeeEX.js";import"./ErrorBarContext-CNmRRpz3.js";import"./SetGraphicalItem-QRv9uJVL.js";import"./getRadiusAndStrokeWidthFromDot-DBGr2m_l.js";import"./ActiveShapeUtils-C0qxzm6E.js";import"./useEffectiveDataKey-Bk8kAFIQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
