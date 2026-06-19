import{R as t}from"./iframe-C7jIZL6o.js";import{u as a}from"./CategoricalChart-CUzYs4pg.js";import{R as p}from"./zIndexSlice-BnlSqkDK.js";import{C as s}from"./ComposedChart-BKTk_vyX.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Bf1usTbh.js";import{X as l}from"./XAxis-CTYxjOVZ.js";import{Y as h}from"./YAxis-w5VbFl9t.js";import{L as c}from"./Legend-B9Qrx366.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dl0_CiQp.js";import"./index-B-BRc6T6.js";import"./index-B9TBnend.js";import"./index-B3xQbeZu.js";import"./index-Bovuavvd.js";import"./immer-BOr4g5Y7.js";import"./get-H_VCaiK7.js";import"./renderedTicksSlice-Birh5NDk.js";import"./axisSelectors-EwOPdfxu.js";import"./d3-scale-CRcY7xoU.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-DUb7sDlC.js";import"./isWellBehavedNumber-C3vUk83l.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DrR5EsNs.js";import"./chartDataContext-CAMuJJ0l.js";import"./Layer-BCVE1kDT.js";import"./Curve-DLQx7WJH.js";import"./types-DLi_I9qn.js";import"./step-oAYWHCKP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CcF7dW3l.js";import"./Label-D0um-vtH.js";import"./Text-olerkQs4.js";import"./DOMUtils-yTKptuJ8.js";import"./ZIndexLayer-BRAdfR1Z.js";import"./useAnimationId-B6ozUAwY.js";import"./ActivePoints-DpiODVVc.js";import"./Dot-BZQ0SxYM.js";import"./RegisterGraphicalItemId-D1djZTUZ.js";import"./ErrorBarContext-B42jzrUJ.js";import"./GraphicalItemClipPath-CFgBJqlA.js";import"./SetGraphicalItem-DKs6sIFw.js";import"./getRadiusAndStrokeWidthFromDot-BZg86y5o.js";import"./ActiveShapeUtils-E8cq6prr.js";import"./CartesianAxis-iRUdZDvI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DVLyZtvx.js";import"./symbol-DjcvBl0m.js";import"./useElementOffset-CebXInqc.js";import"./uniqBy-jLv--wkj.js";import"./iteratee-Bl16rMt0.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ct=["UsePlotArea"];export{e as UsePlotArea,ct as __namedExportsOrder,ht as default};
