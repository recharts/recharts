import{R as t}from"./iframe-C9Icmvn-.js";import{z as a}from"./RechartsWrapper-CtHkjOy7.js";import{R as p}from"./zIndexSlice-BtEgXkTj.js";import{C as n}from"./ComposedChart-D9iZM0Ny.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CQVEJkC8.js";import{X as l}from"./XAxis-3c-aZ5Pt.js";import{Y as h}from"./YAxis-EbKXu10L.js";import{L as c}from"./Legend-BzvF9ZOT.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Ca82pTCc.js";import"./get-cF5BDHN6.js";import"./axisSelectors-C12AZXdM.js";import"./throttle-BP58Oxor.js";import"./index-Dmxp60UK.js";import"./index-OnkxBtFQ.js";import"./polarAxisSelectors-BlT-4ON5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DZcRnjza.js";import"./index-WAfrpxeX.js";import"./index-D9kzRPzU.js";import"./renderedTicksSlice-wh0y1ne7.js";import"./index-Dwiu-D7S.js";import"./fillDefinitions-BsgJeWYO.js";import"./CartesianChart-TwWF9vdI.js";import"./ZIndexPortal-Dm-GjtZl.js";import"./CategoricalChart-PMdsySjF.js";import"./Layer-wqByJTCO.js";import"./Curve-C441Qxgg.js";import"./types-C9Uy4GKt.js";import"./step-DBIWc43o.js";import"./path-DyVhHtw_.js";import"./LabelList-BBURyYAC.js";import"./Label-B5iIonTH.js";import"./Text-sNGi1G51.js";import"./DOMUtils-B21FeQ1N.js";import"./ZIndexLayer-B_nMkGpF.js";import"./ActivePoints-CHnUvRu_.js";import"./Dot-DC8dfn9r.js";import"./activeStyles-h91K6JZi.js";import"./useAnimationId-BL9AhoYr.js";import"./dataEntryStyles-BjZqswDr.js";import"./Symbols-ColLzRAz.js";import"./symbol-4cE6vjyv.js";import"./ErrorBarContext-BlDg14Jm.js";import"./SetGraphicalItem-xkXC5Q40.js";import"./getRadiusAndStrokeWidthFromDot-Df9gcykC.js";import"./ActiveShapeUtils-B_TPSWTk.js";import"./useEffectiveDataKey-C0LxQIpq.js";import"./CartesianAxis-R6B48fBq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Cww1lqIJ.js";import"./uniqBy-D4B7yWHg.js";import"./iteratee-e68Efg3c.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
