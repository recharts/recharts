import{R as e}from"./iframe-UUS7gS8r.js";import{R as m}from"./zIndexSlice-DC8Mmyu0.js";import{C as p}from"./ComposedChart-DyYzfQP5.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BsgU5kr5.js";import{X as f}from"./XAxis-Cy2DOw7O.js";import{Y as l}from"./YAxis-Cy8DgzpK.js";import{R as d}from"./ReferenceDot-B7Q9HPVw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CGDCDwfC.js";import"./throttle-CgxVsgWn.js";import"./index-B3bpwb38.js";import"./index-DE7_Lyvr.js";import"./RechartsWrapper-CpoOBNO8.js";import"./axisSelectors-BhKtxZfo.js";import"./polarAxisSelectors-5ho1KqAt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DXJSpI4F.js";import"./index-DlU_WMoq.js";import"./index-BEWOexqM.js";import"./renderedTicksSlice-RI1nm7LM.js";import"./index-w---ZacB.js";import"./CartesianChart-C-KduMFZ.js";import"./ZIndexPortal-DB3Ky3lt.js";import"./CategoricalChart-kgfDSXE6.js";import"./CartesianAxis-CqSL8oIY.js";import"./Layer-CAt7TJL2.js";import"./Text-Dm1h-qE_.js";import"./DOMUtils-dYR_cylo.js";import"./pageBackground-BJvSTYQp.js";import"./ZIndexLayer-CHgyGuEd.js";import"./Label-Cr7fVLhy.js";import"./types-CpFwJGls.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-TYLf-280.js";import"./Dot-CwQJh2C3.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
