import{R as t}from"./iframe-D--BifOA.js";import{j as a}from"./RechartsWrapper-CSj-zOMY.js";import{R as p}from"./zIndexSlice-BS_bCBK-.js";import{C as n}from"./ComposedChart-CuIfpr-P.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-qeb5AOli.js";import{X as l}from"./XAxis-Csoi6tJo.js";import{Y as h}from"./YAxis-kT_Dhc9L.js";import{L as c}from"./Legend-DgX7j-HN.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-lipkooEs.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BukMemNW.js";import"./throttle-CArjZiC0.js";import"./index-BOkqGzp2.js";import"./index-CfjS_rv2.js";import"./isWellBehavedNumber-Dtp514zB.js";import"./d3-scale-A0pa5PaW.js";import"./index-BU2LuEPQ.js";import"./index-w8XliPC1.js";import"./renderedTicksSlice-aSc_RQuV.js";import"./index-Bhmq51fs.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CGnG6vua.js";import"./chartDataContext-DYtS61hX.js";import"./CategoricalChart-exrBt-zG.js";import"./Layer-DyzQQGzG.js";import"./Curve-B6JdyyX2.js";import"./types-Ba9pm5hc.js";import"./step-DWnGBeyO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dg7VLsKy.js";import"./Label-CFZdNolQ.js";import"./Text-DqGbkrCU.js";import"./DOMUtils-DY29CBKb.js";import"./useId-CApYJX2H.js";import"./useBackwardsCompatibleTheme-Bk9F9dU7.js";import"./ZIndexLayer-BREUw5RK.js";import"./useAnimationId-DR1fMTy4.js";import"./ActivePoints-BPt1O7jo.js";import"./Dot-BJReGaVO.js";import"./RegisterGraphicalItemId-BvCBLwbE.js";import"./ErrorBarContext-DfSUsFkF.js";import"./GraphicalItemClipPath-Bf92gQO6.js";import"./SetGraphicalItem-DcBb5qLP.js";import"./getRadiusAndStrokeWidthFromDot-CK_UfwUG.js";import"./ActiveShapeUtils-BVXEB5o6.js";import"./useGraphicalItemIdentity-pSJHNQYU.js";import"./CartesianAxis-C4H8T_Ld.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-sICZq85f.js";import"./symbol-BoZKm9ub.js";import"./useElementOffset-DmpHX-P0.js";import"./uniqBy-bPD_mXTF.js";import"./iteratee-5n_c6cHV.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
