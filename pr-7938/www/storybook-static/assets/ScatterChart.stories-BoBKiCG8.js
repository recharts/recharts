import{R as t}from"./iframe-B-SNMp2P.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-B-nWfSY7.js";import{R as g}from"./zIndexSlice-MJVhEUVa.js";import{X as S}from"./XAxis-DbFPHXfw.js";import{Y as h}from"./YAxis-Cm6hvxXf.js";import{S as A}from"./Scatter-ISIgjWEh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-gPNydgch.js";import"./resolveDefaultProps-D6GIFGnh.js";import"./get-C2VjdU0L.js";import"./axisSelectors-_pmBWC24.js";import"./throttle-7fi-ZXpb.js";import"./index-BIs-1f0J.js";import"./index-BZQvw8Sg.js";import"./isWellBehavedNumber-0l1sLwCq.js";import"./d3-scale-CF8UPnnv.js";import"./index-Dj60m7pl.js";import"./index-DGXVsrKV.js";import"./renderedTicksSlice-2xqGDKha.js";import"./index-CvUwvd6n.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-K-vFTXTH.js";import"./chartDataContext-BccgPSEz.js";import"./CategoricalChart-BNp-LaIc.js";import"./CartesianAxis-D1aWQaVv.js";import"./Layer-CVSv3BXM.js";import"./Text-3FjWr6Un.js";import"./DOMUtils-CVvGSXS1.js";import"./useId-DCI_CeQs.js";import"./useBackwardsCompatibleTheme-CE1PvRpo.js";import"./Label-yF0NhCgr.js";import"./ZIndexLayer-DTIKWgf_.js";import"./types-BNVaobqj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-D-Mi-zOF.js";import"./useAnimationId-CiVfXoZZ.js";import"./Curve-CJXjFqV6.js";import"./step-HC0u4nw9.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CoqzaWf-.js";import"./Symbols-DzV4gd5Z.js";import"./symbol-DyubpzeR.js";import"./ActiveShapeUtils-BCJOz4d0.js";import"./dataEntryStyles-Bq_a6L7W.js";import"./ErrorBarContext-D0XxzFi4.js";import"./GraphicalItemClipPath-C3pTbqJ4.js";import"./SetGraphicalItem-B2JrzKrx.js";import"./useGraphicalItemIdentity-DsWLL8GU.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
