import{R as e}from"./iframe-DgQvZQyh.js";import{R as p}from"./zIndexSlice-Btq-n8Y8.js";import{C as s}from"./ComposedChart-BGAWRlKr.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BonfojMO.js";import{X as d}from"./XAxis-B4xwOvnI.js";import{Y as l}from"./YAxis-B-S92WaL.js";import{R as h}from"./ReferenceArea-C617R02U.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dk-DfWHx.js";import"./index-Cq8r6DAn.js";import"./index-BZXsqVam.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CgdEm8CY.js";import"./isWellBehavedNumber-1FtJDRA4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQot8Dvj.js";import"./index-Bb9OGTvq.js";import"./index-D86HQKsa.js";import"./axisSelectors-VvYM7u3M.js";import"./d3-scale-uYT3pExD.js";import"./renderedTicksSlice-Cx5LcFk7.js";import"./CartesianChart-CPjqqiaN.js";import"./chartDataContext-CZdqNQBA.js";import"./CategoricalChart-ZwyKDo7N.js";import"./CartesianAxis-BguBsSE9.js";import"./Layer-jy0y6JzX.js";import"./Text-BCNrLAhU.js";import"./DOMUtils-Dc6imoC2.js";import"./useId-Dpr_zhHQ.js";import"./useBackwardsCompatibleTheme-CyfSeWLo.js";import"./Label-D7SUzQZZ.js";import"./ZIndexLayer-COjkhmxj.js";import"./types-DyDamtmF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CkzbQ6sY.js";import"./useAnimationId-CMrpUBKd.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
