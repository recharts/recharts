import{R as e}from"./iframe-CEaKFLOD.js";import{R as m}from"./zIndexSlice-BW_-kNl2.js";import{C as p}from"./ComposedChart-BWdu-w5M.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-AgVp7jlP.js";import{X as f}from"./XAxis-xN7pSHzN.js";import{Y as l}from"./YAxis-Cm2tjuJm.js";import{R as d}from"./ReferenceDot-26Uyk209.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BTwCYOHA.js";import"./index-BP77GY6y.js";import"./index-Pesxz8sF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-y1moel4K.js";import"./isWellBehavedNumber-DMSwtAM2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWplp24t.js";import"./axisSelectors-CCBeMCMj.js";import"./d3-scale-xgyjEPPy.js";import"./index-_btimE9G.js";import"./index-CqNUlXBo.js";import"./renderedTicksSlice-pAYw7YNa.js";import"./index-CA_j_GK2.js";import"./CartesianChart-BqEoKcYr.js";import"./chartDataContext-ehQpVm1w.js";import"./CategoricalChart-BHppyMGY.js";import"./CartesianAxis-DZYvFW8B.js";import"./Layer-CAr7LORZ.js";import"./Text-Bjai807M.js";import"./DOMUtils-DMHzK5Q0.js";import"./useId-DBCCsHcD.js";import"./useBackwardsCompatibleTheme-VjyVXj2U.js";import"./Label-BzoSUysL.js";import"./ZIndexLayer--MuvhbKE.js";import"./types-Da2TODPT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-RK_ht-a6.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
