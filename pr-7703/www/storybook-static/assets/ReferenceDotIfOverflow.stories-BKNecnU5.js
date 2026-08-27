import{R as e}from"./iframe-COd9kUku.js";import{R as n}from"./zIndexSlice-BfP4v1bS.js";import{C as p}from"./ComposedChart-Vvr56aGu.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CgOmeVcK.js";import{X as f}from"./XAxis-B5YW1-Pp.js";import{Y as l}from"./YAxis-Bz97xI6z.js";import{R as d}from"./ReferenceDot-ylHnd7A5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-5ro8HE4Y.js";import"./index-COL2WR0f.js";import"./index-BSevdux3.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D_OJMKIx.js";import"./isWellBehavedNumber-Bypxk17g.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CqMN8AUr.js";import"./axisSelectors-i296AGH9.js";import"./d3-scale-uQ_gA658.js";import"./index-BJ9jwzw4.js";import"./index-5Vml1b2p.js";import"./renderedTicksSlice-CZAtvUE5.js";import"./index-RUiFmAll.js";import"./CartesianChart-DI_xXxUF.js";import"./chartDataContext-D64HN0cL.js";import"./CategoricalChart-Cy8ngVMI.js";import"./CartesianAxis-DNJooG1E.js";import"./Layer-riiSoJFM.js";import"./Text-osvpinWz.js";import"./DOMUtils-csxZCivv.js";import"./useId-Cuf_ayBp.js";import"./useBackwardsCompatibleTheme-B805O1fX.js";import"./Label-BfhUPh9D.js";import"./ZIndexLayer-06cimeo-.js";import"./types-5NhdCA1W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DFTXaHC9.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
