import{R as t}from"./iframe-CMDkES_H.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-B9mCrFc8.js";import{R as g}from"./zIndexSlice-CEXNkTXm.js";import{X as S}from"./XAxis-B5q3F6Uy.js";import{Y as h}from"./YAxis-C3tuYQmx.js";import{S as A}from"./Scatter-BqBxzifo.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-YdCgLXYS.js";import"./resolveDefaultProps-BBu38DQb.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BgqFub1M.js";import"./throttle-BV0akTiG.js";import"./index-nmLk2qd-.js";import"./index-Cycxm7rW.js";import"./polarAxisSelectors-B2-HhSnm.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Vem8QkvK.js";import"./index-CDFg-t_S.js";import"./index-CQ6GchDM.js";import"./renderedTicksSlice-BzpVxRSL.js";import"./index-Dwicv9nR.js";import"./fillDefinitions-aMvFJMZF.js";import"./CartesianChart-D9ZN9vwZ.js";import"./chartDataContext-U2SqLEu1.js";import"./CategoricalChart-CNCtCgVg.js";import"./CartesianAxis-KTct3My8.js";import"./Layer-Dxo4pAJK.js";import"./Text-CXN2lt2h.js";import"./ZIndexLayer-Dr7m0amd.js";import"./Label-DkUV91yB.js";import"./types-BRdSNrFn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CQKyrMQS.js";import"./activeStyles-uNCwuaQZ.js";import"./useAnimationId-Br5Fw6SL.js";import"./Curve-lt9C0hSq.js";import"./step-CtpAouP5.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BfYJ3kCm.js";import"./Symbols-KRGqLXgG.js";import"./symbol-CkUX_hdb.js";import"./ActiveShapeUtils-BI-HqHtF.js";import"./ErrorBarContext-DWVCzs9M.js";import"./SetGraphicalItem-BWtk-2FX.js";import"./useEffectiveDataKey-DEHLWy8h.js";const dt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}},gt=["API"];var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
