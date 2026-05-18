import{e as t}from"./iframe-CuZPGzPC.js";import{P as a}from"./PlotAreaShower-D985qYJk.js";import{Y as p}from"./hooks-CtSYEaPh.js";import{g as s}from"./arrayEqualityCheck-0ArgbeWo.js";import{C as n}from"./ComposedChart-O8LQGjYj.js";import{p as l}from"./Page-DPte-9pC.js";import{L as d}from"./Line-Cco-oGoS.js";import{X as h}from"./XAxis-BZ1tAbJs.js";import{Y as c}from"./YAxis-CPd7xvrx.js";import{L as g}from"./Legend-XZF75PN9.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-Dt2wwaf3.js";import"./immer-YqkYbV94.js";import"./axisSelectors-DJmfaPi-.js";import"./d3-scale-DFAjRXo_.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bk_EQyDM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B6XKG7Lc.js";import"./index-Cvyduo3w.js";import"./zIndexSlice-BDdD7Z6D.js";import"./renderedTicksSlice-CZA7_M_S.js";import"./CartesianChart-DorQ2AK5.js";import"./chartDataContext-B0jZsWqF.js";import"./CategoricalChart-BXlLUI69.js";import"./Layer-D8WyiXT0.js";import"./ReactUtils-G6cK3lSP.js";import"./Label-zspUhklU.js";import"./Text-zA_9GeJ1.js";import"./DOMUtils-BikjfFYx.js";import"./ZIndexLayer-B4dYONTA.js";import"./ActivePoints-3HxEsaWV.js";import"./Dot-BETACs3N.js";import"./types-DTMUikhY.js";import"./RegisterGraphicalItemId-Bjl2IzLe.js";import"./ErrorBarContext-BiThez5i.js";import"./GraphicalItemClipPath-DUbxYwTC.js";import"./SetGraphicalItem-B2q_jALm.js";import"./useAnimationId-CevvSFVo.js";import"./getRadiusAndStrokeWidthFromDot-CXvTaXSz.js";import"./ActiveShapeUtils-CX1NIdn4.js";import"./isPlainObject-C_gHiSxR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DjKAtsYL.js";import"./Trapezoid-CG3AkdCU.js";import"./Sector-CPKMPiIf.js";import"./Symbols-B_rDkX2s.js";import"./symbol-DmWPr50b.js";import"./step-CqiKd4MR.js";import"./Curve-8oAwKTPO.js";import"./CartesianAxis-CfFX5JcQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset--JMWPKnm.js";import"./uniqBy-BObUix_R.js";import"./iteratee-IIg4RS-w.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
