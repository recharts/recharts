import{R as t}from"./iframe-130qk4m_.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-CSobVG_m.js";import{R as g}from"./zIndexSlice-DRUK-Dg-.js";import{X as S}from"./XAxis-CZ9F9O5a.js";import{Y as h}from"./YAxis-COXka6w4.js";import{S as A}from"./Scatter-TXcmr6S_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bo40Do7U.js";import"./resolveDefaultProps-CYRr0Ie5.js";import"./get-C2VjdU0L.js";import"./axisSelectors-X5KptGXH.js";import"./throttle-kCNuVuJ-.js";import"./index-CsWcnfda.js";import"./index-BcLoK3PR.js";import"./isWellBehavedNumber-DjBeGij7.js";import"./d3-scale-Dk5HPyUF.js";import"./index-CrvbTTow.js";import"./index-Bjllb2VH.js";import"./renderedTicksSlice-Cmod0XxC.js";import"./index-DEOEohuH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BIfw6B_y.js";import"./chartDataContext-DcIZimMl.js";import"./CategoricalChart-BUcyv7Rs.js";import"./CartesianAxis-C5WMjY4c.js";import"./Layer-Cyv1dWj2.js";import"./Text-BSQyPF-I.js";import"./DOMUtils-nn98Njua.js";import"./useId-DN63oQqC.js";import"./useBackwardsCompatibleTheme-BFLDUGtw.js";import"./Label-BTScYLJC.js";import"./ZIndexLayer-BCmai4o5.js";import"./types-Da5i9wCB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CnmA861Y.js";import"./useAnimationId-NcjSJtDX.js";import"./Curve-zMO2mb05.js";import"./step-CzM1y9Rf.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CXrQPimu.js";import"./Symbols-Bvuju7KU.js";import"./symbol-kYWcfVOX.js";import"./ActiveShapeUtils-CM6xxOZA.js";import"./RegisterGraphicalItemId-Cj8G_tD9.js";import"./ErrorBarContext-Cce-eGB1.js";import"./GraphicalItemClipPath-CEUDXBSP.js";import"./SetGraphicalItem-fFkzzaD8.js";import"./useGraphicalItemIdentity-UHVfOAjT.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const {
      data,
      ...rest
    } = args;
    return <ResponsiveContainer width="100%" height={400}>
        <ScatterChart {...rest}>
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Scatter data={data} />
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ScatterChartArgs),
    data: coordinateData,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
}`,...(m=(e=r.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};export{r as API,At as __namedExportsOrder,ht as default};
