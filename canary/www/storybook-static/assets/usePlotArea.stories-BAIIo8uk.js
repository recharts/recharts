import{R as t}from"./iframe-NhQV4prz.js";import{e as a}from"./RechartsWrapper-BxN86ujp.js";import{R as p}from"./zIndexSlice-CfLnBr12.js";import{C as n}from"./ComposedChart-BygaGWnl.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CK7ZFz0J.js";import{X as l}from"./XAxis-Fp7U60n2.js";import{Y as h}from"./YAxis-BZzMEbei.js";import{L as c}from"./Legend-DhXEWDJ9.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DiB_0bHm.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CI2m5dZK.js";import"./throttle-DIKmaWkS.js";import"./index-BSL_lC_q.js";import"./index-CDv5DZpz.js";import"./isWellBehavedNumber-CZC1TcYQ.js";import"./d3-scale-DKOiWQKf.js";import"./index-Cmohh-L0.js";import"./index-DaOiqL7H.js";import"./renderedTicksSlice-C3ai8iRv.js";import"./index-Dc9b_9OD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CiIIIaIF.js";import"./chartDataContext-I3KBS5Dn.js";import"./CategoricalChart-BSIFNsGO.js";import"./Layer-BBUzG4Ds.js";import"./Curve-DQunGac-.js";import"./types-CquoFe81.js";import"./step-DAEVm6QR.js";import"./path-DyVhHtw_.js";import"./activeStyles-DbZl5mD5.js";import"./Label-BUAYU6sx.js";import"./Text-BjHxixwZ.js";import"./pageBackground-CDOOBPh1.js";import"./useId-BhvwEVie.js";import"./useBackwardsCompatibleTheme-RAZcM6ed.js";import"./ZIndexLayer-L-3od7Tk.js";import"./useAnimationId-CDdHAGde.js";import"./dataEntryStyles-C3Awxqtk.js";import"./ActivePoints-BaOlHly8.js";import"./Dot-Bbsv88JT.js";import"./ErrorBarContext-C6WKrP5w.js";import"./GraphicalItemClipPath-BZY88hTL.js";import"./SetGraphicalItem-BE6zKb5c.js";import"./getRadiusAndStrokeWidthFromDot-V6X0dMwc.js";import"./ActiveShapeUtils-B50xX2fH.js";import"./useEffectiveDataKey-CCR_17cw.js";import"./CartesianAxis-Brd3Au8o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CvvF-3qc.js";import"./symbol-BdliE8yI.js";import"./useElementOffset-DkX5d6Uc.js";import"./uniqBy-eEafSCgx.js";import"./iteratee-1x0B9Dhz.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
