import{e as t}from"./iframe-DgFUiQiK.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-DVckGNEz.js";import{c as g}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-C2sZH5dM.js";import{g as d}from"./arrayEqualityCheck-LPKQSaXm.js";import{X as h}from"./XAxis-CWlzFfKK.js";import{Y as S}from"./YAxis-B1_SZb1V.js";import{S as l}from"./Scatter-BIfbMohh.js";import{R as f}from"./RechartsHookInspector-BQ9yzd9s.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Deqq_iXZ.js";import"./index-BBnacJAP.js";import"./immer-Ca0Cy3ce.js";import"./hooks-CisH2h_f.js";import"./axisSelectors-Q9bQQnzw.js";import"./d3-scale-HhLt2ZCp.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-DXOhyCux.js";import"./renderedTicksSlice-CX5tvx9V.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Br6s862c.js";import"./chartDataContext-BrtjpLFC.js";import"./CategoricalChart-vPZ8jvpO.js";import"./resolveDefaultProps-C_bUtyXy.js";import"./CartesianAxis-n56eB7xd.js";import"./Layer-CKwu47GO.js";import"./Text-BqcFD908.js";import"./DOMUtils-DG_6devH.js";import"./Label-BFkeduE8.js";import"./ZIndexLayer-DZ2vjGZc.js";import"./types-D_oNXqce.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./AnimatedItems-BOr9vF6Q.js";import"./useAnimationId-CCpHVl00.js";import"./Curve-Ba62GFgD.js";import"./step-CFkmYg6i.js";import"./path-DyVhHtw_.js";import"./tooltipContext-JWKlDLNL.js";import"./Symbols-DwMqGDyq.js";import"./symbol-DbKH8VC2.js";import"./ActiveShapeUtils-BELkaCyh.js";import"./RegisterGraphicalItemId-fp2G-2V_.js";import"./ErrorBarContext-Ompx7WAJ.js";import"./GraphicalItemClipPath-Be4OXw7H.js";import"./SetGraphicalItem-CngLT_zh.js";import"./index-DgA4mNoJ.js";import"./ChartSizeDimensions-B1UuSRJB.js";import"./OffsetShower-BmC__2iI.js";import"./PlotAreaShower-CI2PfPEp.js";const St={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(d,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(h,{dataKey:"x"}),t.createElement(S,{dataKey:"y"}),t.createElement(l,{data:s}),t.createElement(f,null)))},args:{...c(a),data:g,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
