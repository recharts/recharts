import{R as e}from"./iframe-BofWz4pi.js";import{R as m}from"./zIndexSlice-DPHCingP.js";import{C as p}from"./ComposedChart-D_3KSeQ5.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DfNl3NF9.js";import{X as f}from"./XAxis-7mtD4Kk1.js";import{Y as l}from"./YAxis-D1oxSTTV.js";import{R as d}from"./ReferenceDot-CjmvOeCV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DKgUGYpY.js";import"./throttle-CD21hIR0.js";import"./index-Ch52J8fd.js";import"./index-budgZ99k.js";import"./RechartsWrapper-uhVYqXCO.js";import"./axisSelectors-BlRUD72R.js";import"./polarAxisSelectors-5SLj1vDB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BBiuonxv.js";import"./index-CCD_p5-C.js";import"./index-BTJxJJp6.js";import"./renderedTicksSlice-DguNpOt6.js";import"./index-DGPf-g6A.js";import"./CartesianChart-Bw0i9iF5.js";import"./chartDataContext-f6L6P8Kq.js";import"./CategoricalChart-DMR2DLHI.js";import"./CartesianAxis-DEogGjPj.js";import"./Layer-bLQQfVOZ.js";import"./Text-Cod3bNx5.js";import"./pageBackground-CLiAzPgV.js";import"./useId-CsDd5jlc.js";import"./ZIndexLayer-ZOq897pe.js";import"./Label-CCUawDng.js";import"./dataEntryStyles-EsxEhXM1.js";import"./types-Da0w2MOX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-DoIuuVTb.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
