import{e as t}from"./iframe-C4HM3tOf.js";import{P as a}from"./PlotAreaShower-BwQpOYoG.js";import{c as p}from"./hooks-BGwRhZ9s.js";import{R as s}from"./arrayEqualityCheck-pVd2ZEAL.js";import{C as n}from"./ComposedChart-1kQax0ra.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line--jw4iogU.js";import{X as h}from"./XAxis-BK6oNET2.js";import{Y as c}from"./YAxis-BtziLXcq.js";import{L as g}from"./Legend-CeIE24ND.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-C5dCDLnk.js";import"./immer-DKT0L4DC.js";import"./axisSelectors-q2a6ivV9.js";import"./d3-scale-LcYjb00Y.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DIrfype3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsUVNyak.js";import"./index-fnqQxzGI.js";import"./zIndexSlice-B6fkFiXD.js";import"./renderedTicksSlice-D0u-pzQU.js";import"./CartesianChart-zslZnBEv.js";import"./chartDataContext-11WBovGQ.js";import"./CategoricalChart-CnCIIeeu.js";import"./Layer-BI5SY9Q3.js";import"./ReactUtils-NJDufUbJ.js";import"./Label-95NTi3lP.js";import"./Text-Cpkro7uK.js";import"./DOMUtils-CuJDrrCS.js";import"./ZIndexLayer-hyQhvrxG.js";import"./ActivePoints-BfIabrgE.js";import"./Dot-V_SCRyyA.js";import"./types-DhPv2WtL.js";import"./RegisterGraphicalItemId-lR-7WV2p.js";import"./ErrorBarContext-CuIz_GNg.js";import"./GraphicalItemClipPath-BLanLC3n.js";import"./SetGraphicalItem-Cgab4IqB.js";import"./useAnimationId-G20N3axR.js";import"./getRadiusAndStrokeWidthFromDot-xmz8CGWl.js";import"./ActiveShapeUtils-CmP6-7kE.js";import"./isPlainObject-CF48X339.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DkO9lidd.js";import"./Trapezoid-nYgyRJct.js";import"./Sector-D93eAIbO.js";import"./Symbols-DcdiuJ8X.js";import"./symbol-CU7O9hm_.js";import"./step-Bw_J3Aex.js";import"./Curve-CTxT4HGO.js";import"./CartesianAxis-BrQUtBdm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DzbAKatV.js";import"./uniqBy-8PxkX1wT.js";import"./iteratee-Dv6XlQG0.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
