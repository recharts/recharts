import{R as e}from"./iframe-FAdFbT6J.js";import{R as p}from"./zIndexSlice-COO8R9lj.js";import{C as s}from"./ComposedChart-ByetWKbs.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-H4vGAjA9.js";import{X as d}from"./XAxis-2xPTd-UO.js";import{Y as l}from"./YAxis-T_mO5jU8.js";import{R as h}from"./ReferenceArea-Bqo-BYdE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dtf0HKLA.js";import"./throttle-DmbGe_oo.js";import"./index-Bi2HKvdy.js";import"./index-CAO6Ulba.js";import"./RechartsWrapper-B8CA35TH.js";import"./axisSelectors-DjwIFZga.js";import"./polarAxisSelectors-CZ0SBXPQ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CfdNPJMp.js";import"./index-BCrgpV8I.js";import"./index-D2Bzwkru.js";import"./renderedTicksSlice-C41wjkwS.js";import"./index-Cdi1oYuJ.js";import"./CartesianChart-BPlrTUFV.js";import"./ZIndexPortal-B1h9CFOj.js";import"./CategoricalChart-D9WR_D7Z.js";import"./CartesianAxis-_1uLVGpU.js";import"./Layer-DDi6JECL.js";import"./Text-Cndhy6VG.js";import"./pageBackground-CQW2qZWO.js";import"./ZIndexLayer-5IISokl0.js";import"./Label-MEQSQEMP.js";import"./dataEntryStyles-CEjpbRUj.js";import"./types-BX8ZQcvG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-BbbHCzWy.js";import"./useAnimationId-CiJHzCVR.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},oe=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,oe as __namedExportsOrder,re as default};
