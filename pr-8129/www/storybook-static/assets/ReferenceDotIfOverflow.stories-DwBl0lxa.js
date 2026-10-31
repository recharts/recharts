import{R as e}from"./iframe-CDpmIgQT.js";import{R as m}from"./zIndexSlice-BfaxD0dh.js";import{C as p}from"./ComposedChart-BJALrnW1.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-De1usH_N.js";import{X as f}from"./XAxis-3XA4-bKe.js";import{Y as l}from"./YAxis-Ogt9or7H.js";import{R as d}from"./ReferenceDot-BnI4dVEP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-ihnr6TPx.js";import"./throttle-aImz7VVk.js";import"./index-DbYSlzY7.js";import"./index-Bltp8D05.js";import"./RechartsWrapper-CVUl_Te9.js";import"./axisSelectors-CxEn2HHB.js";import"./polarAxisSelectors-B_f6ZQwC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D8Pupn_R.js";import"./index-DCFiKxFj.js";import"./index-zKAzIraE.js";import"./renderedTicksSlice-CZP368BE.js";import"./index-DtYOnMLm.js";import"./CartesianChart-DSMl8g4x.js";import"./ZIndexPortal-B9xw1t3t.js";import"./CategoricalChart-Bel6HtAa.js";import"./CartesianAxis-f-wQfyV-.js";import"./Layer-mHCkFu2a.js";import"./Text-BSIquxO3.js";import"./DOMUtils-Cs7FGDH8.js";import"./pageBackground-JqsHu2De.js";import"./ZIndexLayer-DJsGHloM.js";import"./Label-PB9tCobP.js";import"./types-C_7I-XQd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-os6E-iMi.js";import"./Dot-BEctbnXU.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
