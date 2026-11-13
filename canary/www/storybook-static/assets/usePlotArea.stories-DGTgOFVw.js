import{R as t}from"./iframe-B8oHBE2B.js";import{z as a}from"./RechartsWrapper-DFBUYq9O.js";import{R as p}from"./zIndexSlice-CY69X-_e.js";import{C as n}from"./ComposedChart-D7HXrnrm.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CAspGmUf.js";import{X as l}from"./XAxis-ZjtmoAYX.js";import{Y as h}from"./YAxis-xlwnxq94.js";import{L as c}from"./Legend-DfVTvwto.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CgUiyAYX.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Ds5h7JK9.js";import"./throttle-CUYrrG0C.js";import"./index-DmSsi07Q.js";import"./index-cJCZbnBh.js";import"./polarAxisSelectors-D2FYbhjQ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CbMuV4Xw.js";import"./index-DMrvH4_y.js";import"./index-DGZRfgJf.js";import"./renderedTicksSlice-a5-uxQKT.js";import"./index-BO756sza.js";import"./fillDefinitions-DKQEn6JZ.js";import"./CartesianChart-Cx94wGq6.js";import"./chartDataContext-DF9RfUto.js";import"./CategoricalChart-B_DdruJc.js";import"./Layer-d-LKmDNk.js";import"./Curve-DGAKYDzB.js";import"./types-pqA8tR2L.js";import"./step-BZkNkw_J.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BdZkCN9m.js";import"./Label-Do0pS3hb.js";import"./Text-CvT3zU9x.js";import"./ZIndexLayer-ctGMKsDO.js";import"./ActivePoints-Cp4H5Nc6.js";import"./Dot-BJ0YQTw_.js";import"./activeStyles-B9e3PXPC.js";import"./useAnimationId-DstXvFRQ.js";import"./Symbols-DlTVDDFq.js";import"./symbol-DwKqx-k1.js";import"./ErrorBarContext-FVg_hFB1.js";import"./SetGraphicalItem-CNXf_JK1.js";import"./getRadiusAndStrokeWidthFromDot-CwP227yr.js";import"./ActiveShapeUtils-DvU5i_JD.js";import"./useEffectiveDataKey-R28HVoPp.js";import"./CartesianAxis-DLXM_Mrp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-BUgTmqWV.js";import"./uniqBy-CWI3Th2f.js";import"./iteratee-BSURygRC.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
