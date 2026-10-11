import{R as e}from"./iframe-Bsj5zL9n.js";import{R as p}from"./zIndexSlice-Cq8HAqW-.js";import{C as s}from"./ComposedChart-CUT9nv0s.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Cs0CKkTD.js";import{X as d}from"./XAxis-BgzuwsrB.js";import{Y as l}from"./YAxis-CbZ6bfr6.js";import{R as h}from"./ReferenceArea-C483jyI_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CrEblMxD.js";import"./index-BnI-_qMA.js";import"./index-DrTVWANE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Uluvm9qq.js";import"./isWellBehavedNumber-DfaPS7hR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CfIRZAky.js";import"./axisSelectors-mMRcbn7f.js";import"./d3-scale-CbB2Llqp.js";import"./index-DOYtr8yv.js";import"./index-g6-HhHC-.js";import"./renderedTicksSlice-BMu61fLT.js";import"./index-Kh3nyu4O.js";import"./CartesianChart-CeBBXviU.js";import"./chartDataContext-TTvcivZZ.js";import"./CategoricalChart-CEEokRev.js";import"./CartesianAxis-BFozoP5y.js";import"./Layer-yetTMzBX.js";import"./Text-EdZq5d5T.js";import"./pageBackground-B9aaE2P3.js";import"./useId-oX3CQwQj.js";import"./useBackwardsCompatibleTheme-CCerMO7Q.js";import"./Label-Dh346ivy.js";import"./ZIndexLayer-BdEpN6P8.js";import"./types-Bb-qVITL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-DCJ2slUs.js";import"./useAnimationId-HXoQj9d3.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ne as __namedExportsOrder,oe as default};
