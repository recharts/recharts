import{R as t}from"./iframe-C4yajH80.js";import{z as a}from"./RechartsWrapper-EDwJ-hpd.js";import{R as p}from"./zIndexSlice-BfiJerBV.js";import{C as n}from"./ComposedChart-Drcu9Hk1.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B3Ju-sFB.js";import{X as l}from"./XAxis-BFxxSACP.js";import{Y as h}from"./YAxis-CKXsneZC.js";import{L as c}from"./Legend-D8kma9hL.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DFc2Rexf.js";import"./get-cF5BDHN6.js";import"./axisSelectors-C4wAO8K7.js";import"./throttle-A9at9acq.js";import"./index-CrNHa6S5.js";import"./index-CuVCW5fj.js";import"./polarAxisSelectors-CwKR_Q3z.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-fBzFIMPy.js";import"./index-BrlBHB3n.js";import"./index-Bb-mYyLv.js";import"./renderedTicksSlice-cx0ctRz4.js";import"./index-CQyck0VW.js";import"./fillDefinitions-BST5zs50.js";import"./CartesianChart-CEN-h0dg.js";import"./ZIndexPortal-DAymcjH6.js";import"./CategoricalChart-PCFFppyT.js";import"./Layer-D0yKuovh.js";import"./Curve-fl7qnDBk.js";import"./types-CL_v27h0.js";import"./step-I8SAqNm5.js";import"./path-DyVhHtw_.js";import"./LabelList-C_dQABL5.js";import"./Label-B6ownNND.js";import"./Text-Bi36EJ7d.js";import"./DOMUtils-dS8ElQc-.js";import"./ZIndexLayer-DJSGJh4F.js";import"./ActivePoints-Ve6xkJ_B.js";import"./Dot-CrVSKUlv.js";import"./activeStyles-DvcaieBh.js";import"./useAnimationId-BUxfS1h6.js";import"./dataEntryStyles-2Nz1ZzWI.js";import"./Symbols-B1Np59zp.js";import"./symbol-CD9hHhVA.js";import"./ErrorBarContext-ELy3xUI7.js";import"./SetGraphicalItem-aXzYe790.js";import"./getRadiusAndStrokeWidthFromDot-BI02GC_O.js";import"./ActiveShapeUtils-PoKmoeJ-.js";import"./useEffectiveDataKey-RrCx3xE8.js";import"./CartesianAxis-CiDuuMHX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-jHj6xKf0.js";import"./uniqBy-B9zpECzU.js";import"./iteratee-Cick1OQS.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
