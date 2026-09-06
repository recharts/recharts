import{R as t}from"./iframe-C98xM-14.js";import{j as a}from"./RechartsWrapper-DNpWLRvv.js";import{R as p}from"./zIndexSlice-PFqQVngT.js";import{C as s}from"./ComposedChart-DEvNrsRG.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-vvPtX59c.js";import{X as l}from"./XAxis-CsWwdt7Q.js";import{Y as h}from"./YAxis-CaqCP2Lk.js";import{L as c}from"./Legend-DuYK6dO2.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BpgNO45K.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DE9vQUUE.js";import"./throttle-Cpn-KPW0.js";import"./index-BfkVHUSN.js";import"./index-lWYWFl_c.js";import"./isWellBehavedNumber-B0B1V1Mw.js";import"./d3-scale-BIaFt0TH.js";import"./index-B33qjCts.js";import"./index-CRw9oTKs.js";import"./renderedTicksSlice-BVBdj9en.js";import"./index-Bwd0n8ve.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DdfFkL89.js";import"./chartDataContext-BX4jELOi.js";import"./CategoricalChart-Cg6rdWul.js";import"./Layer-DV2USN9H.js";import"./Curve-C4kxUnUy.js";import"./types-C3nHa31Z.js";import"./step-CKRTH0G6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CTflnzuI.js";import"./Label-6WZ-bs73.js";import"./Text-CdsOrPG8.js";import"./DOMUtils-Cyba50bX.js";import"./useId-gkj8hVD1.js";import"./useBackwardsCompatibleTheme-CnvikNkE.js";import"./ZIndexLayer-_jlJOhPE.js";import"./useAnimationId-B6O86EG4.js";import"./ActivePoints-Bm8Ngiah.js";import"./Dot-BVHRbG7p.js";import"./RegisterGraphicalItemId-CrKJMoiy.js";import"./ErrorBarContext-eOyXWxlr.js";import"./GraphicalItemClipPath-Dn-XuIGK.js";import"./SetGraphicalItem-CJTGWUG8.js";import"./getRadiusAndStrokeWidthFromDot-BCR9SUwJ.js";import"./ActiveShapeUtils-bQFjdaPv.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BhBvKKe-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D5VKxaV3.js";import"./symbol-Bb_1-nQc.js";import"./useElementOffset-BwcDYxj_.js";import"./uniqBy-KZWDygXq.js";import"./iteratee-CBQ5EdUG.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
