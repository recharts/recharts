import{R as t}from"./iframe-NSpsGxr3.js";import{j as a}from"./RechartsWrapper-DtJCjJYR.js";import{R as p}from"./zIndexSlice-CegrvH4P.js";import{C as s}from"./ComposedChart-BSbO4QCj.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Di8fBUgO.js";import{X as l}from"./XAxis-DNhoou9P.js";import{Y as h}from"./YAxis-s1ngqAL7.js";import{L as c}from"./Legend-CBMEHQx2.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BlFb5h3I.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BkwFONEa.js";import"./throttle-oOh5DhdY.js";import"./index-4AzzKt7j.js";import"./index-0HEoT-e5.js";import"./isWellBehavedNumber-pwlbiGoO.js";import"./d3-scale-C3gnRv6y.js";import"./index-BsIlyQNm.js";import"./index-DWO3hHqn.js";import"./renderedTicksSlice-DYxvbfog.js";import"./index-CYtbOF9C.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CvLKYupN.js";import"./chartDataContext-DJ-2f6vo.js";import"./CategoricalChart-Dg01q-nM.js";import"./Layer-BnG363as.js";import"./Curve-CaqAetYK.js";import"./types-Co_GWDov.js";import"./step-Drtb2meU.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BkT2_sP2.js";import"./Label-BIdOyJIr.js";import"./Text-BtwC4msG.js";import"./DOMUtils-CWTrI1E5.js";import"./useId-BVXNnfLZ.js";import"./useBackwardsCompatibleTheme-C2Bmbb6o.js";import"./ZIndexLayer-C4urMDBy.js";import"./useAnimationId-N_fuM4i0.js";import"./ActivePoints-KPsJbcKk.js";import"./Dot-DjaeVWdC.js";import"./RegisterGraphicalItemId-wt0KspV9.js";import"./ErrorBarContext-CEiAdeUz.js";import"./GraphicalItemClipPath-CcSo6wES.js";import"./SetGraphicalItem-C1qAtScX.js";import"./getRadiusAndStrokeWidthFromDot-DkEHurz6.js";import"./ActiveShapeUtils-pIseDvg-.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BwBDYPDu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-9rD-zr54.js";import"./symbol-B_V30F_Z.js";import"./useElementOffset-DnaqijmP.js";import"./uniqBy-BO5ZjA6J.js";import"./iteratee-C2lnqyuZ.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
