import{R as e}from"./iframe-CvKbIuDU.js";import{R as m}from"./zIndexSlice-DW-S4til.js";import{C as p}from"./ComposedChart-jlJOyNP5.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dyl0x7Ll.js";import{X as f}from"./XAxis-Dp4FSOnR.js";import{Y as l}from"./YAxis-DizKApNp.js";import{R as d}from"./ReferenceDot-CaoPD7-k.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BTM8S8gx.js";import"./index-Z4qAt8Yv.js";import"./index-BVbsRhGr.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DyOOAUIY.js";import"./isWellBehavedNumber-DlUs4F_M.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Di3s7bBT.js";import"./axisSelectors-BV2JW9EX.js";import"./d3-scale-C5aBguhN.js";import"./index-BexOrbLc.js";import"./index-BIyuXW6c.js";import"./renderedTicksSlice-BomOCwRS.js";import"./index-B5qL6Iq2.js";import"./CartesianChart-CQJv70kz.js";import"./chartDataContext-CefKEXER.js";import"./CategoricalChart-BbjDOIaW.js";import"./CartesianAxis-BYZAVmga.js";import"./Layer-BNmLXrt-.js";import"./Text-B6N2t5jR.js";import"./pageBackground-ChMXawke.js";import"./useId-6H2iqgtd.js";import"./useBackwardsCompatibleTheme-CkVmHcf-.js";import"./Label-C9wGNRIk.js";import"./ZIndexLayer-C4jXpx6X.js";import"./types-ChWN3J9r.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DCFEnowe.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
