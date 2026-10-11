import{R as e}from"./iframe-DfTkQmXX.js";import{R as p}from"./zIndexSlice-CK1KsdwK.js";import{C as s}from"./ComposedChart-DiyxxUr9.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CsXp8hDA.js";import{X as d}from"./XAxis-DoFqVwCs.js";import{Y as l}from"./YAxis-D7HuTQbC.js";import{R as h}from"./ReferenceArea-uLgxzTAa.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BVJmkUn0.js";import"./index-Ba59U2Y8.js";import"./index-CsAN8_eV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DzYEjrKC.js";import"./isWellBehavedNumber-BsgXnYfL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DxAPF2hj.js";import"./axisSelectors-BlOH_04s.js";import"./d3-scale-DmiuGQyG.js";import"./index-CKqFjhNi.js";import"./index-MdrQnTxf.js";import"./renderedTicksSlice-Br06-4O3.js";import"./index-B9XVTu1f.js";import"./CartesianChart-DTtp-RK_.js";import"./chartDataContext-0kN3l1x_.js";import"./CategoricalChart-W3tTj6f2.js";import"./CartesianAxis-DeGU3T7P.js";import"./Layer-B_W6fsjz.js";import"./Text-B1vqPWff.js";import"./pageBackground-Bwi0dJpd.js";import"./useId-Dtq_j8MX.js";import"./useBackwardsCompatibleTheme-19GRtDCt.js";import"./Label-SXOQPAQ7.js";import"./ZIndexLayer-DPEED4Hn.js";import"./types-D3zQeAKc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-Ct4TwQSW.js";import"./useAnimationId-BR_dOTuF.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ne as __namedExportsOrder,oe as default};
