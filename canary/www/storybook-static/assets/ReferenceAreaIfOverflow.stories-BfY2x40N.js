import{R as e}from"./iframe-CXZlrf2U.js";import{R as s}from"./zIndexSlice-BjX2jCNd.js";import{C as p}from"./ComposedChart-Cd7Rssjf.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BvL82dRH.js";import{X as d}from"./XAxis-CiwCXYrG.js";import{Y as l}from"./YAxis-DfNp35yd.js";import{R as h}from"./ReferenceArea-D4_GwuF6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DzsDYtS8.js";import"./throttle-CeMcgCrB.js";import"./index-BXews0N3.js";import"./index-BQ37V211.js";import"./RechartsWrapper-DH-5ZOsj.js";import"./axisSelectors-CXSRT8oe.js";import"./polarAxisSelectors-C9d2CYxT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmN7CMF4.js";import"./index-CPNldOVQ.js";import"./index-Dwq43-hP.js";import"./renderedTicksSlice-CNKxG0p9.js";import"./index-B6CEgg-5.js";import"./fillDefinitions-CXni0F_U.js";import"./CartesianChart-BF67_Mbn.js";import"./chartDataContext-Cr6H1IFD.js";import"./CategoricalChart-C5S6zTyC.js";import"./CartesianAxis-BaftQfIs.js";import"./Layer-cEFsn6Cd.js";import"./Text-ypQmpcnA.js";import"./ZIndexLayer-oMBe6LXA.js";import"./Label-DMZfCKi2.js";import"./types-BoOwr3-k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-C40_qBeq.js";import"./useAnimationId-Bvdrz9cO.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
