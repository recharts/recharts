import{R as e}from"./iframe-BWgNvoHd.js";import{R as m}from"./zIndexSlice-C7P0LeTp.js";import{C as p}from"./ComposedChart-CDicU1zI.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Buu8uFyr.js";import{X as f}from"./XAxis-NaVI4shj.js";import{Y as l}from"./YAxis-Cw1g73tC.js";import{R as d}from"./ReferenceDot-Cr9l-Oxd.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bg-BpQUC.js";import"./index-DmnQYdaI.js";import"./index-CK7j19MQ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BWCwlNwt.js";import"./isWellBehavedNumber-CM5YB1xm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CqggqYnG.js";import"./axisSelectors-Dam-iDrH.js";import"./d3-scale-CFMZ35Kl.js";import"./index-BqzBYwQc.js";import"./index-FyKmNOxh.js";import"./renderedTicksSlice-Dqzed6yg.js";import"./index-ldLlQXbm.js";import"./CartesianChart-Dh0jr6Yv.js";import"./chartDataContext-BK5iZPJH.js";import"./CategoricalChart-BAKFtZDW.js";import"./CartesianAxis-ChN3yMr6.js";import"./Layer-C3eYLIIL.js";import"./Text-CY7tJJcL.js";import"./DOMUtils-Dr6Nulpk.js";import"./useId-BqfKGNe3.js";import"./useBackwardsCompatibleTheme-CAXCwkj5.js";import"./Label-B5Qmh4rZ.js";import"./ZIndexLayer-Cmt_sSM5.js";import"./types-CrSccog6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-B7IGFvAw.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
