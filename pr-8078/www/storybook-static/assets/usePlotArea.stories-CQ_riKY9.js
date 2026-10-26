import{R as t}from"./iframe-BofWz4pi.js";import{z as a}from"./RechartsWrapper-uhVYqXCO.js";import{R as p}from"./zIndexSlice-DPHCingP.js";import{C as n}from"./ComposedChart-D_3KSeQ5.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-B0vqUN1D.js";import{X as l}from"./XAxis-7mtD4Kk1.js";import{Y as h}from"./YAxis-D1oxSTTV.js";import{L as c}from"./Legend-BJN62WwA.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DKgUGYpY.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BlRUD72R.js";import"./throttle-CD21hIR0.js";import"./index-Ch52J8fd.js";import"./index-budgZ99k.js";import"./polarAxisSelectors-5SLj1vDB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BBiuonxv.js";import"./index-CCD_p5-C.js";import"./index-BTJxJJp6.js";import"./renderedTicksSlice-DguNpOt6.js";import"./index-DGPf-g6A.js";import"./CartesianChart-Bw0i9iF5.js";import"./chartDataContext-f6L6P8Kq.js";import"./CategoricalChart-DMR2DLHI.js";import"./Layer-bLQQfVOZ.js";import"./Curve-CFeHUPSl.js";import"./types-Da0w2MOX.js";import"./step-A_Fv11J5.js";import"./path-DyVhHtw_.js";import"./activeStyles-B7UPTptH.js";import"./Label-CCUawDng.js";import"./Text-Cod3bNx5.js";import"./pageBackground-CLiAzPgV.js";import"./useId-CsDd5jlc.js";import"./ZIndexLayer-ZOq897pe.js";import"./dataEntryStyles-EsxEhXM1.js";import"./useAnimationId-CM0h2zlX.js";import"./ActivePoints-DgVnIIPK.js";import"./Dot-DoIuuVTb.js";import"./RegisterGraphicalItemId-C_30UGno.js";import"./ErrorBarContext-D5pMarzn.js";import"./SetGraphicalItem-Cxhb9Qmq.js";import"./getRadiusAndStrokeWidthFromDot-Py8UGwCM.js";import"./ActiveShapeUtils-jlvddXY2.js";import"./useEffectiveDataKey-CF-diEWF.js";import"./CartesianAxis-DEogGjPj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-dr6Uh6kU.js";import"./symbol-cg3YFeoa.js";import"./useElementOffset-B4a6RQjs.js";import"./uniqBy-DiB2KEwv.js";import"./iteratee-CfR7qh40.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
