import{R as t}from"./iframe-CLIhRm7R.js";import{z as a}from"./RechartsWrapper-DwQg3ppC.js";import{R as p}from"./zIndexSlice-cURKLlYU.js";import{C as n}from"./ComposedChart-DplTXjfB.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CEDpZoGH.js";import{X as l}from"./XAxis-ClFJPrvR.js";import{Y as h}from"./YAxis-CpKr4jH1.js";import{L as c}from"./Legend-BwvE44zk.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D-eAHaNk.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CDU9IwIv.js";import"./throttle-B7ykPIAJ.js";import"./index-DR1HnwII.js";import"./index-BUNiVZYu.js";import"./polarAxisSelectors-D5qsDUBS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D44QmEnt.js";import"./index-BRcZtsT0.js";import"./index-B_FXaL58.js";import"./renderedTicksSlice-BBFFs0IH.js";import"./index-CQ513AnM.js";import"./fillDefinitions-Y1HmkZBg.js";import"./CartesianChart-Cfp3axNC.js";import"./chartDataContext-CnJguSW_.js";import"./CategoricalChart-RViwWBSb.js";import"./getRadiusAndStrokeWidthFromDot-4sZTg9_Z.js";import"./Layer-BbygySlV.js";import"./Curve-BOeChXDU.js";import"./types-B-D67JLt.js";import"./step-b64WSsG3.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BrgkWZuf.js";import"./Label-DearAakw.js";import"./Text-JwQNyxYp.js";import"./ZIndexLayer-CVT-3Kt6.js";import"./ActivePoints-C9r-WFdJ.js";import"./Dot-C3ytqCXy.js";import"./activeStyles-DkO8dKQi.js";import"./useAnimationId-CFCPoirY.js";import"./Symbols-CL9eWqJw.js";import"./symbol-DfjzGj-p.js";import"./ErrorBarContext-D47utnLy.js";import"./SetGraphicalItem-Byj-zkni.js";import"./ActiveShapeUtils-B5F3agWS.js";import"./useEffectiveDataKey-B6ZXrXvv.js";import"./CartesianAxis-xu52TX6T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Dhc2h3vn.js";import"./uniqBy-CxU7f0Dn.js";import"./iteratee-uHzYhx_d.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
