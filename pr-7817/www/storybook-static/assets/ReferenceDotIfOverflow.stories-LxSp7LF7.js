import{R as e}from"./iframe-C079Nsfx.js";import{R as m}from"./zIndexSlice-DLciVaZw.js";import{C as p}from"./ComposedChart-BOV6wT6A.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-0QO_5WBI.js";import{X as f}from"./XAxis-De-1mJNj.js";import{Y as l}from"./YAxis-CLt4nzsu.js";import{R as d}from"./ReferenceDot-BZDvEceE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D3s_o_Wq.js";import"./index-DexGzJ_q.js";import"./index-zk8Wcx4z.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CabyU6Oc.js";import"./isWellBehavedNumber-CDqNrIr8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BrZlEkAN.js";import"./axisSelectors-BAri39V9.js";import"./d3-scale-BHoY9dLJ.js";import"./index-DADriLAa.js";import"./index-CQ3I_J9a.js";import"./renderedTicksSlice-DVdEowfn.js";import"./index-Duc3f3M9.js";import"./CartesianChart-BZirPUWR.js";import"./chartDataContext-VWCZx3p0.js";import"./CategoricalChart-DwP_vuON.js";import"./CartesianAxis-KliPXgnc.js";import"./Layer-Kj8YrSbz.js";import"./Text-6vWGAU42.js";import"./DOMUtils-L7J-bYO6.js";import"./useId-DU03E5LM.js";import"./useBackwardsCompatibleTheme-DGGDmwyU.js";import"./Label-DC63Ta0S.js";import"./ZIndexLayer-IY8xHCFB.js";import"./types-CUH5bwnf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-mGzGAe7T.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
