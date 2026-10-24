import{R as e}from"./iframe-Cb2PTRZu.js";import{R as m}from"./zIndexSlice-BOcdwE9B.js";import{C as p}from"./ComposedChart-B38G4g5a.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-S2dzJhHi.js";import{X as f}from"./XAxis-CYL2fqsj.js";import{Y as l}from"./YAxis-CFTllxPe.js";import{R as d}from"./ReferenceDot-CMDozWlu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-3iOH7y6s.js";import"./index-CgcevczK.js";import"./index-D3ECOqH8.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-38f2qAXo.js";import"./isWellBehavedNumber-DqADXXOT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DJJRHEYU.js";import"./axisSelectors-YCR54JUg.js";import"./d3-scale-BEDYL0lJ.js";import"./index-sJmnv_Ao.js";import"./index-BHmwOcB9.js";import"./renderedTicksSlice-CGIalbK2.js";import"./index-DnXVLer0.js";import"./CartesianChart-bwFjxITE.js";import"./chartDataContext-DEoJ-_XA.js";import"./CategoricalChart-yk48FjSr.js";import"./CartesianAxis-Bd5LwOLq.js";import"./Layer-CYH1X6I5.js";import"./Text-D_NeQFRY.js";import"./pageBackground-Bn3yH5Mf.js";import"./useId-7AGdzjEK.js";import"./useBackwardsCompatibleTheme-DVeueyf3.js";import"./Label-60x-b7-u.js";import"./ZIndexLayer-CMs0nKoK.js";import"./dataEntryStyles-BA7za2_q.js";import"./types-A7qt-X3A.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-CdjxtqZf.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},oe=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
