import{R as e}from"./iframe-CdBlg-At.js";import{R as m}from"./zIndexSlice-Bd2ctzyz.js";import{C as p}from"./ComposedChart-Ba360Gul.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CciaTcJr.js";import{X as f}from"./XAxis-2XVZuSLi.js";import{Y as l}from"./YAxis-CCdrxwQa.js";import{R as d}from"./ReferenceDot-JgPTvogB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BMwUG5uc.js";import"./index-Yyk8WWPT.js";import"./index-D9Herklh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BE0meIIe.js";import"./isWellBehavedNumber-DGTEliAX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BtwnjrPH.js";import"./axisSelectors-B8B8qq9w.js";import"./d3-scale-BBzFAB1R.js";import"./index-BTlZQ11f.js";import"./index-COSgbA9u.js";import"./renderedTicksSlice-D-b_FiBU.js";import"./index-B_ni8hx5.js";import"./CartesianChart-5haPaxu4.js";import"./chartDataContext-8OMpeo_C.js";import"./CategoricalChart-KxwhOg8o.js";import"./CartesianAxis-CVVHUAde.js";import"./Layer-DJ6KlbON.js";import"./Text-B72QzR_J.js";import"./DOMUtils-B8jV7L5A.js";import"./useId-CTQIK8VB.js";import"./useBackwardsCompatibleTheme-DVBTPBZT.js";import"./Label-BhvRy9p8.js";import"./ZIndexLayer-BRtQaXip.js";import"./types-BwgN4eIA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-6-JAF9mR.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
