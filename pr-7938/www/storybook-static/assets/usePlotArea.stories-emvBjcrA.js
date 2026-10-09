import{R as t}from"./iframe-B-SNMp2P.js";import{j as a}from"./RechartsWrapper-gPNydgch.js";import{R as p}from"./zIndexSlice-MJVhEUVa.js";import{C as n}from"./ComposedChart-CkeRhKHK.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-COMV_M1P.js";import{X as l}from"./XAxis-DbFPHXfw.js";import{Y as h}from"./YAxis-Cm6hvxXf.js";import{L as c}from"./Legend-CULdgsny.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D6GIFGnh.js";import"./get-C2VjdU0L.js";import"./axisSelectors-_pmBWC24.js";import"./throttle-7fi-ZXpb.js";import"./index-BIs-1f0J.js";import"./index-BZQvw8Sg.js";import"./isWellBehavedNumber-0l1sLwCq.js";import"./d3-scale-CF8UPnnv.js";import"./index-Dj60m7pl.js";import"./index-DGXVsrKV.js";import"./renderedTicksSlice-2xqGDKha.js";import"./index-CvUwvd6n.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-K-vFTXTH.js";import"./chartDataContext-BccgPSEz.js";import"./CategoricalChart-BNp-LaIc.js";import"./Layer-CVSv3BXM.js";import"./Curve-CJXjFqV6.js";import"./types-BNVaobqj.js";import"./step-HC0u4nw9.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D-Mi-zOF.js";import"./Label-yF0NhCgr.js";import"./Text-3FjWr6Un.js";import"./DOMUtils-CVvGSXS1.js";import"./useId-DCI_CeQs.js";import"./useBackwardsCompatibleTheme-CE1PvRpo.js";import"./ZIndexLayer-DTIKWgf_.js";import"./useAnimationId-CiVfXoZZ.js";import"./ActivePoints-0GRfHXwb.js";import"./Dot-CFiUGY51.js";import"./dataEntryStyles-Bq_a6L7W.js";import"./ErrorBarContext-D0XxzFi4.js";import"./GraphicalItemClipPath-C3pTbqJ4.js";import"./SetGraphicalItem-B2JrzKrx.js";import"./getRadiusAndStrokeWidthFromDot-BOwP_unw.js";import"./ActiveShapeUtils-BCJOz4d0.js";import"./useGraphicalItemIdentity-DsWLL8GU.js";import"./CartesianAxis-D1aWQaVv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DzV4gd5Z.js";import"./symbol-DyubpzeR.js";import"./useElementOffset-BiHyJ0md.js";import"./uniqBy-B66cnVOa.js";import"./iteratee-BXTpeJD1.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
