import{R as t}from"./iframe-DG1yZPWZ.js";import{z as p}from"./RechartsWrapper-Bchp_o7p.js";import{R as a}from"./zIndexSlice-asfAkO72.js";import{C as n}from"./ComposedChart-Bg3J3jLh.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DiHguxZv.js";import{X as l}from"./XAxis-Cx1v_iob.js";import{Y as h}from"./YAxis-D8fDz-Jg.js";import{L as c}from"./Legend-Bg__uj4m.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-zC97C8Ii.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BLyrYAI0.js";import"./throttle-QLzPTGhw.js";import"./index-B8R5wD7Q.js";import"./index-Cm9Dvuha.js";import"./polarAxisSelectors-D8A3KxdK.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-p1mp5kit.js";import"./index-BlTUNZQc.js";import"./index-Bt1QYmkD.js";import"./renderedTicksSlice-DtyZfQXr.js";import"./index-D_9rD6su.js";import"./CartesianChart-JxE9ej3_.js";import"./ZIndexPortal-iKAZRpeg.js";import"./CategoricalChart-C_RyWiZg.js";import"./Layer-DzG8YxQe.js";import"./Curve-DcJDRZ_G.js";import"./types-DqMoKlmp.js";import"./step-U1uI6C26.js";import"./path-DyVhHtw_.js";import"./LabelList-DDOiPfis.js";import"./Label-CP0s7Q77.js";import"./Text-jtW7RKFp.js";import"./DOMUtils-CnKUAWGq.js";import"./ZIndexLayer-Bf1pNdwz.js";import"./ActivePoints-CGsYeesF.js";import"./Dot-BvOm6Swm.js";import"./activeStyles-BM7qy7T1.js";import"./useAnimationId-C_9VGehw.js";import"./dataEntryStyles-B8PPCs32.js";import"./fillDefinitions-C7BJRYTP.js";import"./themeFill-D_uX30kF.js";import"./Symbols-0F73g9aR.js";import"./symbol-B3qgj-xo.js";import"./ErrorBarContext-C4LHoflN.js";import"./SetGraphicalItem-Cvt15Nbt.js";import"./getRadiusAndStrokeWidthFromDot-Bzdqwx5x.js";import"./ActiveShapeUtils-Dl04D47U.js";import"./useEffectiveDataKey-Qa_0ZIQ7.js";import"./CartesianAxis-D2CTuJLk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-gChE2lz3.js";import"./uniqBy-BMDahjm8.js";import"./iteratee-Bd2duUdb.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},o={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var e,i,m;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
