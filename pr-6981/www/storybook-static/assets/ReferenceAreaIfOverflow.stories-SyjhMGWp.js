import{e}from"./iframe-_ezCe_To.js";import{R as s}from"./arrayEqualityCheck-OWAMtNJc.js";import{C as p}from"./ComposedChart-BZQ3F3Nq.js";import{C as c}from"./CartesianGrid--UGEY6i0.js";import{X as f}from"./XAxis-CcLZPlVE.js";import{Y as l}from"./YAxis-CEv_a0Mr.js";import{R as h}from"./ReferenceArea-BSnCeeKX.js";import{R as d}from"./RechartsHookInspector-D5tzqIDa.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-R_saYEpi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3l68k8X.js";import"./hooks-DGCPXX4G.js";import"./axisSelectors-LsrbDDJC.js";import"./zIndexSlice-Dca2j4f-.js";import"./CartesianChart-C47j_-ZF.js";import"./chartDataContext-Bh5VlY_Q.js";import"./CategoricalChart-BLLc755m.js";import"./CartesianAxis-DGvPXtLW.js";import"./Layer-BtA8wuUB.js";import"./Text-CYvn3qP_.js";import"./DOMUtils-CBHTypWU.js";import"./Label-CHFqoGJt.js";import"./ZIndexLayer-CWThG05g.js";import"./types-DgqTh4_l.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-citx9Y_h.js";import"./useAnimationId-BzKwp2Yk.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DsSUOPyu.js";import"./ChartSizeDimensions-BekARe9N.js";import"./OffsetShower-DpjGgrQ9.js";import"./PlotAreaShower-OcEMvBwg.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
