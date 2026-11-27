import{R as t}from"./iframe-BLIo_1nt.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-CSIA72Jb.js";import{R as g}from"./zIndexSlice-DC3TJ2KH.js";import{X as S}from"./XAxis-NUWW5fMr.js";import{Y as h}from"./YAxis-B-hKkgmv.js";import{S as A}from"./Scatter-B-F5ZxC7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DHKT5KBC.js";import"./resolveDefaultProps-DBbSGEQz.js";import"./get-CjriyByo.js";import"./axisSelectors-zp31unE3.js";import"./throttle-BVtqo_9X.js";import"./index-X9B5BzRC.js";import"./index-DzqD25FH.js";import"./polarAxisSelectors-CTVIJxRd.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-0nS9y-pB.js";import"./index-CO4LKWIG.js";import"./index-BIvaYjey.js";import"./renderedTicksSlice-Bb6Mddqa.js";import"./index-Cvsm1Tm8.js";import"./fillDefinitions-pQA0VntX.js";import"./CartesianChart-DiqGyEKX.js";import"./chartDataContext-CqIvcjot.js";import"./CategoricalChart-DIDmT5Om.js";import"./CartesianAxis-CednQB0X.js";import"./Layer-BmO--khP.js";import"./Text-DGpe4WxS.js";import"./ZIndexLayer-BZ7iUhzZ.js";import"./Label-CFregkfn.js";import"./types-C-m9Hr0T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-B2sIlIGL.js";import"./activeStyles-CwggIO5e.js";import"./useAnimationId-BgYtx5DV.js";import"./Curve-BVD8Rbav.js";import"./step-LFYZ39d8.js";import"./path-BBMZd4YL.js";import"./tooltipContext-C8JMsOca.js";import"./Symbols-DgGyp4Yg.js";import"./symbol-D8T0ODfo.js";import"./ActiveShapeUtils-wxtxdEJ1.js";import"./ErrorBarContext-GHF_OtFg.js";import"./SetGraphicalItem-DvFjNtUQ.js";import"./useEffectiveDataKey-CLP9K8e-.js";const dt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}},gt=["API"];var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
