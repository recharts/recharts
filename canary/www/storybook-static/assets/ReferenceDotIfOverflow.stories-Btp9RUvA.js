import{R as e}from"./iframe-Cimk_otj.js";import{R as n}from"./zIndexSlice-CzTLX9Ul.js";import{C as s}from"./ComposedChart-Dtd08tsU.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BuEh-2En.js";import{X as f}from"./XAxis-ByDDt0Jf.js";import{Y as l}from"./YAxis-Bv-UC-Jk.js";import{R as d}from"./ReferenceDot-CJkhzb_2.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-QmRScbE8.js";import"./index-ByALFeZD.js";import"./index-2URJhorS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D_EjTjeu.js";import"./isWellBehavedNumber-CkDKja6q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-qjuL0Rr3.js";import"./index-C-Q8rOGq.js";import"./index-DpbiwnIc.js";import"./axisSelectors-BjpwO9gg.js";import"./d3-scale-BqwCILGz.js";import"./renderedTicksSlice-CI4nPvu-.js";import"./CartesianChart-dDfHuBVf.js";import"./chartDataContext-BpdsFuQG.js";import"./CategoricalChart-B7puZOGH.js";import"./CartesianAxis-GRhBxYn8.js";import"./Layer-CCEBq6CR.js";import"./Text-qgns90rX.js";import"./DOMUtils-702B5NVq.js";import"./Label-DQCQB4o-.js";import"./ZIndexLayer-DKEQN7E1.js";import"./types-BP4gFlyy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BOkXgDyG.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DcWN47E-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
