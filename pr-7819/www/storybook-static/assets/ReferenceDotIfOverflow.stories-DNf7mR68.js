import{R as e}from"./iframe-iz9dRDhe.js";import{R as m}from"./zIndexSlice-BdPqcxx_.js";import{C as p}from"./ComposedChart-DjYayHbw.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B9qruWPz.js";import{X as f}from"./XAxis-6Wrkyy5u.js";import{Y as l}from"./YAxis-DtrhiCef.js";import{R as d}from"./ReferenceDot-DPjIjt0F.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DE0tlCdA.js";import"./index-DxHaJGfQ.js";import"./index-Bl-8dy8S.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DtNPAsTQ.js";import"./isWellBehavedNumber--SX7jZAJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CUdNLZqv.js";import"./axisSelectors-2huN7QkS.js";import"./d3-scale-DHC9WiBl.js";import"./index-mn3tws3H.js";import"./index-8jy5f1Un.js";import"./renderedTicksSlice-CEU3EycZ.js";import"./index-Bn7rp-xI.js";import"./CartesianChart-DOgw209l.js";import"./chartDataContext-CeQ-Tm4w.js";import"./CategoricalChart-D__Jof4a.js";import"./CartesianAxis-CdElIjx1.js";import"./Layer-DYGhC4_B.js";import"./Text-CUS7a8VN.js";import"./DOMUtils-lupu9nOG.js";import"./useId-HDpOWxLn.js";import"./useBackwardsCompatibleTheme-BDaqedqa.js";import"./Label-C1iyqFpa.js";import"./ZIndexLayer-TqmbKYqx.js";import"./types-LFzxVX1I.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-B7QvGJur.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
