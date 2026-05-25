import{e as t}from"./iframe-C6nv2cAy.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-DWgqGcPH.js";import{c as g}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-u0dYyWLz.js";import{g as d}from"./arrayEqualityCheck-B6TrlJO6.js";import{X as h}from"./XAxis-VmwM632k.js";import{Y as S}from"./YAxis-O_OVv1Cn.js";import{S as l}from"./Scatter-DaqAVUhe.js";import{R as f}from"./RechartsHookInspector-DL3_bzE2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BW8puFa7.js";import"./index-B73x1Khd.js";import"./immer-Cni8-JSk.js";import"./hooks-BtR6DFBi.js";import"./axisSelectors-DvgT42C4.js";import"./d3-scale-BCthX3a6.js";import"./zIndexSlice-J7b4XvEa.js";import"./renderedTicksSlice-CAeDVDJj.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DXKuJw3U.js";import"./chartDataContext-CzxDQN7p.js";import"./CategoricalChart-QgKXQZGT.js";import"./resolveDefaultProps-Dz2DdWhQ.js";import"./CartesianAxis-BFynhpO1.js";import"./Layer-wqnfjYdM.js";import"./Text-Ceq4AYN-.js";import"./DOMUtils-5JKzP-3C.js";import"./Label-DLbKprA1.js";import"./ZIndexLayer-B79SyOov.js";import"./types-QOd3xFvZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DhUlF_RS.js";import"./Curve-BpVF0X8n.js";import"./step-BkDQQW3z.js";import"./path-DyVhHtw_.js";import"./tooltipContext-1GntcCaO.js";import"./Symbols-vlD5G2OE.js";import"./symbol-yrXamAhh.js";import"./ActiveShapeUtils-BD3rh4KE.js";import"./RegisterGraphicalItemId-D4TYIl8u.js";import"./ErrorBarContext-AqRNcVf3.js";import"./GraphicalItemClipPath-DfRR2I58.js";import"./SetGraphicalItem-Cgl-K06p.js";import"./useAnimationId-CQiwipC5.js";import"./index-DweZMxE9.js";import"./ChartSizeDimensions-BY1_-T9T.js";import"./OffsetShower-DDAPU-JD.js";import"./PlotAreaShower-XRHlYJYB.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(d,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(h,{dataKey:"x"}),t.createElement(S,{dataKey:"y"}),t.createElement(l,{data:s}),t.createElement(f,null)))},args:{...c(a),data:g,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
