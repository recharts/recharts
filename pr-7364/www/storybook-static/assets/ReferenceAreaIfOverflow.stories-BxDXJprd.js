import{e}from"./iframe-Cv0qW2ko.js";import{g as s}from"./arrayEqualityCheck-dw2UPZEJ.js";import{C as p}from"./ComposedChart-smS6LLp1.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-DMXVmlBW.js";import{X as l}from"./XAxis-BT82JTqb.js";import{Y as h}from"./YAxis-B0w9h5lM.js";import{R as d}from"./ReferenceArea-D-ltCavm.js";import{R as x}from"./RechartsHookInspector-CkUp2GTc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Do4zKK3Y.js";import"./immer-BQQ92H22.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-dCBWaPWI.js";import"./index-B3dmmAiW.js";import"./hooks-CJSe3LTj.js";import"./axisSelectors-C2eMQvfK.js";import"./d3-scale-Dsb1SLZO.js";import"./zIndexSlice-CHCTzA5s.js";import"./renderedTicksSlice-BOF6sMGg.js";import"./CartesianChart-DqdcaXnI.js";import"./chartDataContext-Cp9nHQ3M.js";import"./CategoricalChart-QPWmKUQ6.js";import"./CartesianAxis-BZyagfMs.js";import"./Layer-CsQNRvLO.js";import"./Text-DZAUevoT.js";import"./DOMUtils-CHQYQ4Y1.js";import"./Label-BMEmaXKp.js";import"./ZIndexLayer-DcdIn6Lk.js";import"./types-D0-2-__S.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-vIAq55MV.js";import"./useAnimationId-CYCjPTVx.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DGomxYSM.js";import"./ChartSizeDimensions-CCGNwFzu.js";import"./OffsetShower-CKkYdDnc.js";import"./PlotAreaShower-DEg1EoJ-.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
