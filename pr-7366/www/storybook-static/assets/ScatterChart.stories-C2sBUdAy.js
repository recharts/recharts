import{e as t}from"./iframe-D1Y9TY-u.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-DWgqGcPH.js";import{c as g}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-DLsYE2Gx.js";import{g as d}from"./arrayEqualityCheck-DPvIBees.js";import{X as h}from"./XAxis-5BMZV76c.js";import{Y as S}from"./YAxis-D2V4IA3o.js";import{S as l}from"./Scatter-w1tIE9SO.js";import{R as f}from"./RechartsHookInspector-DlKiXr8l.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B0rnCwdR.js";import"./index-D5E_lAb8.js";import"./immer-CxQQPMht.js";import"./hooks-CFGEq-6u.js";import"./axisSelectors-DhcMUj02.js";import"./d3-scale-BrKRNhi9.js";import"./zIndexSlice-CgFHZos-.js";import"./renderedTicksSlice-W-15kQDb.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B6m73if6.js";import"./chartDataContext-C5ZGItfB.js";import"./CategoricalChart-DcwMFRg_.js";import"./resolveDefaultProps-DD8L0n44.js";import"./CartesianAxis-BWlWM6yy.js";import"./Layer-B3bXBbbL.js";import"./Text-Dd-bZYpK.js";import"./DOMUtils-DyWiHKN-.js";import"./Label-DE2OURwo.js";import"./ZIndexLayer-CfpM-rLj.js";import"./types-BaB5y5-3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Cn5gX129.js";import"./Curve-5XiXyCEh.js";import"./step-kC9Mr0-h.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bq4QZcEU.js";import"./Symbols-CqvIZRje.js";import"./symbol-DNxYcXd2.js";import"./ActiveShapeUtils-D80gxDtc.js";import"./RegisterGraphicalItemId-Bn3tPr19.js";import"./ErrorBarContext-BTNYxynC.js";import"./GraphicalItemClipPath-BvycXnEO.js";import"./SetGraphicalItem-B11RgMwt.js";import"./useAnimationId-BZgLvOHt.js";import"./index-twG5rrjJ.js";import"./ChartSizeDimensions-BkxRlTbK.js";import"./OffsetShower-XnxI6Cxg.js";import"./PlotAreaShower-BNnVE1WV.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(d,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(h,{dataKey:"x"}),t.createElement(S,{dataKey:"y"}),t.createElement(l,{data:s}),t.createElement(f,null)))},args:{...c(a),data:g,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
