import{R as e}from"./iframe-Ca1UrYHb.js";import{R as m}from"./zIndexSlice-DkJuOKqH.js";import{C as s}from"./ComposedChart-BQRHe03d.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DzzAYDlT.js";import{X as f}from"./XAxis-fyR759Im.js";import{Y as l}from"./YAxis--Ne3LUdW.js";import{R as d}from"./ReferenceDot-DvF-neqJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C7Zn3GIw.js";import"./throttle-CQ25M_Sr.js";import"./index-DyyWsaDx.js";import"./index-BL3iJc3a.js";import"./RechartsWrapper-DpgD45ps.js";import"./axisSelectors-Dxz5Fo81.js";import"./polarAxisSelectors-BJjdmelv.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BSpvxsSq.js";import"./index-CGbgMVTZ.js";import"./index-CeJ-_gAW.js";import"./renderedTicksSlice-C6Llf2gZ.js";import"./index-CXh6mJLx.js";import"./fillDefinitions-CGDilicc.js";import"./CartesianChart-Ahhse01G.js";import"./chartDataContext-Nvu6nj5u.js";import"./CategoricalChart-Cbl_4Ofw.js";import"./CartesianAxis-C2LROGDs.js";import"./Layer-YpjF2SE4.js";import"./Text-CG61ars6.js";import"./ZIndexLayer-84bYvzQv.js";import"./Label-Df_VmgSa.js";import"./types-DxtdvItD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-7od_5Z4B.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
