import{R as e}from"./iframe-D--BifOA.js";import{R as m}from"./zIndexSlice-BS_bCBK-.js";import{C as p}from"./ComposedChart-CuIfpr-P.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DdPhDV4c.js";import{X as f}from"./XAxis-Csoi6tJo.js";import{Y as l}from"./YAxis-kT_Dhc9L.js";import{R as d}from"./ReferenceDot-B1Jv9OC8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CArjZiC0.js";import"./index-BOkqGzp2.js";import"./index-CfjS_rv2.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-lipkooEs.js";import"./isWellBehavedNumber-Dtp514zB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSj-zOMY.js";import"./axisSelectors-BukMemNW.js";import"./d3-scale-A0pa5PaW.js";import"./index-BU2LuEPQ.js";import"./index-w8XliPC1.js";import"./renderedTicksSlice-aSc_RQuV.js";import"./index-Bhmq51fs.js";import"./CartesianChart-CGnG6vua.js";import"./chartDataContext-DYtS61hX.js";import"./CategoricalChart-exrBt-zG.js";import"./CartesianAxis-C4H8T_Ld.js";import"./Layer-DyzQQGzG.js";import"./Text-DqGbkrCU.js";import"./DOMUtils-DY29CBKb.js";import"./useId-CApYJX2H.js";import"./useBackwardsCompatibleTheme-Bk9F9dU7.js";import"./Label-CFZdNolQ.js";import"./ZIndexLayer-BREUw5RK.js";import"./types-Ba9pm5hc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-BJReGaVO.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
