import{R as t}from"./iframe-CrYQDt8P.js";import{z as a}from"./RechartsWrapper-BAwtrVn5.js";import{R as p}from"./zIndexSlice-DgBq9YFj.js";import{C as n}from"./ComposedChart-D3_qR-0w.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DP1Q7foL.js";import{X as l}from"./XAxis-ZRzZ6JbG.js";import{Y as h}from"./YAxis-Ibw-9rE8.js";import{L as c}from"./Legend-BNrmNdlO.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D-FE3-Id.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CHapoDkY.js";import"./throttle-EZYco_S-.js";import"./index-DoHXxeqs.js";import"./index-Dn-vKA7B.js";import"./polarAxisSelectors-qncpG9DL.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B8VX6HZY.js";import"./index-DrQ3dvqS.js";import"./index-xzmL1NPl.js";import"./renderedTicksSlice-B5w1ipks.js";import"./index-OoIkvEPu.js";import"./fillDefinitions-B8rJsHrn.js";import"./CartesianChart-CUqOA5qE.js";import"./ZIndexPortal-Dn8m52P0.js";import"./CategoricalChart-BGIsMW5j.js";import"./Layer-BQFOl3cJ.js";import"./Curve-D-a7nqUy.js";import"./types-D5M-0McJ.js";import"./step-DGjeaFMT.js";import"./path-DyVhHtw_.js";import"./LabelList-C_2TXPHb.js";import"./Label-_UeQKQwH.js";import"./Text-BvJLtM_q.js";import"./DOMUtils-Bh62H6aW.js";import"./ZIndexLayer-Dl5u_ANg.js";import"./ActivePoints-CSQF1wsy.js";import"./Dot-GBqckkZQ.js";import"./activeStyles-C1vUddIu.js";import"./useAnimationId-DhleLLtl.js";import"./dataEntryStyles-D63lSB48.js";import"./Symbols-BEXEibvH.js";import"./symbol-_3oqr1nj.js";import"./ErrorBarContext-BkAsJpXU.js";import"./SetGraphicalItem-BZH_NFgg.js";import"./getRadiusAndStrokeWidthFromDot-nu59-3In.js";import"./ActiveShapeUtils-DxrQGdht.js";import"./useEffectiveDataKey-CniHgm4C.js";import"./CartesianAxis-DR-jLyCK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BR2Z5pZe.js";import"./uniqBy-CuoQtKoh.js";import"./iteratee-9w6c29G1.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
