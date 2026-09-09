import{R as e}from"./iframe-BPEJKbq8.js";import{R as m}from"./zIndexSlice-VIpuzkKp.js";import{C as p}from"./ComposedChart-CCL4cMEJ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Xu2UGrUL.js";import{X as f}from"./XAxis-Cj_7D1I7.js";import{Y as l}from"./YAxis-BtY2v5Bn.js";import{R as d}from"./ReferenceDot-DYAv4FRG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DF-tIWsK.js";import"./index-DNcAR_Vs.js";import"./index-ButnEeUi.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-1un5xk9O.js";import"./isWellBehavedNumber-Buf-YS9M.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DxqXjp29.js";import"./axisSelectors-DzMkLtRT.js";import"./d3-scale-DEM8vz6k.js";import"./index-B4ESYIeG.js";import"./index-C5KHL6lo.js";import"./renderedTicksSlice-D_uQ_TZY.js";import"./index-KKugj82J.js";import"./CartesianChart-ooyntLBz.js";import"./chartDataContext-B6O65UK4.js";import"./CategoricalChart-Btmr9H2l.js";import"./CartesianAxis-BsRH_pN4.js";import"./Layer-CtRRCC-v.js";import"./Text-DJ80zvuP.js";import"./DOMUtils-CHvDeV8q.js";import"./useId-b-JOMF6y.js";import"./useBackwardsCompatibleTheme-BiL5HnOV.js";import"./Label-L-zdkhzC.js";import"./ZIndexLayer-WSPcn9qV.js";import"./types-_BaiC61O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-BI_iFhuu.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
