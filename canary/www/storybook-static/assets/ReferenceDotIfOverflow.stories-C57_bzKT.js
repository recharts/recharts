import{R as e}from"./iframe-D3O6io8m.js";import{R as m}from"./zIndexSlice-DQB1nost.js";import{C as p}from"./ComposedChart-Cn_VV92w.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Bh9mZ_wb.js";import{X as f}from"./XAxis-DUDfURVS.js";import{Y as l}from"./YAxis-BzpJJ7qL.js";import{R as d}from"./ReferenceDot-BrfGHA8n.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CaEEZkOZ.js";import"./index-B0ONpcCM.js";import"./index-5LaKRWmN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-kP9mtom1.js";import"./isWellBehavedNumber-B1sq1tTx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DlAcodG6.js";import"./axisSelectors-DYaW_3kH.js";import"./d3-scale-CVKZtCyw.js";import"./index-emaHTIIt.js";import"./index-DdBSGBzR.js";import"./renderedTicksSlice-Do9cyu74.js";import"./index-kC31JoLB.js";import"./CartesianChart-rEbOxYKn.js";import"./chartDataContext-NUXFSw-S.js";import"./CategoricalChart-BslMClSv.js";import"./CartesianAxis-B7axhf8y.js";import"./Layer-nZxEgPG5.js";import"./Text-De-f5jqv.js";import"./DOMUtils-Cvz_isR7.js";import"./useId-CrZafLfR.js";import"./useBackwardsCompatibleTheme-CHhEQzss.js";import"./Label-CWCww6MW.js";import"./ZIndexLayer-CNTWWRns.js";import"./types-B4ar_Rgv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-bFsMR4tf.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
