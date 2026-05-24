import{e as t}from"./iframe-ChNOinEW.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-DWgqGcPH.js";import{c as g}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-CBcyBAOT.js";import{g as d}from"./arrayEqualityCheck-ejHXznq4.js";import{X as h}from"./XAxis-BNsMzyt5.js";import{Y as S}from"./YAxis-CSVKIBm8.js";import{S as l}from"./Scatter-C99WGER4.js";import{R as f}from"./RechartsHookInspector-BOE9KQVD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-e8IcX7Ky.js";import"./index-DMHtEqPw.js";import"./immer-C-_4yaFF.js";import"./hooks-DZ4AuhfW.js";import"./axisSelectors-Wf-uHVWr.js";import"./d3-scale-B3SHfU9r.js";import"./zIndexSlice-BFRT_l82.js";import"./renderedTicksSlice-P1hbw2J7.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C54kEOmP.js";import"./chartDataContext-DjEoDELK.js";import"./CategoricalChart-CaEOI484.js";import"./resolveDefaultProps-CrKZ3yHb.js";import"./CartesianAxis-B1qSIHlZ.js";import"./Layer-C5r2D5eL.js";import"./Text-D9d9Y4NZ.js";import"./DOMUtils-DGZ4THTA.js";import"./Label-toG1Bdw3.js";import"./ZIndexLayer-B8mCWzZh.js";import"./types-o0HcDoUt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Ck9hJUMi.js";import"./Curve-o5S5hG9f.js";import"./step-CtDorYUy.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Cu0NgHuX.js";import"./Symbols-DERmPww2.js";import"./symbol-DabQrqYS.js";import"./ActiveShapeUtils-LTcw4Xsa.js";import"./RegisterGraphicalItemId-DDUKZo60.js";import"./ErrorBarContext-kJOKaxmw.js";import"./GraphicalItemClipPath-BEGDR4Eg.js";import"./SetGraphicalItem-DSKSTIyc.js";import"./useAnimationId-Dtq79URZ.js";import"./index-OCCX1cWv.js";import"./ChartSizeDimensions-Cm_TkHUI.js";import"./OffsetShower-TftFluvn.js";import"./PlotAreaShower-zOTWVw7t.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(d,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(h,{dataKey:"x"}),t.createElement(S,{dataKey:"y"}),t.createElement(l,{data:s}),t.createElement(f,null)))},args:{...c(a),data:g,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(m=(e=r.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};const St=["API"];export{r as API,St as __namedExportsOrder,ht as default};
