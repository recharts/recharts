import{R as e}from"./iframe-DJ6rtu5y.js";import{R as p}from"./zIndexSlice-GKDeUFOJ.js";import{C as s}from"./ComposedChart-DTZGrJFy.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-VYjXh7Tt.js";import{X as d}from"./XAxis-BUVKQY8c.js";import{Y as l}from"./YAxis-pMQszEvE.js";import{R as h}from"./ReferenceArea-JMY2Xq_r.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-sudvDT5X.js";import"./index-Byzogkak.js";import"./index-BJPQreJu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-TPSV-hYk.js";import"./isWellBehavedNumber-B2OjYN3n.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGKs6O5B.js";import"./axisSelectors-C35c3TE0.js";import"./d3-scale-D71QV_XP.js";import"./index-0mnAToBP.js";import"./index-CUo6OWxa.js";import"./renderedTicksSlice-omd44aKK.js";import"./index-Bxq5EtVn.js";import"./CartesianChart-L5wJYDJT.js";import"./chartDataContext-Bk4HvwoY.js";import"./CategoricalChart-DK2VSKip.js";import"./CartesianAxis-BUpdfbmz.js";import"./Layer-cCkIU0Vd.js";import"./Text-BucchPCr.js";import"./DOMUtils-D7Zrpi7b.js";import"./useId-Byv4usHp.js";import"./useBackwardsCompatibleTheme-DdWo0Fs4.js";import"./Label-6LwczIk6.js";import"./ZIndexLayer-IvPQYMIA.js";import"./types-CF6XO-qy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CTp7N4-J.js";import"./useAnimationId-BjJyuwQe.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ae=["IfOverflow"];export{t as IfOverflow,ae as __namedExportsOrder,oe as default};
