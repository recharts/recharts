import{R as e}from"./iframe-Dveh6XC4.js";import{R as p}from"./zIndexSlice-CHGKLvUt.js";import{C as s}from"./ComposedChart-BOsUMJ6o.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DvW8Geav.js";import{X as d}from"./XAxis-CRKEYqOq.js";import{Y as l}from"./YAxis-w9pVccwz.js";import{R as h}from"./ReferenceArea-BgeJbeoY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DuxVF1QF.js";import"./throttle-CRxbwEvt.js";import"./index-Cbmt_wIf.js";import"./index-CG-oseCj.js";import"./RechartsWrapper-BjJrVVo_.js";import"./axisSelectors-BNJiRWtc.js";import"./polarAxisSelectors-DOXrMTYm.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-XJHyjNta.js";import"./index-BC5sf_5c.js";import"./index-uMZJip00.js";import"./renderedTicksSlice-Cw-0pUCw.js";import"./index-Fu0XORfS.js";import"./fillDefinitions-BC_l7gtK.js";import"./CartesianChart-DPPEX1sp.js";import"./ZIndexPortal-yJs_hgSa.js";import"./CategoricalChart-BBllviTF.js";import"./CartesianAxis-DUZQMGP0.js";import"./Layer-BJKthE-c.js";import"./Text-DDi8tnpk.js";import"./DOMUtils-BsJwiviE.js";import"./ZIndexLayer-DbxRiqCY.js";import"./Label-Vwsx_sp3.js";import"./types-XJ7-EVuf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-L-kKC_mf.js";import"./useAnimationId-ClkvXH7X.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},oe=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
