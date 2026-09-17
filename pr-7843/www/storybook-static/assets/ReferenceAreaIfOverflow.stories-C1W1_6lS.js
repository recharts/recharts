import{R as e}from"./iframe-DgWro0Cb.js";import{R as p}from"./zIndexSlice-kqW7224Y.js";import{C as s}from"./ComposedChart-BkLdUaFI.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BBH-C6Ly.js";import{X as d}from"./XAxis-CkB5HD-K.js";import{Y as l}from"./YAxis-D4vSwiu5.js";import{R as h}from"./ReferenceArea-DRF_cRlT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BP62aThC.js";import"./index-DztsUb_g.js";import"./index-D3He7cmP.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BhS12mAV.js";import"./isWellBehavedNumber-DwM6ebKF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-h6y9B5zn.js";import"./axisSelectors-CZ13_oVc.js";import"./d3-scale-BfkfHoGl.js";import"./index-BDglQEHq.js";import"./index-CTaoAsOx.js";import"./renderedTicksSlice-gL8A1NDh.js";import"./index-DaYKny0o.js";import"./CartesianChart-DA39YynM.js";import"./chartDataContext-CGD2iDmQ.js";import"./CategoricalChart-u8OOiycT.js";import"./CartesianAxis-CA5xaS56.js";import"./Layer-XFlq6LCH.js";import"./Text-waGCJknf.js";import"./DOMUtils-D88jtPAc.js";import"./useId-BFsrAK1l.js";import"./useBackwardsCompatibleTheme-VKMGBrP2.js";import"./Label-CAU1RuQf.js";import"./ZIndexLayer-DpP2thTP.js";import"./types-pVUrsENP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-wXrqsCXj.js";import"./useAnimationId-NxEFQxZ2.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
