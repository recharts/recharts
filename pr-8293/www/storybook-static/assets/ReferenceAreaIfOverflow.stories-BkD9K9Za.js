import{R as e}from"./iframe-BzxAUdBV.js";import{R as s}from"./zIndexSlice-CpYrgVZX.js";import{C as p}from"./ComposedChart-hvP_dJoC.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-HNLibLcV.js";import{X as d}from"./XAxis-CtYxvtbo.js";import{Y as l}from"./YAxis-DCmm8K7b.js";import{R as h}from"./ReferenceArea-BP0U1F1O.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DheJQ_-R.js";import"./throttle-C2l7QP8r.js";import"./index-DxuOyH9Y.js";import"./index-5gwlPTJD.js";import"./RechartsWrapper-BCictS_F.js";import"./axisSelectors-D1428BGH.js";import"./polarAxisSelectors-CqQp2e17.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BnAxRH73.js";import"./index-DwsBZD05.js";import"./index-D3M5mM9_.js";import"./renderedTicksSlice-DYvam8ud.js";import"./index-CIBNfLVZ.js";import"./fillDefinitions-fx1J2dmJ.js";import"./CartesianChart-Cryci4Uo.js";import"./chartDataContext-CextJDGM.js";import"./CategoricalChart-DzNtI-Go.js";import"./CartesianAxis-C9p6cgyy.js";import"./Layer-Df_NEF0m.js";import"./Text-DPkQNMpB.js";import"./ZIndexLayer-BUHaqwT6.js";import"./Label-9brnKF6Z.js";import"./types-djSleOln.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-s-gxJKKB.js";import"./useAnimationId-CdQeQcKS.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
