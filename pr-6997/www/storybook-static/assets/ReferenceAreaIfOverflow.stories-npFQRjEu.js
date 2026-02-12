import{e}from"./iframe-D4XW71qE.js";import{R as s}from"./arrayEqualityCheck-Ct0H2J7-.js";import{C as p}from"./ComposedChart-F9p-LUMw.js";import{C as c}from"./CartesianGrid-7yO0-lso.js";import{X as f}from"./XAxis-B7adFIe7.js";import{Y as l}from"./YAxis-BzXwxAD2.js";import{R as h}from"./ReferenceArea-BTYz4Wmf.js";import{R as d}from"./RechartsHookInspector-9aXKf5pi.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BtLFSBo9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0DDkfJP.js";import"./hooks-B5BtkbT7.js";import"./axisSelectors-DIlwx-_h.js";import"./zIndexSlice-DRfQm_zr.js";import"./CartesianChart-DkcK7QB-.js";import"./chartDataContext-6vD_4ehm.js";import"./CategoricalChart-CiMFuwJC.js";import"./CartesianAxis-8-c0TmU5.js";import"./Layer-_WbjJ9WY.js";import"./Text-B9RQv17s.js";import"./DOMUtils-CsdAV10D.js";import"./Label-B64y4UV8.js";import"./ZIndexLayer-uUtlF8oG.js";import"./types-CVucT5VX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-CSkUH-X3.js";import"./useAnimationId-BXlO72m4.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-r8aHoL1L.js";import"./ChartSizeDimensions-YAYg9XQP.js";import"./OffsetShower-D_rHwW7U.js";import"./PlotAreaShower-BEJsFdI1.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
