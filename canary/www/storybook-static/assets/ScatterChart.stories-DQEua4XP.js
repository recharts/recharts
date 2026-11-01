import{R as t}from"./iframe-Bm_JRRDc.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-DR0v92Ih.js";import{R as g}from"./zIndexSlice-CE1MC-Bj.js";import{X as S}from"./XAxis-CYGYoqLr.js";import{Y as h}from"./YAxis-DkJzVEan.js";import{S as A}from"./Scatter-BN_gsRF8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CWqhr_G8.js";import"./resolveDefaultProps-Cwcw9Llo.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CQbwMXjx.js";import"./throttle-Di0g5pz3.js";import"./index-2pvHcFpK.js";import"./index-DwUcBVgp.js";import"./polarAxisSelectors-CFmXVpQm.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-_mEsQ66i.js";import"./index-B22Nz6Ed.js";import"./index-C9h-Jb--.js";import"./renderedTicksSlice-DeG-maS7.js";import"./index-CuKK0pvL.js";import"./CartesianChart-BtCYpchS.js";import"./ZIndexPortal-Cd4FT9ez.js";import"./CategoricalChart-Ue3TZSpb.js";import"./CartesianAxis-D65lIMFu.js";import"./Layer-C38IBOtq.js";import"./Text-nM-LHLsO.js";import"./DOMUtils-C1tRULq9.js";import"./pageBackground-BcaJILnW.js";import"./ZIndexLayer-DBCQDkbL.js";import"./Label-v2uuRqjZ.js";import"./types-BgOFnMuj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-CIhUYtSm.js";import"./activeStyles-BuWIAazB.js";import"./useAnimationId-7tWnytho.js";import"./dataEntryStyles-p95uc1IW.js";import"./fillDefinitions-D55-ziDc.js";import"./themeFill-DfZYoox_.js";import"./Curve-Co0XT7xq.js";import"./step-Og4N4nQm.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CKQTaHLn.js";import"./Symbols-CobU2W6x.js";import"./symbol-EG1r1dzp.js";import"./ActiveShapeUtils-DOiWWiaf.js";import"./ErrorBarContext-Bvj-sJVI.js";import"./SetGraphicalItem-IhBPl0xA.js";import"./useEffectiveDataKey-1gMAnkt8.js";const At={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},ft=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(e=r.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};export{r as API,ft as __namedExportsOrder,At as default};
