import{e}from"./iframe-Ct3-EmvQ.js";import{R as n}from"./arrayEqualityCheck-6IWQNVnF.js";import{C as s}from"./ComposedChart-Do--VPQP.js";import{C as p}from"./CartesianGrid-InnXGM-h.js";import{X as c}from"./XAxis-BUqB6c6n.js";import{Y as f}from"./YAxis-FGYgR9Es.js";import{R as l}from"./ReferenceDot-CKRP_AxH.js";import{R as h}from"./RechartsHookInspector-CNP9TKyO.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CLCYDClS.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CgmBIBCZ.js";import"./hooks-PlM3qON0.js";import"./axisSelectors-CMJXMyjC.js";import"./zIndexSlice-DuEz9NCx.js";import"./CartesianChart-DTOqEhzT.js";import"./chartDataContext-mVWnipwc.js";import"./CategoricalChart-DnvqP6Kl.js";import"./CartesianAxis-C_XdVR0m.js";import"./Layer-B8MEBogB.js";import"./Text-x40PBIRp.js";import"./DOMUtils-BkPW2gQA.js";import"./Label-DHx5gLtP.js";import"./ZIndexLayer-BPGi17AG.js";import"./types-_oa_IGij.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-CFdq7_VN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CtF0TcD5.js";import"./ChartSizeDimensions-DR7HU7h8.js";import"./OffsetShower-DsW7pfd1.js";import"./PlotAreaShower-CVlOaRsI.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
