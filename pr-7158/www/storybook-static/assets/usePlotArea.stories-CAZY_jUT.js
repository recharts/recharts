import{e as t}from"./iframe-CJ63uMHg.js";import{P as a}from"./PlotAreaShower-BX2Nq4gV.js";import{c as p}from"./hooks-DAjaeQkS.js";import{R as s}from"./arrayEqualityCheck-CjZgOdyP.js";import{C as n}from"./ComposedChart-BUz5v2gp.js";import{L as l}from"./Line-HCaUYNRw.js";import{X as d}from"./XAxis-CaS203aX.js";import{Y as h}from"./YAxis-BJ9lAReC.js";import{L as c}from"./Legend-D94wkKyo.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-C_IgMMTX.js";import"./immer-CKeBagLw.js";import"./axisSelectors-Cmmc63M7.js";import"./d3-scale-Ba7WtcOV.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CMjyVNNi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DPJT4FLk.js";import"./index-BTkZssxQ.js";import"./zIndexSlice-DcFOWvFe.js";import"./renderedTicksSlice-BxvVTmCz.js";import"./CartesianChart-CnhtnX-W.js";import"./chartDataContext-BCusU8xR.js";import"./CategoricalChart-mP3FKWNM.js";import"./Layer-DwPjM_1S.js";import"./ReactUtils-BrLU3nhQ.js";import"./Label-BT9o0AB1.js";import"./Text-C4Zilip_.js";import"./DOMUtils-CEnHACCK.js";import"./ZIndexLayer-hB7INJpc.js";import"./ActivePoints-CuJqjtUw.js";import"./Dot-D4anQyzH.js";import"./types-Cg-iPHUY.js";import"./RegisterGraphicalItemId-B1D-i393.js";import"./ErrorBarContext-dABLLY8L.js";import"./GraphicalItemClipPath-B2w_akpT.js";import"./SetGraphicalItem-BO21g4cB.js";import"./useAnimationId-B1Pbcgq5.js";import"./getRadiusAndStrokeWidthFromDot-C1RJ8FJA.js";import"./ActiveShapeUtils-B2UK-_O2.js";import"./isPlainObject-DxawGvw9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-RAhStLpg.js";import"./Trapezoid-DE_yg1mh.js";import"./Sector-D96mfy5y.js";import"./Symbols-Yo7h6BqR.js";import"./symbol-6foS3Lbf.js";import"./step-CrMJLvxS.js";import"./Curve-CD35vdaK.js";import"./CartesianAxis-DJXCnb2v.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Db3u9B4j.js";import"./uniqBy-YwcJNLS3.js";import"./iteratee-BOLGpibr.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
