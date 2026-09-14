import{R as e}from"./iframe-D6i__LoP.js";import{R as m}from"./zIndexSlice-CyKHeydM.js";import{C as p}from"./ComposedChart-CjSU8WGa.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-rlzR1UsV.js";import{X as f}from"./XAxis-CAx1pIhU.js";import{Y as l}from"./YAxis-B5XPYz7e.js";import{R as d}from"./ReferenceDot-cE7q1FKG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DZkWvGbR.js";import"./index-DMFV_hOu.js";import"./index--kg1cBe0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CqzBSPJb.js";import"./isWellBehavedNumber-CluTirfv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DCWzk6aO.js";import"./axisSelectors-LrJn1RIt.js";import"./d3-scale-CPAx7ill.js";import"./index-TOqTf9p4.js";import"./index-B0NZAO6k.js";import"./renderedTicksSlice-Cqr2zXs_.js";import"./index-CfSh3_es.js";import"./CartesianChart-SH0Bt_l8.js";import"./chartDataContext-DoSIIG4T.js";import"./CategoricalChart-CQsWyxzZ.js";import"./CartesianAxis-DBbQlRic.js";import"./Layer-g6kXe5Or.js";import"./Text-hZV3tmbb.js";import"./DOMUtils-DeYJTEnJ.js";import"./useId-tMVNWk8Z.js";import"./useBackwardsCompatibleTheme-CQpTINsS.js";import"./Label-CcM-HFI6.js";import"./ZIndexLayer-Cgr5Sbcn.js";import"./types-BferblG2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-M_mEsxZK.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
