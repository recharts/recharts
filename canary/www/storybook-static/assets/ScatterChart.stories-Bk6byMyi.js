import{e as t}from"./iframe-BhUxTtiL.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-DWgqGcPH.js";import{c as g}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-Do9S7Kcx.js";import{g as d}from"./arrayEqualityCheck-DppgWusB.js";import{X as h}from"./XAxis-C73en9jh.js";import{Y as S}from"./YAxis-CqkUk7nh.js";import{S as l}from"./Scatter-CVUialRo.js";import{R as f}from"./RechartsHookInspector-JMIq0pQS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BR1uoXx0.js";import"./index-XjGx_uyE.js";import"./immer-CHCHxlI3.js";import"./hooks-DR2LEq6I.js";import"./axisSelectors-CJkBbfZc.js";import"./d3-scale-XHTmrGeR.js";import"./zIndexSlice-nXWOo65n.js";import"./renderedTicksSlice-CYNpjUFM.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bbu5UDic.js";import"./chartDataContext-l2E_xhbE.js";import"./CategoricalChart-BpuJQUho.js";import"./resolveDefaultProps-BwRhqspK.js";import"./CartesianAxis-Dg6rum68.js";import"./Layer-BGQI9FGV.js";import"./Text-_q4HIlMq.js";import"./DOMUtils-BPHETHho.js";import"./Label-B-L_WnHM.js";import"./ZIndexLayer-BPpIaF6c.js";import"./types-Lg-gn8wA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BLhQELGN.js";import"./Curve-BICrVSEu.js";import"./step-DotG6x7P.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BHMUpMxT.js";import"./Symbols-DS4uPA9_.js";import"./symbol-CUmDLBsP.js";import"./ActiveShapeUtils-BtaI_SKC.js";import"./RegisterGraphicalItemId-05uKE1t1.js";import"./ErrorBarContext-xJxnsNXv.js";import"./GraphicalItemClipPath-CLhlaT2j.js";import"./SetGraphicalItem-C4bg6-5U.js";import"./useAnimationId-B-QfnVAI.js";import"./index-6wyw6I_N.js";import"./ChartSizeDimensions-Bic6l-OJ.js";import"./OffsetShower-CD4roSzf.js";import"./PlotAreaShower-CXgcskuB.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(d,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(h,{dataKey:"x"}),t.createElement(S,{dataKey:"y"}),t.createElement(l,{data:s}),t.createElement(f,null)))},args:{...c(a),data:g,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
