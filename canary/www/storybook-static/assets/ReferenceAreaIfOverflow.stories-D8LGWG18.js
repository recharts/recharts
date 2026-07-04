import{R as e}from"./iframe-DD3MNlJs.js";import{R as s}from"./zIndexSlice-DsPtdaG-.js";import{C as p}from"./ComposedChart-Ch5rhd-f.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-C9oxbD3w.js";import{X as d}from"./XAxis-C5LFfJlv.js";import{Y as l}from"./YAxis-BU-eH5Uj.js";import{R as h}from"./ReferenceArea-BB-aBVF2.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BsgVdVzc.js";import"./index-Bck27UYR.js";import"./index-a_wokTdP.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bl223uSE.js";import"./isWellBehavedNumber-CNMhuHyW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CCnqh_-x.js";import"./index-DseUKmqi.js";import"./index-D7phJECN.js";import"./renderedTicksSlice-BfcmamU7.js";import"./axisSelectors-BHK7QjqO.js";import"./d3-scale-yWlQ4_Nx.js";import"./CartesianChart-aRdig7-B.js";import"./chartDataContext-B7qXvLbV.js";import"./CategoricalChart-Cq7n2KtT.js";import"./CartesianAxis-BeN5FwRC.js";import"./Layer-BSwpDfMb.js";import"./Text-BWwrC4eC.js";import"./DOMUtils-CKULAiMw.js";import"./Label-CTgAmEuq.js";import"./ZIndexLayer-BIp4crEt.js";import"./types-3SXpu3DM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-BemF6WzX.js";import"./useAnimationId-3wwsxOl9.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
