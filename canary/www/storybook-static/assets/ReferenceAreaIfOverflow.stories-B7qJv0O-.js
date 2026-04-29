import{e}from"./iframe-CELk_iHp.js";import{R as s}from"./arrayEqualityCheck-Jv-_2dlt.js";import{C as p}from"./ComposedChart-DXLKPhmj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CPcwhuKo.js";import{X as l}from"./XAxis-Dkm5sOcL.js";import{Y as h}from"./YAxis-PBKVxaw1.js";import{R as d}from"./ReferenceArea-BxJ4CxOw.js";import{R as x}from"./RechartsHookInspector-zC8sO4Uu.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DGpqOJqH.js";import"./immer-CNryykoH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-iaOd2vsR.js";import"./index-C7-Jna_X.js";import"./hooks-nYvhXGgN.js";import"./axisSelectors-B_B8N_DF.js";import"./d3-scale-CkPD6mk7.js";import"./zIndexSlice-BKa9iYJo.js";import"./renderedTicksSlice-fDAVE1e2.js";import"./CartesianChart-D2sMjbuw.js";import"./chartDataContext-BGxyOe8E.js";import"./CategoricalChart-oFZY99PF.js";import"./CartesianAxis-Bdrxnh8Y.js";import"./Layer--Pc4EXaW.js";import"./Text-Bw3NjmwC.js";import"./DOMUtils-D-Am5_eq.js";import"./Label-Bd9YpboY.js";import"./ZIndexLayer-CCDRMMaH.js";import"./types-CyX-tNTq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-CE1dlDuT.js";import"./useAnimationId-1GRLd7ca.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CuVYK_Ov.js";import"./ChartSizeDimensions-M-hHKi9p.js";import"./OffsetShower-ePPaic-x.js";import"./PlotAreaShower-D-7S5_Wy.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
