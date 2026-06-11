import{R as e}from"./iframe-DBxFP3uX.js";import{R as s}from"./zIndexSlice-B_9s4KsU.js";import{C as p}from"./ComposedChart-CWD6KhhR.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-sOQxN6gG.js";import{X as d}from"./XAxis-CQTPr47R.js";import{Y as l}from"./YAxis-BneRoowy.js";import{R as h}from"./ReferenceArea-CPfLtJE7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DjG9xqx-.js";import"./index-DgF-9ML2.js";import"./index-DJo0-J4-.js";import"./get-CN0u3twK.js";import"./resolveDefaultProps-DCaDIMSr.js";import"./isWellBehavedNumber-BiB40tPr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DEp3al8N.js";import"./index-BcBtkybK.js";import"./index-CNd0a_qD.js";import"./renderedTicksSlice-BowbWmvp.js";import"./axisSelectors-B_9j14vR.js";import"./d3-scale-B06022wF.js";import"./string-B6fdYHAA.js";import"./CartesianChart-GxlalsIE.js";import"./chartDataContext-CZK58LYI.js";import"./CategoricalChart-CKuMbTEb.js";import"./CartesianAxis-tZocWrkt.js";import"./Layer-Buso2Ccs.js";import"./Text-CmyuUjWM.js";import"./DOMUtils-CU_Od2Bc.js";import"./Label-Dhv9vMg4.js";import"./ZIndexLayer-DBGeCZYh.js";import"./types-B2FPYU3d.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-BPEfWSXH.js";import"./useAnimationId-54G3nUfQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
