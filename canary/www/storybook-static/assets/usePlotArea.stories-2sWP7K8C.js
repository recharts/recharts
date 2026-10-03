import{R as t}from"./iframe-DeUe7xmC.js";import{j as a}from"./RechartsWrapper-ClGwO2Ez.js";import{R as p}from"./zIndexSlice-B-kuFUwH.js";import{C as n}from"./ComposedChart-XVsRLyio.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CpopKWma.js";import{X as l}from"./XAxis-DZewVXuj.js";import{Y as h}from"./YAxis-EaFvavHr.js";import{L as c}from"./Legend-DeYgTABG.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-VBNHpirQ.js";import"./get-C2VjdU0L.js";import"./axisSelectors-L5D3YGAp.js";import"./throttle-D8_Vf5-y.js";import"./index-B3VftlGk.js";import"./index-CS0BzYwB.js";import"./isWellBehavedNumber-XmFYrAHS.js";import"./d3-scale-CKlOT7Hq.js";import"./index-D9wuu4lj.js";import"./index-CLX85w7H.js";import"./renderedTicksSlice-zQGjoh1b.js";import"./index-Cegj0e_Y.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BRUE9SRS.js";import"./chartDataContext-CBR6ctH_.js";import"./CategoricalChart-DXh-O_P4.js";import"./Layer-CuQjvvoN.js";import"./Curve-DmgBVGdH.js";import"./types-BQuMJRU5.js";import"./step-CZi2V8Uw.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BsztCZc7.js";import"./Label-CJwVVqdY.js";import"./Text-A2KhxUAH.js";import"./DOMUtils-BjCFSCOp.js";import"./useId-lxxddI0G.js";import"./useBackwardsCompatibleTheme-JgYEE_gV.js";import"./ZIndexLayer-qWMWnECq.js";import"./useAnimationId-sq-3c3no.js";import"./ActivePoints-BeTkB1B9.js";import"./Dot-89j0vp4m.js";import"./RegisterGraphicalItemId-CVA94A2X.js";import"./ErrorBarContext-CCYjOK6U.js";import"./GraphicalItemClipPath-CO2IN5Qd.js";import"./SetGraphicalItem-DeV-JbkH.js";import"./getRadiusAndStrokeWidthFromDot-CID7eD-5.js";import"./ActiveShapeUtils-Cd6LbszL.js";import"./useGraphicalItemIdentity-DKt9Ij8h.js";import"./CartesianAxis-DhJE-g8f.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CkxsfOUs.js";import"./symbol-C9rKeJ3L.js";import"./useElementOffset-B5as_cGC.js";import"./uniqBy-iohiE7eU.js";import"./iteratee-vFmdqAbU.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
