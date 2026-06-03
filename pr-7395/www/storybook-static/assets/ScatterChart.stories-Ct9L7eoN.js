import{c as t}from"./iframe-DWpXT6OO.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DWgqGcPH.js";import{c as g}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-CPD2wCDA.js";import{g as d}from"./zIndexSlice-BI8aBdB2.js";import{X as S}from"./XAxis-BjHcYZV7.js";import{Y as h}from"./YAxis-C6ZngbUi.js";import{S as A}from"./Scatter-BFCE_whM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C7TEH3BS.js";import"./index-4-WnE7FO.js";import"./index-CnH4suYJ.js";import"./index-C9JIL6RB.js";import"./index-CJpuQcHC.js";import"./immer-CtD26uCH.js";import"./get-CAMMj0jB.js";import"./renderedTicksSlice-DwGC_mjp.js";import"./axisSelectors-D3pmM5ea.js";import"./d3-scale-CNTc-b9c.js";import"./resolveDefaultProps-CU4FGCoK.js";import"./isWellBehavedNumber-CW4w7lw5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BL_alDPA.js";import"./chartDataContext-CQfTawPZ.js";import"./CategoricalChart-CQFeC6FI.js";import"./CartesianAxis-3iObmYRO.js";import"./Layer-DdIFnola.js";import"./Text-y6qBsXbA.js";import"./DOMUtils-x2D0RHyJ.js";import"./Label-BLTDXbDF.js";import"./ZIndexLayer-Cqbl6fly.js";import"./types-B1PNqcSi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./ReactUtils-CGwSHaxd.js";import"./Curve-wqoEsp4f.js";import"./step-C03CUoTX.js";import"./path-DyVhHtw_.js";import"./tooltipContext-L8b5V4mz.js";import"./Symbols-JWI6Qnv2.js";import"./symbol-DxUpZVsx.js";import"./ActiveShapeUtils-6dq8aYlX.js";import"./RegisterGraphicalItemId-CI_L8duS.js";import"./ErrorBarContext-BPuM-bX0.js";import"./GraphicalItemClipPath-Xef2qiO-.js";import"./SetGraphicalItem-Brjb-bLT.js";import"./useAnimationId-CbTt72_H.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(d,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:g,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(e=r.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const ct=["API"];export{r as API,ct as __namedExportsOrder,nt as default};
