import{R as e}from"./iframe-DX1vtGMO.js";import{R as n}from"./zIndexSlice-CBHqXPZu.js";import{C as s}from"./ComposedChart-DrTtv4BR.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-339ME1w1.js";import{X as f}from"./XAxis-DLegRWnR.js";import{Y as l}from"./YAxis-oQ2494Ky.js";import{R as d}from"./ReferenceDot-CJGpzsye.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CyjJLdoY.js";import"./index-CFOnPmwL.js";import"./index-BhJxPluG.js";import"./get-Cgjumwe9.js";import"./resolveDefaultProps-Evu9rMXK.js";import"./isWellBehavedNumber-BhjTCj8F.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BbcqKMmx.js";import"./index-CfVXt8f5.js";import"./index-CNqf-i4f.js";import"./renderedTicksSlice-DGFQGuI_.js";import"./axisSelectors-CD5YpxWK.js";import"./d3-scale-D456QfQQ.js";import"./CartesianChart-mvs2MZhK.js";import"./chartDataContext-DPGZ1R2s.js";import"./CategoricalChart-DtbdNaQa.js";import"./CartesianAxis-BmLV-dG0.js";import"./Layer-D3wyNfAg.js";import"./Text-DdDBf3IT.js";import"./DOMUtils-9dw7u23l.js";import"./Label-D5WIiRBw.js";import"./ZIndexLayer-DdHbybrS.js";import"./types-wjbQlydb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-UykzmigB.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
