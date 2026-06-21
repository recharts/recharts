import{R as t}from"./iframe-Dv2mkDD6.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-DUIklx9W.js";import{R as g}from"./zIndexSlice-2fg2g2Dp.js";import{X as S}from"./XAxis-CXyJf7fo.js";import{Y as h}from"./YAxis-CqyybjBv.js";import{S as A}from"./Scatter-jgojfSnZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CkEfkKBB.js";import"./index-CbNA4IYq.js";import"./index-CX6QVWJd.js";import"./index-9bEp3bq8.js";import"./index-Ds7CCKWE.js";import"./immer-CP6W9K53.js";import"./get-EiM4K4Yy.js";import"./renderedTicksSlice-COLD4oXN.js";import"./axisSelectors-BxD9EJGH.js";import"./d3-scale-DIID899h.js";import"./resolveDefaultProps-pfm2KtVH.js";import"./isWellBehavedNumber-DWptWa3e.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-NBwPQSms.js";import"./chartDataContext-BOvLrxST.js";import"./CategoricalChart-CYR6VSGv.js";import"./CartesianAxis-DFbvktXE.js";import"./Layer-BkXvHIXh.js";import"./Text-CEJxHZH-.js";import"./DOMUtils-CJIsN_cb.js";import"./Label-Cr9zsE7b.js";import"./ZIndexLayer-pZIzemBm.js";import"./types-CH3zmrHK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-D9UxuFUl.js";import"./useAnimationId-eauTaXpl.js";import"./Curve-CvaYf9T-.js";import"./step-DPezKmex.js";import"./path-DyVhHtw_.js";import"./tooltipContext-gIRAXb4Q.js";import"./Symbols-sY2INCLz.js";import"./symbol-D39yft-5.js";import"./ActiveShapeUtils-DZxftlok.js";import"./RegisterGraphicalItemId-CjWM_Bfz.js";import"./ErrorBarContext-D_yXcxuv.js";import"./GraphicalItemClipPath-BtBW0RWE.js";import"./SetGraphicalItem-LAI4OSkO.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(e=r.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const ct=["API"];export{r as API,ct as __namedExportsOrder,nt as default};
