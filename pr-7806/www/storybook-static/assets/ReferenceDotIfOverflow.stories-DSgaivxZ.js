import{R as e}from"./iframe-DMwBeJR9.js";import{R as m}from"./zIndexSlice-BP1SI4lk.js";import{C as p}from"./ComposedChart-C1dXdi20.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DOILjndp.js";import{X as f}from"./XAxis-CXH1fd9N.js";import{Y as l}from"./YAxis-CzX5Dj-l.js";import{R as d}from"./ReferenceDot-DxyKlHcf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-JhdtWwel.js";import"./index-W8It9SHe.js";import"./index-CW9TVSnL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-FbHkIvMQ.js";import"./isWellBehavedNumber-BWBsnwkO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQf4ekbV.js";import"./axisSelectors-BzRm_10h.js";import"./d3-scale-CTZXeK9y.js";import"./index-C4TxoYVJ.js";import"./index-KvfSCZEN.js";import"./renderedTicksSlice-Dl_Tlvvx.js";import"./index-CR-86fOk.js";import"./CartesianChart-C4QG-pAm.js";import"./chartDataContext-ClQA_jr_.js";import"./CategoricalChart-BZsjmvUf.js";import"./CartesianAxis-BJRJUBpp.js";import"./Layer-DMhp_Srr.js";import"./Text-BAFoSTNm.js";import"./DOMUtils-DtiMQzYq.js";import"./useId-BlKh4dfu.js";import"./useBackwardsCompatibleTheme-ujSziCXW.js";import"./Label-B67df_fL.js";import"./ZIndexLayer-CFNoJ68M.js";import"./types-CMazcurm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-CC7p1g3t.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
