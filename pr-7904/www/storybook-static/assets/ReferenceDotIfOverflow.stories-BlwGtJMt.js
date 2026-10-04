import{R as e}from"./iframe-F-DUQmzx.js";import{R as m}from"./zIndexSlice-B0XgO37h.js";import{C as p}from"./ComposedChart-BciQM212.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CzhRd1sg.js";import{X as f}from"./XAxis-CueAAdhT.js";import{Y as l}from"./YAxis-DMt8A7ih.js";import{R as d}from"./ReferenceDot-BjlFjPqT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DpMrsvGt.js";import"./index-CK09KYl6.js";import"./index-1Q76C7eb.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-54NLwGe7.js";import"./isWellBehavedNumber-DyMPBI8-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWiWdscD.js";import"./axisSelectors-DjOC7WMp.js";import"./d3-scale-DSOPMY6A.js";import"./index-CT1gIdoP.js";import"./index-EzdhIVAG.js";import"./renderedTicksSlice-COhWqkvU.js";import"./index-DM4X_zuN.js";import"./CartesianChart-DpAEY0eR.js";import"./chartDataContext-CwixCkf7.js";import"./CategoricalChart-DjizJXcn.js";import"./CartesianAxis-DNFe7OYN.js";import"./Layer-BrEHje-t.js";import"./Text-CORYS8dP.js";import"./DOMUtils-DPU74_Ri.js";import"./useId-CqYFbuGw.js";import"./useBackwardsCompatibleTheme-BfIpGN6N.js";import"./Label-B3Zz6TZ9.js";import"./ZIndexLayer-G7VYzfve.js";import"./types-DvcDlHh9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DGu6gs3Q.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
