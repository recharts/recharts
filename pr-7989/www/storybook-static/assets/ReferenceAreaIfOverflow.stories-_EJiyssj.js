import{R as e}from"./iframe-VT8pQoe7.js";import{R as p}from"./zIndexSlice-DEK4NARd.js";import{C as s}from"./ComposedChart-DEL7m4Nl.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-KSLisgB-.js";import{X as d}from"./XAxis-D4USI7eu.js";import{Y as l}from"./YAxis-BZdmkbLY.js";import{R as h}from"./ReferenceArea-oGZfuurA.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DAkHgZkc.js";import"./index-dScKVoLs.js";import"./index-CiAsw9yg.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-aXzZoAdw.js";import"./isWellBehavedNumber-CWd9TGG5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C5t5FA9b.js";import"./axisSelectors-rzVbGAjY.js";import"./d3-scale-CNl0eHX-.js";import"./index-DaTNpRtK.js";import"./index-B3obxpbN.js";import"./renderedTicksSlice-BV0dqoNF.js";import"./index-BZU6X58j.js";import"./CartesianChart-D86ig2Qu.js";import"./chartDataContext-C-2DcCuQ.js";import"./CategoricalChart-xbuH4iHs.js";import"./CartesianAxis-32TBg9e_.js";import"./Layer-C1VwbLrz.js";import"./Text-5GPWLOFl.js";import"./pageBackground-biSlCu9n.js";import"./useId-CUgdtS7Q.js";import"./useBackwardsCompatibleTheme-BVkaGEGO.js";import"./Label-CntNwugN.js";import"./ZIndexLayer-BK4Sn8Ml.js";import"./types-7pH1IAPS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-DpCZdUxE.js";import"./useAnimationId-D_S6bHPT.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
