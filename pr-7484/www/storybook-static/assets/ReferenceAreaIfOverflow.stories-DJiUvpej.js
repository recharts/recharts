import{R as e}from"./iframe-DX1vtGMO.js";import{R as s}from"./zIndexSlice-CBHqXPZu.js";import{C as p}from"./ComposedChart-DrTtv4BR.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-339ME1w1.js";import{X as d}from"./XAxis-DLegRWnR.js";import{Y as l}from"./YAxis-oQ2494Ky.js";import{R as h}from"./ReferenceArea-DbaS3HSs.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CyjJLdoY.js";import"./index-CFOnPmwL.js";import"./index-BhJxPluG.js";import"./get-Cgjumwe9.js";import"./resolveDefaultProps-Evu9rMXK.js";import"./isWellBehavedNumber-BhjTCj8F.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BbcqKMmx.js";import"./index-CfVXt8f5.js";import"./index-CNqf-i4f.js";import"./renderedTicksSlice-DGFQGuI_.js";import"./axisSelectors-CD5YpxWK.js";import"./d3-scale-D456QfQQ.js";import"./CartesianChart-mvs2MZhK.js";import"./chartDataContext-DPGZ1R2s.js";import"./CategoricalChart-DtbdNaQa.js";import"./CartesianAxis-BmLV-dG0.js";import"./Layer-D3wyNfAg.js";import"./Text-DdDBf3IT.js";import"./DOMUtils-9dw7u23l.js";import"./Label-D5WIiRBw.js";import"./ZIndexLayer-DdHbybrS.js";import"./types-wjbQlydb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-m_tCbE2d.js";import"./useAnimationId-3wGGsZoS.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
