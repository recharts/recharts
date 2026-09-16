import{R as e}from"./iframe-BehVlOkm.js";import{R as p}from"./zIndexSlice-CdmzvBWn.js";import{C as s}from"./ComposedChart-CYwBQNg8.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DbYBL1KB.js";import{X as d}from"./XAxis-CQVzim4L.js";import{Y as l}from"./YAxis-Ds0Z47iT.js";import{R as h}from"./ReferenceArea-4ECAnGSK.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-3ebqMYzS.js";import"./index-nl04o6LQ.js";import"./index-lttadt3D.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-9hqPoiPG.js";import"./isWellBehavedNumber-BwNlQ7J1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0yqzaTB4.js";import"./axisSelectors-DyVT26JG.js";import"./d3-scale-DlStqn9j.js";import"./index-CaKklxJL.js";import"./index-BrZJdMim.js";import"./renderedTicksSlice-dw4JvkQu.js";import"./index-BxFZJssh.js";import"./CartesianChart-DZXsAfAP.js";import"./chartDataContext-COawrzjC.js";import"./CategoricalChart-Bb7rG0O4.js";import"./CartesianAxis-Dh9d1hc7.js";import"./Layer-Drrwe-kT.js";import"./Text-DdbsBRSW.js";import"./DOMUtils-DRfi6Z_9.js";import"./useId-TSoobfid.js";import"./useBackwardsCompatibleTheme-DC96YUQX.js";import"./Label-3Vi5DR-p.js";import"./ZIndexLayer-C8fMsiAz.js";import"./types-CAE_u7CX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-BUmqWu2s.js";import"./useAnimationId-PYM0HN7I.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
