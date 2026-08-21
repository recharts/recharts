import{R as e}from"./iframe-CH2RirRG.js";import{R as p}from"./zIndexSlice-EPNgUqra.js";import{C as s}from"./ComposedChart-B-gNv-fY.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-r7seJm94.js";import{X as d}from"./XAxis-CqEbzlS_.js";import{Y as l}from"./YAxis-8oK4TXT2.js";import{R as h}from"./ReferenceArea-412AVvtS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-wiaHzbqm.js";import"./index-CDgfCI1k.js";import"./index-BGjYA4Me.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DE_sbK1H.js";import"./isWellBehavedNumber-DS-LXYSK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjB8dZxg.js";import"./index-CO5DxbW1.js";import"./index-DCEj_OWD.js";import"./axisSelectors-CkKizBw1.js";import"./d3-scale-_MlV87vT.js";import"./renderedTicksSlice-p29IB_-G.js";import"./CartesianChart-RyXtRN5Z.js";import"./chartDataContext-Bjvolui9.js";import"./CategoricalChart-DISzDu-A.js";import"./CartesianAxis-Bp_3tslY.js";import"./Layer-DUd8J6bA.js";import"./Text-D0Ni_nG3.js";import"./DOMUtils-CjXikq8H.js";import"./useId-rSQwkCR7.js";import"./useBackwardsCompatibleTheme-B43Y9MW-.js";import"./Label-JTJpVxOG.js";import"./ZIndexLayer-DaLmvsT2.js";import"./types-BWjPFUtA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-Ddm54g-k.js";import"./useAnimationId-vcXUsSrn.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
