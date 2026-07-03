import{R as e}from"./iframe-Bqhaiwq8.js";import{R as s}from"./zIndexSlice-BJS-a__d.js";import{C as p}from"./ComposedChart-oTFXmOZl.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BKoGTtrl.js";import{X as d}from"./XAxis-Du5noYHq.js";import{Y as l}from"./YAxis-BtCExx2a.js";import{R as h}from"./ReferenceArea-BHNJYLnd.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C_LSyirk.js";import"./index-CENQUa5y.js";import"./index-ChBrJC7P.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bz_Hg9tX.js";import"./isWellBehavedNumber-Be3mi6aN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D0HX42ff.js";import"./index-QuJ2DhnT.js";import"./index-DxkzSUWz.js";import"./renderedTicksSlice-dCTNHtgX.js";import"./axisSelectors-Dd8okoki.js";import"./d3-scale-i5sn4jpY.js";import"./CartesianChart-DUun358R.js";import"./chartDataContext-BxVBYRL6.js";import"./CategoricalChart-BqinH4KG.js";import"./CartesianAxis-217VZgzf.js";import"./Layer-Co0F7rtj.js";import"./Text-BtH8DQvC.js";import"./DOMUtils-BpHmJx8-.js";import"./Label-D7swILSN.js";import"./ZIndexLayer-CIZ0RaUe.js";import"./types-OmV-cVYy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-BIkqYwDS.js";import"./useAnimationId-D0jk17bx.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
