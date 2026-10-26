import{R as e}from"./iframe-DqyoK0ud.js";import{R as m}from"./zIndexSlice-BLzMP0pQ.js";import{C as p}from"./ComposedChart-BYOmpYyX.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CsF-hHng.js";import{X as f}from"./XAxis-BatUM5pq.js";import{Y as l}from"./YAxis-_lbVlQrz.js";import{R as d}from"./ReferenceDot-BplguAoI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Ck8pmjzH.js";import"./throttle-Dn4JCjly.js";import"./index-BsuCzGf5.js";import"./index-CssgCrFq.js";import"./RechartsWrapper-Bv3_Hj5n.js";import"./axisSelectors-CFa3shM-.js";import"./polarAxisSelectors-CBUZ9Z3j.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oZSie1D-.js";import"./index-CtviIcDK.js";import"./index-BwS7ULIY.js";import"./renderedTicksSlice-DhCNe_6s.js";import"./index-wVxsoSnH.js";import"./CartesianChart-_Aa3OKSl.js";import"./chartDataContext-MbnhVXSW.js";import"./CategoricalChart-EiDYPGiV.js";import"./CartesianAxis-MuFUII6s.js";import"./Layer-svnx0Bdz.js";import"./Text-2V5_vcbB.js";import"./pageBackground-DCkPUiBo.js";import"./useId-DxxYvKaU.js";import"./ZIndexLayer-DDKk2bqL.js";import"./Label-C_IP7EJJ.js";import"./dataEntryStyles-sIqJlf-4.js";import"./types-DD3eyhWj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-BOVBX4q2.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
