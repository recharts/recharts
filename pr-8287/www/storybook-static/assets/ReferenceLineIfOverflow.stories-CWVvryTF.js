import{R as e}from"./iframe-CBRSMBnf.js";import{R as a}from"./zIndexSlice-G_MKhK64.js";import{C as p}from"./ComposedChart-a--bFFQ0.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D7MRB-1A.js";import{X as f}from"./XAxis-hFmUjMoe.js";import{Y as l}from"./YAxis-DSUkkbnx.js";import{L as d}from"./Line-BwqfHSpg.js";import{R as h}from"./ReferenceLine-B8uShw9Y.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-rMq54uQA.js";import"./throttle-9ZU0NYV2.js";import"./index-BFSKO-j2.js";import"./index-Dr6qgTGt.js";import"./RechartsWrapper-CtIo7IeI.js";import"./axisSelectors-Ca58SJJZ.js";import"./polarAxisSelectors-CmG6JvL9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-YF59ukCY.js";import"./index-1te-Kc2Q.js";import"./index-DGSnNf5w.js";import"./renderedTicksSlice-Dn7AqsKy.js";import"./index-AkU5pxMr.js";import"./fillDefinitions-1nZ0ZPs-.js";import"./CartesianChart-PQ4f033u.js";import"./chartDataContext-sCDQ5wEf.js";import"./CategoricalChart-BElxArO-.js";import"./CartesianAxis-BvwIwDWJ.js";import"./Layer-aUkXnOjv.js";import"./Text-DWGdTCGH.js";import"./ZIndexLayer-BCt1x8VL.js";import"./Label-BfZk-Sdf.js";import"./types-BEawq_c0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-ZvZ8EJkG.js";import"./Curve--RPaNs4h.js";import"./step-DBVTJVz7.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CAxQKe3A.js";import"./ActivePoints-DpAEo5pc.js";import"./Dot-Cui8UCyf.js";import"./activeStyles-DpG6wBQs.js";import"./useAnimationId-cL_ennFP.js";import"./Symbols-CQ03YMrb.js";import"./symbol-DcOuNSJt.js";import"./ErrorBarContext-D6qhDPP-.js";import"./SetGraphicalItem-C5CBQIUL.js";import"./ActiveShapeUtils-DgOfPYb9.js";import"./useEffectiveDataKey-CyhT1JOs.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ve as __namedExportsOrder,we as default};
