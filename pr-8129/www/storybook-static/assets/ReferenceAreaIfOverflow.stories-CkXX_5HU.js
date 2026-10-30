import{R as e}from"./iframe-UUS7gS8r.js";import{R as p}from"./zIndexSlice-DC8Mmyu0.js";import{C as s}from"./ComposedChart-DyYzfQP5.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BsgU5kr5.js";import{X as d}from"./XAxis-Cy2DOw7O.js";import{Y as l}from"./YAxis-Cy8DgzpK.js";import{R as h}from"./ReferenceArea-CqqfYHAz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CGDCDwfC.js";import"./throttle-CgxVsgWn.js";import"./index-B3bpwb38.js";import"./index-DE7_Lyvr.js";import"./RechartsWrapper-CpoOBNO8.js";import"./axisSelectors-BhKtxZfo.js";import"./polarAxisSelectors-5ho1KqAt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DXJSpI4F.js";import"./index-DlU_WMoq.js";import"./index-BEWOexqM.js";import"./renderedTicksSlice-RI1nm7LM.js";import"./index-w---ZacB.js";import"./CartesianChart-C-KduMFZ.js";import"./ZIndexPortal-DB3Ky3lt.js";import"./CategoricalChart-kgfDSXE6.js";import"./CartesianAxis-CqSL8oIY.js";import"./Layer-CAt7TJL2.js";import"./Text-Dm1h-qE_.js";import"./DOMUtils-dYR_cylo.js";import"./pageBackground-BJvSTYQp.js";import"./ZIndexLayer-CHgyGuEd.js";import"./Label-Cr7fVLhy.js";import"./types-CpFwJGls.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-TYLf-280.js";import"./Rectangle-lDg8xK2m.js";import"./useAnimationId-BqxzW97i.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
