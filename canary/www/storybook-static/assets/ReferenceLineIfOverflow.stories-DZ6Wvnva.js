import{R as e}from"./iframe-Cr4SLAPG.js";import{R as a}from"./zIndexSlice-DyLLhom_.js";import{C as p}from"./ComposedChart-fx4m_TFy.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Q3haPPu7.js";import{X as f}from"./XAxis-B99-G5ow.js";import{Y as l}from"./YAxis-CY62iJg-.js";import{L as d}from"./Line-DD5o7CZ0.js";import{R as h}from"./ReferenceLine-4J8TbIWQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CAE-kTw-.js";import"./throttle-m67LhZgN.js";import"./index-BnL3zeBq.js";import"./index-BdbAlbMj.js";import"./RechartsWrapper-BMMPlSoi.js";import"./axisSelectors-DrKqMaOQ.js";import"./polarAxisSelectors-Cu_1wigM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-WAvM56kv.js";import"./index-kvmeuQQ0.js";import"./index-COeoIdkq.js";import"./renderedTicksSlice-tk5Ux2sx.js";import"./index-CjAQIOvx.js";import"./fillDefinitions-DOSp8ZTg.js";import"./CartesianChart-DLnqZjzO.js";import"./chartDataContext-Cv9hYa4A.js";import"./CategoricalChart-DQSQjBRM.js";import"./CartesianAxis-Ds5qTBHM.js";import"./Layer-CWQ0f2zH.js";import"./Text-BBE8dgLe.js";import"./ZIndexLayer-B4fE1k7j.js";import"./Label-iIhWQC5W.js";import"./types-B6oZtPsa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-D9aaECN7.js";import"./Curve-DJrcdmOM.js";import"./step-B4BPIBfx.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-IfVv-8UK.js";import"./ActivePoints-DnQ4FUYw.js";import"./Dot-BK-ZVoey.js";import"./activeStyles-aUydRVRE.js";import"./useAnimationId-kAVaPV6O.js";import"./Symbols-B0X99Sro.js";import"./symbol-HG06wgQN.js";import"./ErrorBarContext-6e7pSH1e.js";import"./SetGraphicalItem-C9um0bAO.js";import"./ActiveShapeUtils-Mg3OqtQ-.js";import"./useEffectiveDataKey-CUJehQI3.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ve as __namedExportsOrder,we as default};
