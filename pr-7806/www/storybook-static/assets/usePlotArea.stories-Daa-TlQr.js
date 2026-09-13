import{R as t}from"./iframe-DMwBeJR9.js";import{j as a}from"./RechartsWrapper-DQf4ekbV.js";import{R as p}from"./zIndexSlice-BP1SI4lk.js";import{C as n}from"./ComposedChart-C1dXdi20.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D-0E5tR7.js";import{X as l}from"./XAxis-CXH1fd9N.js";import{Y as h}from"./YAxis-CzX5Dj-l.js";import{L as c}from"./Legend-CQzlz703.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-FbHkIvMQ.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BzRm_10h.js";import"./throttle-JhdtWwel.js";import"./index-W8It9SHe.js";import"./index-CW9TVSnL.js";import"./isWellBehavedNumber-BWBsnwkO.js";import"./d3-scale-CTZXeK9y.js";import"./index-C4TxoYVJ.js";import"./index-KvfSCZEN.js";import"./renderedTicksSlice-Dl_Tlvvx.js";import"./index-CR-86fOk.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C4QG-pAm.js";import"./chartDataContext-ClQA_jr_.js";import"./CategoricalChart-BZsjmvUf.js";import"./Layer-DMhp_Srr.js";import"./Curve-BLRaA_Xy.js";import"./types-CMazcurm.js";import"./step-DujtKqi5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-H6knMzOg.js";import"./Label-B67df_fL.js";import"./Text-BAFoSTNm.js";import"./DOMUtils-DtiMQzYq.js";import"./useId-BlKh4dfu.js";import"./useBackwardsCompatibleTheme-ujSziCXW.js";import"./ZIndexLayer-CFNoJ68M.js";import"./useAnimationId-1Z-BMfjp.js";import"./ActivePoints-BaKtG9_T.js";import"./Dot-CC7p1g3t.js";import"./RegisterGraphicalItemId-D2Rdl-pC.js";import"./ErrorBarContext-DyCS0eIu.js";import"./GraphicalItemClipPath-DH2vwsgS.js";import"./SetGraphicalItem-BmbkJBqp.js";import"./getRadiusAndStrokeWidthFromDot-MjPGd6X0.js";import"./ActiveShapeUtils-D9qWvVvy.js";import"./useGraphicalItemIdentity-1ETpT5kl.js";import"./CartesianAxis-BJRJUBpp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-tCjh6GHl.js";import"./symbol-C5kjLuRU.js";import"./useElementOffset-BgsP0NQQ.js";import"./uniqBy-BrSK9-IV.js";import"./iteratee-IvuUwhdK.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
