import{e as t}from"./iframe-CIkWUaKQ.js";import{P as a}from"./PlotAreaShower-BBKrHEPi.js";import{c as p}from"./hooks-sjogQk2Y.js";import{R as s}from"./arrayEqualityCheck-BBFq7eoK.js";import{C as n}from"./ComposedChart-Co3BTxvU.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Bx7wFRjl.js";import{X as h}from"./XAxis-BerErBSJ.js";import{Y as c}from"./YAxis-DcHa1OqQ.js";import{L as g}from"./Legend-CqSk1GpZ.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-C20x4d8E.js";import"./immer-BHU9OU6q.js";import"./axisSelectors-BaK7cqC2.js";import"./d3-scale-BZ-edMt9.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CLDluMEp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-YxwXYQPU.js";import"./index-CbwLYB0M.js";import"./zIndexSlice-Cbu3nPXF.js";import"./renderedTicksSlice-BjREbE6W.js";import"./CartesianChart-CjcihWnV.js";import"./chartDataContext-noqwwTdm.js";import"./CategoricalChart-BcDmeBuN.js";import"./Layer-Dzvfyp4W.js";import"./ReactUtils-RCeASTt3.js";import"./Label-SHiyMzcT.js";import"./Text-D4ohdNx9.js";import"./DOMUtils-BREdjKiT.js";import"./ZIndexLayer-CUuZZhUK.js";import"./ActivePoints-B2S0txC7.js";import"./Dot-CQ_am1YH.js";import"./types-CPlIJWRj.js";import"./RegisterGraphicalItemId-f4iA6laj.js";import"./ErrorBarContext-dR6dFvJy.js";import"./GraphicalItemClipPath-D13aRDH0.js";import"./SetGraphicalItem-0e33RWLj.js";import"./useAnimationId-DBBbISIM.js";import"./getRadiusAndStrokeWidthFromDot-DqAt7RU4.js";import"./ActiveShapeUtils-DT1OniMN.js";import"./isPlainObject-D-WQBCb_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CAWEyFEy.js";import"./Trapezoid-BDKa0CKl.js";import"./Sector-B07-nfVs.js";import"./Symbols-DLm1p1c0.js";import"./symbol-DsKaePiJ.js";import"./step-lfJzJxuy.js";import"./Curve-Cbg_n5d0.js";import"./CartesianAxis-ZLsdGGHc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BM77jCWR.js";import"./uniqBy-R7vda7ns.js";import"./iteratee-BBMB1KLW.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
