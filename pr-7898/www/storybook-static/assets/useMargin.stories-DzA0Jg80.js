import{R as r}from"./iframe-BLIo_1nt.js";import{q as a,R as n}from"./zIndexSlice-DC3TJ2KH.js";import{C as p}from"./ComposedChart-MrmH01T4.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as g}from"./Line-Op3Vm6R3.js";import{X as d}from"./XAxis-NUWW5fMr.js";import{Y as h}from"./YAxis-B-hKkgmv.js";import{L as c}from"./Legend-DcyuktsH.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DBbSGEQz.js";import"./get-CjriyByo.js";import"./throttle-BVtqo_9X.js";import"./index-X9B5BzRC.js";import"./index-DzqD25FH.js";import"./RechartsWrapper-DHKT5KBC.js";import"./axisSelectors-zp31unE3.js";import"./polarAxisSelectors-CTVIJxRd.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-0nS9y-pB.js";import"./index-CO4LKWIG.js";import"./index-BIvaYjey.js";import"./renderedTicksSlice-Bb6Mddqa.js";import"./index-Cvsm1Tm8.js";import"./fillDefinitions-pQA0VntX.js";import"./CartesianChart-DiqGyEKX.js";import"./chartDataContext-CqIvcjot.js";import"./CategoricalChart-DIDmT5Om.js";import"./getRadiusAndStrokeWidthFromDot-DxsyiQVm.js";import"./Layer-BmO--khP.js";import"./Curve-BVD8Rbav.js";import"./types-C-m9Hr0T.js";import"./step-LFYZ39d8.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-B2sIlIGL.js";import"./Label-CFregkfn.js";import"./Text-DGpe4WxS.js";import"./ZIndexLayer-BZ7iUhzZ.js";import"./ActivePoints-BBUouWIB.js";import"./Dot-B_Lpp7cN.js";import"./activeStyles-CwggIO5e.js";import"./useAnimationId-BgYtx5DV.js";import"./Symbols-DgGyp4Yg.js";import"./symbol-D8T0ODfo.js";import"./ErrorBarContext-GHF_OtFg.js";import"./SetGraphicalItem-DvFjNtUQ.js";import"./ActiveShapeUtils-wxtxdEJ1.js";import"./useEffectiveDataKey-CLP9K8e-.js";import"./CartesianAxis-CednQB0X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-VoZhZIkW.js";import"./uniqBy-D7cU4A4V.js";import"./iteratee-w-RXZ5GP.js";import"./isArguments-yB-y1yaH.js";const lr={title:"API/hooks/useMargin",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},t={name:"useMargin",render:o=>r.createElement(n,{width:o.width,height:o.height},r.createElement(p,{data:s,margin:o.margin},r.createElement(g,{dataKey:"pv"}),r.createElement(d,{dataKey:"name"}),r.createElement(h,null),r.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}},ur=["UseMargin"];var e,i,m;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: 'useMargin',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
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
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{t as UseMargin,ur as __namedExportsOrder,lr as default};
