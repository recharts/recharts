import{R as e}from"./iframe-DbHNynaQ.js";import{R as p}from"./zIndexSlice-seYPsfER.js";import{C as s}from"./ComposedChart-OopH4fQy.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CbQ3J_0K.js";import{X as d}from"./XAxis-IVt4eUDa.js";import{Y as l}from"./YAxis-BKqQ4P5e.js";import{R as h}from"./ReferenceArea-CqagHu69.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BLg26bcw.js";import"./index-CRIpJa5f.js";import"./index-BGBt4hW8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BxCdwk1t.js";import"./isWellBehavedNumber-B8EuhNZV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B8ljz37p.js";import"./axisSelectors-DuRw_22M.js";import"./d3-scale-ChODOj9m.js";import"./index-C6ClRwPj.js";import"./index-C0g1ZRMH.js";import"./renderedTicksSlice-BqyFHlMV.js";import"./index-uIcexEpZ.js";import"./CartesianChart-B7Bt3OSw.js";import"./chartDataContext-EUMNNHrQ.js";import"./CategoricalChart-D9jf8lgu.js";import"./CartesianAxis-BKzDRc2K.js";import"./Layer-McKs3jBR.js";import"./Text-CnT4LfU-.js";import"./DOMUtils-W_YN1JiB.js";import"./useId-JKbSdXmU.js";import"./useBackwardsCompatibleTheme-BrfbM-bw.js";import"./Label-CahCPYhY.js";import"./ZIndexLayer-DLZyPL-y.js";import"./types-Dtr2g2lR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-BiI27SKD.js";import"./useAnimationId-aseG17e8.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
