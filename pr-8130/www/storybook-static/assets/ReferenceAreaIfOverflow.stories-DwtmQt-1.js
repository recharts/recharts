import{R as e}from"./iframe-BcoARvhY.js";import{R as p}from"./zIndexSlice-Cap7bOGW.js";import{C as s}from"./ComposedChart-Dw_41cnT.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Dqts8x-j.js";import{X as d}from"./XAxis-CW4XRUun.js";import{Y as l}from"./YAxis-BR79w2P2.js";import{R as h}from"./ReferenceArea-DD4rV1dr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DgaC_Lp9.js";import"./throttle-DozmwBSC.js";import"./index-DVE_dPhD.js";import"./index-BIq0I_KS.js";import"./RechartsWrapper-Cwmh20d2.js";import"./axisSelectors-CF6rFxXt.js";import"./polarAxisSelectors-C4L0U3vA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BLsEuD7O.js";import"./index-SzPYUv7o.js";import"./index-DvX40RdG.js";import"./renderedTicksSlice-Dsox9MKA.js";import"./index-BhqvlJ2k.js";import"./fillDefinitions-D74AVg8N.js";import"./CartesianChart-C4x2bsCb.js";import"./ZIndexPortal-CGHsRqD4.js";import"./CategoricalChart-DUIKL0FO.js";import"./CartesianAxis-Dfmzj1DX.js";import"./Layer-BMBcyrHw.js";import"./Text-DEB5NFXE.js";import"./DOMUtils-BwQh9Mln.js";import"./ZIndexLayer-e5VNMC6H.js";import"./Label-Db4oLrbv.js";import"./types-CjeLalhs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-C_t9hqFj.js";import"./useAnimationId-DZvEuqRY.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},oe=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,oe as __namedExportsOrder,re as default};
