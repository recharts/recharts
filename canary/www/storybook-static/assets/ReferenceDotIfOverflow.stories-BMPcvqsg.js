import{R as e}from"./iframe-DIEAN2hv.js";import{R as n}from"./zIndexSlice-h_BQOYV2.js";import{C as s}from"./ComposedChart-CYZi5jHO.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CeGdZb4b.js";import{X as f}from"./XAxis-DiChMU6m.js";import{Y as l}from"./YAxis-D9ayUFuH.js";import{R as d}from"./ReferenceDot-DEcP58sy.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DcPgljw6.js";import"./index-Ck53zJJh.js";import"./index-DM6nPyH7.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DUc1ArnZ.js";import"./isWellBehavedNumber-9xmYcKjE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-a7tD0_PW.js";import"./index-DbRgicKF.js";import"./index-BvKFxAi3.js";import"./renderedTicksSlice-CR60noDO.js";import"./axisSelectors-CGWz1F9h.js";import"./d3-scale-iAsu0ejP.js";import"./CartesianChart-GGBraKX7.js";import"./chartDataContext-DLLGaQBY.js";import"./CategoricalChart-Ceegmo7R.js";import"./CartesianAxis-BIjXN90W.js";import"./Layer-B-cLPPNh.js";import"./Text-BNRKLEiU.js";import"./DOMUtils-C1Qec3X5.js";import"./Label-LaTn0MyB.js";import"./ZIndexLayer-chy9WqcQ.js";import"./types-avIm2VNf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-DvzB0nD2.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
