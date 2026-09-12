import{R as e}from"./iframe-Bk-N4eh5.js";import{R as p}from"./zIndexSlice-Cks1L1uQ.js";import{C as s}from"./ComposedChart-DlCpTDyp.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Yse31_VQ.js";import{X as d}from"./XAxis-cKkeo31Z.js";import{Y as l}from"./YAxis-DOohWhTk.js";import{R as h}from"./ReferenceArea-HdDu6w_L.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DGspa7An.js";import"./index-BJIQUKOl.js";import"./index-B9y8Kqsp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-jzV4S5LU.js";import"./isWellBehavedNumber-Du6Kj5-5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CRZxnEvO.js";import"./axisSelectors-gsi5pnh3.js";import"./d3-scale-CUR5a_d2.js";import"./index-B3QvH7n1.js";import"./index-CeTsENmr.js";import"./renderedTicksSlice-aqmhLMa0.js";import"./index-B5-JQ7_N.js";import"./CartesianChart-BKZN7ovI.js";import"./chartDataContext-ypeuzWgT.js";import"./CategoricalChart-CfQ-7jwV.js";import"./CartesianAxis-CxuhGA1B.js";import"./Layer-DmcaQ_dN.js";import"./Text-DZhX5I78.js";import"./DOMUtils-CUQy7sD1.js";import"./useId-DXE2NHZ6.js";import"./useBackwardsCompatibleTheme-D_Q-cp9k.js";import"./Label-QAvV2VO9.js";import"./ZIndexLayer-CDXbUJjY.js";import"./types-j43mBGpT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-PRK7HGFg.js";import"./useAnimationId-CXJms9_M.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
