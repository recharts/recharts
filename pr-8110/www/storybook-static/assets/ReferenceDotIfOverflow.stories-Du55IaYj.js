import{R as e}from"./iframe-oYyBRks2.js";import{R as m}from"./zIndexSlice-CbmXT1dz.js";import{C as s}from"./ComposedChart-B-eq2Fp1.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D7p_BbxM.js";import{X as f}from"./XAxis-DvAGam0D.js";import{Y as l}from"./YAxis-CQwSDKOg.js";import{R as d}from"./ReferenceDot-B5v2ignS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-lgcxhifZ.js";import"./throttle-teQP-xJt.js";import"./index-uP8uPv2q.js";import"./index-C0E8rQWU.js";import"./RechartsWrapper-BEJButs1.js";import"./axisSelectors-CzrEReB-.js";import"./polarAxisSelectors-FwVZQ2F9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Dsmu7PfS.js";import"./index-CorLv6ho.js";import"./index-DI7MM_Df.js";import"./renderedTicksSlice-PDwTct7N.js";import"./index-DhsLJ5T7.js";import"./CartesianChart-Bd-kZVr0.js";import"./ZIndexPortal-B7800aDw.js";import"./CategoricalChart-DoegTXhB.js";import"./CartesianAxis-C0SgAXkt.js";import"./Layer-CyxA7s2s.js";import"./Text-BTTN-58y.js";import"./DOMUtils-oL4xRmBr.js";import"./ZIndexLayer-D9yXy4ut.js";import"./Label-D2Ghzufd.js";import"./types-C_jjefDJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-hWqukiPc.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
