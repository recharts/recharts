import{R as e}from"./iframe-CQK5cKb5.js";import{R as m}from"./zIndexSlice-B7W_lSrS.js";import{C as s}from"./ComposedChart-BPNXxxpF.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dzn84rmM.js";import{X as f}from"./XAxis-C7d_UGHt.js";import{Y as l}from"./YAxis-CXpvs3FV.js";import{R as d}from"./ReferenceDot-Bm9Q2KSk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-sIKj046z.js";import"./throttle-CtjoOnFV.js";import"./index-Dm38SIQa.js";import"./index-BKYCEKLA.js";import"./RechartsWrapper-DIL7xA5W.js";import"./axisSelectors-CFm2aUpt.js";import"./polarAxisSelectors-CGBkjniO.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DXQtVXGL.js";import"./index-CB2LtrSa.js";import"./index-FJUFiiDw.js";import"./renderedTicksSlice-CfjQzOiB.js";import"./index-vF-n4YF_.js";import"./fillDefinitions-R6mNXYbM.js";import"./CartesianChart-CdwXekNk.js";import"./chartDataContext-LfCv8xRO.js";import"./CategoricalChart-DiRS6s-r.js";import"./CartesianAxis-BgpXgN1R.js";import"./Layer-urQEAooy.js";import"./Text-Z2ey8U7p.js";import"./ZIndexLayer-9k2RLX5n.js";import"./Label-CQ2HjeWR.js";import"./types-DmMnI0O_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-DqwBwinu.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
