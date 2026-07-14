import{R as e}from"./iframe-w7qCbIlq.js";import{R as s}from"./zIndexSlice-BtZQ5xih.js";import{C as p}from"./ComposedChart-DOApFncK.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-62KjYK99.js";import{X as d}from"./XAxis-8n0ix597.js";import{Y as l}from"./YAxis-CwFi80nS.js";import{R as h}from"./ReferenceArea-BfZIZo-d.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-KQ-EWGZj.js";import"./index-BmGe_VQx.js";import"./index-BBIhqOXx.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BXXLLFZs.js";import"./isWellBehavedNumber-BLtoVg4o.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJCCLnSy.js";import"./index-Ddi-T72V.js";import"./index-C1u3rFhR.js";import"./renderedTicksSlice-TeAVrZEF.js";import"./axisSelectors-DudJ2V7b.js";import"./d3-scale-DHyfTYAT.js";import"./CartesianChart-BbPcQF_v.js";import"./chartDataContext-d_tiIYhw.js";import"./CategoricalChart-C5vKFxAI.js";import"./CartesianAxis-CT_UcdRd.js";import"./Layer-C8MJqdtw.js";import"./Text-Bii4Z9SU.js";import"./DOMUtils-BHtgPnwB.js";import"./Label-Bwto3iA9.js";import"./ZIndexLayer-BipLpo9Z.js";import"./types-0ytIGtz9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-BBGlMB0K.js";import"./useAnimationId-BLBs87N6.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
