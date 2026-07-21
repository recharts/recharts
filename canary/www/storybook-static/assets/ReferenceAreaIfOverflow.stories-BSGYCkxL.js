import{R as e}from"./iframe-2CSQwnzh.js";import{R as s}from"./zIndexSlice-BFAyLu2K.js";import{C as p}from"./ComposedChart-Drp8NLPv.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-wDjJNs7b.js";import{X as d}from"./XAxis-Q_FxDFmH.js";import{Y as l}from"./YAxis-CGxWNSi-.js";import{R as h}from"./ReferenceArea-DmqZ68yi.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D6AnBAnr.js";import"./index-Cea4V0if.js";import"./index-DaE0ahnp.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BHTXK_Jm.js";import"./isWellBehavedNumber-Dcam8SOU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DBVst9hu.js";import"./index-cEZOrgfU.js";import"./index-DiEzMPwb.js";import"./renderedTicksSlice-HMFum7ql.js";import"./axisSelectors-svppWMH6.js";import"./d3-scale-Dt9cpg9w.js";import"./CartesianChart-DSNUg0OG.js";import"./chartDataContext-CjOi85nN.js";import"./CategoricalChart-DtXBMgKk.js";import"./CartesianAxis-B1LfcQH3.js";import"./Layer-whPw80AU.js";import"./Text-D8BcLzfv.js";import"./DOMUtils-CR7HkqrI.js";import"./Label-BgiiW0df.js";import"./ZIndexLayer-BmQ9stZJ.js";import"./types-Co_C0j8x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Rectangle-BogSoKYG.js";import"./useAnimationId-CkCcxDPT.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
