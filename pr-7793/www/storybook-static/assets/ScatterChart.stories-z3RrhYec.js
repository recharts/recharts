import{R as t}from"./iframe-BZt9gdNh.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-BVfXVFjj.js";import{R as g}from"./zIndexSlice-XuBBmNUo.js";import{X as S}from"./XAxis-C8XTecZS.js";import{Y as h}from"./YAxis-B6iDX6TN.js";import{S as A}from"./Scatter-CsBydkRQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cay7o2ht.js";import"./resolveDefaultProps-D9AqqL0J.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Cl7dH9vF.js";import"./throttle-B4vKrVKm.js";import"./index-Dp5cLYAc.js";import"./index-CaEFKWj4.js";import"./isWellBehavedNumber-Br3w71g0.js";import"./d3-scale-GcIZdCoT.js";import"./index-B_o6Jv3Z.js";import"./index-B5FMXu9L.js";import"./renderedTicksSlice-CswugCrI.js";import"./index-DjzlGcMj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B0JWnvwa.js";import"./chartDataContext-DfJ9Dq10.js";import"./CategoricalChart-qRJJqTbq.js";import"./CartesianAxis-Cv8lslC5.js";import"./Layer-DrcPzbE2.js";import"./Text-CeEgQkK1.js";import"./DOMUtils-CENtu6Ky.js";import"./useId-BpCkPPis.js";import"./useBackwardsCompatibleTheme-B33DH1wF.js";import"./Label-CgKCxMe1.js";import"./ZIndexLayer-BUepW3qO.js";import"./types-Rk0FsTZp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-dtI7DJaK.js";import"./useAnimationId-DFFh1fwK.js";import"./Curve-CNkmv-tl.js";import"./step-Cs04DkZC.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BH9Rct5y.js";import"./Symbols-Bc8IP3E4.js";import"./symbol-CyhJoWFM.js";import"./ActiveShapeUtils-BSpPce9D.js";import"./RegisterGraphicalItemId-DHjWQaqm.js";import"./ErrorBarContext-Di40cu4W.js";import"./GraphicalItemClipPath-DFXU-IsT.js";import"./SetGraphicalItem-Bu5vFhfh.js";import"./useGraphicalItemIdentity-CraBFHaJ.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
