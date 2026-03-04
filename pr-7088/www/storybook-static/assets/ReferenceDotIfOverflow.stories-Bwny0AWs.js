import{e}from"./iframe-BDLVz6Jf.js";import{R as n}from"./arrayEqualityCheck-CUwHcVyI.js";import{C as s}from"./ComposedChart-B8vrvgyV.js";import{C as p}from"./CartesianGrid-C_vcoOOS.js";import{X as c}from"./XAxis-rGGZujHk.js";import{Y as f}from"./YAxis-DhrJBh1G.js";import{R as l}from"./ReferenceDot-CRngNwcQ.js";import{R as h}from"./RechartsHookInspector-DdlV-82E.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CAE8a2S7.js";import"./immer-D7ppHI2d.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BNGXTKCd.js";import"./index-B5IfmkK5.js";import"./hooks-Ko0NVQx4.js";import"./axisSelectors-BoSmHer2.js";import"./d3-scale-DrvOhfRi.js";import"./zIndexSlice-Dba-j24Y.js";import"./renderedTicksSlice-DzYlWn1c.js";import"./CartesianChart-DHmZ3TGF.js";import"./chartDataContext-DTy_zcLY.js";import"./CategoricalChart-D0nQYz7Q.js";import"./CartesianAxis-DpZWUA10.js";import"./Layer-E90Uxi_N.js";import"./Text-Dnj_UFsP.js";import"./DOMUtils-C38zHxQe.js";import"./Label-BpAHaxyT.js";import"./ZIndexLayer-CeMtlwqL.js";import"./types-eu_lG70M.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-ed0ZAtVZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B1g-GKPY.js";import"./ChartSizeDimensions-Cz26FwCM.js";import"./OffsetShower-Dsw4B39y.js";import"./PlotAreaShower-BsznV7xN.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
