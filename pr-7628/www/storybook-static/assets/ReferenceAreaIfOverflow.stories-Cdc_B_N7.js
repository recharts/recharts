import{R as e}from"./iframe-CXzAxIFn.js";import{R as s}from"./zIndexSlice-DKHp-gjy.js";import{C as p}from"./ComposedChart-Dp1v7Rwh.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-B22KpBM2.js";import{X as d}from"./XAxis-CskEzE-5.js";import{Y as l}from"./YAxis-wlQFPYGV.js";import{R as h}from"./ReferenceArea-CAl0pWER.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BEsGyRMh.js";import"./index-D8seYp4q.js";import"./index-CTRG8-wP.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-JH3hFqB6.js";import"./isWellBehavedNumber-De_HX__8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CktPaUvK.js";import"./index-ZTBFmJUb.js";import"./index-Bt5TuINX.js";import"./axisSelectors-BUJigeZt.js";import"./d3-scale-BDPPBhC0.js";import"./renderedTicksSlice-CEhRwZ6b.js";import"./CartesianChart-8S5--7wV.js";import"./chartDataContext-DY-mZyCM.js";import"./CategoricalChart-CEtFLcT-.js";import"./CartesianAxis-DNVNHP1o.js";import"./Layer-ypGDY04h.js";import"./Text-CpguaXBO.js";import"./DOMUtils-tMvYpyJu.js";import"./Label-BVxyVS7u.js";import"./ZIndexLayer-1UiKp4gF.js";import"./types-BCNeIHLh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CpUwpPC6.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CIymDIR1.js";import"./useAnimationId-BbyN3hun.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
