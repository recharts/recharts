import{R as e}from"./iframe-BPne-Hl-.js";import{R as s}from"./zIndexSlice-Vbxajxxh.js";import{C as p}from"./ComposedChart-J8Blu4CC.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-btbBUur8.js";import{X as d}from"./XAxis-rRwDqEnY.js";import{Y as l}from"./YAxis-C0fNq5VI.js";import{R as h}from"./ReferenceArea-K88RIm2H.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bi_zW3_L.js";import"./index-uv_fcL6C.js";import"./index-CwJJwB5T.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DDnfF8y9.js";import"./isWellBehavedNumber-Ct771fgh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7wPyuzK.js";import"./index-B-eC6RsS.js";import"./index-CxrNEW2y.js";import"./axisSelectors-LTfENhRo.js";import"./d3-scale-DOpYrlme.js";import"./renderedTicksSlice-DT6TytRZ.js";import"./CartesianChart-QFuu_jnw.js";import"./chartDataContext-BudnyF2r.js";import"./CategoricalChart-DWAFRQOx.js";import"./CartesianAxis-ClYaFBOz.js";import"./Layer-SpL-rjyd.js";import"./Text-C95v_Vb1.js";import"./DOMUtils-J3bqy14P.js";import"./useBackwardsCompatibleTheme-CL2xpGGY.js";import"./Label-BrzCwn25.js";import"./ZIndexLayer-DfzxMoSO.js";import"./types-BUNHJ5Kw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-Cn7G2-_l.js";import"./useAnimationId-Bq5h4Na4.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
