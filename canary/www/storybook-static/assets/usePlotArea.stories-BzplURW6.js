import{R as t}from"./iframe-CCZR7NAh.js";import{j as a}from"./RechartsWrapper-wkc56maS.js";import{R as p}from"./zIndexSlice-RhYtObCh.js";import{C as n}from"./ComposedChart-B5KY41wA.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-ByOfnKwX.js";import{X as l}from"./XAxis-BRz9nr_h.js";import{Y as h}from"./YAxis-r76EBGup.js";import{L as c}from"./Legend-CMYhydZc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DBU-kSsr.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BSioHzmv.js";import"./throttle-ZP6rSZKd.js";import"./index-tWW1_YSW.js";import"./index-B_5iXp8A.js";import"./isWellBehavedNumber-Csif_Eh7.js";import"./d3-scale-CU88JBPJ.js";import"./index-CQgQjfRf.js";import"./index-Cn7KliQr.js";import"./renderedTicksSlice-D9smLeXW.js";import"./index-1iFFgL5n.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BL5MVgQu.js";import"./chartDataContext-DSMzrBHe.js";import"./CategoricalChart-thtv_Ll2.js";import"./Layer-B2yEt3nd.js";import"./Curve-7ikXqYG-.js";import"./types-BX41f3Nu.js";import"./step-CvhyldGl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C_k0o8_C.js";import"./Label-A6NnUU-m.js";import"./Text-BNhIgYfP.js";import"./DOMUtils-BDfLWNCh.js";import"./useId-BL2vel-5.js";import"./useBackwardsCompatibleTheme-DIkjfI7E.js";import"./ZIndexLayer-RJSSngl5.js";import"./useAnimationId-DJLlQPal.js";import"./ActivePoints-Dj4SzkHH.js";import"./Dot-CnbUvxwO.js";import"./RegisterGraphicalItemId-U6F3LrJb.js";import"./ErrorBarContext-j9HbImdV.js";import"./GraphicalItemClipPath-eRrs6_re.js";import"./SetGraphicalItem-DoozTt-Y.js";import"./getRadiusAndStrokeWidthFromDot-DBCpafJP.js";import"./ActiveShapeUtils-DgHvx5XO.js";import"./useGraphicalItemIdentity-BWyXW6pi.js";import"./CartesianAxis-DqSvII5H.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BuAuRUDz.js";import"./symbol-iszy4Ia-.js";import"./useElementOffset-Dp3BrIi0.js";import"./uniqBy-CvvHfEZU.js";import"./iteratee-9vsqmnl8.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
