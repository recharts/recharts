import{R as t}from"./iframe-CsBzJ_oY.js";import{z as a}from"./RechartsWrapper-BbLnuVBa.js";import{R as p}from"./zIndexSlice-DMNrA3gR.js";import{C as n}from"./ComposedChart-DxnPzYcP.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CCPvJikT.js";import{X as l}from"./XAxis-DUfavQsq.js";import{Y as h}from"./YAxis-BcwvR8DG.js";import{L as c}from"./Legend-TM2Lf8pQ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DTmgUguK.js";import"./get-cF5BDHN6.js";import"./axisSelectors-C9oSyHKr.js";import"./throttle-BC8XINhc.js";import"./index-ZIwCGu9j.js";import"./index-ANSegWuD.js";import"./polarAxisSelectors-DNMiXlqe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-eAFxYw1v.js";import"./index-BQIdRebQ.js";import"./index-CyJaGzTs.js";import"./renderedTicksSlice-DmEF733K.js";import"./index-Dtk6Fc20.js";import"./fillDefinitions-CiGFpPDU.js";import"./CartesianChart-BkZkGsdO.js";import"./chartDataContext-C_pMILpz.js";import"./CategoricalChart-DGDB_d9-.js";import"./getRadiusAndStrokeWidthFromDot-Hya4Z7ii.js";import"./Layer-DasxrL-P.js";import"./Curve-FGayhVFg.js";import"./types-BTltodPN.js";import"./step-HvxF_Jgn.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BxNkTaqU.js";import"./Label-BqIt3uIU.js";import"./Text-_hT2aORY.js";import"./ZIndexLayer-BgP2DxGj.js";import"./ActivePoints-BGfIVtPb.js";import"./Dot-CnEc0IvV.js";import"./activeStyles-CWJgi0Pp.js";import"./useAnimationId-CwEH45Ii.js";import"./Symbols-u-7YXq8E.js";import"./symbol-BqQr48xZ.js";import"./ErrorBarContext-DJQ_oRWY.js";import"./SetGraphicalItem-Cd415TqE.js";import"./ActiveShapeUtils-DlQXgIQN.js";import"./useEffectiveDataKey-P2OtOQRT.js";import"./CartesianAxis-Ct89iDgP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CgJ049Q8.js";import"./uniqBy-BzxtSZSo.js";import"./iteratee-deGr8F35.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
