import{R as e}from"./iframe-6K1b1-eT.js";import{R as s}from"./zIndexSlice-B780JRIC.js";import{C as p}from"./ComposedChart-B8GwPjuZ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BKiU5nyq.js";import{X as d}from"./XAxis-ClhB_79n.js";import{Y as l}from"./YAxis-_GZI3dYv.js";import{R as h}from"./ReferenceArea-CV9ddj7V.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BYoWz9Yk.js";import"./throttle-CBl9h_oH.js";import"./index-Crbtmu02.js";import"./index-DtOoPLNq.js";import"./RechartsWrapper-DqVTXzd2.js";import"./axisSelectors-C-rSKBiJ.js";import"./polarAxisSelectors-DAIX196M.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-vHo5DJBH.js";import"./index-fwe0fbm7.js";import"./index-C8-Ylk7e.js";import"./renderedTicksSlice-DsuMbTii.js";import"./index-EJ_yhvZY.js";import"./CartesianChart-Cvo7HdWy.js";import"./ZIndexPortal-wkZ6Ra_J.js";import"./CategoricalChart-CqHWKoUt.js";import"./CartesianAxis-D2Tqoy9W.js";import"./Layer-CJqJ-HtM.js";import"./Text-CdUlZS4M.js";import"./pageBackground-j7FwZ6MF.js";import"./ZIndexLayer-BCfq-6yJ.js";import"./Label-BWjzWDJx.js";import"./types-O5YDoWOS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-BNPdRBQn.js";import"./useAnimationId-DP-ttVRU.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
