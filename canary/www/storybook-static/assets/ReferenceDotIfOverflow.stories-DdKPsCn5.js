import{R as e}from"./iframe-Brw_3xg7.js";import{R as m}from"./zIndexSlice-2iAxrZkm.js";import{C as p}from"./ComposedChart-DXqSl_Jh.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BxIxxakc.js";import{X as f}from"./XAxis-DXhKRI9c.js";import{Y as l}from"./YAxis-B_qMueqj.js";import{R as d}from"./ReferenceDot-dLvYf1wd.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ConCS3s7.js";import"./index-CtKZ7ilo.js";import"./index-BzcphCAG.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-6Y628-3q.js";import"./isWellBehavedNumber-CKWY2x6w.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CMScH4Y-.js";import"./axisSelectors-BgtJq2Kp.js";import"./d3-scale-DDiKCNKi.js";import"./index-BcnaSdn8.js";import"./index-DAIxs-aJ.js";import"./renderedTicksSlice-7YaTp-wU.js";import"./index-DZwFur8w.js";import"./CartesianChart-D0m-K2vW.js";import"./chartDataContext-B_uwNVrC.js";import"./CategoricalChart-CtbAzaJE.js";import"./CartesianAxis-DBWQUVsj.js";import"./Layer-U4JZqCxa.js";import"./Text-DAJ7DyY-.js";import"./DOMUtils-Df1YjqfK.js";import"./useId-DReBIxno.js";import"./useBackwardsCompatibleTheme-bimwwtgB.js";import"./Label-CpCnMIaY.js";import"./ZIndexLayer-DvhvnUDg.js";import"./types-BTkYx2NR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-CwLVs_ZX.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
