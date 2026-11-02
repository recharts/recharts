import{R as e}from"./iframe-DSNXEUn4.js";import{R as p}from"./zIndexSlice-Dz2masNo.js";import{C as s}from"./ComposedChart-CzQ5p_-Z.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CxHGX94q.js";import{X as d}from"./XAxis-BIkQK5N1.js";import{Y as l}from"./YAxis--soXrgEQ.js";import{R as h}from"./ReferenceArea-BdbCjQFj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BJdscjTc.js";import"./throttle-Cql2XGyq.js";import"./index-Cw6XMlov.js";import"./index-CTOcRvfR.js";import"./RechartsWrapper-tZbMCMkz.js";import"./axisSelectors-BVWqqaIl.js";import"./polarAxisSelectors-DNTU8wxf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CACIKaWJ.js";import"./index-DdyQ4Lu6.js";import"./index-C8EE5WMp.js";import"./renderedTicksSlice-cMVgg74g.js";import"./index-OleNvKsM.js";import"./fillDefinitions-C4gnViBV.js";import"./CartesianChart-BNpv4aK0.js";import"./ZIndexPortal-Gym7d-4C.js";import"./CategoricalChart-D3zd10d6.js";import"./CartesianAxis-2YdOU3ps.js";import"./Layer-0vZKA5Ep.js";import"./Text-Dh3TMTW4.js";import"./DOMUtils-DYnHuNon.js";import"./ZIndexLayer-C5-QklmA.js";import"./Label-CjMpSSpc.js";import"./types-CuvQqVdH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-BONo7sHl.js";import"./useAnimationId-De32QbAN.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},oe=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
