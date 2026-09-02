import{R as e}from"./iframe-BQrvPSLN.js";import{R as n}from"./zIndexSlice-7Hw-ZWkF.js";import{C as p}from"./ComposedChart-B4viTwzv.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BoCTC1f5.js";import{X as f}from"./XAxis-COEcW9k3.js";import{Y as l}from"./YAxis-BdyzdtnU.js";import{R as d}from"./ReferenceDot-iv02JkBe.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-0gn-kluv.js";import"./index-n8L9L6eU.js";import"./index-DCJ-lssY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dldn7S-M.js";import"./isWellBehavedNumber--jy1hcq-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bwj5H6_7.js";import"./axisSelectors-rztmSPpu.js";import"./d3-scale-Dpwc0BRN.js";import"./index-C-4Z9rOq.js";import"./index-Cod02e9Y.js";import"./renderedTicksSlice-DgYqXOgC.js";import"./index-JVOuHVdP.js";import"./CartesianChart-Bonfnn_6.js";import"./chartDataContext-BgdaUcoV.js";import"./CategoricalChart-DzUyeNOX.js";import"./CartesianAxis-wwQP6TZJ.js";import"./Layer-BL59xEeu.js";import"./Text-CV4rnU1k.js";import"./DOMUtils-DGTFhh_s.js";import"./useId-Cxn74IfF.js";import"./useBackwardsCompatibleTheme-DM-kCCC-.js";import"./Label-fnZYxsAf.js";import"./ZIndexLayer-B-lyDO19.js";import"./types-DmUtaJkc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-BNdpCbfX.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
