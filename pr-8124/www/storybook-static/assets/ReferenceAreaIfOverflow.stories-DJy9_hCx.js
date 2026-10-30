import{R as e}from"./iframe-CO2wyIFg.js";import{R as p}from"./zIndexSlice-B1dwy21o.js";import{C as s}from"./ComposedChart-BcXhG0tA.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Bb7vcvcF.js";import{X as d}from"./XAxis-CTUf16qw.js";import{Y as l}from"./YAxis-DxlVhyz4.js";import{R as h}from"./ReferenceArea-DXacKKFS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-WHnVIT2p.js";import"./throttle-Bs5LuV_m.js";import"./index-jOLD2CcF.js";import"./index-Ctoi-28y.js";import"./RechartsWrapper-BPn-EIY7.js";import"./axisSelectors-6mrCXm_L.js";import"./polarAxisSelectors-BTrk53y9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CG4Qydf0.js";import"./index-DihKhs0V.js";import"./index-Bz0Oikv7.js";import"./renderedTicksSlice-BUJ996QC.js";import"./index-Bf8x0XIR.js";import"./CartesianChart-Bz4eFVMM.js";import"./ZIndexPortal-Ca53grIf.js";import"./CategoricalChart-hTdn61VM.js";import"./CartesianAxis-yYNPW19G.js";import"./Layer-3FBX9WCC.js";import"./Text-9LTzebQz.js";import"./DOMUtils-BcfmvW5B.js";import"./ZIndexLayer-Bvl6Rs1y.js";import"./Label-DwmonuSB.js";import"./types-l0n7UaRD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Rectangle-BQZYhZHi.js";import"./useAnimationId-80VZwTZw.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},oe=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
