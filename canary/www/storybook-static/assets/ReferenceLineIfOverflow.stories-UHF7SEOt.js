import{R as e}from"./iframe-BC-aHfbH.js";import{R as a}from"./zIndexSlice-ALhwVSt9.js";import{C as p}from"./ComposedChart-DeGO-OTb.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-cPH0vWa8.js";import{X as f}from"./XAxis-q4A2d4Zb.js";import{Y as l}from"./YAxis-7iDdsVaV.js";import{L as d}from"./Line-DxnNynrS.js";import{R as h}from"./ReferenceLine-DATwRrkg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-4x113t0l.js";import"./throttle-a7-GQed4.js";import"./index-B-RSdHgQ.js";import"./index-Dvj4AXX_.js";import"./RechartsWrapper-B9wYdCxx.js";import"./axisSelectors-D-qF4r4u.js";import"./polarAxisSelectors-DEKrNeLt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BzoWDajH.js";import"./index-ByUj-B7C.js";import"./index-C7cb-ZYS.js";import"./renderedTicksSlice-C3P53zmh.js";import"./index-BCHOiCIM.js";import"./CartesianChart-CLm_Ee8q.js";import"./ZIndexPortal-BGbnB8Y2.js";import"./CategoricalChart--pFm79aa.js";import"./CartesianAxis-CunRUAHg.js";import"./Layer-C9TfFY4n.js";import"./Text-DARS5OxC.js";import"./pageBackground-Dg-zxncN.js";import"./ZIndexLayer-PUdKiesE.js";import"./Label-Dza1R5dY.js";import"./dataEntryStyles-xanZasRf.js";import"./types-CqRAzbay.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-C_X7-rik.js";import"./step-C9BhyMMw.js";import"./path-DyVhHtw_.js";import"./LabelList-BVv1SXpb.js";import"./ActivePoints-CYbwYUVg.js";import"./Dot-DCOyOMOq.js";import"./activeStyles-1D-OxyIQ.js";import"./useAnimationId-Dd0TyqHP.js";import"./Symbols-BzxAfvdI.js";import"./symbol-DmUuFZcN.js";import"./RegisterGraphicalItemId-BsiO5PX-.js";import"./ErrorBarContext-C6fbu3f2.js";import"./SetGraphicalItem-B0IeAy6L.js";import"./getRadiusAndStrokeWidthFromDot-B9BWJY7Y.js";import"./ActiveShapeUtils-DJ-tBBEV.js";import"./useEffectiveDataKey-CqM8v6g-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,xe as __namedExportsOrder,ye as default};
