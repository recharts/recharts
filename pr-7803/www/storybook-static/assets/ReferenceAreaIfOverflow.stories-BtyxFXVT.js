import{R as e}from"./iframe-CbFuLFtu.js";import{R as p}from"./zIndexSlice-D_moIlDh.js";import{C as s}from"./ComposedChart-DrqR_TZs.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-C7XsKy8T.js";import{X as d}from"./XAxis-DNc-Fb9p.js";import{Y as l}from"./YAxis-o1yfQ20q.js";import{R as h}from"./ReferenceArea-DWuhyEkN.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B61_h2S2.js";import"./index-KwOlWhXR.js";import"./index-BJNLJA8n.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CPfR2KLv.js";import"./isWellBehavedNumber-I93tJShS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-mkS7ocZy.js";import"./axisSelectors-rEOj_nFC.js";import"./d3-scale-Dx3NsH5I.js";import"./index-BqC7Dl52.js";import"./index-KFI10z6J.js";import"./renderedTicksSlice-DX_n3Vj3.js";import"./index-Cqx3EeHn.js";import"./CartesianChart-B3yIAK9J.js";import"./chartDataContext-D0ZC99YL.js";import"./CategoricalChart-Bc2ATxVj.js";import"./CartesianAxis-DmdL1NlC.js";import"./Layer-DrMT32rq.js";import"./Text-Cl3vVdZy.js";import"./DOMUtils-ac9yPFyL.js";import"./useId-eR1BXb0O.js";import"./useBackwardsCompatibleTheme-CAlV4td3.js";import"./Label-B0AIyR8e.js";import"./ZIndexLayer-DLo3iEV5.js";import"./types-CI87_xcK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-DDNbo7Ju.js";import"./useAnimationId-B7x_KCom.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
