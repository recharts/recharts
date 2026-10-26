import{R as e}from"./iframe-DcaMyu57.js";import{R as p}from"./zIndexSlice-D63TC5wE.js";import{C as s}from"./ComposedChart-Ccm1rBcn.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-WkOT9y7O.js";import{X as d}from"./XAxis-CpQfhxVu.js";import{Y as l}from"./YAxis-Ctjpx2tI.js";import{R as h}from"./ReferenceArea-B6KatmQw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BIhtVjr1.js";import"./throttle-DTKuFpeU.js";import"./index-LUaWadAh.js";import"./index-C1eYPsJe.js";import"./RechartsWrapper-s9QE5BnJ.js";import"./axisSelectors-DeMGjxl4.js";import"./polarAxisSelectors-C8YroQFB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CtXzbLe9.js";import"./index-DhjSPGN6.js";import"./index-CGLqJivQ.js";import"./renderedTicksSlice-B7oGrXiB.js";import"./index-CZJeyZvE.js";import"./CartesianChart-Doy7puzJ.js";import"./chartDataContext-Cvuxfrl6.js";import"./CategoricalChart-Oo-gpddM.js";import"./CartesianAxis-CeZT8ZwV.js";import"./Layer-Buw-ejS2.js";import"./Text-BDVAjJGp.js";import"./pageBackground-DJiDI2js.js";import"./useId-2CjiTV-a.js";import"./ZIndexLayer-BAtegXWd.js";import"./Label-CNqQQqDH.js";import"./dataEntryStyles-Dvqex9ju.js";import"./types-CezfUA9a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-BG3wMj9I.js";import"./useAnimationId-CY8QIDMT.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
