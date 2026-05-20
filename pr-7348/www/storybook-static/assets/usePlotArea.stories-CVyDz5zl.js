import{e as t}from"./iframe-CUlKjRv5.js";import{P as a}from"./PlotAreaShower-BQaO0vts.js";import{Y as p}from"./hooks-CnLCGSHs.js";import{g as s}from"./arrayEqualityCheck-DBgCs58d.js";import{C as n}from"./ComposedChart-D68WBCYe.js";import{p as l}from"./Page-DPte-9pC.js";import{L as d}from"./Line-CA-fClkz.js";import{X as h}from"./XAxis-CO_kz_i5.js";import{Y as c}from"./YAxis-CKyv_Ble.js";import{L as g}from"./Legend-BqAOIfma.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-7oIIj1ej.js";import"./immer-DSTsi-PZ.js";import"./axisSelectors-DDDlTFJI.js";import"./d3-scale-BHCIS0TK.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-_1GgMiat.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CERDCORy.js";import"./index-k3Ta7lxE.js";import"./zIndexSlice-ygbvIPwo.js";import"./renderedTicksSlice-j7r-ksqS.js";import"./CartesianChart-DIQmD_un.js";import"./chartDataContext-CEx1iXe-.js";import"./CategoricalChart-B3EUrP3A.js";import"./Layer-BRPUehgK.js";import"./ReactUtils-Dhd-bIVM.js";import"./Label-CsCoT34Y.js";import"./Text-D0vEHMRY.js";import"./DOMUtils-2QlatUUm.js";import"./ZIndexLayer-Dzag2pwA.js";import"./ActivePoints-CrLAHFM3.js";import"./Dot-Cv9C9-P8.js";import"./types-cseKagnM.js";import"./RegisterGraphicalItemId-0Us56BlX.js";import"./ErrorBarContext-CXV3xnHJ.js";import"./GraphicalItemClipPath-CUJ2i_OT.js";import"./SetGraphicalItem-DXTqVkON.js";import"./useAnimationId-527k5CUF.js";import"./getRadiusAndStrokeWidthFromDot-CsjgyuMP.js";import"./ActiveShapeUtils-6qGjBTVG.js";import"./isPlainObject-D3iLjTkd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BeDuyTKv.js";import"./Trapezoid-Bhuw_sBY.js";import"./Sector-DGUTJhGS.js";import"./Symbols-SwNF5E59.js";import"./symbol-ByAU1LjM.js";import"./step-ndBpbuBv.js";import"./Curve-Dj9MPAvc.js";import"./CartesianAxis-BeQQMY3-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Crgg6g68.js";import"./uniqBy-BeSJAQ9R.js";import"./iteratee-D8Z_DKuL.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
