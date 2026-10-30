import{R as t}from"./iframe-BTkF_ck3.js";import{z as a}from"./RechartsWrapper-Bfhw4EQp.js";import{R as p}from"./zIndexSlice-DMb1iT4y.js";import{C as n}from"./ComposedChart-s1Akoicf.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D7qRA9BJ.js";import{X as l}from"./XAxis-XXOeJL4_.js";import{Y as h}from"./YAxis-xlfioMoU.js";import{L as c}from"./Legend-B4kkcuCQ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BHlGR1I9.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CNaIfHAW.js";import"./throttle-C296Coau.js";import"./index-DZJF29uL.js";import"./index-CJeeJVsL.js";import"./polarAxisSelectors-CGdJ8Zqs.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmgL8dDE.js";import"./index-COsBfOSj.js";import"./index-Ds77U3-G.js";import"./renderedTicksSlice-By9SNFPy.js";import"./index-C6zBHn9J.js";import"./CartesianChart-CVzabnxl.js";import"./ZIndexPortal-B00rDc6m.js";import"./CategoricalChart-gs1piNoX.js";import"./Layer-DbGB2kqV.js";import"./Curve-sIdkl0eW.js";import"./types-8wxp4ZmL.js";import"./step-DBbPIMUm.js";import"./path-DyVhHtw_.js";import"./LabelList-2kTqXwcO.js";import"./Label-BzrvAI-c.js";import"./Text-TXIjjn1-.js";import"./DOMUtils-D4gdagBn.js";import"./ZIndexLayer-C-SL7ltI.js";import"./ActivePoints-KDHW2NPu.js";import"./Dot-Doj0VDvS.js";import"./activeStyles-DacmxpXN.js";import"./useAnimationId-BxLJVC0T.js";import"./dataEntryStyles-CxN2r_W-.js";import"./Symbols-CwIwUCy8.js";import"./symbol-OVGei777.js";import"./ErrorBarContext-nR9VGpMB.js";import"./SetGraphicalItem-DBGhZH7_.js";import"./getRadiusAndStrokeWidthFromDot-BR6gVE_1.js";import"./ActiveShapeUtils-D-HoRWJg.js";import"./useEffectiveDataKey-IRMZLONN.js";import"./CartesianAxis-BPFkFfQP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-BHSDIcCA.js";import"./useElementOffset-Cl0zCrTJ.js";import"./uniqBy-CAi9PQ3u.js";import"./iteratee-zmWyJk5j.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
