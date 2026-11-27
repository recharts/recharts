import{R as e}from"./iframe-BLIo_1nt.js";import{R as s}from"./zIndexSlice-DC3TJ2KH.js";import{C as p}from"./ComposedChart-MrmH01T4.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-D1keZ6zP.js";import{X as d}from"./XAxis-NUWW5fMr.js";import{Y as l}from"./YAxis-B-hKkgmv.js";import{R as h}from"./ReferenceArea-CEh4Shle.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DBbSGEQz.js";import"./get-CjriyByo.js";import"./throttle-BVtqo_9X.js";import"./index-X9B5BzRC.js";import"./index-DzqD25FH.js";import"./RechartsWrapper-DHKT5KBC.js";import"./axisSelectors-zp31unE3.js";import"./polarAxisSelectors-CTVIJxRd.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-0nS9y-pB.js";import"./index-CO4LKWIG.js";import"./index-BIvaYjey.js";import"./renderedTicksSlice-Bb6Mddqa.js";import"./index-Cvsm1Tm8.js";import"./fillDefinitions-pQA0VntX.js";import"./CartesianChart-DiqGyEKX.js";import"./chartDataContext-CqIvcjot.js";import"./CategoricalChart-DIDmT5Om.js";import"./CartesianAxis-CednQB0X.js";import"./Layer-BmO--khP.js";import"./Text-DGpe4WxS.js";import"./ZIndexLayer-BZ7iUhzZ.js";import"./Label-CFregkfn.js";import"./types-C-m9Hr0T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-D4nL3Ndu.js";import"./useAnimationId-BgYtx5DV.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
