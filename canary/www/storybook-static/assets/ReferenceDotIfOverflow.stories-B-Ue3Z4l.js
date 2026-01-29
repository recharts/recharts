import{e}from"./iframe-BlWijLqW.js";import{R as n}from"./arrayEqualityCheck-wpbGPGp4.js";import{C as s}from"./ComposedChart-Bvywwt59.js";import{C as p}from"./CartesianGrid-DlT4qS99.js";import{X as c}from"./XAxis-OLUbmSHc.js";import{Y as f}from"./YAxis-DCz5GEme.js";import{R as l}from"./ReferenceDot-jYzWlyTr.js";import{R as h}from"./RechartsHookInspector-DmBYfqJt.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BXixkRdf.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DVoFofdD.js";import"./hooks-Bq9gEA3Y.js";import"./axisSelectors-BcyrPMqb.js";import"./zIndexSlice-CAH7mPZ1.js";import"./CartesianChart-B-NzXiwJ.js";import"./chartDataContext-Bi-RwErn.js";import"./CategoricalChart-yeAYRiqJ.js";import"./CartesianAxis-Bh0UbraM.js";import"./Layer-3MYXWHxJ.js";import"./Text-zHguMFUU.js";import"./DOMUtils-DB8eToSF.js";import"./Label-Df_5RPeD.js";import"./ZIndexLayer-CJd84X-g.js";import"./types-CMl5R0ed.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-D4efsgOa.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BlR-9DJp.js";import"./ChartSizeDimensions-CSi05Yh4.js";import"./OffsetShower-C6MwKWid.js";import"./PlotAreaShower-BWRdXOpl.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
