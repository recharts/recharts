import{R as e}from"./iframe-BiO1LFJs.js";import{R as n}from"./zIndexSlice-CmtXwCpm.js";import{C as s}from"./ComposedChart-KVP1qpXF.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DDsPSIUw.js";import{X as f}from"./XAxis-BRwCq2oj.js";import{Y as l}from"./YAxis-JFjnQJGm.js";import{R as d}from"./ReferenceDot-B02kBQC9.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CSNtF4Q0.js";import"./index-CQxwz_yZ.js";import"./index-aP1SqDBB.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-gKXUf8-9.js";import"./isWellBehavedNumber-Dxkk48kL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CzSMI4by.js";import"./index-De8uMPL0.js";import"./index-xoOEAtk6.js";import"./renderedTicksSlice-DYPlU4wm.js";import"./axisSelectors-C_E3bYBf.js";import"./d3-scale-B0MWpAf5.js";import"./CartesianChart-IjCJKDDX.js";import"./chartDataContext-Dd2hF0M7.js";import"./CategoricalChart-CD1H2W0S.js";import"./CartesianAxis-Bp6siJa-.js";import"./Layer-H8Y9pDd0.js";import"./Text-BSmuYjPa.js";import"./DOMUtils-DsPsNFwh.js";import"./Label-CZnmw5cu.js";import"./ZIndexLayer-P1dNdSQJ.js";import"./types-Bn2J_DOa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-B5F-cqV_.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
