import{R as e}from"./iframe-D4SWC0C9.js";import{R as m}from"./zIndexSlice-DtLu2rz0.js";import{C as s}from"./ComposedChart-CixY_uah.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B0MTC305.js";import{X as f}from"./XAxis-DY95kjca.js";import{Y as l}from"./YAxis-DZiEXhVb.js";import{R as d}from"./ReferenceDot-RPRw0jWi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CuPg7ygH.js";import"./throttle-i1uEXwfS.js";import"./index-o5eRcHSQ.js";import"./index-Bm9m5_PU.js";import"./RechartsWrapper-B-nLjLBG.js";import"./axisSelectors-D7bj-nZi.js";import"./polarAxisSelectors-5Is9yWXM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CqqO4xMX.js";import"./index-BzqOahcD.js";import"./index-BdcBqhlp.js";import"./renderedTicksSlice-BWlvISfj.js";import"./index-BOyzEbCc.js";import"./CartesianChart-D2bJStRT.js";import"./ZIndexPortal-Dz8Csonx.js";import"./CategoricalChart-Cyf0p9sz.js";import"./CartesianAxis-jJfvsanR.js";import"./Layer--YLSv_ie.js";import"./Text-K3oqQ0qr.js";import"./DOMUtils-_TTo3kuP.js";import"./ZIndexLayer-DpB3cuZ0.js";import"./Label-B4GKK3W-.js";import"./types-BULmlw12.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Dot-fLjTiyXC.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},te=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
