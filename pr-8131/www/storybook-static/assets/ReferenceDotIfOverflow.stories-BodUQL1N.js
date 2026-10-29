import{R as e}from"./iframe-BfuPA7Y7.js";import{R as m}from"./zIndexSlice-B6sU7Rt1.js";import{C as s}from"./ComposedChart-CsUG1xb5.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BTWdSSDs.js";import{X as f}from"./XAxis-18ahIu4N.js";import{Y as l}from"./YAxis-BrNvBbuM.js";import{R as d}from"./ReferenceDot-D65-qn3_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-SE0EJZ_b.js";import"./throttle-Dc8hP4d4.js";import"./index-PwnnJGIT.js";import"./index-pibBQJc_.js";import"./RechartsWrapper-95Yf8UFb.js";import"./axisSelectors-Br11nK0T.js";import"./polarAxisSelectors-CWu_M8g7.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CjK5ImOh.js";import"./index-DdvOS-Rc.js";import"./index-WmIsGj85.js";import"./renderedTicksSlice-Bz-0OqRl.js";import"./index-Bw4IjVJv.js";import"./fillDefinitions-BUo8WQ2M.js";import"./CartesianChart-Dt3os4bo.js";import"./ZIndexPortal-Bjqq_-_3.js";import"./CategoricalChart-BbC6nel8.js";import"./CartesianAxis-BUa2DE6b.js";import"./Layer-BWWgf-oi.js";import"./Text-WUFue0UU.js";import"./DOMUtils-C1ieIiQg.js";import"./ZIndexLayer-CSVoTSBk.js";import"./Label-B5k-U_Yi.js";import"./types-Di4mZIQP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-Clx--Joj.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},te=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,te as __namedExportsOrder,ee as default};
