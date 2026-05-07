import{e}from"./iframe-CA8OhNxH.js";import{R as n}from"./arrayEqualityCheck-CL-Z01lB.js";import{C as p}from"./ComposedChart-CxMwSzAt.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DPgyLHnL.js";import{X as f}from"./XAxis-fFf7Kpu6.js";import{Y as l}from"./YAxis-DXR1Un-U.js";import{L as d}from"./Line-CcQfDutl.js";import{R as h}from"./ReferenceLine-psW2rZ1Z.js";import{R as w}from"./RechartsHookInspector-BugLDhSF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C1cg3qcu.js";import"./immer-CLqkMfUW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CXeUN3o5.js";import"./index-CuTjkf5v.js";import"./hooks-CyxhoeqI.js";import"./axisSelectors-BooSDkXq.js";import"./d3-scale-DD8ooXHD.js";import"./zIndexSlice-DR6ZwnqZ.js";import"./renderedTicksSlice-DkCMmWDM.js";import"./CartesianChart-DIopKqdp.js";import"./chartDataContext-BaaZuqtU.js";import"./CategoricalChart-G3zYlJLo.js";import"./CartesianAxis-f2zOKi0X.js";import"./Layer-51jxPk-z.js";import"./Text-QadmgfLW.js";import"./DOMUtils-BdRmP8Tt.js";import"./Label-B9rEotsE.js";import"./ZIndexLayer-BbCOJVvb.js";import"./types-DIwXheU2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DijgxaRr.js";import"./ActivePoints-eqpt3_ru.js";import"./Dot-y1vkSdnO.js";import"./RegisterGraphicalItemId-WQn-qxjl.js";import"./ErrorBarContext-HJShwkTe.js";import"./GraphicalItemClipPath-D8pqnZaq.js";import"./SetGraphicalItem-dL7nqQCK.js";import"./useAnimationId-CFa_WVC3.js";import"./getRadiusAndStrokeWidthFromDot-DfZZAwG7.js";import"./ActiveShapeUtils-CHm7mV1T.js";import"./isPlainObject-BB9dmDmF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D0apUPF6.js";import"./Trapezoid-DD5_8Z8z.js";import"./Sector-Dda5EE-9.js";import"./Symbols-BdJUl3ke.js";import"./symbol-GRJr5T5S.js";import"./step-Cu2k92Ir.js";import"./Curve-cpd6A-Ga.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BZ4hO2WS.js";import"./ChartSizeDimensions-CM9slMDG.js";import"./OffsetShower-B_M2I77E.js";import"./PlotAreaShower-gcaUHmcI.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const {
      findByText
    } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,Re as default};
