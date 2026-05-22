import{e as t}from"./iframe-DgFUiQiK.js";import{O as p}from"./OffsetShower-BmC__2iI.js";import{X as a}from"./hooks-CisH2h_f.js";import{g as s}from"./arrayEqualityCheck-LPKQSaXm.js";import{C as n}from"./ComposedChart-Cv94qjDo.js";import{p as f}from"./Page-DPte-9pC.js";import{L as h}from"./Line-CMbw1Ih0.js";import{X as d}from"./XAxis-CWlzFfKK.js";import{Y as g}from"./YAxis-B1_SZb1V.js";import{L as c}from"./Legend-v5MiJ3eY.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-B1UuSRJB.js";import"./immer-Ca0Cy3ce.js";import"./axisSelectors-Q9bQQnzw.js";import"./d3-scale-HhLt2ZCp.js";import"./string-yHBgcFlJ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C_bUtyXy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Deqq_iXZ.js";import"./index-BBnacJAP.js";import"./zIndexSlice-DXOhyCux.js";import"./renderedTicksSlice-CX5tvx9V.js";import"./CartesianChart-Br6s862c.js";import"./chartDataContext-BrtjpLFC.js";import"./CategoricalChart-vPZ8jvpO.js";import"./Layer-CKwu47GO.js";import"./Curve-Ba62GFgD.js";import"./types-D_oNXqce.js";import"./step-CFkmYg6i.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BOr9vF6Q.js";import"./Label-BFkeduE8.js";import"./Text-BqcFD908.js";import"./DOMUtils-DG_6devH.js";import"./ZIndexLayer-DZ2vjGZc.js";import"./useAnimationId-CCpHVl00.js";import"./ActivePoints-BorMl77e.js";import"./Dot-Dyh69QuB.js";import"./RegisterGraphicalItemId-fp2G-2V_.js";import"./ErrorBarContext-Ompx7WAJ.js";import"./GraphicalItemClipPath-Be4OXw7H.js";import"./SetGraphicalItem-CngLT_zh.js";import"./getRadiusAndStrokeWidthFromDot-D3y5duhQ.js";import"./ActiveShapeUtils-BELkaCyh.js";import"./CartesianAxis-n56eB7xd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DwMqGDyq.js";import"./symbol-DbKH8VC2.js";import"./useElementOffset-CgnfzBM5.js";import"./uniqBy-BY9_th2N.js";import"./iteratee-Cjhnbwdc.js";const gt={title:"API/hooks/useOffset",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(s,{width:e.width,height:e.height},t.createElement(n,{data:f,margin:e.margin},t.createElement(h,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(c,null),t.createElement(p,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <OffsetShower />
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
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ct=["UseOffset"];export{r as UseOffset,ct as __namedExportsOrder,gt as default};
