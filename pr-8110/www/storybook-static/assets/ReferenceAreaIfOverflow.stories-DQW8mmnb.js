import{R as e}from"./iframe-Diz1MxK0.js";import{R as s}from"./zIndexSlice-De03ARmf.js";import{C as p}from"./ComposedChart-OhuMczYf.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-D6mypkCo.js";import{X as d}from"./XAxis-o44om-aN.js";import{Y as l}from"./YAxis-wJW4f648.js";import{R as h}from"./ReferenceArea-a-xBfWwZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DXx0w5ol.js";import"./throttle-D6Fnchfm.js";import"./index-BRB5AgXV.js";import"./index-BLbVat5F.js";import"./RechartsWrapper-Dua8Yzn2.js";import"./axisSelectors-DSSqtEqI.js";import"./polarAxisSelectors-Bv8wAAst.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DzLjpFUT.js";import"./index-F_sHq6h9.js";import"./index-B9EOw7DU.js";import"./renderedTicksSlice-BDuqmjwG.js";import"./index-B5mD0-P8.js";import"./CartesianChart-DgKauYA5.js";import"./ZIndexPortal-DkIbXTbh.js";import"./CategoricalChart-BQk2mTyl.js";import"./CartesianAxis-g7INsdPw.js";import"./Layer-Bs_jv2-i.js";import"./Text-Cd2gwijp.js";import"./DOMUtils-CLoOggbb.js";import"./ZIndexLayer-DarFSaif.js";import"./Label-BN-_qB9f.js";import"./types-DOhta01o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-ibll1vv0.js";import"./useAnimationId-DrJNkikT.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
