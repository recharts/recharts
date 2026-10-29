import{R as e}from"./iframe-DpFoyu2v.js";import{R as m}from"./zIndexSlice-BR5-by35.js";import{C as s}from"./ComposedChart-DYhdzMG2.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CyfgoVXE.js";import{X as f}from"./XAxis-B0PuBmnr.js";import{Y as l}from"./YAxis-UjIlgdkn.js";import{R as d}from"./ReferenceDot-BQ6tVKCS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bl7dCfEE.js";import"./throttle-CbL9mvVE.js";import"./index-CXkQwc1T.js";import"./index-Dvxsi2Qy.js";import"./RechartsWrapper-BNB2siqp.js";import"./axisSelectors-DsRIuzGY.js";import"./polarAxisSelectors-CoSF9I4I.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DFMCrQku.js";import"./index-CQQQihly.js";import"./index-DPbLagXs.js";import"./renderedTicksSlice-DLxnQ8Ny.js";import"./index-J5LyVsrM.js";import"./CartesianChart-C9Oi4Bgl.js";import"./ZIndexPortal-j1WUiNyF.js";import"./CategoricalChart-CbXZ5UqK.js";import"./CartesianAxis-C3Cmf1pW.js";import"./Layer-C27d_lJh.js";import"./Text-B1i7DvDe.js";import"./DOMUtils-I7Jj66xj.js";import"./ZIndexLayer-Q15FdZk9.js";import"./Label-RSQOEDTQ.js";import"./types-nITqZw6s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-BBDn528y.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
