import{R as e}from"./iframe-B0md2XL3.js";import{R as m}from"./zIndexSlice-DA0iP-6p.js";import{C as s}from"./ComposedChart-CunuTAo6.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CETnhiYb.js";import{X as f}from"./XAxis-DLCMfyHC.js";import{Y as l}from"./YAxis-Dak2FPR9.js";import{R as d}from"./ReferenceDot-DD213OOb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DYFy43g1.js";import"./throttle-Bg4_NSFj.js";import"./index-B6b7n9vZ.js";import"./index-CoDrYRaw.js";import"./RechartsWrapper-CWXf9YtC.js";import"./axisSelectors-CGXaSNKn.js";import"./polarAxisSelectors-EKUmLX1r.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-uqFZU7-w.js";import"./index-B1ySaIl-.js";import"./index-GRpTxPRT.js";import"./renderedTicksSlice-CmqrGULL.js";import"./index-CPY9oK3E.js";import"./fillDefinitions-3Vzegl5l.js";import"./CartesianChart-8QvfRZzW.js";import"./ZIndexPortal-CrQK9kpR.js";import"./CategoricalChart-niTwkvl-.js";import"./CartesianAxis-ib9y6Jw_.js";import"./Layer-CEcbE5Mj.js";import"./Text-iaFwzHQc.js";import"./DOMUtils-BnN7LMKo.js";import"./ZIndexLayer-n48hyeCj.js";import"./Label-B4OtwMWB.js";import"./types-k-hf9hch.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-BK9EjXwp.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},te=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,te as __namedExportsOrder,ee as default};
