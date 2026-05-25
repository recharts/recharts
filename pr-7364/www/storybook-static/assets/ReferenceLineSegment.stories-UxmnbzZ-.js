import{e}from"./iframe-Cv0qW2ko.js";import{g as i}from"./arrayEqualityCheck-dw2UPZEJ.js";import{C as a}from"./ComposedChart-smS6LLp1.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-DMXVmlBW.js";import{X as s}from"./XAxis-BT82JTqb.js";import{Y as c}from"./YAxis-B0w9h5lM.js";import{L as d}from"./Line-G_mcTi4c.js";import{R as g}from"./ReferenceLine-CWsBcCcw.js";import{R as f}from"./RechartsHookInspector-CkUp2GTc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Do4zKK3Y.js";import"./immer-BQQ92H22.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-dCBWaPWI.js";import"./index-B3dmmAiW.js";import"./hooks-CJSe3LTj.js";import"./axisSelectors-C2eMQvfK.js";import"./d3-scale-Dsb1SLZO.js";import"./zIndexSlice-CHCTzA5s.js";import"./renderedTicksSlice-BOF6sMGg.js";import"./CartesianChart-DqdcaXnI.js";import"./chartDataContext-Cp9nHQ3M.js";import"./CategoricalChart-QPWmKUQ6.js";import"./CartesianAxis-BZyagfMs.js";import"./Layer-CsQNRvLO.js";import"./Text-DZAUevoT.js";import"./DOMUtils-CHQYQ4Y1.js";import"./Label-BMEmaXKp.js";import"./ZIndexLayer-DcdIn6Lk.js";import"./types-D0-2-__S.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-Bz0VDg5l.js";import"./step-BgXTWRgv.js";import"./path-DyVhHtw_.js";import"./ReactUtils-pum_VzDZ.js";import"./ActivePoints-BU1jJ3Mc.js";import"./Dot--rMp3x47.js";import"./RegisterGraphicalItemId-DphlggEW.js";import"./ErrorBarContext-DcaWRm0D.js";import"./GraphicalItemClipPath-CyQi9Ewc.js";import"./SetGraphicalItem-tehWRJf-.js";import"./useAnimationId-CYCjPTVx.js";import"./getRadiusAndStrokeWidthFromDot-BMewwEnB.js";import"./ActiveShapeUtils-DtjFfAfB.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DGomxYSM.js";import"./ChartSizeDimensions-CCGNwFzu.js";import"./OffsetShower-CKkYdDnc.js";import"./PlotAreaShower-DEg1EoJ-.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ge=["Segment"];export{t as Segment,ge as __namedExportsOrder,de as default};
