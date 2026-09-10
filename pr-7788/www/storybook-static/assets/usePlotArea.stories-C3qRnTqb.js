import{R as t}from"./iframe-CCc4Ig9t.js";import{j as a}from"./RechartsWrapper-Cz1O2LQ_.js";import{R as p}from"./zIndexSlice-1P0wH6mw.js";import{C as n}from"./ComposedChart-Dz5UNdl9.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CXz5YjBC.js";import{X as l}from"./XAxis-B7UFXjXO.js";import{Y as h}from"./YAxis-BglDyQ9K.js";import{L as c}from"./Legend-C4s_iYBR.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-VNAAgVLt.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DPq5qkhW.js";import"./throttle-BYOhzTjU.js";import"./index-D-887qgc.js";import"./index-CZthC9SS.js";import"./isWellBehavedNumber-BwK7Fikb.js";import"./d3-scale-DD504LTb.js";import"./index-DP3dQjsk.js";import"./index-BMcDiNhW.js";import"./renderedTicksSlice-DEDWHMPA.js";import"./index-G3ylxvqW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-LpLVhPdZ.js";import"./chartDataContext-q63OH3iY.js";import"./CategoricalChart-Bf4qEJ6P.js";import"./Layer-CI2wc1Xr.js";import"./Curve-BvVtw5_4.js";import"./types-DJtqKg77.js";import"./step-CwrGAB68.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ca5Obh5D.js";import"./Label-DTpe6J5w.js";import"./Text-Cj4kK8yu.js";import"./DOMUtils-Df_Ucl3X.js";import"./useId-CLSpndMM.js";import"./useBackwardsCompatibleTheme-BVGIiR_X.js";import"./ZIndexLayer-BPtrp-aJ.js";import"./useAnimationId-ClzD5z7x.js";import"./ActivePoints-DjcQylVy.js";import"./Dot-ATZOOaE7.js";import"./RegisterGraphicalItemId-BnnRsli9.js";import"./ErrorBarContext-Buf_Z21J.js";import"./GraphicalItemClipPath-BbHKpjF5.js";import"./SetGraphicalItem-Bpek28vv.js";import"./getRadiusAndStrokeWidthFromDot-Ce6GbVl8.js";import"./ActiveShapeUtils-BtdS6G9Z.js";import"./useGraphicalItemIdentity-Ckfzcm_J.js";import"./CartesianAxis-Bp_xQTZ6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CbvdSNpg.js";import"./symbol-B3VhryUs.js";import"./useElementOffset--AK27c3n.js";import"./uniqBy-D8aeMkbi.js";import"./iteratee-BQkyZMdx.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
