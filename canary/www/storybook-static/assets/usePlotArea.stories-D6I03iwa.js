import{R as t}from"./iframe-CMDkES_H.js";import{z as a}from"./RechartsWrapper-YdCgLXYS.js";import{R as p}from"./zIndexSlice-CEXNkTXm.js";import{C as n}from"./ComposedChart-AN7xQ-23.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Cw74JevM.js";import{X as l}from"./XAxis-B5q3F6Uy.js";import{Y as h}from"./YAxis-C3tuYQmx.js";import{L as c}from"./Legend-BA5EDhFL.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BBu38DQb.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BgqFub1M.js";import"./throttle-BV0akTiG.js";import"./index-nmLk2qd-.js";import"./index-Cycxm7rW.js";import"./polarAxisSelectors-B2-HhSnm.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Vem8QkvK.js";import"./index-CDFg-t_S.js";import"./index-CQ6GchDM.js";import"./renderedTicksSlice-BzpVxRSL.js";import"./index-Dwicv9nR.js";import"./fillDefinitions-aMvFJMZF.js";import"./CartesianChart-D9ZN9vwZ.js";import"./chartDataContext-U2SqLEu1.js";import"./CategoricalChart-CNCtCgVg.js";import"./Layer-Dxo4pAJK.js";import"./Curve-lt9C0hSq.js";import"./types-BRdSNrFn.js";import"./step-CtpAouP5.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CQKyrMQS.js";import"./Label-DkUV91yB.js";import"./Text-CXN2lt2h.js";import"./ZIndexLayer-Dr7m0amd.js";import"./ActivePoints-BkO0kzKb.js";import"./Dot-DVBxqdJG.js";import"./activeStyles-uNCwuaQZ.js";import"./useAnimationId-Br5Fw6SL.js";import"./Symbols-KRGqLXgG.js";import"./symbol-CkUX_hdb.js";import"./ErrorBarContext-DWVCzs9M.js";import"./SetGraphicalItem-BWtk-2FX.js";import"./getRadiusAndStrokeWidthFromDot-DhdxEzB3.js";import"./ActiveShapeUtils-BI-HqHtF.js";import"./useEffectiveDataKey-DEHLWy8h.js";import"./CartesianAxis-KTct3My8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CfLeRl1x.js";import"./uniqBy-CBQHwdan.js";import"./iteratee-DQxlQ_gO.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
