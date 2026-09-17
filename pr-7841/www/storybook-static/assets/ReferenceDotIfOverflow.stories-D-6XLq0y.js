import{R as e}from"./iframe-BYch73GC.js";import{R as m}from"./zIndexSlice-mAK65TxS.js";import{C as p}from"./ComposedChart-DaJB9Tix.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-iXgkvWJK.js";import{X as f}from"./XAxis-DvBxon3R.js";import{Y as l}from"./YAxis-lTNE--Lq.js";import{R as d}from"./ReferenceDot-g1ci77_f.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BEoPPt7A.js";import"./index-BeTLkY2H.js";import"./index-Bc_o9NJn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DWdkSMZg.js";import"./isWellBehavedNumber-BP9XFgrX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BLQkthbe.js";import"./axisSelectors-B4VSjfJY.js";import"./d3-scale-B2BH8dUM.js";import"./index-BIGQU915.js";import"./index-Q_fYP1Tj.js";import"./renderedTicksSlice-BkcMIj-K.js";import"./index-D3IuKIwS.js";import"./CartesianChart-Cwhwr6-l.js";import"./chartDataContext-WIuoRrqx.js";import"./CategoricalChart-13njktaQ.js";import"./CartesianAxis-CWGo8wQX.js";import"./Layer-BCbhxOAa.js";import"./Text-C5jLRMCm.js";import"./DOMUtils-DGuhwttO.js";import"./useId-BzCCYXNS.js";import"./useBackwardsCompatibleTheme-BIqSCxVj.js";import"./Label-BRuA27Hh.js";import"./ZIndexLayer-CKmbkchN.js";import"./types-CIbUV0Xf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DSBm0u0z.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
