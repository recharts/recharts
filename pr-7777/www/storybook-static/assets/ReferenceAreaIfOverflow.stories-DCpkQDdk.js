import{R as e}from"./iframe-DsVopAcH.js";import{R as p}from"./zIndexSlice-CGOHGuEy.js";import{C as s}from"./ComposedChart-BQuW28P0.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DMEqPaVA.js";import{X as d}from"./XAxis-BseTd926.js";import{Y as l}from"./YAxis-HRdYePVo.js";import{R as h}from"./ReferenceArea-ClyBrP5G.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BobbsZsr.js";import"./index-BVvb2y__.js";import"./index-CFv1WTge.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BHrKsPc_.js";import"./isWellBehavedNumber-Br_jDsOR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BRE0A59j.js";import"./axisSelectors-Dgut4uty.js";import"./d3-scale-Eru_6FDY.js";import"./index-Ds1bCQEW.js";import"./index-B91uvtzr.js";import"./renderedTicksSlice-C8E6fsP2.js";import"./index-C4MX6gyH.js";import"./CartesianChart-B1PZqYEM.js";import"./chartDataContext-C5PzVTiP.js";import"./CategoricalChart-Cry5pYjh.js";import"./CartesianAxis-DUwX43Tg.js";import"./Layer-BiKMlTZw.js";import"./Text-nN9fGOPh.js";import"./DOMUtils-DoArDhDK.js";import"./useId-B3ZiYYeF.js";import"./useBackwardsCompatibleTheme-CGfGQXHh.js";import"./Label-yfckENu2.js";import"./ZIndexLayer-D4yIu8AC.js";import"./types-BimouhM4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CEek0_It.js";import"./useAnimationId-C2i6ANfU.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
