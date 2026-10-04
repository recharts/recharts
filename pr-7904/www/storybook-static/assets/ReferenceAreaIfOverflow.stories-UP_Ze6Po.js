import{R as e}from"./iframe-F-DUQmzx.js";import{R as p}from"./zIndexSlice-B0XgO37h.js";import{C as s}from"./ComposedChart-BciQM212.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CzhRd1sg.js";import{X as d}from"./XAxis-CueAAdhT.js";import{Y as l}from"./YAxis-DMt8A7ih.js";import{R as h}from"./ReferenceArea-C73pSWiS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DpMrsvGt.js";import"./index-CK09KYl6.js";import"./index-1Q76C7eb.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-54NLwGe7.js";import"./isWellBehavedNumber-DyMPBI8-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWiWdscD.js";import"./axisSelectors-DjOC7WMp.js";import"./d3-scale-DSOPMY6A.js";import"./index-CT1gIdoP.js";import"./index-EzdhIVAG.js";import"./renderedTicksSlice-COhWqkvU.js";import"./index-DM4X_zuN.js";import"./CartesianChart-DpAEY0eR.js";import"./chartDataContext-CwixCkf7.js";import"./CategoricalChart-DjizJXcn.js";import"./CartesianAxis-DNFe7OYN.js";import"./Layer-BrEHje-t.js";import"./Text-CORYS8dP.js";import"./DOMUtils-DPU74_Ri.js";import"./useId-CqYFbuGw.js";import"./useBackwardsCompatibleTheme-BfIpGN6N.js";import"./Label-B3Zz6TZ9.js";import"./ZIndexLayer-G7VYzfve.js";import"./types-DvcDlHh9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-Dr6hKtyQ.js";import"./useAnimationId-BjShbhcH.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
