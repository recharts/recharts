import{R as e}from"./iframe-6ekSSt-5.js";import{R as p}from"./zIndexSlice-R_KvTYBp.js";import{C as s}from"./ComposedChart-D9BCUJr7.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Dl1eo7hp.js";import{X as d}from"./XAxis-XZmr7u64.js";import{Y as l}from"./YAxis-wEhmuCU5.js";import{R as h}from"./ReferenceArea-BnXP-9ZG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-JjZtg2oI.js";import"./index-DAO7DwMJ.js";import"./index-CsVDbkb5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DA4rmZEN.js";import"./isWellBehavedNumber-CkJkZDTh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJruUjAs.js";import"./index-Lx5OR-Dl.js";import"./index-CgnFSl-7.js";import"./axisSelectors-CsclQRZu.js";import"./d3-scale-DlyN1fPO.js";import"./renderedTicksSlice-CnpgwNhL.js";import"./CartesianChart-zH-5NwZD.js";import"./chartDataContext-DyyXPF9l.js";import"./CategoricalChart-DlA58TNH.js";import"./CartesianAxis-2ij8iPYj.js";import"./Layer-Caxtj8I7.js";import"./Text-9v-pfzjR.js";import"./DOMUtils-Crf9cx0d.js";import"./useId-BG9tPgK7.js";import"./useBackwardsCompatibleTheme-KnGuWCfH.js";import"./Label-CehMIv0c.js";import"./ZIndexLayer-CpjFLORN.js";import"./types-Bt2KWWGx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-K4g02Igp.js";import"./useAnimationId-C9PEopr_.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
