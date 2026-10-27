import{R as t}from"./iframe-0XL0sthS.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-D31Mwp7-.js";import{R as g}from"./zIndexSlice-C9Fui9SZ.js";import{X as S}from"./XAxis-8dcEWD9_.js";import{Y as h}from"./YAxis-BB_fEBXq.js";import{S as A}from"./Scatter-CyFCgjKj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B-mX6d9D.js";import"./resolveDefaultProps-B2CF9oTN.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CET1BM1x.js";import"./throttle-Dos2q2R1.js";import"./index-DegwUHs-.js";import"./index-gHC2byd2.js";import"./polarAxisSelectors-CMX_6MDU.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D8BAYDAt.js";import"./index-CNFugj9o.js";import"./index-B0PFYJY5.js";import"./renderedTicksSlice-DlFk7AA9.js";import"./index-BMiqWoCM.js";import"./CartesianChart-z2XN6mAy.js";import"./ZIndexPortal-B05UBlZu.js";import"./CategoricalChart-Dgl45H07.js";import"./CartesianAxis-P0zAs4bB.js";import"./Layer-3mPd111u.js";import"./Text-B44V9o4J.js";import"./pageBackground-_xbcj9Xx.js";import"./ZIndexLayer--QQjyIzp.js";import"./Label-CuZoViK1.js";import"./dataEntryStyles-jYd5_Tui.js";import"./types-B6SF8UCq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-Bxms0g1E.js";import"./activeStyles-DtmDpwwD.js";import"./useAnimationId-RVbaj9rd.js";import"./Curve-B4Yxq0yJ.js";import"./step-BGDQTRvK.js";import"./path-DyVhHtw_.js";import"./tooltipContext-83SIdlui.js";import"./Symbols-Xvp_CByj.js";import"./symbol-BTMAekB6.js";import"./ActiveShapeUtils-_BjD4go-.js";import"./RegisterGraphicalItemId-B0SAEIM0.js";import"./ErrorBarContext-jTTGsWMK.js";import"./SetGraphicalItem-CYypWh5i.js";import"./useEffectiveDataKey-OloeJtRb.js";const St={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},ht=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(e=r.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};export{r as API,ht as __namedExportsOrder,St as default};
