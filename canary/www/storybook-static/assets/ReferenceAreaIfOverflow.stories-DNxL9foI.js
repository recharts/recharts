import{e}from"./iframe-uVZDwAjj.js";import{R as s}from"./arrayEqualityCheck-BVLp_fP4.js";import{C as p}from"./ComposedChart-C98EWxS3.js";import{C as c}from"./CartesianGrid-BRZTTi6Z.js";import{X as f}from"./XAxis-DDi_F3ms.js";import{Y as l}from"./YAxis-2LEHyJIA.js";import{R as h}from"./ReferenceArea-Brx_GW5S.js";import{R as d}from"./RechartsHookInspector-B8IZQaM2.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-LNwsWh_o.js";import"./immer-ChwPqFH_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-v0y6A39c.js";import"./index-D4nlSVrI.js";import"./hooks-DSaqLgKR.js";import"./axisSelectors-BRBRXOBA.js";import"./d3-scale-0GkopIXO.js";import"./zIndexSlice-CLyAXc3q.js";import"./renderedTicksSlice-DRUH7kK9.js";import"./CartesianChart-BY3Mtf6I.js";import"./chartDataContext-qRr_iUlh.js";import"./CategoricalChart-BqmfIvkg.js";import"./CartesianAxis-D-nGvafv.js";import"./Layer-kSeehgUS.js";import"./Text-BQnpW6GD.js";import"./DOMUtils-Dnhzy72R.js";import"./Label-PDV3rnUf.js";import"./ZIndexLayer-B6kXppYb.js";import"./types-B-Xhkkhb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-GgKpEWLk.js";import"./useAnimationId-CLB64h0U.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Bf-UOCze.js";import"./ChartSizeDimensions-BS0bLTe8.js";import"./OffsetShower-8U00XdUa.js";import"./PlotAreaShower-CDaLw8Um.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
