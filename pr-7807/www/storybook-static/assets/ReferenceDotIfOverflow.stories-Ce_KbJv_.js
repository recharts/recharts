import{R as e}from"./iframe-DyrN_51d.js";import{R as m}from"./zIndexSlice-20W2dW_I.js";import{C as p}from"./ComposedChart-D587OAML.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DOCR-Bij.js";import{X as f}from"./XAxis-BrvsOOq-.js";import{Y as l}from"./YAxis-BoJncRS_.js";import{R as d}from"./ReferenceDot-CN_DUrQF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Deocn2P3.js";import"./index-JQNKXinH.js";import"./index-DXzoq_51.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dqwg9Cw4.js";import"./isWellBehavedNumber-BWb0p1O1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkN-Eg1-.js";import"./axisSelectors-Bfr9Dapf.js";import"./d3-scale-Dg7Uhedh.js";import"./index-Zhh87yRU.js";import"./index-B7rURxTX.js";import"./renderedTicksSlice-CRqt9_jA.js";import"./index-DdYmtx0a.js";import"./CartesianChart-BsXS56U5.js";import"./chartDataContext-5lrtEEYG.js";import"./CategoricalChart-DkwHwiOc.js";import"./CartesianAxis-vw-O2ROQ.js";import"./Layer-Bhl1Azk1.js";import"./Text-CV1ypZeZ.js";import"./DOMUtils-DIhf953N.js";import"./useId-kCzHPj6p.js";import"./useBackwardsCompatibleTheme-Bt58M03l.js";import"./Label-BwFzhvIj.js";import"./ZIndexLayer-Bp9YTxbL.js";import"./types-D2IYUNPt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-CXTwVenc.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
