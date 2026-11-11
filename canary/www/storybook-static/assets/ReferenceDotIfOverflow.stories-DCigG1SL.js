import{R as e}from"./iframe-DnaR6K_4.js";import{R as m}from"./zIndexSlice-HRkrVJ9X.js";import{C as s}from"./ComposedChart-D_61vaIh.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Ihil0ESz.js";import{X as f}from"./XAxis-JXd9qzo8.js";import{Y as l}from"./YAxis-wlK6hgFu.js";import{R as d}from"./ReferenceDot-C18Y8CG-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-xcCt7KB7.js";import"./throttle-CmS6TmXS.js";import"./index-DMJIF8QV.js";import"./index-BgXLdz_X.js";import"./RechartsWrapper-CRNPPXNH.js";import"./axisSelectors-BZT-kfpn.js";import"./polarAxisSelectors-vWLUjf8B.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BgvfK_mE.js";import"./index-DmfGSg0J.js";import"./index-D5D7Mpig.js";import"./renderedTicksSlice-C__KIq2D.js";import"./index-CnPRymSo.js";import"./fillDefinitions-BLgrfcm8.js";import"./CartesianChart-DnaM71J4.js";import"./chartDataContext-aWkBfLLJ.js";import"./CategoricalChart-CBGPntpg.js";import"./CartesianAxis-CAMeCfaf.js";import"./Layer-BH_fCpBP.js";import"./Text-Lh_HZPYn.js";import"./ZIndexLayer-B1l-eSb9.js";import"./Label-BEN9LI2d.js";import"./types-Dnad10Cx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-CMPD7QLc.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
