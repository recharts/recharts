import{R as t}from"./iframe-CCA1dLWD.js";import{j as a}from"./RechartsWrapper-Ci54jWLi.js";import{R as p}from"./zIndexSlice-Bqs-eJ8p.js";import{C as n}from"./ComposedChart-DGmL1PWR.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DzXrLh5M.js";import{X as l}from"./XAxis-B02ZLuLQ.js";import{Y as h}from"./YAxis-DVlxFbm5.js";import{L as c}from"./Legend-D9pOt-by.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DAFAxP68.js";import"./get-C2VjdU0L.js";import"./axisSelectors-ueWwuThv.js";import"./throttle-D3xpLLdH.js";import"./index-C97djya6.js";import"./index-BTapAtmF.js";import"./isWellBehavedNumber-CUTtCnYO.js";import"./d3-scale-BdepyZ_B.js";import"./index-Cyg8bGg4.js";import"./index-CVq5gi49.js";import"./renderedTicksSlice-CuWBxFlw.js";import"./index-Cah2JXyu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CTE6kj-2.js";import"./chartDataContext-CLCJusst.js";import"./CategoricalChart-mUCs8Qny.js";import"./Layer-CmH8ISrU.js";import"./Curve-6_pS1I8Z.js";import"./types-B2426EfA.js";import"./step-pmX9eUCr.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bwhxgw5t.js";import"./Label-C7jyVHZg.js";import"./Text-Cxmc4hoL.js";import"./DOMUtils-B9q-UHbd.js";import"./useId-C-4rQrJ2.js";import"./useBackwardsCompatibleTheme-B-BtV5HU.js";import"./ZIndexLayer-BsYZhZ4O.js";import"./useAnimationId-BZsPKArS.js";import"./ActivePoints-D5cnScbI.js";import"./Dot-PvcySOeb.js";import"./RegisterGraphicalItemId-BRUpoP9Q.js";import"./ErrorBarContext-C-MqMGv0.js";import"./GraphicalItemClipPath-DcQmHX6S.js";import"./SetGraphicalItem-6HsvsmQk.js";import"./getRadiusAndStrokeWidthFromDot-CgH2ac05.js";import"./ActiveShapeUtils-zvjqERUF.js";import"./useGraphicalItemIdentity-CJ147Nvu.js";import"./CartesianAxis-ClD0AQ8W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BcmRvXLE.js";import"./symbol-1PbKhfdG.js";import"./useElementOffset-DZYD1Ia0.js";import"./uniqBy-BMBICafF.js";import"./iteratee-D0uU7ZFx.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
