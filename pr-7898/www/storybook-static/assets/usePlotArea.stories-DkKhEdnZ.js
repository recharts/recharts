import{R as t}from"./iframe-Ek26OKJE.js";import{j as a}from"./RechartsWrapper-B_5MzBNC.js";import{R as p}from"./zIndexSlice-Cb7AOhUN.js";import{C as n}from"./ComposedChart-Bemin9MV.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B_mB8jRL.js";import{X as l}from"./XAxis-BnPYeIW7.js";import{Y as h}from"./YAxis-DEoqYThk.js";import{L as c}from"./Legend-Cz3kEQrZ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DikHbtvd.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BZyUnxor.js";import"./throttle-nAaWLAvW.js";import"./index-Bhq43Y8T.js";import"./index-CH5hGN9X.js";import"./isWellBehavedNumber-C3YqTazs.js";import"./d3-scale-Di7qtVT_.js";import"./index-CVfvjw4V.js";import"./index-CddS4NP_.js";import"./renderedTicksSlice-Bw9pF84S.js";import"./index-tmDn5Ue5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BUYt3N23.js";import"./chartDataContext-q8RiqEic.js";import"./CategoricalChart-Co9RgHLu.js";import"./Layer-DRl71Sg_.js";import"./Curve-8tFNvOBV.js";import"./types-USIGaiIt.js";import"./step-DzHhz21P.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B7V8aYKV.js";import"./Label-Bl-xJBza.js";import"./Text-DbwWqm58.js";import"./DOMUtils-BY_uPlRS.js";import"./useId-rsWHAn-D.js";import"./useBackwardsCompatibleTheme-Drt73puE.js";import"./ZIndexLayer-CR_MqsJe.js";import"./useAnimationId-CwN306xk.js";import"./ActivePoints-CnBuc0OH.js";import"./Dot-CSgA8HWq.js";import"./RegisterGraphicalItemId-DmFzdfAb.js";import"./ErrorBarContext-Cn_05uOu.js";import"./GraphicalItemClipPath-BeXUWsOJ.js";import"./SetGraphicalItem-OIwhrDsV.js";import"./getRadiusAndStrokeWidthFromDot-Dg98J8GV.js";import"./ActiveShapeUtils-AftK0wfE.js";import"./useGraphicalItemIdentity-CLabRpL-.js";import"./CartesianAxis-D3cjFJua.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B5r7o9db.js";import"./symbol-CFHkB0SW.js";import"./useElementOffset-C5V_fM0x.js";import"./uniqBy-Cj7_lSTC.js";import"./iteratee-DmOgoTF5.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
