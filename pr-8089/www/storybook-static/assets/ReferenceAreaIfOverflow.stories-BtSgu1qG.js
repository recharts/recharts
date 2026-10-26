import{R as e}from"./iframe-Dofq_iQ-.js";import{R as p}from"./zIndexSlice-D1WV8xVK.js";import{C as s}from"./ComposedChart-CsQfk666.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DoUIhGuN.js";import{X as d}from"./XAxis-BAcN42ay.js";import{Y as l}from"./YAxis-CNyofDE0.js";import{R as h}from"./ReferenceArea-DD12zdYq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Z787kyQ6.js";import"./throttle-DKmFrtnD.js";import"./index-BtkEod5i.js";import"./index-37WXqDMb.js";import"./RechartsWrapper-CETzgtk4.js";import"./axisSelectors-CqE-voO2.js";import"./polarAxisSelectors-CmsaI3Cf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bd78fIJ9.js";import"./index-qZlNdlLA.js";import"./index-Bsj9Z6Q4.js";import"./renderedTicksSlice-DEI5ubGX.js";import"./index-CYB006td.js";import"./CartesianChart-D36QcNNB.js";import"./chartDataContext-B2bZJU-K.js";import"./CategoricalChart-DTaKLLfl.js";import"./CartesianAxis-BkbAUDQ6.js";import"./Layer-DmIM376f.js";import"./Text-DvhWb0Oj.js";import"./pageBackground-jkmkuUi_.js";import"./useId-Dit2o_XD.js";import"./ZIndexLayer-CuuRUF_K.js";import"./Label-hlz0weoU.js";import"./dataEntryStyles-BZNZhw1g.js";import"./types-B7VCcYuj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-ywvlgolw.js";import"./useAnimationId-CwELIUBQ.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
