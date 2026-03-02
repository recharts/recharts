import{e}from"./iframe-YHIi0zNq.js";import{R as s}from"./arrayEqualityCheck-CiMVM-SL.js";import{C as p}from"./ComposedChart-Dbe-cyVJ.js";import{C as c}from"./CartesianGrid-By76E-K9.js";import{X as f}from"./XAxis-kqqXeMbl.js";import{Y as l}from"./YAxis-EBaaYeoG.js";import{R as h}from"./ReferenceArea-Dq5ilqmO.js";import{R as d}from"./RechartsHookInspector-Cdc_RxXj.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BuJwUxEP.js";import"./immer-D_GJadju.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-o-AfycQs.js";import"./index-u4istH96.js";import"./hooks-CFdjgn4I.js";import"./axisSelectors-87SRvgUu.js";import"./d3-scale-DMZnVruV.js";import"./zIndexSlice-DeqvswTX.js";import"./renderedTicksSlice-DxRvDe1C.js";import"./CartesianChart-Bvl8nfic.js";import"./chartDataContext-BapHi4AL.js";import"./CategoricalChart-BRn4vti9.js";import"./CartesianAxis-DCRdhe3Y.js";import"./Layer-xP0kyya2.js";import"./Text-BfyXYVHl.js";import"./DOMUtils-B22dZqv4.js";import"./Label-DOPySTsx.js";import"./ZIndexLayer-ntDhn9GI.js";import"./types-D6q9wb44.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BtRVLgVP.js";import"./useAnimationId-ZghgqyXB.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Cat5Cyt-.js";import"./ChartSizeDimensions-CGxCw1zc.js";import"./OffsetShower-450EX_p_.js";import"./PlotAreaShower-dE-HeGlr.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
