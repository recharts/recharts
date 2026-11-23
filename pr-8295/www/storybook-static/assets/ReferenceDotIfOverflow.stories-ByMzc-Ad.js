import{R as e}from"./iframe-kLrggBpZ.js";import{R as m}from"./zIndexSlice-CKCGde2F.js";import{C as s}from"./ComposedChart-DaK4Bp3q.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-6GpOa0-0.js";import{X as f}from"./XAxis-B-2vEHb0.js";import{Y as l}from"./YAxis-B5avTU_X.js";import{R as d}from"./ReferenceDot-Cwdgp1x7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D_LYpz2f.js";import"./throttle-BkTfx27C.js";import"./index-Bv7OV-9Z.js";import"./index-C-cjgJnd.js";import"./RechartsWrapper-DVOP9mMm.js";import"./axisSelectors-D6wM5g8f.js";import"./polarAxisSelectors-Dxnj4FFJ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DE-4LfFJ.js";import"./index-iHP1RapJ.js";import"./index-B46QsuJB.js";import"./renderedTicksSlice-DgOqiypa.js";import"./index-DVOdnQdm.js";import"./fillDefinitions-CMyVvOcV.js";import"./CartesianChart-DP_q0vfs.js";import"./chartDataContext-DDJgrWCU.js";import"./CategoricalChart-CZkForA1.js";import"./CartesianAxis-Dfi_5bxP.js";import"./Layer-DQPijciL.js";import"./Text-DNntKRRw.js";import"./ZIndexLayer-CZ_FttOi.js";import"./Label-CpspZ4dp.js";import"./types-jTiWDmD0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-D134Eke9.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
