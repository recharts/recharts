import{c as t}from"./iframe-CSdIsBuA.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DWgqGcPH.js";import{c as g}from"./Coordinate-CcdTesrj.js";import{S as i}from"./ScatterChart-CB1ksVA5.js";import{g as d}from"./zIndexSlice-Cwyv9NeI.js";import{X as S}from"./XAxis-4daNYmE3.js";import{Y as h}from"./YAxis-ONZy-yVZ.js";import{S as A}from"./Scatter-B3sGImBz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B89fPpLO.js";import"./index-BTvkQKhU.js";import"./index-Bec9HE3p.js";import"./index-Cpoemtz2.js";import"./index-DE5N2T-X.js";import"./immer-DsufihQm.js";import"./get-Duntrb6V.js";import"./renderedTicksSlice-B5Ptxudq.js";import"./axisSelectors-BnFkCmMm.js";import"./d3-scale-B9s2XGKQ.js";import"./resolveDefaultProps-DILKQm8l.js";import"./isWellBehavedNumber-C3OI8iVg.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bk8EQL3g.js";import"./chartDataContext-BUAn3ipS.js";import"./CategoricalChart-DbkFDn9v.js";import"./CartesianAxis-DbuOwL9w.js";import"./Layer-B_G2sVc2.js";import"./Text-B3fnIIS6.js";import"./DOMUtils-BrUe4Qn6.js";import"./Label-BjSFKFzq.js";import"./ZIndexLayer-D0Yli8nf.js";import"./types-Ct8C6hXI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./ReactUtils-BhhiwOUg.js";import"./Curve-CKKHwC-M.js";import"./step-w2kxUIwB.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CRnt8zGA.js";import"./Symbols-DWBKfXb_.js";import"./symbol-Dm9Ttk9X.js";import"./ActiveShapeUtils-9x_mtGFa.js";import"./RegisterGraphicalItemId-DM7h7YxF.js";import"./ErrorBarContext-BgoP0PAw.js";import"./GraphicalItemClipPath-DPD0FrgU.js";import"./SetGraphicalItem-D2hWeYSE.js";import"./useAnimationId-B6008U_B.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(d,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:g,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
