import{R as e}from"./iframe-B0md2XL3.js";import{R as a}from"./zIndexSlice-DA0iP-6p.js";import{C as p}from"./ComposedChart-CunuTAo6.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CETnhiYb.js";import{X as f}from"./XAxis-DLCMfyHC.js";import{Y as l}from"./YAxis-Dak2FPR9.js";import{L as d}from"./Line-Dwcg0Xhw.js";import{R as h}from"./ReferenceLine-DLGR20uw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DYFy43g1.js";import"./throttle-Bg4_NSFj.js";import"./index-B6b7n9vZ.js";import"./index-CoDrYRaw.js";import"./RechartsWrapper-CWXf9YtC.js";import"./axisSelectors-CGXaSNKn.js";import"./polarAxisSelectors-EKUmLX1r.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-uqFZU7-w.js";import"./index-B1ySaIl-.js";import"./index-GRpTxPRT.js";import"./renderedTicksSlice-CmqrGULL.js";import"./index-CPY9oK3E.js";import"./fillDefinitions-3Vzegl5l.js";import"./CartesianChart-8QvfRZzW.js";import"./ZIndexPortal-CrQK9kpR.js";import"./CategoricalChart-niTwkvl-.js";import"./CartesianAxis-ib9y6Jw_.js";import"./Layer-CEcbE5Mj.js";import"./Text-iaFwzHQc.js";import"./DOMUtils-BnN7LMKo.js";import"./ZIndexLayer-n48hyeCj.js";import"./Label-B4OtwMWB.js";import"./types-k-hf9hch.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-s1Q-eWha.js";import"./step-B9w_ahFS.js";import"./path-DyVhHtw_.js";import"./LabelList-CC8uMe5u.js";import"./ActivePoints-CQgXp3HY.js";import"./Dot-BK9EjXwp.js";import"./activeStyles-CvpZ-3cp.js";import"./useAnimationId-OzV8hXkE.js";import"./dataEntryStyles-QaPc2U0F.js";import"./Symbols-D_2SQKur.js";import"./symbol-CSqYEM7h.js";import"./ErrorBarContext-CrVPyI6s.js";import"./SetGraphicalItem-fxalM_Sw.js";import"./getRadiusAndStrokeWidthFromDot-Dy9C3gHL.js";import"./ActiveShapeUtils-DacyCGB1.js";import"./useEffectiveDataKey-B6E0gPoB.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
