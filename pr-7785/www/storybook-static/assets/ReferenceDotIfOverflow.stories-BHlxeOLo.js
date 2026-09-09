import{R as e}from"./iframe-WBosH1gH.js";import{R as m}from"./zIndexSlice-DY0UoJ4l.js";import{C as p}from"./ComposedChart-DgMot__w.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C6SyUmjq.js";import{X as f}from"./XAxis-m7Q_C79b.js";import{Y as l}from"./YAxis-CenhW_SV.js";import{R as d}from"./ReferenceDot-D4rn9QbH.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-XsvTB-sR.js";import"./index-BwqgnM9k.js";import"./index-VfXF9cRB.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B2r9_mKe.js";import"./isWellBehavedNumber-BkYn7WHA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0qr77rU.js";import"./axisSelectors-DVaMQoZI.js";import"./d3-scale-D0rOwI1X.js";import"./index-vxpjOmvK.js";import"./index-0eRMU_eW.js";import"./renderedTicksSlice-w1R0M-NQ.js";import"./index-C25eF-tn.js";import"./CartesianChart-DVqibfCK.js";import"./chartDataContext-CniWriLR.js";import"./CategoricalChart-DG5t8KxI.js";import"./CartesianAxis-Bjry6SmX.js";import"./Layer-DlEXHs0c.js";import"./Text-DUKo7lId.js";import"./DOMUtils-Cua0edvn.js";import"./useId-QCeL7Xpe.js";import"./useBackwardsCompatibleTheme-Dm9WBqGk.js";import"./Label-BCHXbIDv.js";import"./ZIndexLayer-Ceqldfm9.js";import"./types-CXdVyMYF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DxEZ3OZ8.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
