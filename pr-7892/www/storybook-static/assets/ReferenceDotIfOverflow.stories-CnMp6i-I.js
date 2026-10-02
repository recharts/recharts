import{R as e}from"./iframe-C0YxDW4G.js";import{R as m}from"./zIndexSlice-DZlnymAS.js";import{C as p}from"./ComposedChart-D72s1HZM.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Bb7zoqVW.js";import{X as f}from"./XAxis-Cpmqfpq_.js";import{Y as l}from"./YAxis-DweGkw3n.js";import{R as d}from"./ReferenceDot-ChcTd5Mm.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DOQHZSoJ.js";import"./index-BVdk1KvG.js";import"./index-CKK11yAc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DJlTwR1C.js";import"./isWellBehavedNumber-BBCyva1N.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BlkZ7fGa.js";import"./axisSelectors-nVTOJQip.js";import"./d3-scale-DUyT1Gjc.js";import"./index-BIhmmbcr.js";import"./index-B97k9itH.js";import"./renderedTicksSlice-BVS-v-zq.js";import"./index-Cpic7GAq.js";import"./CartesianChart-CyMga4mL.js";import"./chartDataContext-DVZlfd-d.js";import"./CategoricalChart-BIr7jbpw.js";import"./CartesianAxis-d866ov5z.js";import"./Layer-tJBN4qpr.js";import"./Text-BVHk9liS.js";import"./DOMUtils-CbyUgj5a.js";import"./useId-DohVK8l3.js";import"./useBackwardsCompatibleTheme-CKP3ZQ-p.js";import"./Label-gEQqlFEh.js";import"./ZIndexLayer-D7SEoPy2.js";import"./types-CmslNM9O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DVL9KKRs.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
