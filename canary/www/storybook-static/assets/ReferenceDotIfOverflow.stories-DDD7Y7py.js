import{R as e}from"./iframe-GNxtioUR.js";import{R as n}from"./zIndexSlice-D4haQxNn.js";import{C as s}from"./ComposedChart-Dx410X4q.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Wlk7YG0e.js";import{X as f}from"./XAxis-5j17aH8X.js";import{Y as l}from"./YAxis-CbYUO1fa.js";import{R as d}from"./ReferenceDot-92H_ezab.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Du4Eduzv.js";import"./index-CN1r47eQ.js";import"./index-DT7OqoJJ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D5DCSoJx.js";import"./isWellBehavedNumber-B1loF3DE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-5Lqdjjzz.js";import"./index-CV7IGYk1.js";import"./index-BJVo2ffI.js";import"./axisSelectors-CsnJkuOW.js";import"./d3-scale-CsslalFd.js";import"./renderedTicksSlice-BNEcUsku.js";import"./CartesianChart-B0x1kr2K.js";import"./chartDataContext-DEGQ_Aoe.js";import"./CategoricalChart-m_Ids5fk.js";import"./CartesianAxis-NbOP1W-o.js";import"./Layer-DR6S9zl-.js";import"./Text-C79V-s10.js";import"./DOMUtils-UzZI-9_5.js";import"./RechartsThemeContext-BZnANilh.js";import"./Label-C7cFT6-M.js";import"./ZIndexLayer-D7CqA8Uv.js";import"./types-omsl4D4O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-BaVZ6R7S.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
