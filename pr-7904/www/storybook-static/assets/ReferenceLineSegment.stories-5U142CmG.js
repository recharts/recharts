import{R as e}from"./iframe-F-DUQmzx.js";import{R as i}from"./zIndexSlice-B0XgO37h.js";import{C as n}from"./ComposedChart-BciQM212.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CzhRd1sg.js";import{X as s}from"./XAxis-CueAAdhT.js";import{Y as c}from"./YAxis-DMt8A7ih.js";import{L as d}from"./Line-D8FTO08W.js";import{R as g}from"./ReferenceLine-B6PxtLoA.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DpMrsvGt.js";import"./index-CK09KYl6.js";import"./index-1Q76C7eb.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-54NLwGe7.js";import"./isWellBehavedNumber-DyMPBI8-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWiWdscD.js";import"./axisSelectors-DjOC7WMp.js";import"./d3-scale-DSOPMY6A.js";import"./index-CT1gIdoP.js";import"./index-EzdhIVAG.js";import"./renderedTicksSlice-COhWqkvU.js";import"./index-DM4X_zuN.js";import"./CartesianChart-DpAEY0eR.js";import"./chartDataContext-CwixCkf7.js";import"./CategoricalChart-DjizJXcn.js";import"./CartesianAxis-DNFe7OYN.js";import"./Layer-BrEHje-t.js";import"./Text-CORYS8dP.js";import"./DOMUtils-DPU74_Ri.js";import"./useId-CqYFbuGw.js";import"./useBackwardsCompatibleTheme-BfIpGN6N.js";import"./Label-B3Zz6TZ9.js";import"./ZIndexLayer-G7VYzfve.js";import"./types-DvcDlHh9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Bx9XDM_v.js";import"./step-B5u9AGFi.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-TRoMQ37Y.js";import"./useAnimationId-BjShbhcH.js";import"./ActivePoints-W2_hwO6R.js";import"./Dot-DGu6gs3Q.js";import"./RegisterGraphicalItemId-osvmWAHd.js";import"./ErrorBarContext-WZQ5BE4f.js";import"./GraphicalItemClipPath-Ts1JrvmG.js";import"./SetGraphicalItem-Dh88RhAB.js";import"./getRadiusAndStrokeWidthFromDot-C7HQlZ5t.js";import"./ActiveShapeUtils-BBGLeya9.js";import"./useGraphicalItemIdentity-Co6jLI_S.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
