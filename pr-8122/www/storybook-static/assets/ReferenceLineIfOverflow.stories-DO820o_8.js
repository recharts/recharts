import{R as e}from"./iframe-C478ayfe.js";import{R as a}from"./zIndexSlice-T3ZFb7Aa.js";import{C as p}from"./ComposedChart-DISnWYF6.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-vTgxkWqJ.js";import{X as f}from"./XAxis-CU4ivSNq.js";import{Y as l}from"./YAxis-CL1QJJED.js";import{L as d}from"./Line-CGbNyLDk.js";import{R as h}from"./ReferenceLine-BMR7sgnb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BQGOYpJv.js";import"./throttle-B99v42cc.js";import"./index-J8Ragxup.js";import"./index-Dt6G_B5v.js";import"./RechartsWrapper-D6tIgYO1.js";import"./axisSelectors-Biv-SyAO.js";import"./polarAxisSelectors-CAckEIKE.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Cz0p_M0k.js";import"./index-Bgd7L3TE.js";import"./index-CujM32ev.js";import"./renderedTicksSlice-BwSyvBJ_.js";import"./index-NXORGKPb.js";import"./CartesianChart-D2eUya_e.js";import"./ZIndexPortal-CaG6-xRf.js";import"./CategoricalChart-nvv--0et.js";import"./CartesianAxis-D6yrNWVj.js";import"./Layer-BzE3AtiA.js";import"./Text-rWn3Xmx5.js";import"./DOMUtils-DMUojBll.js";import"./ZIndexLayer-B9pzlGWv.js";import"./Label-yNY_-txU.js";import"./types-1IO_LGzE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Curve-BR7rWdNb.js";import"./step-5qm5cD0x.js";import"./path-DyVhHtw_.js";import"./LabelList-CXPk-iUW.js";import"./ActivePoints-CRj_seyq.js";import"./Dot-BEwirPZP.js";import"./activeStyles-BTHRjD5i.js";import"./useAnimationId-DsdBvcVE.js";import"./dataEntryStyles-DLRWmObc.js";import"./Symbols-B5clnuWh.js";import"./symbol-Djp9TiFA.js";import"./ErrorBarContext-Cxtks1NA.js";import"./SetGraphicalItem-7DZt9-vL.js";import"./getRadiusAndStrokeWidthFromDot-0vkflCw5.js";import"./ActiveShapeUtils-em0-Yj9t.js";import"./useEffectiveDataKey-HlgT5Uu2.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,xe as __namedExportsOrder,ye as default};
