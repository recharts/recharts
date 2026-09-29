import{R as e}from"./iframe-B8WiTaBv.js";import{R as p}from"./zIndexSlice-D5_q7rMj.js";import{C as s}from"./ComposedChart-CgOoahPV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BaJfNTjD.js";import{X as d}from"./XAxis-CJ0oEHon.js";import{Y as l}from"./YAxis-BeTfGw8Q.js";import{R as h}from"./ReferenceArea-BbI-uLCx.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bf7HFTSb.js";import"./index-CkpdDqnf.js";import"./index-CK2GwVFT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DE7ai4U1.js";import"./isWellBehavedNumber-BNs6A6nd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D4X8qM3L.js";import"./axisSelectors-fwkbTSQU.js";import"./d3-scale-DPpdjCkc.js";import"./index-BEIQXCWA.js";import"./index-C4vHDdGM.js";import"./renderedTicksSlice-XS0yYXwf.js";import"./index-DFXXQ9h7.js";import"./CartesianChart-Ct7y2r_J.js";import"./chartDataContext-BzLrqzRe.js";import"./CategoricalChart-DNXrcn0T.js";import"./CartesianAxis-B062qB3S.js";import"./Layer-DykiohLY.js";import"./Text-DTdnI9Wt.js";import"./DOMUtils-CVPbEKMw.js";import"./useId-BQjGOdOZ.js";import"./useBackwardsCompatibleTheme--hv8ghFv.js";import"./Label-BgOirL-a.js";import"./ZIndexLayer-Dp2lwUDn.js";import"./types-CBGkJi7-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-BbDRcByH.js";import"./useAnimationId-BEfI3V-Q.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ne as __namedExportsOrder,oe as default};
