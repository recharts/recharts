import{R as t}from"./iframe-DgWro0Cb.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-CQ5WC2tx.js";import{R as g}from"./zIndexSlice-kqW7224Y.js";import{X as S}from"./XAxis-CkB5HD-K.js";import{Y as h}from"./YAxis-D4vSwiu5.js";import{S as A}from"./Scatter-DFqbWc_L.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-h6y9B5zn.js";import"./resolveDefaultProps-BhS12mAV.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CZ13_oVc.js";import"./throttle-BP62aThC.js";import"./index-DztsUb_g.js";import"./index-D3He7cmP.js";import"./isWellBehavedNumber-DwM6ebKF.js";import"./d3-scale-BfkfHoGl.js";import"./index-BDglQEHq.js";import"./index-CTaoAsOx.js";import"./renderedTicksSlice-gL8A1NDh.js";import"./index-DaYKny0o.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DA39YynM.js";import"./chartDataContext-CGD2iDmQ.js";import"./CategoricalChart-u8OOiycT.js";import"./CartesianAxis-CA5xaS56.js";import"./Layer-XFlq6LCH.js";import"./Text-waGCJknf.js";import"./DOMUtils-D88jtPAc.js";import"./useId-BFsrAK1l.js";import"./useBackwardsCompatibleTheme-VKMGBrP2.js";import"./Label-CAU1RuQf.js";import"./ZIndexLayer-DpP2thTP.js";import"./types-pVUrsENP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DqXJhGnM.js";import"./useAnimationId-NxEFQxZ2.js";import"./Curve-BxTMDs4y.js";import"./step-JFePqLTA.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DTlpCDdB.js";import"./Symbols-DrEB9F-d.js";import"./symbol-DXkmIxFe.js";import"./ActiveShapeUtils-BxIddtsB.js";import"./RegisterGraphicalItemId-9cmkZE1J.js";import"./ErrorBarContext-8rr3nTdF.js";import"./GraphicalItemClipPath-D8FUo4fb.js";import"./SetGraphicalItem-DPr6Abv8.js";import"./useGraphicalItemIdentity-DUrbqVuJ.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
