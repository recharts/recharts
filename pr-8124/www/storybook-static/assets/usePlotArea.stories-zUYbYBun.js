import{R as t}from"./iframe-SPJaGn0F.js";import{z as p}from"./RechartsWrapper-DA_3WzAb.js";import{R as a}from"./zIndexSlice-nIWAtr6b.js";import{C as n}from"./ComposedChart-CmUNzOx5.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Q7YZR7MH.js";import{X as l}from"./XAxis-D91EJms1.js";import{Y as h}from"./YAxis-Whjsv-c4.js";import{L as c}from"./Legend-CZxulQ8f.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DgTytEg2.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BV5QtOCC.js";import"./throttle-Cb7coFKv.js";import"./index-BiFHN7g6.js";import"./index-DUJEB6Vl.js";import"./polarAxisSelectors-CIAIQYnO.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-ChAd5Ihl.js";import"./index-U_F_U_yW.js";import"./index-B2XfpK0R.js";import"./renderedTicksSlice-CknOQqZ1.js";import"./index-Bl846mwt.js";import"./CartesianChart-DHKYKaYX.js";import"./ZIndexPortal-zVY5zLCl.js";import"./CategoricalChart-CWkGyQY4.js";import"./Layer-GoN2yHWA.js";import"./Curve-CQDBLSXd.js";import"./types-DJ6_4iq2.js";import"./step-g9-z_5ZT.js";import"./path-DyVhHtw_.js";import"./LabelList-BeGqiY0d.js";import"./Label-COXn0L8P.js";import"./Text-BYUbuGtp.js";import"./DOMUtils-BDkhG4Mf.js";import"./ZIndexLayer-CuxzF6Ru.js";import"./ActivePoints-BWJOXnL8.js";import"./Dot-CJO9q9fw.js";import"./activeStyles-BViWZA4B.js";import"./useAnimationId-d7QVaKqG.js";import"./dataEntryStyles-DAzBzzsr.js";import"./Symbols-CUkMeiyc.js";import"./symbol-DauxKq8Z.js";import"./ErrorBarContext-CyoUsRnh.js";import"./SetGraphicalItem-B-k8mUay.js";import"./getRadiusAndStrokeWidthFromDot-DYuKOPnc.js";import"./ActiveShapeUtils-zpveVZ8b.js";import"./useEffectiveDataKey-PspZ4BaC.js";import"./themeFill-BkM1x4hA.js";import"./CartesianAxis-D0rqelxZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-CRqjOhTR.js";import"./useElementOffset-DwP8huJc.js";import"./uniqBy-P-x3YYna.js";import"./iteratee-CwlSc91y.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},o={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var e,i,m;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{o as UsePlotArea,yt as __namedExportsOrder,ft as default};
