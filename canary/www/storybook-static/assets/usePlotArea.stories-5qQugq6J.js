import{R as t}from"./iframe-WNWxHA5w.js";import{z as a}from"./RechartsWrapper-MLPBuzwi.js";import{R as p}from"./zIndexSlice-BVgHV45y.js";import{C as n}from"./ComposedChart-DpKMEvwE.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-lsf5adcu.js";import{X as l}from"./XAxis-DfMY5qBP.js";import{Y as h}from"./YAxis-C2XMsDVi.js";import{L as c}from"./Legend-Dh7TdA43.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B2gYQvk0.js";import"./get-CjriyByo.js";import"./axisSelectors-DqPRQxzX.js";import"./throttle-DWlA00LM.js";import"./index-C5BrRLOu.js";import"./index-B_zAmF-o.js";import"./polarAxisSelectors-CgU14Zha.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-zFOgTZT_.js";import"./index-CWM66Coj.js";import"./index-CN82-OMW.js";import"./renderedTicksSlice-DXbq9Sus.js";import"./index-Ihw2JtUd.js";import"./fillDefinitions-Byjs2RvA.js";import"./CartesianChart-CStGKL8K.js";import"./chartDataContext-CQ2a4iuz.js";import"./CategoricalChart-DxS1nkjF.js";import"./getRadiusAndStrokeWidthFromDot-7Ou40HZN.js";import"./Layer-DaOdaJ8o.js";import"./Curve-aBjBuLLa.js";import"./types-jc9vmIop.js";import"./step-QSf3RYd6.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-Dk4XNyaK.js";import"./Label-CezBD4yi.js";import"./Text-Cw_EXTQi.js";import"./ZIndexLayer-yj-imWcv.js";import"./ActivePoints-Dr8JqR2c.js";import"./Dot-DNElWDLL.js";import"./activeStyles-CeKhNTWp.js";import"./useAnimationId-PYVmWLIg.js";import"./Symbols-DIUF60nI.js";import"./symbol-Cx8bofxp.js";import"./ErrorBarContext-Bqg4FQ8M.js";import"./SetGraphicalItem-Cb_G_uW5.js";import"./ActiveShapeUtils-MT88_CXC.js";import"./useEffectiveDataKey-Dv_aTiOG.js";import"./CartesianAxis-BHmhgeQf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-Ds0hVeZw.js";import"./uniqBy-BzMIYtmN.js";import"./iteratee-Dl7MZIU4.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
