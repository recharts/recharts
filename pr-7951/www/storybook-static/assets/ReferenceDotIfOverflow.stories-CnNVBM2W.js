import{R as e}from"./iframe-yZAwGisL.js";import{R as m}from"./zIndexSlice-vFKh36uD.js";import{C as p}from"./ComposedChart-CsZfHT2l.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Ccontk-L.js";import{X as f}from"./XAxis-6ip0YWM4.js";import{Y as l}from"./YAxis-GuJUd4De.js";import{R as d}from"./ReferenceDot-CO9ReObk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-IYJcPlE6.js";import"./index-Bt1GAe6_.js";import"./index-BTDWI4JQ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CpOUXIWy.js";import"./isWellBehavedNumber-BKIZfdbp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BFLcsvAk.js";import"./axisSelectors-CjnrZFGM.js";import"./d3-scale-BEY7rAMO.js";import"./index-Ds4u8dOy.js";import"./index-DoEg_2wF.js";import"./renderedTicksSlice-C_b5HfBN.js";import"./index-CX6Jn8F9.js";import"./CartesianChart-CRAui4vE.js";import"./chartDataContext-x9qaucVY.js";import"./CategoricalChart-BgiEDQst.js";import"./CartesianAxis-BfrfszGM.js";import"./Layer-CD9hCFBU.js";import"./Text-DCZHKK2-.js";import"./pageBackground-CPn-UXC2.js";import"./useId-fCPF8DLN.js";import"./useBackwardsCompatibleTheme-BEC80JP4.js";import"./Label-DlvpoYCy.js";import"./ZIndexLayer-jYmr7Pld.js";import"./types-BDgd-zTs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-B6Z_ObGU.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
