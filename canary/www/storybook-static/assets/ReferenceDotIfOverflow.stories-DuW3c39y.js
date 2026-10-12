import{R as e}from"./iframe-BobpZpVS.js";import{R as m}from"./zIndexSlice-B5VUc3FO.js";import{C as p}from"./ComposedChart-BGA7EeyT.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CuGfEpsz.js";import{X as f}from"./XAxis-BH9jyr1P.js";import{Y as l}from"./YAxis-BrRETyZ5.js";import{R as d}from"./ReferenceDot-C23hZg7x.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-fEV8U6G7.js";import"./index-DvsroPxE.js";import"./index-hH2wUpdj.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-5KovoEsD.js";import"./isWellBehavedNumber-DQVuNcQo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DSKVysWi.js";import"./axisSelectors-Bu_v2Lbu.js";import"./d3-scale-VuFeIDMA.js";import"./index-C6hjAe0R.js";import"./index-CSAFGNBA.js";import"./renderedTicksSlice-BCdbdoOJ.js";import"./index-RL4br-tv.js";import"./CartesianChart-DSfZoi_U.js";import"./chartDataContext-C6lKjqxm.js";import"./CategoricalChart-DkLSs2T9.js";import"./CartesianAxis-BxngHTzr.js";import"./Layer-Clw1CWo5.js";import"./Text-BN-_pQam.js";import"./pageBackground-DetAsOi9.js";import"./useId-Fbd6tkKG.js";import"./useBackwardsCompatibleTheme-BHDQUTNL.js";import"./Label-BmZLFZpv.js";import"./ZIndexLayer-Bl_UcLFa.js";import"./types-C4bXB_C_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot--zx8-KPd.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
