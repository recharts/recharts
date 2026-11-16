import{R as t}from"./iframe-BRs2DqB3.js";import{z as a}from"./RechartsWrapper-CJYaD9xA.js";import{R as p}from"./zIndexSlice-XRTrDK7l.js";import{C as n}from"./ComposedChart-DVPdEFZp.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BkTgv4cu.js";import{X as l}from"./XAxis-BJyhb9sC.js";import{Y as h}from"./YAxis-DidbNqGc.js";import{L as c}from"./Legend-aPOwwcA9.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BRTztjAc.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DBUHuATQ.js";import"./throttle-BN55ZsBD.js";import"./index-CqTGU6qX.js";import"./index-C0uv-V1O.js";import"./polarAxisSelectors-DwLugqE9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B39-KfBv.js";import"./index-BL5_00_X.js";import"./index-Co-V1H3-.js";import"./renderedTicksSlice-BjdRfY4C.js";import"./index-IgyX-1iw.js";import"./fillDefinitions-Cww6uxJT.js";import"./CartesianChart-Dsxkw-P3.js";import"./chartDataContext-QcS0sZvi.js";import"./CategoricalChart-BZHqfx2A.js";import"./Layer-DqrqtEm2.js";import"./Curve-YmdI71--.js";import"./types-BN549hIA.js";import"./step-UgzMRyWu.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-B5I1MPoS.js";import"./Label-utTJNWp0.js";import"./Text-DRaltNnR.js";import"./ZIndexLayer-BCRtaoEe.js";import"./ActivePoints-DywQ8pFt.js";import"./Dot-DCtDqOty.js";import"./activeStyles-gnY1xuwf.js";import"./useAnimationId-De06VpE9.js";import"./Symbols-Cy-ALuGW.js";import"./symbol-rCFxuDnc.js";import"./ErrorBarContext-D0NsIgk-.js";import"./SetGraphicalItem-C9srr3mG.js";import"./getRadiusAndStrokeWidthFromDot-CwwAN-KH.js";import"./ActiveShapeUtils-Cvk6a1r9.js";import"./useEffectiveDataKey-_AqelCoa.js";import"./CartesianAxis-C23TAeVf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DjI6NDB8.js";import"./uniqBy-aZImii2x.js";import"./iteratee-CrjEP9l6.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
