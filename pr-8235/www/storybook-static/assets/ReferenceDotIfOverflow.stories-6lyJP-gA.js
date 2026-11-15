import{R as e}from"./iframe-CuQfx1mh.js";import{R as m}from"./zIndexSlice-DATCiNk-.js";import{C as s}from"./ComposedChart-CT5dqqrP.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CQ7ZP3nQ.js";import{X as f}from"./XAxis-DFSmxsEI.js";import{Y as l}from"./YAxis-BKox7kU6.js";import{R as d}from"./ReferenceDot-DUi_jgcv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-xvOlXZtC.js";import"./throttle-SAQUG4vb.js";import"./index-CvvvrEYr.js";import"./index-Bw8PVQ13.js";import"./RechartsWrapper-DE6EtITA.js";import"./axisSelectors-BY0kcEhz.js";import"./polarAxisSelectors-piadlyiA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BW1Afi3u.js";import"./index-kT5VmTkQ.js";import"./index-BeCcpORD.js";import"./renderedTicksSlice-Ds69xoXU.js";import"./index-SztJ6oEx.js";import"./fillDefinitions-DUe233lT.js";import"./CartesianChart-BJj5wl32.js";import"./chartDataContext-pjMFjoUW.js";import"./CategoricalChart-DBOXRrXs.js";import"./CartesianAxis-CbXqU-62.js";import"./Layer-YgN4J4tN.js";import"./Text-BgHfu1GZ.js";import"./ZIndexLayer-W76HFIEY.js";import"./Label-GADa0aPm.js";import"./types-D3Hjk8Vl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-nIfHLv6J.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
