import{R as t}from"./iframe-Cg_iar9N.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-KF61SJqr.js";import{R as g}from"./zIndexSlice-BjUOfyjh.js";import{X as S}from"./XAxis-CGc4hdT9.js";import{Y as h}from"./YAxis-D6x7oYcH.js";import{S as A}from"./Scatter-C195gl8o.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C7ImdcI0.js";import"./resolveDefaultProps-DTSDaMdx.js";import"./get-CjriyByo.js";import"./axisSelectors-CZOBtonL.js";import"./throttle-BblIHJT1.js";import"./index-7C4ywAbx.js";import"./index-CwdEjpHW.js";import"./polarAxisSelectors-B1d4qlCW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DPBNOBhz.js";import"./index-VP3OIQj6.js";import"./index-jWuQwiwF.js";import"./renderedTicksSlice-CLd9gyLd.js";import"./index-V_wxvl63.js";import"./fillDefinitions-DSB60PQ6.js";import"./CartesianChart-B4msnQ_2.js";import"./chartDataContext-BigsU9AL.js";import"./CategoricalChart-CPdnXejQ.js";import"./CartesianAxis-DOu6asA8.js";import"./Layer-Bzrsb6mZ.js";import"./Text-B2P7H0Ri.js";import"./ZIndexLayer-CSE-z-0P.js";import"./Label-BJnLd782.js";import"./types-ltSKN6AB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CxwfrkTv.js";import"./activeStyles-BGKrSIuv.js";import"./useAnimationId-9EHB1qr6.js";import"./Curve-CPf1VG57.js";import"./step-DiiLfVQZ.js";import"./path-BBMZd4YL.js";import"./tooltipContext-DvVRje4i.js";import"./Symbols-HGWe4NLb.js";import"./symbol-BYuJahfe.js";import"./ActiveShapeUtils-CsQyYPRe.js";import"./ErrorBarContext-CGI8-gVI.js";import"./SetGraphicalItem-B4YPaENS.js";import"./useEffectiveDataKey-Cs5zYK5x.js";const dt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}},gt=["API"];var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(e=r.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};export{r as API,gt as __namedExportsOrder,dt as default};
