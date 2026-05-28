import{e as t}from"./iframe-BpuHkxzv.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-DWgqGcPH.js";import{c as g}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-B3nHt9OB.js";import{g as d}from"./arrayEqualityCheck-D3NbzucA.js";import{X as h}from"./XAxis-DAM5aOqn.js";import{Y as S}from"./YAxis-Di_DA3y5.js";import{S as l}from"./Scatter-DZbFdotQ.js";import{R as f}from"./RechartsHookInspector-AaKfh7uA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-PymVavj3.js";import"./index-B2w93Cnl.js";import"./immer-OyT0OiEL.js";import"./hooks-B1cGBeOq.js";import"./axisSelectors-BJZ14qKk.js";import"./d3-scale-BeDrD5FO.js";import"./zIndexSlice-CmLQD4Hj.js";import"./renderedTicksSlice-BdwSoJ9a.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-zmg0JzJu.js";import"./chartDataContext-8upaOC_y.js";import"./CategoricalChart-BFAw-aMI.js";import"./resolveDefaultProps-B_sB-kQg.js";import"./CartesianAxis-C7ZsdIQA.js";import"./Layer-BqE9-RFh.js";import"./Text-CQDQNrmI.js";import"./DOMUtils-CJA5o4Wn.js";import"./Label-DXexZu28.js";import"./ZIndexLayer-DB_dF6Ce.js";import"./types-EV6wLq9J.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-eZNJAb5x.js";import"./Curve-CBMG8s0Y.js";import"./step-BD2V_DAB.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DC3Kn2Ay.js";import"./Symbols-BPT-Ab5-.js";import"./symbol-fc7IaqFZ.js";import"./ActiveShapeUtils-CT-qLZ85.js";import"./RegisterGraphicalItemId-DWnLfZVy.js";import"./ErrorBarContext-C3BTG3j_.js";import"./GraphicalItemClipPath-alzdk-Y9.js";import"./SetGraphicalItem-D6w_4jw8.js";import"./useAnimationId-ObzFSifI.js";import"./index-DNW34nIA.js";import"./ChartSizeDimensions-BVyFPlkv.js";import"./OffsetShower-opK80ySX.js";import"./PlotAreaShower-CqZ4IRUd.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(d,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(h,{dataKey:"x"}),t.createElement(S,{dataKey:"y"}),t.createElement(l,{data:s}),t.createElement(f,null)))},args:{...c(a),data:g,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
