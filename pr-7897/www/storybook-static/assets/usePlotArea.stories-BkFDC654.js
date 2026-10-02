import{R as t}from"./iframe-B0sakJiE.js";import{j as a}from"./RechartsWrapper-BpIUDAEt.js";import{R as p}from"./zIndexSlice-C2JoSOuc.js";import{C as n}from"./ComposedChart-CtXhtoOd.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-84fb3iOh.js";import{X as l}from"./XAxis-BMxSzB1I.js";import{Y as h}from"./YAxis-CZvdB1-4.js";import{L as c}from"./Legend-C-A0bCgE.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ssIH5a_N.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DAvStXmd.js";import"./throttle-C7TX7owl.js";import"./index-DsNYe81z.js";import"./index-BXQEz9WW.js";import"./isWellBehavedNumber-DiVn1zM4.js";import"./d3-scale-CBENh8dV.js";import"./index-CshZKuHv.js";import"./index-B_LLgB3d.js";import"./renderedTicksSlice-BPkvdwOw.js";import"./index-7d7qLSfx.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BkOoMrfQ.js";import"./chartDataContext-Bl9ftmGr.js";import"./CategoricalChart-i5JvNUXt.js";import"./Layer-CcOy9dqf.js";import"./Curve-B_1SwL8s.js";import"./types-BxUBO_Vd.js";import"./step-step2nKl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DhCfcvtd.js";import"./Label-CXhmz5va.js";import"./Text-YdcYRLnk.js";import"./DOMUtils-Cp8HsdRc.js";import"./useId-ByzngA9u.js";import"./useBackwardsCompatibleTheme-yTt122QS.js";import"./ZIndexLayer-C7T7VX-U.js";import"./useAnimationId-fISgZVPU.js";import"./ActivePoints-REhV00gC.js";import"./Dot-CHjZWmhk.js";import"./RegisterGraphicalItemId-BMnnO_Y6.js";import"./ErrorBarContext-lXq8p5sv.js";import"./GraphicalItemClipPath-DDSyttGC.js";import"./SetGraphicalItem-BtMMOS1d.js";import"./getRadiusAndStrokeWidthFromDot-Bo_6wHZf.js";import"./ActiveShapeUtils-DnkyzZr6.js";import"./useGraphicalItemIdentity-CN480731.js";import"./CartesianAxis-6gx2DY-1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-VzAfvAVY.js";import"./symbol-BbQhUQUQ.js";import"./useElementOffset-4fRB1JA3.js";import"./uniqBy-CUMmWf25.js";import"./iteratee-XhZZr9kx.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
