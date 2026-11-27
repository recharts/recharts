import{R as t}from"./iframe-BLIo_1nt.js";import{z as a}from"./RechartsWrapper-DHKT5KBC.js";import{R as p}from"./zIndexSlice-DC3TJ2KH.js";import{C as n}from"./ComposedChart-MrmH01T4.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Op3Vm6R3.js";import{X as l}from"./XAxis-NUWW5fMr.js";import{Y as h}from"./YAxis-B-hKkgmv.js";import{L as c}from"./Legend-DcyuktsH.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DBbSGEQz.js";import"./get-CjriyByo.js";import"./axisSelectors-zp31unE3.js";import"./throttle-BVtqo_9X.js";import"./index-X9B5BzRC.js";import"./index-DzqD25FH.js";import"./polarAxisSelectors-CTVIJxRd.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-0nS9y-pB.js";import"./index-CO4LKWIG.js";import"./index-BIvaYjey.js";import"./renderedTicksSlice-Bb6Mddqa.js";import"./index-Cvsm1Tm8.js";import"./fillDefinitions-pQA0VntX.js";import"./CartesianChart-DiqGyEKX.js";import"./chartDataContext-CqIvcjot.js";import"./CategoricalChart-DIDmT5Om.js";import"./getRadiusAndStrokeWidthFromDot-DxsyiQVm.js";import"./Layer-BmO--khP.js";import"./Curve-BVD8Rbav.js";import"./types-C-m9Hr0T.js";import"./step-LFYZ39d8.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-B2sIlIGL.js";import"./Label-CFregkfn.js";import"./Text-DGpe4WxS.js";import"./ZIndexLayer-BZ7iUhzZ.js";import"./ActivePoints-BBUouWIB.js";import"./Dot-B_Lpp7cN.js";import"./activeStyles-CwggIO5e.js";import"./useAnimationId-BgYtx5DV.js";import"./Symbols-DgGyp4Yg.js";import"./symbol-D8T0ODfo.js";import"./ErrorBarContext-GHF_OtFg.js";import"./SetGraphicalItem-DvFjNtUQ.js";import"./ActiveShapeUtils-wxtxdEJ1.js";import"./useEffectiveDataKey-CLP9K8e-.js";import"./CartesianAxis-CednQB0X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-VoZhZIkW.js";import"./uniqBy-D7cU4A4V.js";import"./iteratee-w-RXZ5GP.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
