import{R as t}from"./iframe-DY9K6heQ.js";import{u as a}from"./CategoricalChart-COo_l3nK.js";import{R as p}from"./zIndexSlice-Djux0zqs.js";import{C as s}from"./ComposedChart-BUGaiyhR.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BBRId2pi.js";import{X as l}from"./XAxis-C70fZAmi.js";import{Y as h}from"./YAxis-5RHUhJ9E.js";import{L as c}from"./Legend-3rpSVTlX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CqtOwQCr.js";import"./index-RUzZ63uG.js";import"./index-B-UxVCSc.js";import"./index-DB-c6PeB.js";import"./index-9g91mWlk.js";import"./throttle-DOydnajF.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DwkKcaC_.js";import"./resolveDefaultProps-CO8OTY-B.js";import"./isWellBehavedNumber-f1cIhCPU.js";import"./d3-scale-Dg6wJCEU.js";import"./renderedTicksSlice-C6QgZ4Eb.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CY7DJm7t.js";import"./chartDataContext-BtMzfRRp.js";import"./Layer-D519VTAP.js";import"./Curve-B05IFDSM.js";import"./types-Cb4xht2_.js";import"./step-vm1DaOvo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DF7HmAGo.js";import"./Label-CfiePbO3.js";import"./Text-CteNh9ks.js";import"./DOMUtils-B_xez7qI.js";import"./useId-C5bD9K_5.js";import"./useBackwardsCompatibleTheme-C3HLbI6N.js";import"./ZIndexLayer-HnenvO0i.js";import"./useAnimationId-BQX98cVJ.js";import"./ActivePoints-6F4_jb_h.js";import"./Dot-hKVGVTVc.js";import"./RegisterGraphicalItemId-za1bJavc.js";import"./ErrorBarContext-g1sTu3z_.js";import"./GraphicalItemClipPath-BVMw74rr.js";import"./SetGraphicalItem-B5Li8-y0.js";import"./getRadiusAndStrokeWidthFromDot-C3OVaU-V.js";import"./ActiveShapeUtils-EdkW4Ajt.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-VfKXuPT2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Bvnjp-u1.js";import"./symbol-Ct7I42aQ.js";import"./useElementOffset-BrumgYoX.js";import"./uniqBy-lwHF6dFC.js";import"./iteratee-CNq4H92p.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
