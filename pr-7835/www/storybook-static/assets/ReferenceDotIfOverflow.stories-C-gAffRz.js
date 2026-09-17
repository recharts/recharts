import{R as e}from"./iframe-BZ8dVzH9.js";import{R as m}from"./zIndexSlice-alAuneH8.js";import{C as p}from"./ComposedChart-Bsbx0YHv.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DSYnDJJQ.js";import{X as f}from"./XAxis-CnHMXMmb.js";import{Y as l}from"./YAxis-sJ36Ww1v.js";import{R as d}from"./ReferenceDot-CuggJcHf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Gvesfo2A.js";import"./index-BG6e4aCS.js";import"./index-05PttkMT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DGRkN7my.js";import"./isWellBehavedNumber-DuT8v1eR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BUL_ZWsP.js";import"./axisSelectors-Bf9eJXot.js";import"./d3-scale-BqJh_GJr.js";import"./index-Bh_WxC72.js";import"./index-TQNe-Pfx.js";import"./renderedTicksSlice-CdbAedzg.js";import"./index-1GZEZdCR.js";import"./CartesianChart-CPDbtls9.js";import"./chartDataContext-Dooqfk1y.js";import"./CategoricalChart-wlCT99n2.js";import"./CartesianAxis-ZGFemc86.js";import"./Layer-DFGb6VX8.js";import"./Text-Sov8IyzM.js";import"./DOMUtils-B5j94FrC.js";import"./useId-Cmc9xIYY.js";import"./useBackwardsCompatibleTheme-mp8lDntE.js";import"./Label-D8Xv73in.js";import"./ZIndexLayer-By4t7zGO.js";import"./types-JZ66y424.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-d3AKepe-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
