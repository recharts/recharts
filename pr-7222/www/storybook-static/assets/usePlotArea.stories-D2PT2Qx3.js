import{e as t}from"./iframe-BbLTqg_I.js";import{P as a}from"./PlotAreaShower-CxkyObXY.js";import{c as p}from"./hooks-lBsi1Lte.js";import{R as s}from"./arrayEqualityCheck-CBxHnj40.js";import{C as n}from"./ComposedChart-D4zp_1Is.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D-ePJ61S.js";import{X as h}from"./XAxis-WOMOBxy0.js";import{Y as c}from"./YAxis-DbPxFlg1.js";import{L as g}from"./Legend-DF_mz3Gp.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BXlHCl-n.js";import"./immer-0I19eR8v.js";import"./axisSelectors-Bham5zd3.js";import"./d3-scale-DytBNPzq.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DeEvTvqp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-sXCJwmzA.js";import"./index-t2-XMrpS.js";import"./zIndexSlice-DaNYP2h4.js";import"./renderedTicksSlice-mAMVqgeM.js";import"./CartesianChart-6nDSe5MW.js";import"./chartDataContext-CkbwJfZ5.js";import"./CategoricalChart-CiUZR458.js";import"./Layer-De7FJLXT.js";import"./ReactUtils-BKGICeIT.js";import"./Label-Dp17yuaT.js";import"./Text-Doa3jS46.js";import"./DOMUtils-_WjkpCG3.js";import"./ZIndexLayer-CG-7pAPx.js";import"./ActivePoints-BtWDyisY.js";import"./Dot-BQWhfV5T.js";import"./types-BQQUehNG.js";import"./RegisterGraphicalItemId-BMAYZOJ5.js";import"./ErrorBarContext-DVSsr0NQ.js";import"./GraphicalItemClipPath-BQ69dXZ4.js";import"./SetGraphicalItem-BZCA2PlV.js";import"./useAnimationId-Dzq-5vwQ.js";import"./getRadiusAndStrokeWidthFromDot-CwIeBf7B.js";import"./ActiveShapeUtils-DIUxAYHp.js";import"./isPlainObject--uBpLfXE.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-oP2ZElLD.js";import"./Trapezoid-CEWsUmUR.js";import"./Sector-DvZKa3JR.js";import"./Symbols-DHvudbT_.js";import"./symbol-C3VSVIbg.js";import"./step-DZPsS0dg.js";import"./Curve-Bfkmy_Vr.js";import"./CartesianAxis-BQlJw0QH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CyzrHFyC.js";import"./uniqBy-DX_iKdhm.js";import"./iteratee-D7Prihow.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
