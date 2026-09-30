import{R as t}from"./iframe-CDSer5wk.js";import{j as a}from"./RechartsWrapper-CkjZ8sdT.js";import{R as p}from"./zIndexSlice-B-lpBScO.js";import{C as n}from"./ComposedChart-b_m8lhmT.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DsDCihMT.js";import{X as l}from"./XAxis-CLZ8_tLg.js";import{Y as h}from"./YAxis-DN7TNoMj.js";import{L as c}from"./Legend-D5bRhJ8Z.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DTBx4E7L.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DSp6qoYe.js";import"./throttle-fnP7_niv.js";import"./index-Mdu1MT_Q.js";import"./index-DPnG0BF_.js";import"./isWellBehavedNumber-Cbiw2L0f.js";import"./d3-scale-BNdPRZbv.js";import"./index-DV1Q8ly1.js";import"./index-SPPJq_2I.js";import"./renderedTicksSlice-Nk82yORn.js";import"./index-DbUyrogr.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B7gL7VFT.js";import"./chartDataContext-SSvdGu54.js";import"./CategoricalChart-BazdXmMB.js";import"./Layer-BlrsPtdk.js";import"./Curve-BrORdZJH.js";import"./types-DCfhmQQy.js";import"./step-BIecx5Me.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C7ScRxUV.js";import"./Label-CDfUkOd_.js";import"./Text-B-qlIjrY.js";import"./DOMUtils-COEpD6x9.js";import"./useId-SR9QF0F6.js";import"./useBackwardsCompatibleTheme-zogGwhJH.js";import"./ZIndexLayer-BGJbwrqn.js";import"./useAnimationId-DsIt1eY5.js";import"./ActivePoints-6u2iLucI.js";import"./Dot-7OP2vIm4.js";import"./RegisterGraphicalItemId-BtK15Bh8.js";import"./ErrorBarContext-DAmUJr4k.js";import"./GraphicalItemClipPath-DlXs2ztm.js";import"./SetGraphicalItem-b1y0Bklu.js";import"./getRadiusAndStrokeWidthFromDot-Bb_SzVF_.js";import"./ActiveShapeUtils-BNDheO9x.js";import"./useGraphicalItemIdentity-DX00RNhI.js";import"./CartesianAxis-DnSeAvbN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DNCMzjd9.js";import"./symbol-HykW2qul.js";import"./useElementOffset-pulofrmD.js";import"./uniqBy-BRQZPpXV.js";import"./iteratee-CIlfEQ2h.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
