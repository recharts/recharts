import{R as t}from"./iframe-CRWpOW02.js";import{e as a}from"./RechartsWrapper-BIU9TwkO.js";import{R as p}from"./zIndexSlice-BeAe48-I.js";import{C as n}from"./ComposedChart-CnCPKGvA.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Ci7qyRY8.js";import{X as l}from"./XAxis-D1dQPR-6.js";import{Y as h}from"./YAxis-DHYidPrE.js";import{L as c}from"./Legend-C2i4SW-6.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BGJ-s5wM.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CEaTU0uL.js";import"./throttle-CYPAZ-oY.js";import"./index-CqqjX4mb.js";import"./index-BtZZPVlj.js";import"./isWellBehavedNumber-DnvCGmEU.js";import"./d3-scale-d-dAzt7l.js";import"./index-Br2LofN0.js";import"./index-D_MdTA2d.js";import"./renderedTicksSlice-D6XZoNOx.js";import"./index-CqBbZHkF.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BKIvGl2K.js";import"./chartDataContext-BIcAjQe6.js";import"./CategoricalChart-DHoPXZtk.js";import"./Layer-CNbUO4cy.js";import"./Curve-DSopOTRT.js";import"./types-VHH142lq.js";import"./step-VbmBsaRU.js";import"./path-DyVhHtw_.js";import"./activeStyles-qMzt72fn.js";import"./Label-C0mxneHa.js";import"./Text-159WNhne.js";import"./pageBackground-CeS3kx1x.js";import"./useId-ECIur30B.js";import"./useBackwardsCompatibleTheme-4poegSRB.js";import"./ZIndexLayer-CE46bnfu.js";import"./useAnimationId-D92beKJG.js";import"./dataEntryStyles-BglHhD-H.js";import"./ActivePoints-CSFa2gcu.js";import"./Dot-CX4mMU05.js";import"./ErrorBarContext-Bq-5TM9D.js";import"./GraphicalItemClipPath-Baz6IWCm.js";import"./SetGraphicalItem-CHlvRlHN.js";import"./getRadiusAndStrokeWidthFromDot-Cla7tf7Y.js";import"./ActiveShapeUtils-CJ3uGwKk.js";import"./useEffectiveDataKey-BpgvrKzX.js";import"./CartesianAxis-BjJPyt3G.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DjxJ3Hgq.js";import"./symbol-9pDsxG4i.js";import"./useElementOffset-B4u2V-V0.js";import"./uniqBy-hsCh7ews.js";import"./iteratee-B8ts1Ce8.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
