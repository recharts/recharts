import{R as e}from"./iframe-C9QnkkRp.js";import{R as m}from"./zIndexSlice-BYQlmGuM.js";import{C as s}from"./ComposedChart-Gx1n6SiU.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DQGCFF0G.js";import{X as f}from"./XAxis-49PSd8B9.js";import{Y as l}from"./YAxis-cnj8Nk2R.js";import{R as d}from"./ReferenceDot-DAFR7-GY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BwjvRfJi.js";import"./throttle-CzhN4mlB.js";import"./index-Bd4zIGdh.js";import"./index-Dp_pNI9d.js";import"./RechartsWrapper-Cq91RCWh.js";import"./axisSelectors-CTzSQU4W.js";import"./polarAxisSelectors-C_EdGVJO.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Yr2mcnpg.js";import"./index-BwU8wHQt.js";import"./index-WorF6OpA.js";import"./renderedTicksSlice-DR11ylMF.js";import"./index-D8Lsm-a-.js";import"./fillDefinitions-cPUsTY--.js";import"./CartesianChart-DUhViccR.js";import"./chartDataContext-BJIrZYve.js";import"./CategoricalChart-BY9HlJis.js";import"./CartesianAxis-CyUzu-Nz.js";import"./Layer-CEkcTjee.js";import"./Text-BwyCofjZ.js";import"./ZIndexLayer-CPmeg_kQ.js";import"./Label-yo2OQSgL.js";import"./types-DqaK-59q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-Dmq_4Bsa.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
