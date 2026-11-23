import{R as t}from"./iframe-DlCdq56B.js";import{z as a}from"./RechartsWrapper-fp3cwEAp.js";import{R as p}from"./zIndexSlice-AxtVyY3Z.js";import{C as n}from"./ComposedChart-D-HLNOcj.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CG_-O_No.js";import{X as l}from"./XAxis-BSv-cfqy.js";import{Y as h}from"./YAxis-CiL6lsrt.js";import{L as c}from"./Legend-C0cyFPQv.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BUW76FaL.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CSfGPpIK.js";import"./throttle-DEcvUi6F.js";import"./index-DRrdDGzH.js";import"./index-D0nmcM1A.js";import"./polarAxisSelectors-B-SnaQvT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-3Jo-Yey1.js";import"./index-Dl9VO4In.js";import"./index-CPJJsZF5.js";import"./renderedTicksSlice-xGoci0dc.js";import"./index-CVrMJXNG.js";import"./fillDefinitions-P9YSjlZq.js";import"./CartesianChart-DAQanSbx.js";import"./chartDataContext-BiLGYApi.js";import"./CategoricalChart-DEbdQdFq.js";import"./getRadiusAndStrokeWidthFromDot-9hVd_OrB.js";import"./Layer-DYaOGPQe.js";import"./Curve-lp641HWe.js";import"./types-CGD2CGOX.js";import"./step-DukoPJ0d.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BQcljHLn.js";import"./Label-DhxtC2yH.js";import"./Text-DCVc9tCi.js";import"./ZIndexLayer-DoM1zDnE.js";import"./ActivePoints-Ve_riuMJ.js";import"./Dot-B5biZeEa.js";import"./activeStyles-WuCpdruK.js";import"./useAnimationId-DvgYyN8a.js";import"./Symbols-Dqo2PD8d.js";import"./symbol-BfVO91QA.js";import"./ErrorBarContext-C53AQX2l.js";import"./SetGraphicalItem-DVkPEJIv.js";import"./ActiveShapeUtils-BhCU4_aJ.js";import"./useEffectiveDataKey-dLwdu-vi.js";import"./CartesianAxis-gaRy0kAT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-D9xfe4ty.js";import"./uniqBy-7nQNTfGC.js";import"./iteratee-D1UWDese.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
