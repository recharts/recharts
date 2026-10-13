import{R as t}from"./iframe-FwppTpHM.js";import{e as a}from"./RechartsWrapper-Dkm03yWw.js";import{R as p}from"./zIndexSlice-Cdyw1_Nw.js";import{C as n}from"./ComposedChart-B8bgAvdx.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-LRONPAn4.js";import{X as l}from"./XAxis-Dfnm77SQ.js";import{Y as h}from"./YAxis-XAPAfHiU.js";import{L as c}from"./Legend-BcBtqqIv.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dg1uW6dq.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CYDcyh2t.js";import"./throttle-DynP12Or.js";import"./index-CTPoMXid.js";import"./index-C7fIk2L2.js";import"./isWellBehavedNumber-BtAr22s4.js";import"./d3-scale-CvbHukpk.js";import"./index-j_zzBaKn.js";import"./index-CjtLyLD1.js";import"./renderedTicksSlice-CFwd7tbS.js";import"./index-BJCItLgT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C3hX79Jh.js";import"./chartDataContext-Cg_fY9Ny.js";import"./CategoricalChart-fXjCF4k1.js";import"./Layer-RexR8ZVM.js";import"./Curve-DWgCdSwb.js";import"./types-X--Y4OUw.js";import"./step-CMSN2AEQ.js";import"./path-DyVhHtw_.js";import"./activeStyles-BjBEPVwb.js";import"./Label-CAlmg9Ax.js";import"./Text-BHYGaRJX.js";import"./pageBackground-b_qu_h6D.js";import"./useId-BHaTovYI.js";import"./useBackwardsCompatibleTheme-C6cobGh6.js";import"./ZIndexLayer-DRZokez8.js";import"./useAnimationId-C9td6Uok.js";import"./dataEntryStyles-DQ6Q68IL.js";import"./ActivePoints-Dq2ONYdH.js";import"./Dot-DDum5Zjk.js";import"./ErrorBarContext-DXeoB9w9.js";import"./GraphicalItemClipPath-DQPgZbCX.js";import"./SetGraphicalItem-y_hedEIa.js";import"./getRadiusAndStrokeWidthFromDot-C9HuDRcP.js";import"./ActiveShapeUtils-DfcLFOOu.js";import"./useEffectiveDataKey-edM5h020.js";import"./CartesianAxis-DkQ_2z38.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-X-h3Ju16.js";import"./symbol-HKos3qGF.js";import"./useElementOffset-mqvu6iZU.js";import"./uniqBy-Dj9uXd3I.js";import"./iteratee-BHQWYI0c.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
