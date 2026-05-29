import{c as e}from"./iframe-ayfxMcMc.js";import{g as s}from"./zIndexSlice-CBS9H6Fq.js";import{C as p}from"./ComposedChart-DzAczIPs.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid-Cu2hXhNs.js";import{X as d}from"./XAxis-CQCosfOX.js";import{Y as l}from"./YAxis-CboDD1HN.js";import{R as h}from"./ReferenceArea-BzYc4_qf.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CvfGnc1k.js";import"./index-ChfXHuaM.js";import"./index-uB2AF80P.js";import"./get-DE-GTO8K.js";import"./resolveDefaultProps-DUvm9h9z.js";import"./isWellBehavedNumber-0ySD8Cyp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dt3ctKzU.js";import"./index-CnDnhuhh.js";import"./index-qYP6YSZE.js";import"./renderedTicksSlice-kyxhp8XW.js";import"./axisSelectors-DiADRWeJ.js";import"./d3-scale-DvksmR-t.js";import"./CartesianChart-asOappaa.js";import"./chartDataContext-ncJihXoM.js";import"./CategoricalChart-YvgC-s3M.js";import"./CartesianAxis-CJYfwd48.js";import"./Layer-DRx_WgZU.js";import"./Text-D472vA6a.js";import"./DOMUtils-DhrlxvLL.js";import"./Label-ii_PgfeB.js";import"./ZIndexLayer-ChQFeTnT.js";import"./types-DKuO6oNB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-BlYO1MRZ.js";import"./useAnimationId-CPZ6UJKm.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
