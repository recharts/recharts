import{e as t}from"./iframe-Cbg-fKNU.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-DVckGNEz.js";import{c as g}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-CdhgXith.js";import{g as d}from"./arrayEqualityCheck-hFPRsS2v.js";import{X as h}from"./XAxis-scJ13O_U.js";import{Y as S}from"./YAxis-DeM2VHlz.js";import{S as l}from"./Scatter-Lcc2ujiu.js";import{R as f}from"./RechartsHookInspector-D7okJ7xS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-EdxkrsQJ.js";import"./index-tFSrK1wv.js";import"./immer-S1zDTrNa.js";import"./hooks-CL-gQxGz.js";import"./axisSelectors-COlbOcyl.js";import"./d3-scale-DuHK7VZm.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-ByH7lQpu.js";import"./renderedTicksSlice-BAcUufvh.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-IEffqnC4.js";import"./chartDataContext-BUHR6knq.js";import"./CategoricalChart-DAwQUD4-.js";import"./resolveDefaultProps-D6T4fIvs.js";import"./CartesianAxis-A8y-DKmq.js";import"./Layer-OlYOmPUf.js";import"./Text-BtrwnnO1.js";import"./DOMUtils-BOYR8naz.js";import"./Label-Dne7i20P.js";import"./ZIndexLayer-qeHNPcT8.js";import"./types-BpyuZwQS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./AnimatedItems-POHvOeVE.js";import"./useAnimationId-ClgLuj6x.js";import"./Curve-C22NWxJ6.js";import"./step-CgbJhf5W.js";import"./path-DyVhHtw_.js";import"./tooltipContext-7v6XnHpM.js";import"./Symbols-UYaWffC4.js";import"./symbol-DEGNIwBZ.js";import"./ActiveShapeUtils-Drq8bts1.js";import"./RegisterGraphicalItemId-CwmBMhGa.js";import"./ErrorBarContext-Q5zY_unn.js";import"./GraphicalItemClipPath-B0xiuhMH.js";import"./SetGraphicalItem-BIH6QpC3.js";import"./index-BkDgLzYn.js";import"./ChartSizeDimensions-D9mNUeVH.js";import"./OffsetShower-DsmXSBYW.js";import"./PlotAreaShower-CeGNuSiV.js";const St={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(d,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(h,{dataKey:"x"}),t.createElement(S,{dataKey:"y"}),t.createElement(l,{data:s}),t.createElement(f,null)))},args:{...c(a),data:g,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(e=r.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};const lt=["API"];export{r as API,lt as __namedExportsOrder,St as default};
