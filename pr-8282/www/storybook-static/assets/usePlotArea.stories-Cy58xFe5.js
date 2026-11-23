import{R as t}from"./iframe-B3TE-nU3.js";import{z as a}from"./RechartsWrapper-Cj-eh_A9.js";import{R as p}from"./zIndexSlice-CTTS6cFj.js";import{C as n}from"./ComposedChart-CoUJ-8Kk.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-C9ocvs2A.js";import{X as l}from"./XAxis-h5fh4YlR.js";import{Y as h}from"./YAxis-DsQMJ5Zr.js";import{L as c}from"./Legend-Caqq_aup.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CZyWFquG.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DZCqrQSM.js";import"./throttle-CbHIruzi.js";import"./index-CwYGoluT.js";import"./index-BdYXEAEl.js";import"./polarAxisSelectors-Du86AxQZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CXmLRtz9.js";import"./index-DGF3N8N0.js";import"./index-QNAAg88T.js";import"./renderedTicksSlice-CnKrAq7k.js";import"./index-j8tkVAM0.js";import"./fillDefinitions-ExsKJJdV.js";import"./CartesianChart-BlnVLBxP.js";import"./chartDataContext-CdnFs56-.js";import"./CategoricalChart-ZasnE1da.js";import"./getRadiusAndStrokeWidthFromDot-sWaZWzqd.js";import"./Layer-ChziGKVJ.js";import"./Curve-DakK0sdO.js";import"./types-DiSBkFzd.js";import"./step-DFLs3YCD.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DR0RxE_5.js";import"./Label-CBnDrrJb.js";import"./Text-Dg5b12Q4.js";import"./ZIndexLayer-CcszVre3.js";import"./ActivePoints-Ds08HXXd.js";import"./Dot-AAIkJYcq.js";import"./activeStyles-P5uz91Wl.js";import"./useAnimationId-CxiMpo3b.js";import"./Symbols-BSwXR0zr.js";import"./symbol-DheZZ-vM.js";import"./ErrorBarContext-CAoDHE0Y.js";import"./SetGraphicalItem-H8Hr2AbP.js";import"./ActiveShapeUtils-Bxv-7xaq.js";import"./useEffectiveDataKey-DPfqIOjF.js";import"./CartesianAxis-98BHMJXj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-C_UZj4GX.js";import"./uniqBy-RWn0hC0g.js";import"./iteratee-BJFUBVEZ.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
