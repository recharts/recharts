import{R as e}from"./iframe-C0h7cDRB.js";import{R as p}from"./zIndexSlice-qYbn1M2d.js";import{C as s}from"./ComposedChart-Bxc6CdJK.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Cc-TuiJg.js";import{X as d}from"./XAxis-BA_RiYmX.js";import{Y as l}from"./YAxis-C8YuU25K.js";import{R as h}from"./ReferenceArea-BldnX1Ay.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BTNdvVGL.js";import"./index-D1hon26J.js";import"./index-DVJUv_Eo.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BkghodIs.js";import"./isWellBehavedNumber-l0bWs0-b.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cw2PyL1_.js";import"./axisSelectors-ao6VSC3T.js";import"./d3-scale-D7rNqaSZ.js";import"./index-aOlaHU4z.js";import"./index-BxvBa7qS.js";import"./renderedTicksSlice-DM87J7gU.js";import"./index-BTP4J2bR.js";import"./CartesianChart-Bz05LL8N.js";import"./chartDataContext-aa0JHiM9.js";import"./CategoricalChart-DJQlgPsa.js";import"./CartesianAxis-CojQTbDy.js";import"./Layer-CDasTplA.js";import"./Text-0LVKVKzy.js";import"./DOMUtils-CJDZt9Se.js";import"./useId-mBPRAmCQ.js";import"./useBackwardsCompatibleTheme-BiYiaeUI.js";import"./Label-ChRnigpx.js";import"./ZIndexLayer-CQRtxHWp.js";import"./types-BFdAlI3B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-Bdav8_u9.js";import"./useAnimationId-CdJJ5aJU.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
