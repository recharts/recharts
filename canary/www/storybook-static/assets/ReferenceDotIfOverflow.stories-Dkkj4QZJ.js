import{R as e}from"./iframe-6EoNA_L8.js";import{R as m}from"./zIndexSlice-De49t7iX.js";import{C as p}from"./ComposedChart-Dde-tYrz.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BkvkCyZB.js";import{X as f}from"./XAxis-D5W76h4C.js";import{Y as l}from"./YAxis-BC8F1g7K.js";import{R as d}from"./ReferenceDot-cP4yu8re.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-qfBh-gJU.js";import"./index-DOuZqOP2.js";import"./index-drI4VfER.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BeiJcrCE.js";import"./isWellBehavedNumber-B08jv1io.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DIgVm8D4.js";import"./axisSelectors-CPDr9W-8.js";import"./d3-scale-BHNzH7iq.js";import"./index-CW_YvHl3.js";import"./index-BUgLS7M1.js";import"./renderedTicksSlice-CIIKzgpq.js";import"./index-BvtgduTj.js";import"./CartesianChart-Cysh7fYc.js";import"./chartDataContext-B2QOvGi0.js";import"./CategoricalChart-BUH5Yjzv.js";import"./CartesianAxis-BCnvc9Ye.js";import"./Layer-CUxzD1DR.js";import"./Text-DZDh1E85.js";import"./DOMUtils-DNveQWYn.js";import"./useId-BXan0_nA.js";import"./useBackwardsCompatibleTheme-BhrjNye9.js";import"./Label-BMFW6Zd2.js";import"./ZIndexLayer-BqdDjbl9.js";import"./types-M0OtQk6p.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-BF-0bAL8.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
