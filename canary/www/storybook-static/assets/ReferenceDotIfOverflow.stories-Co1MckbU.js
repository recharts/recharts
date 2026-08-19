import{R as e}from"./iframe-CO2wOmL3.js";import{R as n}from"./zIndexSlice-CjYLmU03.js";import{C as s}from"./ComposedChart-BmaCVHl6.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B_0lNO-S.js";import{X as f}from"./XAxis-D8l1zj0t.js";import{Y as l}from"./YAxis-DEg_MfYL.js";import{R as d}from"./ReferenceDot-B1vMZAul.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BF_C9j3I.js";import"./index-C2bFqevd.js";import"./index-vFvBy9sc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-jUsiawGP.js";import"./isWellBehavedNumber-BQRlzWpP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-QtML1m_J.js";import"./index-di8y7Hm0.js";import"./index-_W7z4BVf.js";import"./axisSelectors-CX7Lxi19.js";import"./d3-scale-C9Gp2SJN.js";import"./renderedTicksSlice-BFOY10tL.js";import"./CartesianChart-CWwcrxvU.js";import"./chartDataContext-XcRgiNTG.js";import"./CategoricalChart-shIifM_V.js";import"./CartesianAxis-B8e0zgyu.js";import"./Layer-wYmixdFE.js";import"./Text-D02hyY3C.js";import"./DOMUtils-C9bi6LZn.js";import"./useBackwardsCompatibleTheme-DeUToV_i.js";import"./Label-DQLK-wuU.js";import"./ZIndexLayer-hD4R9Zay.js";import"./types-m7U1KOoZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-CFoQsseu.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
