import{R as e}from"./iframe-DeP4Wy7i.js";import{R as p}from"./zIndexSlice-nnPIR1gF.js";import{C as s}from"./ComposedChart-CJez4X5P.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DHkC3FJy.js";import{X as d}from"./XAxis-D55ujQEE.js";import{Y as l}from"./YAxis-Blw3_-Cc.js";import{R as h}from"./ReferenceArea-By_yE7mr.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-meF8BPI2.js";import"./index-iD4LtFlt.js";import"./index-CP6Rv1Sw.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cuw6EoTI.js";import"./isWellBehavedNumber-oQsvKY8H.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSrF3qvK.js";import"./axisSelectors-CZy9dm6d.js";import"./d3-scale-BMFuZ2xk.js";import"./index-bTLe7Jwh.js";import"./index-LaINuLzR.js";import"./renderedTicksSlice-UEqy9PPR.js";import"./index-BI5vUZLp.js";import"./CartesianChart-n8mpzi4z.js";import"./chartDataContext-O08JVLGx.js";import"./CategoricalChart-DHRd-r0A.js";import"./CartesianAxis-CZDdo6k-.js";import"./Layer-CBmTHU88.js";import"./Text-tlJnHXas.js";import"./DOMUtils-fGj0XAk5.js";import"./useId-Bwy1FQE5.js";import"./useBackwardsCompatibleTheme-CIuhIiJU.js";import"./Label-BDn5In4u.js";import"./ZIndexLayer-46z2Emao.js";import"./types-CanfrVuk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-fbRf2OP7.js";import"./useAnimationId-BrY9w4yL.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
