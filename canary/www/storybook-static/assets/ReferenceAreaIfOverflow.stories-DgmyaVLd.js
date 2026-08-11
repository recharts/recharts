import{R as e}from"./iframe-7RWUuhSd.js";import{R as s}from"./zIndexSlice-C-1xueag.js";import{C as p}from"./ComposedChart-pOhFm8zP.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CTPNCTPZ.js";import{X as d}from"./XAxis-C-yl8jm9.js";import{Y as l}from"./YAxis-8kn4A2SS.js";import{R as h}from"./ReferenceArea-BpZ2BHoU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C227k_Ys.js";import"./index-DH_Nh8tm.js";import"./index-ST-ozWV_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DASEB5Wz.js";import"./isWellBehavedNumber-BpVUwl5Y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bxby6BNU.js";import"./index-BfsW4WVk.js";import"./index-CJpx5Qie.js";import"./axisSelectors-DDo2hoqB.js";import"./d3-scale-BsnTxIDO.js";import"./renderedTicksSlice-CZ8pQT90.js";import"./CartesianChart-Cp-UDomk.js";import"./chartDataContext-CBmAGHT1.js";import"./CategoricalChart-Dy4quV1E.js";import"./CartesianAxis-DWQJI5tm.js";import"./Layer-BumiLaGI.js";import"./Text-C5AxehkZ.js";import"./DOMUtils-CAVKjQcs.js";import"./RechartsThemeContext-ajl3dqdh.js";import"./Label-DVgNkXBe.js";import"./ZIndexLayer-CjyDq4Qz.js";import"./types-DB_EcD1u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CHtXbmZu.js";import"./useAnimationId-CBjNqWHO.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
