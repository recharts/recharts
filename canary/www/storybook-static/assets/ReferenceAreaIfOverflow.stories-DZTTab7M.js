import{R as e}from"./iframe-aStk4u5G.js";import{R as s}from"./zIndexSlice-fM76ZZLK.js";import{C as p}from"./ComposedChart-DHDQZPyt.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DshMrsYX.js";import{X as d}from"./XAxis-ENAn7eOB.js";import{Y as l}from"./YAxis-IZNj2QSL.js";import{R as h}from"./ReferenceArea-Cs2pbbVP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DDGoEIzP.js";import"./throttle-DVcVwqMz.js";import"./index-D3-ZjHvX.js";import"./index-CudRwpbI.js";import"./RechartsWrapper-Ds4ZmDze.js";import"./axisSelectors-DBp9gfhA.js";import"./polarAxisSelectors-DXerv3y1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B6YLYpaJ.js";import"./index-D44dfxkc.js";import"./index-C0ZJcZh_.js";import"./renderedTicksSlice-Bb9pf7FB.js";import"./index-CA0MPyj7.js";import"./fillDefinitions-Daf3k0lp.js";import"./CartesianChart-D7_rHSjg.js";import"./chartDataContext-Dl30_h0X.js";import"./CategoricalChart-C74L4aLC.js";import"./CartesianAxis-B4XXfFP6.js";import"./Layer-BjWQQh7I.js";import"./Text-ByyFOVFg.js";import"./ZIndexLayer-CcTOehup.js";import"./Label-CSHZSiX2.js";import"./types-DjvBJzo1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-D6Wk_c6i.js";import"./useAnimationId-BKAZWpn4.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
