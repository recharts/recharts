import{R as t}from"./iframe-BysHx74D.js";import{j as a}from"./RechartsWrapper-DUyJnBgS.js";import{R as p}from"./zIndexSlice-B9_IIDSS.js";import{C as n}from"./ComposedChart-B85hU3af.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BsJW2aoa.js";import{X as l}from"./XAxis-Bu0Olx-M.js";import{Y as h}from"./YAxis-BuISev1J.js";import{L as c}from"./Legend-Cma8tjBf.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C5vv7I0d.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BPfQ7z4G.js";import"./throttle-BvXCXgu9.js";import"./index-BJxLMgN-.js";import"./index-H0SrxT4N.js";import"./isWellBehavedNumber-oHvlto0K.js";import"./d3-scale-DD00swLB.js";import"./index-CB_yz375.js";import"./index-DNsScqoB.js";import"./renderedTicksSlice-3X1ncpqb.js";import"./index-r38g0wHW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DmPHp5IF.js";import"./chartDataContext-9O_0ckbs.js";import"./CategoricalChart-Cn_rERmH.js";import"./Layer-BF34dHnr.js";import"./Curve-BmDlaXTG.js";import"./types-DGXblPho.js";import"./step-B4vU2sA2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DsYEWi_U.js";import"./Label-BN43rvaR.js";import"./Text-BCrIO-O-.js";import"./DOMUtils-CXQBBarz.js";import"./useId-Bj8s3C04.js";import"./useBackwardsCompatibleTheme-Dm-8fXUv.js";import"./ZIndexLayer-lKptmcsL.js";import"./useAnimationId-COzQNsPr.js";import"./ActivePoints--qrMkUyO.js";import"./Dot-D1W-oosg.js";import"./RegisterGraphicalItemId-B5UvF8cg.js";import"./ErrorBarContext-C3rhr1lE.js";import"./GraphicalItemClipPath-D2pDNvXJ.js";import"./SetGraphicalItem-CewCaUrF.js";import"./getRadiusAndStrokeWidthFromDot-BA8MWWaF.js";import"./ActiveShapeUtils-OXeos-xf.js";import"./useGraphicalItemIdentity-rkAwppzN.js";import"./CartesianAxis-CKvkK8kD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CP1G2AEe.js";import"./symbol-D7fm9S_9.js";import"./useElementOffset-BInCcsaq.js";import"./uniqBy-JC9DBpsi.js";import"./iteratee-laF-f1n6.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
