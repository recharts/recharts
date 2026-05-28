import{e as t}from"./iframe-OJf-GSLb.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-DWgqGcPH.js";import{c as g}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-CYVtYUHN.js";import{g as d}from"./arrayEqualityCheck-2_Nd0mNT.js";import{X as h}from"./XAxis-CUozMhVT.js";import{Y as S}from"./YAxis-DlvLAsVD.js";import{S as l}from"./Scatter-B5L_D9jX.js";import{R as f}from"./RechartsHookInspector-DjyNDFMe.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-3Zay038b.js";import"./index-DjZjz4Db.js";import"./immer-fAzYVHYH.js";import"./hooks-CH3cPIGX.js";import"./axisSelectors-kxctmjqQ.js";import"./d3-scale-DxGCPbiE.js";import"./zIndexSlice-CRdCk5dL.js";import"./renderedTicksSlice-DYga_drD.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CJkqFERC.js";import"./chartDataContext-NT00FYUd.js";import"./CategoricalChart-BCcW9_uy.js";import"./resolveDefaultProps-BhVQCFaS.js";import"./CartesianAxis-Bqyi-QIr.js";import"./Layer-DtNuGt5z.js";import"./Text-ArxOC8oM.js";import"./DOMUtils-CMlg3GAM.js";import"./Label-B3MBaUXp.js";import"./ZIndexLayer-BJFmSDw9.js";import"./types-DpddDWMl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CyupdVou.js";import"./Curve-Cdrr4XTN.js";import"./step-4r8B6sQi.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DOsS-G8m.js";import"./Symbols-Cdsrrpbe.js";import"./symbol-xNgab6R1.js";import"./ActiveShapeUtils-CU2HJa4X.js";import"./RegisterGraphicalItemId-BFbrCMwR.js";import"./ErrorBarContext-A27a6g1h.js";import"./GraphicalItemClipPath-QzIzaY2E.js";import"./SetGraphicalItem-B_Nz5Xvt.js";import"./useAnimationId-Dwrr6l_F.js";import"./index-DD4xdMms.js";import"./ChartSizeDimensions-CdI027Rl.js";import"./OffsetShower-BkR-_nsI.js";import"./PlotAreaShower-BECDt9HM.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(d,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(h,{dataKey:"x"}),t.createElement(S,{dataKey:"y"}),t.createElement(l,{data:s}),t.createElement(f,null)))},args:{...c(a),data:g,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
