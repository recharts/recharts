import{R as t}from"./iframe-BVlfuHR1.js";import{z as a}from"./RechartsWrapper-DRZJzitw.js";import{R as p}from"./zIndexSlice-DKBlzg_K.js";import{C as n}from"./ComposedChart-BrTaz3ZS.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D92Dv_C3.js";import{X as l}from"./XAxis-DixivmhH.js";import{Y as h}from"./YAxis-4InIcFXf.js";import{L as c}from"./Legend-CiJARbEk.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-2dAZYWIG.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Brqs7zw9.js";import"./throttle-B2Qtjc3W.js";import"./index-BQP9-3uy.js";import"./index-Y_wwfQb4.js";import"./polarAxisSelectors-DnZiXFIF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BNlCtWSy.js";import"./index-DNy-3Gid.js";import"./index-DZEpaPFi.js";import"./renderedTicksSlice-CoA4ci_o.js";import"./index-CCVms-fF.js";import"./CartesianChart-ZoKsxEgh.js";import"./ZIndexPortal-DaL6GVrS.js";import"./CategoricalChart-DD3gjEAO.js";import"./Layer-B5eXi8NV.js";import"./Curve-D680kDYc.js";import"./types-DYWAvxYY.js";import"./step-O-KWti3S.js";import"./path-DyVhHtw_.js";import"./LabelList-qAsFJxAr.js";import"./Label-Ckax5Juk.js";import"./Text-BxId80OJ.js";import"./DOMUtils-Dtel_m_3.js";import"./ZIndexLayer-6Z0WH24s.js";import"./ActivePoints-CI1sJ5FS.js";import"./Dot-Btb-E3dw.js";import"./activeStyles-B82PQSZb.js";import"./useAnimationId-eAQDadKJ.js";import"./dataEntryStyles-DSEQ0COb.js";import"./Symbols-Djyf5WWk.js";import"./symbol-ucn0ySfm.js";import"./ErrorBarContext-DAUTVb2k.js";import"./SetGraphicalItem-Cncgk9Qh.js";import"./getRadiusAndStrokeWidthFromDot-Cneka8AD.js";import"./ActiveShapeUtils--AsRwBXZ.js";import"./useEffectiveDataKey-BtHFWZML.js";import"./CartesianAxis-CPYLIIET.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-B4sFAt8T.js";import"./useElementOffset-CrNfCBWI.js";import"./uniqBy-B5YMrEOh.js";import"./iteratee-B_C-TQMi.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
