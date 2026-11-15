import{R as e}from"./iframe-BhLunS0i.js";import{R as m}from"./zIndexSlice-DSPJCLFE.js";import{C as s}from"./ComposedChart-prDwTclO.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-jJH8HMQK.js";import{X as f}from"./XAxis-gG48cTvb.js";import{Y as l}from"./YAxis-D6-PxaVK.js";import{R as d}from"./ReferenceDot-CCZJyV_8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DXAJRd9k.js";import"./throttle-CRN4ZNKA.js";import"./index-H7oJ2m7W.js";import"./index-CcZqU02h.js";import"./RechartsWrapper-wQ1gT1I0.js";import"./axisSelectors-D1ydZeah.js";import"./polarAxisSelectors-BbkwWyBS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DitufHHw.js";import"./index-D0rCwL5o.js";import"./index-DIg_N1nK.js";import"./renderedTicksSlice-R-_VMDVC.js";import"./index-CFjbQa5l.js";import"./fillDefinitions-CiiNJPEd.js";import"./CartesianChart-Bh_JRPa2.js";import"./chartDataContext-BNqwthL0.js";import"./CategoricalChart-D-9XLz-N.js";import"./CartesianAxis-D8zKHO5C.js";import"./Layer-BM8-5uQX.js";import"./Text-DaAfyhaD.js";import"./ZIndexLayer-DT0AmS3A.js";import"./Label-BKkx1Yqi.js";import"./types-CT83QobA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-5madfp2A.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
