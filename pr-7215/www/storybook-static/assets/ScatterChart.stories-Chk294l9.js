import{e as t}from"./iframe-CagDbm-R.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-DVckGNEz.js";import{c as g}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-DrFr5e1C.js";import{g as d}from"./arrayEqualityCheck-Bn08yLiN.js";import{X as h}from"./XAxis-CyILEj33.js";import{Y as S}from"./YAxis-Qo8_bXaH.js";import{S as l}from"./Scatter-mmF9NmkG.js";import{R as f}from"./RechartsHookInspector-pMEJlnqX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DdluFIAh.js";import"./index-DXI37oHl.js";import"./immer-DWuco0BF.js";import"./hooks-DvlDA_Iq.js";import"./axisSelectors-Cqpe6Z2t.js";import"./d3-scale-BKLsEBZa.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-Tvm87iuX.js";import"./renderedTicksSlice-71Fk0cz1.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BXvauOXS.js";import"./chartDataContext-DU5Nphzy.js";import"./CategoricalChart-DAMUlb45.js";import"./resolveDefaultProps-BrU5Uy_m.js";import"./CartesianAxis-6zuZSvBM.js";import"./Layer-D2JglvMB.js";import"./Text-BNs6VPhb.js";import"./DOMUtils-Bw-DvePw.js";import"./Label-COowhm97.js";import"./ZIndexLayer-BqsAA_KH.js";import"./types-D2ON-SRi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./AnimatedItems-HQORsnaH.js";import"./useAnimationId-BEBp-SWr.js";import"./Curve-DbLnFn1T.js";import"./step-CjVrG-vW.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CGOz3fKt.js";import"./Symbols-BeiYXLsa.js";import"./symbol-BcJh2PD3.js";import"./ActiveShapeUtils-4DOuAOib.js";import"./RegisterGraphicalItemId-WhTYY9X4.js";import"./ErrorBarContext-txnn70dD.js";import"./GraphicalItemClipPath-DMoOkNN1.js";import"./SetGraphicalItem-aSNUvlix.js";import"./index-BDeX6XER.js";import"./ChartSizeDimensions-DNx0LPdc.js";import"./OffsetShower-BNTdFgyM.js";import"./PlotAreaShower-B8l1iW5J.js";const St={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(d,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(h,{dataKey:"x"}),t.createElement(S,{dataKey:"y"}),t.createElement(l,{data:s}),t.createElement(f,null)))},args:{...c(a),data:g,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
