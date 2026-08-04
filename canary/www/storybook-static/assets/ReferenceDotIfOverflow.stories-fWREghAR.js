import{R as e}from"./iframe-8y2_-y0l.js";import{R as n}from"./zIndexSlice-D_xG4Od1.js";import{C as s}from"./ComposedChart-k0StXg-x.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Tylt9tzW.js";import{X as f}from"./XAxis-C-STHEWl.js";import{Y as l}from"./YAxis-Cka8X-Di.js";import{R as d}from"./ReferenceDot-BiwBLZiT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-vJw1Gj7e.js";import"./index-DRQy4x13.js";import"./index-BErx7veh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dr9m88pQ.js";import"./isWellBehavedNumber-CdgGUQY1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7Kkv9qM.js";import"./index-DMzHieur.js";import"./index-4aNbOO2K.js";import"./renderedTicksSlice-CEAAcomA.js";import"./axisSelectors-CSK4MjLf.js";import"./d3-scale-U7OEzOLT.js";import"./CartesianChart-CB-6O5b4.js";import"./chartDataContext-CRN46eEy.js";import"./CategoricalChart-CTEs6pXe.js";import"./CartesianAxis-Dxt7VdA8.js";import"./Layer-Bx7fY7lj.js";import"./Text-DSeRyRP0.js";import"./DOMUtils-BWSGK_7w.js";import"./Label-DkE66McM.js";import"./ZIndexLayer-Db2-KFbv.js";import"./types-BqBuCCYn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-D6NJDAxr.js";import"./isBuffer-BG75eWKN.js";import"./Dot-D1wqWj67.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
