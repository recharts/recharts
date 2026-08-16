import{R as e}from"./iframe-Dc8RWhrw.js";import{R as n}from"./zIndexSlice-Cue9wPom.js";import{C as s}from"./ComposedChart-Da7iSmDy.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-EdnxPRMs.js";import{X as f}from"./XAxis-VfLZ80on.js";import{Y as l}from"./YAxis-DMp-u3Mu.js";import{R as d}from"./ReferenceDot-CN8h8NRp.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cgdnnn4b.js";import"./index-BX7yfnHr.js";import"./index-DHKxMT0C.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CQDlpFo_.js";import"./isWellBehavedNumber-DkJxcyfZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ba4_XV41.js";import"./index-BjTDJtXe.js";import"./index-D_nZwztl.js";import"./axisSelectors-Bp8YmQgj.js";import"./d3-scale-DDaZL63N.js";import"./renderedTicksSlice-CNJBn7mW.js";import"./CartesianChart-B63GIjUf.js";import"./chartDataContext-DlTklTQC.js";import"./CategoricalChart-CI6oyNVX.js";import"./CartesianAxis-l76NyjyY.js";import"./Layer-Cp8eUZax.js";import"./Text-rfXwlvlz.js";import"./DOMUtils-DSrFB3FI.js";import"./useBackwardsCompatibleTheme-CTZrd8Ez.js";import"./Label-DGIRTg37.js";import"./ZIndexLayer-BPoBYBwu.js";import"./types-D48DJ4qI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-B7OI2cN8.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
