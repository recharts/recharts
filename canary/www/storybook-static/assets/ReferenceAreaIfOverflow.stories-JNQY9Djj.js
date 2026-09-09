import{R as e}from"./iframe-DkIbxCKI.js";import{R as p}from"./zIndexSlice-CHbZzwgN.js";import{C as s}from"./ComposedChart-AmLF4jNt.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BN9lk_W5.js";import{X as d}from"./XAxis-BPLEkIZ2.js";import{Y as l}from"./YAxis-CwdPxCpD.js";import{R as h}from"./ReferenceArea-CZnJQT4N.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CWb9XQe7.js";import"./index-yECzrrEn.js";import"./index-B09gEsNA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BevWDyyN.js";import"./isWellBehavedNumber-fyAAr-BE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CqxFYmG2.js";import"./axisSelectors-B_cE3_9l.js";import"./d3-scale-8ot6xaxi.js";import"./index-CgyukL1G.js";import"./index-x7Df9KyH.js";import"./renderedTicksSlice-DyBDLYr8.js";import"./index-BccjzSMV.js";import"./CartesianChart-CLeTDcJ1.js";import"./chartDataContext-CWOneN2n.js";import"./CategoricalChart-De8d0Fqy.js";import"./CartesianAxis-5Nq6xx1I.js";import"./Layer-D7vk6n2M.js";import"./Text-BbOUDRzF.js";import"./DOMUtils-BUKWldcd.js";import"./useId-8qRrdFWs.js";import"./useBackwardsCompatibleTheme-BwQOOq4w.js";import"./Label-DXoCOeOg.js";import"./ZIndexLayer-BJyXs-Ro.js";import"./types-CwHWliOY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CcvMQD5l.js";import"./useAnimationId-DMHPZlQv.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
