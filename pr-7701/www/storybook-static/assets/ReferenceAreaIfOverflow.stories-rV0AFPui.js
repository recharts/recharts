import{R as e}from"./iframe-n1jsfVDG.js";import{R as p}from"./zIndexSlice-BRlbTYqB.js";import{C as s}from"./ComposedChart-BbpGnHrE.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-NOg56N8e.js";import{X as d}from"./XAxis-XfJlYZND.js";import{Y as l}from"./YAxis-Bo1-Hgpg.js";import{R as h}from"./ReferenceArea-CvaULdnM.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BndXY2H8.js";import"./index-CgFE3bjK.js";import"./index-WXWaFicj.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BAQjLDG_.js";import"./isWellBehavedNumber-51Xh59nn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CtxvIequ.js";import"./axisSelectors-7NZ6PaeE.js";import"./d3-scale-DHoUxLai.js";import"./index-CBp2l__h.js";import"./index-DNYwsh8I.js";import"./renderedTicksSlice-rKTqRgg8.js";import"./index-C2dJWAfM.js";import"./CartesianChart-Dfjy31tx.js";import"./chartDataContext-XRtQdSke.js";import"./CategoricalChart-CYGfKh2e.js";import"./CartesianAxis-9JtcSgtY.js";import"./Layer-CoRWBRFX.js";import"./Text-BwTkl3FB.js";import"./DOMUtils-B7JqCpD5.js";import"./useId-CqUHn1t3.js";import"./useBackwardsCompatibleTheme-BrtymnuF.js";import"./Label-B5dy1Vd6.js";import"./ZIndexLayer-B-b1Mp40.js";import"./types-DxCRAK1R.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CP1iRVSw.js";import"./useAnimationId-DmMej8H7.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ae=["IfOverflow"];export{t as IfOverflow,ae as __namedExportsOrder,oe as default};
