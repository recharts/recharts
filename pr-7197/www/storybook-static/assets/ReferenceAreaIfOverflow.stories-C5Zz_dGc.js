import{e}from"./iframe-Y_RGNuVZ.js";import{R as s}from"./arrayEqualityCheck-Ds7SKd67.js";import{C as p}from"./ComposedChart-CVsBvOUG.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CWpx_2-u.js";import{X as l}from"./XAxis-DOlhxeJx.js";import{Y as h}from"./YAxis-a000WLRS.js";import{R as d}from"./ReferenceArea-BQ_nyhiK.js";import{R as x}from"./RechartsHookInspector-BaDAEILC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CNDGD4av.js";import"./immer-CvMOMmfr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0AKdwcb0.js";import"./index-6zWqcpfE.js";import"./hooks-D-ukaKl5.js";import"./axisSelectors-B08StVJi.js";import"./d3-scale-xMg1wH9a.js";import"./zIndexSlice-Ba0CiZj_.js";import"./renderedTicksSlice-BNYNUWgh.js";import"./CartesianChart-tAchdUZG.js";import"./chartDataContext-DLrhoiOn.js";import"./CategoricalChart-xZ700W9g.js";import"./CartesianAxis-UB1S8E_N.js";import"./Layer-B3aEjvUI.js";import"./Text-2I-RPtH4.js";import"./DOMUtils-Cmq9iEnp.js";import"./Label-C7BzYfbz.js";import"./ZIndexLayer-BkWVTcKj.js";import"./types-DUF6Oaqa.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-Dr0T3_ga.js";import"./useAnimationId-D3O-mVgt.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Bw2HFO2T.js";import"./ChartSizeDimensions-Kjtp9_ay.js";import"./OffsetShower-X1duxMkd.js";import"./PlotAreaShower-C08ktU3-.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
