import{R as t}from"./iframe-Bsj5zL9n.js";import{j as a}from"./RechartsWrapper-CfIRZAky.js";import{R as p}from"./zIndexSlice-Cq8HAqW-.js";import{C as n}from"./ComposedChart-CUT9nv0s.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CEJpYTqK.js";import{X as l}from"./XAxis-BgzuwsrB.js";import{Y as h}from"./YAxis-CbZ6bfr6.js";import{L as c}from"./Legend-CwuA7Mfn.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Uluvm9qq.js";import"./get-C2VjdU0L.js";import"./axisSelectors-mMRcbn7f.js";import"./throttle-CrEblMxD.js";import"./index-BnI-_qMA.js";import"./index-DrTVWANE.js";import"./isWellBehavedNumber-DfaPS7hR.js";import"./d3-scale-CbB2Llqp.js";import"./index-DOYtr8yv.js";import"./index-g6-HhHC-.js";import"./renderedTicksSlice-BMu61fLT.js";import"./index-Kh3nyu4O.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CeBBXviU.js";import"./chartDataContext-TTvcivZZ.js";import"./CategoricalChart-CEEokRev.js";import"./Layer-yetTMzBX.js";import"./Curve-DfVRmOpg.js";import"./types-Bb-qVITL.js";import"./step-DdZLdhts.js";import"./path-DyVhHtw_.js";import"./activeStyles-C6E3VGh0.js";import"./Label-Dh346ivy.js";import"./Text-EdZq5d5T.js";import"./pageBackground-B9aaE2P3.js";import"./useId-oX3CQwQj.js";import"./useBackwardsCompatibleTheme-CCerMO7Q.js";import"./ZIndexLayer-BdEpN6P8.js";import"./useAnimationId-HXoQj9d3.js";import"./dataEntryStyles-5zRGCxG2.js";import"./ActivePoints-DaFpowFA.js";import"./Dot-Cf3V7dyP.js";import"./ErrorBarContext-HZLs1nsG.js";import"./GraphicalItemClipPath-BHCzBPU9.js";import"./SetGraphicalItem-CgedTelm.js";import"./getRadiusAndStrokeWidthFromDot-CxwIFweR.js";import"./ActiveShapeUtils-Ca0VK3Nb.js";import"./useGraphicalItemIdentity-BJYihGV1.js";import"./CartesianAxis-BFozoP5y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DRNmlrBI.js";import"./symbol-DjYhybRJ.js";import"./useElementOffset-DZSLckyW.js";import"./uniqBy-DpsGABHA.js";import"./iteratee-t29Xx_gs.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
