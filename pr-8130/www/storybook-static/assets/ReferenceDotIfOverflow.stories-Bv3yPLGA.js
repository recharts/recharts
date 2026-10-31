import{R as e}from"./iframe-BcoARvhY.js";import{R as m}from"./zIndexSlice-Cap7bOGW.js";import{C as s}from"./ComposedChart-Dw_41cnT.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dqts8x-j.js";import{X as f}from"./XAxis-CW4XRUun.js";import{Y as l}from"./YAxis-BR79w2P2.js";import{R as d}from"./ReferenceDot-CO0vgG43.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DgaC_Lp9.js";import"./throttle-DozmwBSC.js";import"./index-DVE_dPhD.js";import"./index-BIq0I_KS.js";import"./RechartsWrapper-Cwmh20d2.js";import"./axisSelectors-CF6rFxXt.js";import"./polarAxisSelectors-C4L0U3vA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BLsEuD7O.js";import"./index-SzPYUv7o.js";import"./index-DvX40RdG.js";import"./renderedTicksSlice-Dsox9MKA.js";import"./index-BhqvlJ2k.js";import"./fillDefinitions-D74AVg8N.js";import"./CartesianChart-C4x2bsCb.js";import"./ZIndexPortal-CGHsRqD4.js";import"./CategoricalChart-DUIKL0FO.js";import"./CartesianAxis-Dfmzj1DX.js";import"./Layer-BMBcyrHw.js";import"./Text-DEB5NFXE.js";import"./DOMUtils-BwQh9Mln.js";import"./ZIndexLayer-e5VNMC6H.js";import"./Label-Db4oLrbv.js";import"./types-CjeLalhs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-CeoPT2zv.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},te=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
