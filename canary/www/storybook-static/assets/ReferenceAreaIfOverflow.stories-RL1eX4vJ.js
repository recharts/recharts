import{R as e}from"./iframe-D_uMBlIp.js";import{R as p}from"./zIndexSlice-Cqv84PqK.js";import{C as s}from"./ComposedChart-DhQzd1k_.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-KrPu7pZ6.js";import{X as d}from"./XAxis-ChmGUeiL.js";import{Y as l}from"./YAxis-Q267elff.js";import{R as h}from"./ReferenceArea-BxNw7-h7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B5MtCWD4.js";import"./throttle-z9Tdm54L.js";import"./index-r7_kFCKH.js";import"./index-DecxnzXH.js";import"./RechartsWrapper-gFpkW2lO.js";import"./axisSelectors-BH5tVjmc.js";import"./polarAxisSelectors-PGXXztW2.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-De88z7ff.js";import"./index-BKkZnPf8.js";import"./index-BDJW8MG1.js";import"./renderedTicksSlice-CTrf5tAn.js";import"./index-DolxpBYu.js";import"./fillDefinitions-Cx6GiVLd.js";import"./CartesianChart-CnGjeW1j.js";import"./ZIndexPortal-CZb6tOfo.js";import"./CategoricalChart-BP_Fs5vF.js";import"./CartesianAxis-CaJmW0E9.js";import"./Layer-B6KF3bsJ.js";import"./Text-CgSvhKKx.js";import"./DOMUtils-BNA43YVy.js";import"./ZIndexLayer-B-ClRqkn.js";import"./Label-xcLv9MPJ.js";import"./types-DFJuzk9K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-D8h04Bjl.js";import"./useAnimationId-BUGTxmjG.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},oe=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
