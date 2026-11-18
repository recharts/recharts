import{R as t}from"./iframe-ESIqq74j.js";import{z as a}from"./RechartsWrapper-CmfK6Aj5.js";import{R as p}from"./zIndexSlice-CKvG1btl.js";import{C as n}from"./ComposedChart-L_mLjP39.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BfPK1q22.js";import{X as l}from"./XAxis-DazJCOyK.js";import{Y as h}from"./YAxis-DKsjzmyR.js";import{L as c}from"./Legend-BjeJ2ZzA.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B7R_GNLW.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Dt46-i8H.js";import"./throttle-s6zM-TSz.js";import"./index-CADuzeyv.js";import"./index-BLW9Qo5X.js";import"./polarAxisSelectors-3_x-3ruj.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-RU_yJ5H-.js";import"./index-CfWnO0RN.js";import"./index-BUNu1DhE.js";import"./renderedTicksSlice-mNjnmJLW.js";import"./index-COj7acwZ.js";import"./fillDefinitions-DJ6LDeFQ.js";import"./CartesianChart-C07q_lkj.js";import"./chartDataContext-y_Sj-SgN.js";import"./CategoricalChart-DJa-RrVL.js";import"./getRadiusAndStrokeWidthFromDot-DeJPrQyS.js";import"./Layer-Bde02su5.js";import"./Curve-DSZOr6BZ.js";import"./types-CKUWabzj.js";import"./step-CinInmIp.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CU93DU9D.js";import"./Label-BX7H8p4m.js";import"./Text-SrX2-qRa.js";import"./ZIndexLayer-C_1IKv4J.js";import"./ActivePoints-CTIAjKB9.js";import"./Dot-HenRQ4hS.js";import"./activeStyles-rtMeimPT.js";import"./useAnimationId-Fts_Wu3I.js";import"./Symbols-CUdupVmb.js";import"./symbol-DTe8TmzR.js";import"./ErrorBarContext-ckgpu_x8.js";import"./SetGraphicalItem-D7oZPXcp.js";import"./ActiveShapeUtils-C0RxF4ep.js";import"./useEffectiveDataKey-CNiCq0ga.js";import"./CartesianAxis-B_kntHFz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Bi21MMet.js";import"./uniqBy-DLn6pOi-.js";import"./iteratee-Ceo2QOyl.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
