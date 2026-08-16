import{R as e}from"./iframe-Dc8RWhrw.js";import{R as s}from"./zIndexSlice-Cue9wPom.js";import{C as p}from"./ComposedChart-Da7iSmDy.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-EdnxPRMs.js";import{X as d}from"./XAxis-VfLZ80on.js";import{Y as l}from"./YAxis-DMp-u3Mu.js";import{R as h}from"./ReferenceArea-CA1ZB1wa.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cgdnnn4b.js";import"./index-BX7yfnHr.js";import"./index-DHKxMT0C.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CQDlpFo_.js";import"./isWellBehavedNumber-DkJxcyfZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ba4_XV41.js";import"./index-BjTDJtXe.js";import"./index-D_nZwztl.js";import"./axisSelectors-Bp8YmQgj.js";import"./d3-scale-DDaZL63N.js";import"./renderedTicksSlice-CNJBn7mW.js";import"./CartesianChart-B63GIjUf.js";import"./chartDataContext-DlTklTQC.js";import"./CategoricalChart-CI6oyNVX.js";import"./CartesianAxis-l76NyjyY.js";import"./Layer-Cp8eUZax.js";import"./Text-rfXwlvlz.js";import"./DOMUtils-DSrFB3FI.js";import"./useBackwardsCompatibleTheme-CTZrd8Ez.js";import"./Label-DGIRTg37.js";import"./ZIndexLayer-BPoBYBwu.js";import"./types-D48DJ4qI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CIo59f_q.js";import"./useAnimationId-ljtrSyr1.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
