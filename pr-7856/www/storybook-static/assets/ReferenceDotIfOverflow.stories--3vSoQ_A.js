import{R as e}from"./iframe-B-kCJkOw.js";import{R as m}from"./zIndexSlice-Clv-Wr_e.js";import{C as p}from"./ComposedChart-BAXW9VrG.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BQvX0mwW.js";import{X as f}from"./XAxis-C88jehXC.js";import{Y as l}from"./YAxis-D8VGqcIq.js";import{R as d}from"./ReferenceDot-C1p0RFDi.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DVuM4iFd.js";import"./index-DcAa2UuL.js";import"./index-CBKTbWE1.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BhhOMDdt.js";import"./isWellBehavedNumber-C4FzwffV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3el3knR.js";import"./axisSelectors-DT9SmTCn.js";import"./d3-scale-IzH54SGl.js";import"./index-2QimBBuf.js";import"./index-BVh04Hzh.js";import"./renderedTicksSlice-C6ma__-i.js";import"./index-CmAyTwir.js";import"./CartesianChart-C3VLYHct.js";import"./chartDataContext-CikOGl8V.js";import"./CategoricalChart-CVXqoPY8.js";import"./CartesianAxis-DmQK4you.js";import"./Layer-DUmzLecA.js";import"./Text-DvIEDZcH.js";import"./DOMUtils-CWJWmJqm.js";import"./useId-DGNKKzIZ.js";import"./useBackwardsCompatibleTheme-D27rYUis.js";import"./Label-CshHc_P8.js";import"./ZIndexLayer-yM8iQkyd.js";import"./types-1S0vnYpD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-BKZoXX6K.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
