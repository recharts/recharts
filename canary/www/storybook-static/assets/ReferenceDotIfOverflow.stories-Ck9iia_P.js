import{e}from"./iframe-Dnh1Ryvb.js";import{R as n}from"./arrayEqualityCheck-DCevfetv.js";import{C as s}from"./ComposedChart-BSdoMSkl.js";import{C as p}from"./CartesianGrid-BznzeLYA.js";import{X as c}from"./XAxis-CR1tc-KL.js";import{Y as f}from"./YAxis-BShcefNK.js";import{R as l}from"./ReferenceDot-BetFs5hA.js";import{R as h}from"./RechartsHookInspector-DMji7YUm.js";import{p as d}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Coi4LBhI.js";import"./PolarUtils-Cgm959MD.js";import"./RechartsWrapper-Ch8zJvUN.js";import"./hooks-TRp6kMUA.js";import"./axisSelectors-CwAmoCkz.js";import"./zIndexSlice-BXugI2eB.js";import"./CartesianChart-B2M6TWiT.js";import"./chartDataContext-CqWHnJZ5.js";import"./CategoricalChart-BipcxAVd.js";import"./CartesianAxis-CXvREodt.js";import"./Layer-CG0lsnsl.js";import"./Text-DuqEZ_1u.js";import"./DOMUtils-Bor3dP_R.js";import"./Label-B-RHJFae.js";import"./ZIndexLayer-Bcm3_13n.js";import"./types-NxPc932w.js";import"./Dot-DDKiUYZY.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BBrJvbdK.js";import"./ChartSizeDimensions-DbCZNQtH.js";import"./OffsetShower-DAcHGjow.js";import"./PlotAreaShower-5JxeAXKY.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const V=["IfOverflow"];export{t as IfOverflow,V as __namedExportsOrder,Q as default};
