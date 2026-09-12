import{R as e}from"./iframe-Bk-N4eh5.js";import{R as m}from"./zIndexSlice-Cks1L1uQ.js";import{C as p}from"./ComposedChart-DlCpTDyp.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Yse31_VQ.js";import{X as f}from"./XAxis-cKkeo31Z.js";import{Y as l}from"./YAxis-DOohWhTk.js";import{R as d}from"./ReferenceDot-SnDgOiv-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DGspa7An.js";import"./index-BJIQUKOl.js";import"./index-B9y8Kqsp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-jzV4S5LU.js";import"./isWellBehavedNumber-Du6Kj5-5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CRZxnEvO.js";import"./axisSelectors-gsi5pnh3.js";import"./d3-scale-CUR5a_d2.js";import"./index-B3QvH7n1.js";import"./index-CeTsENmr.js";import"./renderedTicksSlice-aqmhLMa0.js";import"./index-B5-JQ7_N.js";import"./CartesianChart-BKZN7ovI.js";import"./chartDataContext-ypeuzWgT.js";import"./CategoricalChart-CfQ-7jwV.js";import"./CartesianAxis-CxuhGA1B.js";import"./Layer-DmcaQ_dN.js";import"./Text-DZhX5I78.js";import"./DOMUtils-CUQy7sD1.js";import"./useId-DXE2NHZ6.js";import"./useBackwardsCompatibleTheme-D_Q-cp9k.js";import"./Label-QAvV2VO9.js";import"./ZIndexLayer-CDXbUJjY.js";import"./types-j43mBGpT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DLh3Hb31.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
