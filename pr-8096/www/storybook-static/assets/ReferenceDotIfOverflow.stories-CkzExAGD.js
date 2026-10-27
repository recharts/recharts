import{R as e}from"./iframe-i00IWHKS.js";import{R as m}from"./zIndexSlice-CSTmF3GT.js";import{C as s}from"./ComposedChart-CYmWoyp6.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DbvmYexX.js";import{X as f}from"./XAxis-BA_nHJl6.js";import{Y as l}from"./YAxis-GmTTpsne.js";import{R as d}from"./ReferenceDot-DVTO31aA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BglOfK6k.js";import"./throttle-VVsSQFBk.js";import"./index-CbwirX63.js";import"./index-CPuGrPsk.js";import"./RechartsWrapper-HLZ5nOEz.js";import"./axisSelectors-CrzJ0No2.js";import"./polarAxisSelectors-krKyM9nF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-fdx5emX3.js";import"./index-Cdxh422T.js";import"./index-CocutCkO.js";import"./renderedTicksSlice-DZPzUM4n.js";import"./index-Cpb1euZl.js";import"./CartesianChart-cAT52TQ5.js";import"./ZIndexPortal-DfOIGQM0.js";import"./CategoricalChart-CvwnoS-7.js";import"./CartesianAxis-EZZmQ9Qc.js";import"./Layer-DmbMEBZx.js";import"./Text-CB-MiyEA.js";import"./pageBackground-e_M9BLsj.js";import"./ZIndexLayer-C49fDhwr.js";import"./Label-C4qEKDUL.js";import"./types-BWYuSzJG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-kJUEeAuC.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
