import{R as t}from"./iframe-Cr7yvMyR.js";import{z as a}from"./RechartsWrapper-DtToZ6Qn.js";import{R as p}from"./zIndexSlice-CsHxFK6N.js";import{C as n}from"./ComposedChart-Br0t_Hun.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BPy1KVNT.js";import{X as l}from"./XAxis-6YWl141g.js";import{Y as h}from"./YAxis-CzA9LN6m.js";import{L as c}from"./Legend-C_9JRBub.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-7XokfeB_.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BefgmR9V.js";import"./throttle-RI9qCIcF.js";import"./index-BW-7B_Oi.js";import"./index-BxNxBv76.js";import"./polarAxisSelectors-Bu65NBmY.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DsBZl9Yj.js";import"./index-D9o51X71.js";import"./index-DqRp8Gio.js";import"./renderedTicksSlice-BFO9fjGk.js";import"./index-DcWjrMSV.js";import"./CartesianChart-BdMrkwen.js";import"./ZIndexPortal-BAJpkEGh.js";import"./CategoricalChart-Cyp6BiKR.js";import"./Layer-Dr_Plb3q.js";import"./Curve-BMeJMEVZ.js";import"./types-NTnKzXXZ.js";import"./step-C7lw2IuE.js";import"./path-DyVhHtw_.js";import"./LabelList-DKDyf66o.js";import"./Label-Bde3ooKp.js";import"./Text-Bgk62K3n.js";import"./DOMUtils-DpKBhuMF.js";import"./ZIndexLayer-DE1YK584.js";import"./ActivePoints-CeFLQPPR.js";import"./Dot-C8oJPXZf.js";import"./activeStyles-4Qukhfp5.js";import"./useAnimationId-CrRcWCxT.js";import"./dataEntryStyles-Df9giDaD.js";import"./Symbols-BTpF-zfb.js";import"./symbol-AnQJSsJ7.js";import"./ErrorBarContext-DICVo2af.js";import"./SetGraphicalItem-CPzrGo_B.js";import"./getRadiusAndStrokeWidthFromDot-BmiuMj8w.js";import"./ActiveShapeUtils-DimJ4nan.js";import"./useEffectiveDataKey-DcbjY3Lr.js";import"./CartesianAxis-CEqebLVd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-C6DfZjQD.js";import"./useElementOffset-DLS-U19J.js";import"./uniqBy-WRjYJOFh.js";import"./iteratee-ru1DkRCS.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
