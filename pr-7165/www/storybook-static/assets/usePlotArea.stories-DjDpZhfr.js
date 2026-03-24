import{e as t}from"./iframe-B-0BbsAX.js";import{P as a}from"./PlotAreaShower-DqxXtLCD.js";import{c as p}from"./hooks-CLbcsvpt.js";import{R as s}from"./arrayEqualityCheck-D0GIznF3.js";import{C as n}from"./ComposedChart-C4M_-QHd.js";import{L as l}from"./Line-DKVN5x33.js";import{X as d}from"./XAxis-DbUi1vPs.js";import{Y as h}from"./YAxis-CX3uKBZw.js";import{L as c}from"./Legend-FKFUI6bP.js";import{p as g}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BoIgW8rA.js";import"./immer-16Lk8WhM.js";import"./axisSelectors-B5M5y7tb.js";import"./d3-scale-CRpFVGXV.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CeHfSYTr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DdelftvL.js";import"./index-CC_jrfcS.js";import"./zIndexSlice-k5NGco1R.js";import"./renderedTicksSlice-DrnPsf35.js";import"./CartesianChart-BzA52Q7h.js";import"./chartDataContext-ZzZnHAfn.js";import"./CategoricalChart-CiBn8gUj.js";import"./Layer-DmBsOgtN.js";import"./ReactUtils-Dc4L6Dcx.js";import"./Label-RKv-aJqQ.js";import"./Text-BDsrdoFV.js";import"./DOMUtils-ChlQnBsE.js";import"./ZIndexLayer-BS0cCdPh.js";import"./ActivePoints-D2jfQmP-.js";import"./Dot-DB3UZIXD.js";import"./types-CmNjNiS4.js";import"./RegisterGraphicalItemId-EYUIR0Rr.js";import"./ErrorBarContext-B191cjJB.js";import"./GraphicalItemClipPath-j2FZHUrx.js";import"./SetGraphicalItem--6EOKRx7.js";import"./useAnimationId-C_pphjez.js";import"./getRadiusAndStrokeWidthFromDot-CIfccvwt.js";import"./ActiveShapeUtils-nrA-vqiB.js";import"./isPlainObject-CkRpqEDw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ApzVODqx.js";import"./Trapezoid-Coy9-nSc.js";import"./Sector-Czl1xAWH.js";import"./Symbols-D_XjywmB.js";import"./symbol-mrFX37Pu.js";import"./step-BJ3svLa1.js";import"./Curve-zb7_jZJr.js";import"./CartesianAxis-DSL26GAi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CjsqURDU.js";import"./uniqBy-CgnD7qFS.js";import"./iteratee-BlUtqQt7.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:g,margin:r.margin,style:r.style},t.createElement(l,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
