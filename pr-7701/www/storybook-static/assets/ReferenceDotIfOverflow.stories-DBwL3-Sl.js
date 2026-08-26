import{R as e}from"./iframe-n1jsfVDG.js";import{R as n}from"./zIndexSlice-BRlbTYqB.js";import{C as p}from"./ComposedChart-BbpGnHrE.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-NOg56N8e.js";import{X as f}from"./XAxis-XfJlYZND.js";import{Y as l}from"./YAxis-Bo1-Hgpg.js";import{R as d}from"./ReferenceDot-BtRqZN_f.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BndXY2H8.js";import"./index-CgFE3bjK.js";import"./index-WXWaFicj.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BAQjLDG_.js";import"./isWellBehavedNumber-51Xh59nn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CtxvIequ.js";import"./axisSelectors-7NZ6PaeE.js";import"./d3-scale-DHoUxLai.js";import"./index-CBp2l__h.js";import"./index-DNYwsh8I.js";import"./renderedTicksSlice-rKTqRgg8.js";import"./index-C2dJWAfM.js";import"./CartesianChart-Dfjy31tx.js";import"./chartDataContext-XRtQdSke.js";import"./CategoricalChart-CYGfKh2e.js";import"./CartesianAxis-9JtcSgtY.js";import"./Layer-CoRWBRFX.js";import"./Text-BwTkl3FB.js";import"./DOMUtils-B7JqCpD5.js";import"./useId-CqUHn1t3.js";import"./useBackwardsCompatibleTheme-BrtymnuF.js";import"./Label-B5dy1Vd6.js";import"./ZIndexLayer-B-b1Mp40.js";import"./types-DxCRAK1R.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-BWSVmybM.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
