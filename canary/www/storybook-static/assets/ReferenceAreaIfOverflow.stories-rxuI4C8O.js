import{e}from"./iframe-D_8UNJGJ.js";import{R as s}from"./arrayEqualityCheck-DLi0Ag40.js";import{C as p}from"./ComposedChart-D_1Rjk4a.js";import{C as c}from"./CartesianGrid-DoYIeoEt.js";import{X as f}from"./XAxis-nL349YCp.js";import{Y as l}from"./YAxis-UxrLaYW9.js";import{R as h}from"./ReferenceArea-DAWcaLiA.js";import{R as d}from"./RechartsHookInspector-DqWSEPyK.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B5V57fEA.js";import"./immer-DgVi67O2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CeUnYUBi.js";import"./index-CjxbrGoj.js";import"./hooks-BZrhZ7vg.js";import"./axisSelectors-CS_KlM3N.js";import"./d3-scale-DRFIPlHa.js";import"./zIndexSlice-B5sMKRff.js";import"./renderedTicksSlice-DMlkCP1f.js";import"./CartesianChart-6BHGgpGM.js";import"./chartDataContext-ClhoRpui.js";import"./CategoricalChart-DcPua93T.js";import"./CartesianAxis-CmGsQYnB.js";import"./Layer-CSFY2JoB.js";import"./Text-BpbKY-ox.js";import"./DOMUtils-Dbz4rk_T.js";import"./Label-fZtmoCeO.js";import"./ZIndexLayer-B2K1T5O_.js";import"./types-DAVY4nYI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-CviW58v0.js";import"./useAnimationId-BTJ6QCKz.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CFdITy7w.js";import"./ChartSizeDimensions-CZ_yFPOk.js";import"./OffsetShower-CkWYNF-8.js";import"./PlotAreaShower-iC8rErQ_.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
