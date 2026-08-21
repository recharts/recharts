import{R as e}from"./iframe-6ekSSt-5.js";import{R as n}from"./zIndexSlice-R_KvTYBp.js";import{C as p}from"./ComposedChart-D9BCUJr7.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dl1eo7hp.js";import{X as f}from"./XAxis-XZmr7u64.js";import{Y as l}from"./YAxis-wEhmuCU5.js";import{L as d}from"./Line-DSZZ9_-8.js";import{R as h}from"./ReferenceLine-egrx9NXi.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-JjZtg2oI.js";import"./index-DAO7DwMJ.js";import"./index-CsVDbkb5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DA4rmZEN.js";import"./isWellBehavedNumber-CkJkZDTh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJruUjAs.js";import"./index-Lx5OR-Dl.js";import"./index-CgnFSl-7.js";import"./axisSelectors-CsclQRZu.js";import"./d3-scale-DlyN1fPO.js";import"./renderedTicksSlice-CnpgwNhL.js";import"./CartesianChart-zH-5NwZD.js";import"./chartDataContext-DyyXPF9l.js";import"./CategoricalChart-DlA58TNH.js";import"./CartesianAxis-2ij8iPYj.js";import"./Layer-Caxtj8I7.js";import"./Text-9v-pfzjR.js";import"./DOMUtils-Crf9cx0d.js";import"./useId-BG9tPgK7.js";import"./useBackwardsCompatibleTheme-KnGuWCfH.js";import"./Label-CehMIv0c.js";import"./ZIndexLayer-CpjFLORN.js";import"./types-Bt2KWWGx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C0RUZ2Dw.js";import"./step-bqZc_R0E.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BWGnpjqe.js";import"./useAnimationId-C9PEopr_.js";import"./ActivePoints-u_x_Ht3b.js";import"./Dot-BivbT2Yg.js";import"./RegisterGraphicalItemId-CARor3cI.js";import"./ErrorBarContext-bczhAX9Q.js";import"./GraphicalItemClipPath-Bt-KQwU_.js";import"./SetGraphicalItem-BztnRzJW.js";import"./getRadiusAndStrokeWidthFromDot-BMubedKq.js";import"./ActiveShapeUtils-BiTIzsLo.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ve=["IfOverflow"];export{t as IfOverflow,ve as __namedExportsOrder,we as default};
