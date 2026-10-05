import{R as t}from"./iframe-zVk88q-r.js";import{j as a}from"./RechartsWrapper-C0-bRbC3.js";import{R as p}from"./zIndexSlice-DfutBn7L.js";import{C as n}from"./ComposedChart-CLoKJB1N.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-cW_DbcN0.js";import{X as l}from"./XAxis-DfHugD0J.js";import{Y as h}from"./YAxis-BU4R0oLg.js";import{L as c}from"./Legend-O59i4-Ol.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B_GPAkFH.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CmXBEtTu.js";import"./throttle-BmkgAj5t.js";import"./index-DsALRTV8.js";import"./index-Bk0bK2TA.js";import"./isWellBehavedNumber-C-ZPk_Xp.js";import"./d3-scale-CFGG9Jl0.js";import"./index-fUo0OINa.js";import"./index-DlbGxR67.js";import"./renderedTicksSlice-BX5u_Wlp.js";import"./index-C7LumEWu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CaeWlYzw.js";import"./chartDataContext-2A6w0qLe.js";import"./CategoricalChart-DJLnAv9C.js";import"./Layer-lcnk2Jvi.js";import"./Curve-CDtDqQyg.js";import"./types-gJ-qKTie.js";import"./step-CBXY0TZz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CE9fFFYl.js";import"./Label-CrnAbRyD.js";import"./Text-Nx4ACQwF.js";import"./DOMUtils-Dnj4_Ujh.js";import"./useId-BC8SsZ2L.js";import"./useBackwardsCompatibleTheme-BjS2fGJi.js";import"./ZIndexLayer-r6epNlFr.js";import"./useAnimationId-DztKFKRO.js";import"./ActivePoints-D0FJzWSP.js";import"./Dot-DByu-vHs.js";import"./RegisterGraphicalItemId-DbfLY7XL.js";import"./ErrorBarContext-DAwElSG5.js";import"./GraphicalItemClipPath-BL0H_9p-.js";import"./SetGraphicalItem-1sdGamMS.js";import"./getRadiusAndStrokeWidthFromDot-BohBFAZA.js";import"./ActiveShapeUtils-a-OI7kZz.js";import"./useGraphicalItemIdentity-D7Hr4JLm.js";import"./CartesianAxis-CfxKlxox.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CCBoxX71.js";import"./symbol-BjLCTHgg.js";import"./useElementOffset-Dc53Yk5t.js";import"./uniqBy-54ckHNjc.js";import"./iteratee-CnMF74mw.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
