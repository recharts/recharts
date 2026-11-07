import{R as e}from"./iframe-CAwz8uN7.js";import{R as m}from"./zIndexSlice-TMbeSoaw.js";import{C as s}from"./ComposedChart-DEKm5Gk_.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CfmKA59t.js";import{X as f}from"./XAxis-DaHA7aw5.js";import{Y as l}from"./YAxis-CXb4tru9.js";import{R as d}from"./ReferenceDot-Kvg7niUY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DMIb7SBs.js";import"./throttle-DghoigHv.js";import"./index-DgXSxR_f.js";import"./index-Bzw5OmaH.js";import"./RechartsWrapper-Dxg_wm9v.js";import"./axisSelectors-CpwbL3Oz.js";import"./polarAxisSelectors-Cc_qYj6o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CIIJy1t9.js";import"./index-Bn6lI9jh.js";import"./index-DXtXm7rl.js";import"./renderedTicksSlice-GqHDAcQt.js";import"./index-D4t20APB.js";import"./fillDefinitions-CB-_Qdnq.js";import"./CartesianChart-Cfm778D2.js";import"./chartDataContext-BqdYE3y4.js";import"./CategoricalChart-BV8BHimy.js";import"./CartesianAxis-VsizMTED.js";import"./Layer-LEH2Le6G.js";import"./Text-B8IGolEi.js";import"./ZIndexLayer-BXCDLr1d.js";import"./Label-CdS579rS.js";import"./types-BWdHpl7S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-CLdEzait.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
