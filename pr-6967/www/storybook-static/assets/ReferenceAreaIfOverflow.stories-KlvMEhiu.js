import{e}from"./iframe-C-p_RB-q.js";import{R as s}from"./arrayEqualityCheck-B-MvrmN7.js";import{C as p}from"./ComposedChart-Bt7ixjRo.js";import{C as c}from"./CartesianGrid-BwIpVtPi.js";import{X as f}from"./XAxis-C08WqI39.js";import{Y as l}from"./YAxis-D8H0bjJG.js";import{R as h}from"./ReferenceArea-BvaqX49g.js";import{R as d}from"./RechartsHookInspector-A7vZopTv.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BfiJbh6P.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DIdR0t3A.js";import"./hooks-DG7RHIxl.js";import"./axisSelectors-P0AOwwEl.js";import"./zIndexSlice-5lbCpu3W.js";import"./CartesianChart-DeBYB_B4.js";import"./chartDataContext-CVzSSW0I.js";import"./CategoricalChart-yUclNHQf.js";import"./CartesianAxis-B6zbzI9s.js";import"./Layer-C7f6suDu.js";import"./Text-DfkyYgyy.js";import"./DOMUtils-BepXqo9m.js";import"./Label-C5MK-SLm.js";import"./ZIndexLayer-DCWgaX-H.js";import"./types-GK0667Eh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-C3AEn-NX.js";import"./useAnimationId-DU1HvgwT.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-wD3bNdwk.js";import"./ChartSizeDimensions-CiN-UjJt.js";import"./OffsetShower-zEoXuM_S.js";import"./PlotAreaShower-Di2aU-hi.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
