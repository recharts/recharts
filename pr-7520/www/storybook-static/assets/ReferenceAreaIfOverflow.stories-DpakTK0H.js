import{R as e}from"./iframe-BiO1LFJs.js";import{R as s}from"./zIndexSlice-CmtXwCpm.js";import{C as p}from"./ComposedChart-KVP1qpXF.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DDsPSIUw.js";import{X as d}from"./XAxis-BRwCq2oj.js";import{Y as l}from"./YAxis-JFjnQJGm.js";import{R as h}from"./ReferenceArea-CfqZ1oNm.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CSNtF4Q0.js";import"./index-CQxwz_yZ.js";import"./index-aP1SqDBB.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-gKXUf8-9.js";import"./isWellBehavedNumber-Dxkk48kL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CzSMI4by.js";import"./index-De8uMPL0.js";import"./index-xoOEAtk6.js";import"./renderedTicksSlice-DYPlU4wm.js";import"./axisSelectors-C_E3bYBf.js";import"./d3-scale-B0MWpAf5.js";import"./CartesianChart-IjCJKDDX.js";import"./chartDataContext-Dd2hF0M7.js";import"./CategoricalChart-CD1H2W0S.js";import"./CartesianAxis-Bp6siJa-.js";import"./Layer-H8Y9pDd0.js";import"./Text-BSmuYjPa.js";import"./DOMUtils-DsPsNFwh.js";import"./Label-CZnmw5cu.js";import"./ZIndexLayer-P1dNdSQJ.js";import"./types-Bn2J_DOa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-CTCiy3q0.js";import"./useAnimationId-CvsS4m8J.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
