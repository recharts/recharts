import{R as e}from"./iframe-Bcbj5Yvj.js";import{R as m}from"./zIndexSlice-BbtTmnct.js";import{C as p}from"./ComposedChart-DVpq_Un2.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CNnGhmkB.js";import{X as f}from"./XAxis-BGoibDnX.js";import{Y as l}from"./YAxis-D0HGn8m-.js";import{R as d}from"./ReferenceDot-a2IBqIZv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-1wXsTVJX.js";import"./index-DsYIiLvH.js";import"./index-G8y4OPnu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C9cavZl8.js";import"./isWellBehavedNumber-Blk-fUEv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-JEGbB27w.js";import"./axisSelectors-Bf3Ac7bJ.js";import"./d3-scale-CzxKj8Wi.js";import"./index-8ad9jMOO.js";import"./index-Dr8QNULI.js";import"./renderedTicksSlice-BgIJtUaM.js";import"./index-D1z8RJDy.js";import"./CartesianChart-63QBJCK9.js";import"./chartDataContext-C1nJ8SNU.js";import"./CategoricalChart-8MHh-in3.js";import"./CartesianAxis-D8X_N5Aa.js";import"./Layer-DpGUUMWf.js";import"./Text-DXJV-9ud.js";import"./pageBackground-BH8UHhL6.js";import"./useId-B-rxwJkk.js";import"./useBackwardsCompatibleTheme-5iZeYqfO.js";import"./Label-K9FSTyve.js";import"./ZIndexLayer-CyylKyYl.js";import"./types-CJ1XacmQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-4JIe_qSe.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
