import{R as t}from"./iframe-Cn8BbXdc.js";import{y as p}from"./RechartsWrapper-CCqZUt6C.js";import{R as a}from"./zIndexSlice-Cplo4OJz.js";import{C as n}from"./ComposedChart-COauRXZ_.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-B2HjGTuQ.js";import{X as d}from"./XAxis-OdkIm8mG.js";import{Y as h}from"./YAxis-CvKMQQHY.js";import{L as g}from"./Legend-8QFc7Zvg.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dx-UV5kK.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Cb1wJ0Tf.js";import"./throttle-BbuJxkpw.js";import"./index-Vt5NnRCL.js";import"./index-r2FQlKmQ.js";import"./polarAxisSelectors-Dlr2J2lS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BDIN99PH.js";import"./index-CIAdjncW.js";import"./index-apP2Ny11.js";import"./renderedTicksSlice-CBPyHODM.js";import"./index-CkmJfaR7.js";import"./fillDefinitions-Dqk1J0Zs.js";import"./CartesianChart-Cu7ICiUo.js";import"./chartDataContext-CsFOc9VE.js";import"./CategoricalChart-D66OJrIZ.js";import"./Layer-B5iMOq_s.js";import"./Curve-DPXO0w3v.js";import"./types-7A15NfYp.js";import"./step-CpKrc_Vd.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-fXcaT9lZ.js";import"./Label-BMteoko4.js";import"./Text-C0NLdB6_.js";import"./ZIndexLayer-CPj3ZDvt.js";import"./ActivePoints-CvLcmOKu.js";import"./Dot-DHIPOa_F.js";import"./activeStyles-DvMk-MBL.js";import"./useAnimationId-BQvfHsDD.js";import"./Symbols-V0KMXGx3.js";import"./symbol-B1AYOCFp.js";import"./ErrorBarContext-zwHjEd7p.js";import"./SetGraphicalItem-7Fal13Qm.js";import"./getRadiusAndStrokeWidthFromDot-CQo2Z7L1.js";import"./ActiveShapeUtils-Dlfc7hut.js";import"./useEffectiveDataKey-D8YFmfQj.js";import"./CartesianAxis-CrDF4n3X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BZTAY-ym.js";import"./uniqBy-BDioFPwN.js";import"./iteratee-Bi5Bqc-D.js";import"./isArguments-yB-y1yaH.js";const ct={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(n,{data:s,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}},lt=["UseOffset"];var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{r as UseOffset,lt as __namedExportsOrder,ct as default};
