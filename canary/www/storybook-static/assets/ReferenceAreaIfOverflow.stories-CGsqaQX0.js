import{R as e}from"./iframe-Cs_QEvnb.js";import{R as p}from"./zIndexSlice-DkQ_r41R.js";import{C as s}from"./ComposedChart-B4x9ib8K.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BDjqFDM5.js";import{X as d}from"./XAxis-C6JaM3hk.js";import{Y as l}from"./YAxis-BzFBF6j_.js";import{R as h}from"./ReferenceArea-DObtIMRk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dy_oOifq.js";import"./index-CAK1Ad6q.js";import"./index-MOJSfEXi.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DexuDbrM.js";import"./isWellBehavedNumber-Cid5nUs7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-LSBx4CxW.js";import"./axisSelectors-BjaL6nRE.js";import"./d3-scale-CEFQXImZ.js";import"./index-bdmoNa-p.js";import"./index-CyoiD9ix.js";import"./renderedTicksSlice-BwrC6eZ3.js";import"./index-CKqZwqIV.js";import"./CartesianChart-Der_Lez1.js";import"./chartDataContext-CDCJ_kQh.js";import"./CategoricalChart-CewNnnVL.js";import"./CartesianAxis-Btqo2Ljv.js";import"./Layer-D-shTj0T.js";import"./Text-xCnIxjvW.js";import"./DOMUtils-BYSGKLNe.js";import"./useId-B0dpXwOa.js";import"./useBackwardsCompatibleTheme-CJoqqjxP.js";import"./Label-AhMBQLf8.js";import"./ZIndexLayer-BGjzOXsU.js";import"./types-C9b0uGu7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-B9nz3j4B.js";import"./useAnimationId-CXhRBgnj.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ne as __namedExportsOrder,oe as default};
