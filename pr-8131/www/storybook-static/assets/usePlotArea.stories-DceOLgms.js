import{R as t}from"./iframe-jmhe2Qk6.js";import{z as a}from"./RechartsWrapper-C_ACRdKM.js";import{R as p}from"./zIndexSlice-C_QNUIlg.js";import{C as n}from"./ComposedChart-DDgeQ340.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CQCNhVyP.js";import{X as l}from"./XAxis-BmABHSTj.js";import{Y as h}from"./YAxis-Bwmry524.js";import{L as c}from"./Legend-CrPT364J.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CCkzVq5s.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CTtb55NE.js";import"./throttle-DZINazP_.js";import"./index-BadCiZkf.js";import"./index-DMlmY332.js";import"./polarAxisSelectors-D0zNKA08.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-_kmjLSGJ.js";import"./index-1mWypBK7.js";import"./index-CSauTcUd.js";import"./renderedTicksSlice-DiLJD3iy.js";import"./index-BvBcGY0n.js";import"./fillDefinitions-2mEkHeYa.js";import"./CartesianChart-DW-0hcB8.js";import"./ZIndexPortal-Qo_oHvo4.js";import"./CategoricalChart-clWULlZK.js";import"./Layer-B39D7NeJ.js";import"./Curve-B9PMeVXe.js";import"./types-Cpf9ifaq.js";import"./step-C3gp0-r4.js";import"./path-DyVhHtw_.js";import"./LabelList-Dq0YgplD.js";import"./Label-Db1KZEia.js";import"./Text-CmetEc_4.js";import"./DOMUtils-DKPcLfF3.js";import"./ZIndexLayer-BifNHCzV.js";import"./ActivePoints-BpkFEdDf.js";import"./Dot-Oe3PKIgB.js";import"./activeStyles-sH1GlI3K.js";import"./useAnimationId-Zg5v1vJq.js";import"./dataEntryStyles-CsSE3ak0.js";import"./Symbols-BFwKw-3i.js";import"./symbol-sHGxO5Ns.js";import"./ErrorBarContext-C2f99oDG.js";import"./SetGraphicalItem-DSPgNjiu.js";import"./getRadiusAndStrokeWidthFromDot-Ds0PjUPZ.js";import"./ActiveShapeUtils-cdr3C3k5.js";import"./useEffectiveDataKey-DmT6RBvF.js";import"./CartesianAxis-CTjd-a6A.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CX9phfOZ.js";import"./uniqBy-CTEjb69M.js";import"./iteratee-Cf4iavbi.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
