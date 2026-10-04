import{R as e}from"./iframe-BRRwZ9OM.js";import{R as m}from"./zIndexSlice-HqKAKynn.js";import{C as p}from"./ComposedChart-BgZB43-v.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B5pn1tCs.js";import{X as f}from"./XAxis-34NAxun3.js";import{Y as l}from"./YAxis-QWCMNG8w.js";import{R as d}from"./ReferenceDot-pxpYWsx6.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CI7PhwKd.js";import"./index-C-3qUDzk.js";import"./index-dIUimeeY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CZ3dceSm.js";import"./isWellBehavedNumber-PSI2l2A6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BuRv36IR.js";import"./axisSelectors-Duf7CX9E.js";import"./d3-scale-CSNIZQpC.js";import"./index-D46Km6-p.js";import"./index-BjAGoEo5.js";import"./renderedTicksSlice-D7aXzM-e.js";import"./index-Ce-PaXeC.js";import"./CartesianChart-DeYwOeaV.js";import"./chartDataContext-C1k0ydEu.js";import"./CategoricalChart-CWBsWl6U.js";import"./CartesianAxis-Dgab3bjn.js";import"./Layer-DaA93mOO.js";import"./Text-m4YXivgw.js";import"./DOMUtils-kcWo8Tu5.js";import"./useId-DqioIEDp.js";import"./useBackwardsCompatibleTheme-BRwc3p-N.js";import"./Label-BF1g4qnl.js";import"./ZIndexLayer-C1LIYZVJ.js";import"./types-BTYbdlsY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DsdNLeVo.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
