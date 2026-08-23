import{R as e}from"./iframe-BcaWFD7u.js";import{R as n}from"./zIndexSlice-bS7cYBKO.js";import{C as s}from"./ComposedChart-BWld5lXM.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-ZOFM-CTl.js";import{X as f}from"./XAxis-DD0jXpQz.js";import{Y as l}from"./YAxis-CG4baE84.js";import{R as d}from"./ReferenceDot-sKBV1YxE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dz1UTb_M.js";import"./index-DD-aKuCi.js";import"./index-DVZ7kkny.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CqMML5sA.js";import"./isWellBehavedNumber-BP6UcqH1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C-VIMVig.js";import"./index-Cgtj3oPE.js";import"./index-xxpNQb8f.js";import"./axisSelectors-D0fMBFBE.js";import"./d3-scale-CjZBqtB1.js";import"./renderedTicksSlice-naYz1W_2.js";import"./CartesianChart-CjI4gSTo.js";import"./chartDataContext-BwgPsUMn.js";import"./CategoricalChart-CgNZHuyL.js";import"./CartesianAxis-D8v1d9Y9.js";import"./Layer-BhtJX80Y.js";import"./Text-C02gRxFY.js";import"./DOMUtils-BvzyNhX6.js";import"./useId-Dsncsbnj.js";import"./useBackwardsCompatibleTheme-R44_v_zH.js";import"./Label-C-frAhmf.js";import"./ZIndexLayer-CI7tJTJS.js";import"./types-BCqYYX1O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DD0Nn15x.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
