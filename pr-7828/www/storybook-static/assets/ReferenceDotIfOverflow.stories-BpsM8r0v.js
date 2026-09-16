import{R as e}from"./iframe-yFYT_zN7.js";import{R as m}from"./zIndexSlice-D0SqWiCA.js";import{C as p}from"./ComposedChart-DxJEOi6H.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DVxerUhF.js";import{X as f}from"./XAxis-CLVPgrfg.js";import{Y as l}from"./YAxis-BT6AeQik.js";import{R as d}from"./ReferenceDot-C7W_TmFR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B6GNdBpm.js";import"./index-CuJJm_Tn.js";import"./index-Du7yNjke.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CTg3N4RV.js";import"./isWellBehavedNumber-CbA6SpN0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BK2Nqghc.js";import"./axisSelectors-Cz3aPbz8.js";import"./d3-scale--DHWqn1j.js";import"./index-DMtch-zH.js";import"./index-DrQda-y9.js";import"./renderedTicksSlice-DwWtQ1Di.js";import"./index-DI6gPrhu.js";import"./CartesianChart-Ck9zKM_U.js";import"./chartDataContext-CrNdyu-C.js";import"./CategoricalChart-DBil3fX0.js";import"./CartesianAxis-DGDqWvXT.js";import"./Layer-Dy_GX6yW.js";import"./Text-CYbp4Bob.js";import"./DOMUtils-6VQmbUCR.js";import"./useId-CBpR1fpo.js";import"./useBackwardsCompatibleTheme-BN2mwgRc.js";import"./Label-99DUDCMD.js";import"./ZIndexLayer-CHhs3r11.js";import"./types-B35KvzC0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-UFOmxDS-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
