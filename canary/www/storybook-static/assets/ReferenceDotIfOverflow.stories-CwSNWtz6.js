import{R as e}from"./iframe-DZbjLUQo.js";import{R as m}from"./zIndexSlice-kNjtHJvr.js";import{C as p}from"./ComposedChart-B2VCtYfx.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DMDlODhK.js";import{X as f}from"./XAxis-Cb9he-VA.js";import{Y as l}from"./YAxis-C0N5iwNJ.js";import{R as d}from"./ReferenceDot-CE65jkMZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cj_7MghT.js";import"./index--Cvbr4ei.js";import"./index-s3XojKdv.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-7vFM5A8a.js";import"./isWellBehavedNumber-C3IgPBb_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7gpneaA.js";import"./axisSelectors-SzDg3mS0.js";import"./d3-scale-BGQa_b-A.js";import"./index-Fa7FBVrf.js";import"./index-DZ5C6rYB.js";import"./renderedTicksSlice-Ds3e7SoF.js";import"./index-DGK0wEWr.js";import"./CartesianChart-xRZlZbQd.js";import"./chartDataContext-DvL8FmIv.js";import"./CategoricalChart-D0VTS456.js";import"./CartesianAxis-Bk45HDsq.js";import"./Layer-Dh4rshAh.js";import"./Text-DfE0Fd2l.js";import"./pageBackground-j9oVi7TB.js";import"./useId-uis-dzmY.js";import"./useBackwardsCompatibleTheme-BfjKogZ5.js";import"./Label-QWXq4PsH.js";import"./ZIndexLayer-CKCEdo-g.js";import"./dataEntryStyles-OfgH0EAC.js";import"./types-BIiFdC-Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-DCKsVFDm.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},oe=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,oe as __namedExportsOrder,re as default};
