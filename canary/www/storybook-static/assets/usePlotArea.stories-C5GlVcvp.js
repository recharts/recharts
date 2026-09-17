import{R as t}from"./iframe-Brw_3xg7.js";import{j as a}from"./RechartsWrapper-CMScH4Y-.js";import{R as p}from"./zIndexSlice-2iAxrZkm.js";import{C as n}from"./ComposedChart-DXqSl_Jh.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BR2md8Jx.js";import{X as l}from"./XAxis-DXhKRI9c.js";import{Y as h}from"./YAxis-B_qMueqj.js";import{L as c}from"./Legend-BbfEXsAv.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-6Y628-3q.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BgtJq2Kp.js";import"./throttle-ConCS3s7.js";import"./index-CtKZ7ilo.js";import"./index-BzcphCAG.js";import"./isWellBehavedNumber-CKWY2x6w.js";import"./d3-scale-DDiKCNKi.js";import"./index-BcnaSdn8.js";import"./index-DAIxs-aJ.js";import"./renderedTicksSlice-7YaTp-wU.js";import"./index-DZwFur8w.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D0m-K2vW.js";import"./chartDataContext-B_uwNVrC.js";import"./CategoricalChart-CtbAzaJE.js";import"./Layer-U4JZqCxa.js";import"./Curve-C9eVciME.js";import"./types-BTkYx2NR.js";import"./step-Bi6RETvz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-O-Ra8tLQ.js";import"./Label-CpCnMIaY.js";import"./Text-DAJ7DyY-.js";import"./DOMUtils-Df1YjqfK.js";import"./useId-DReBIxno.js";import"./useBackwardsCompatibleTheme-bimwwtgB.js";import"./ZIndexLayer-DvhvnUDg.js";import"./useAnimationId-LBf_tWSw.js";import"./ActivePoints-CFOMS5xz.js";import"./Dot-CwLVs_ZX.js";import"./RegisterGraphicalItemId-11bybKxG.js";import"./ErrorBarContext-FTmrznrA.js";import"./GraphicalItemClipPath-SQ9_TryA.js";import"./SetGraphicalItem-CcGmMfg9.js";import"./getRadiusAndStrokeWidthFromDot-DFfjCAar.js";import"./ActiveShapeUtils-DolYUreE.js";import"./useGraphicalItemIdentity-CdCNj1VU.js";import"./CartesianAxis-DBWQUVsj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DBitbmPf.js";import"./symbol-DlOMBTws.js";import"./useElementOffset-C0IEKM2v.js";import"./uniqBy-DcxgoEQg.js";import"./iteratee-DhCw4nN3.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
