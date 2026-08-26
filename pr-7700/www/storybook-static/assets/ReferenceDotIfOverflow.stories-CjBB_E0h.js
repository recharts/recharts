import{R as e}from"./iframe-DJ6rtu5y.js";import{R as n}from"./zIndexSlice-GKDeUFOJ.js";import{C as p}from"./ComposedChart-DTZGrJFy.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-VYjXh7Tt.js";import{X as f}from"./XAxis-BUVKQY8c.js";import{Y as l}from"./YAxis-pMQszEvE.js";import{R as d}from"./ReferenceDot-Cbjqi7_Z.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-sudvDT5X.js";import"./index-Byzogkak.js";import"./index-BJPQreJu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-TPSV-hYk.js";import"./isWellBehavedNumber-B2OjYN3n.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGKs6O5B.js";import"./axisSelectors-C35c3TE0.js";import"./d3-scale-D71QV_XP.js";import"./index-0mnAToBP.js";import"./index-CUo6OWxa.js";import"./renderedTicksSlice-omd44aKK.js";import"./index-Bxq5EtVn.js";import"./CartesianChart-L5wJYDJT.js";import"./chartDataContext-Bk4HvwoY.js";import"./CategoricalChart-DK2VSKip.js";import"./CartesianAxis-BUpdfbmz.js";import"./Layer-cCkIU0Vd.js";import"./Text-BucchPCr.js";import"./DOMUtils-D7Zrpi7b.js";import"./useId-Byv4usHp.js";import"./useBackwardsCompatibleTheme-DdWo0Fs4.js";import"./Label-6LwczIk6.js";import"./ZIndexLayer-IvPQYMIA.js";import"./types-CF6XO-qy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-ClYl_u4u.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
