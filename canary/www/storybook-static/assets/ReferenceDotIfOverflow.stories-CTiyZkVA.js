import{R as e}from"./iframe-DfTkQmXX.js";import{R as m}from"./zIndexSlice-CK1KsdwK.js";import{C as p}from"./ComposedChart-DiyxxUr9.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CsXp8hDA.js";import{X as f}from"./XAxis-DoFqVwCs.js";import{Y as l}from"./YAxis-D7HuTQbC.js";import{R as d}from"./ReferenceDot-CNjlolOX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BVJmkUn0.js";import"./index-Ba59U2Y8.js";import"./index-CsAN8_eV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DzYEjrKC.js";import"./isWellBehavedNumber-BsgXnYfL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DxAPF2hj.js";import"./axisSelectors-BlOH_04s.js";import"./d3-scale-DmiuGQyG.js";import"./index-CKqFjhNi.js";import"./index-MdrQnTxf.js";import"./renderedTicksSlice-Br06-4O3.js";import"./index-B9XVTu1f.js";import"./CartesianChart-DTtp-RK_.js";import"./chartDataContext-0kN3l1x_.js";import"./CategoricalChart-W3tTj6f2.js";import"./CartesianAxis-DeGU3T7P.js";import"./Layer-B_W6fsjz.js";import"./Text-B1vqPWff.js";import"./pageBackground-Bwi0dJpd.js";import"./useId-Dtq_j8MX.js";import"./useBackwardsCompatibleTheme-19GRtDCt.js";import"./Label-SXOQPAQ7.js";import"./ZIndexLayer-DPEED4Hn.js";import"./types-D3zQeAKc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-CX7jfzvx.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
