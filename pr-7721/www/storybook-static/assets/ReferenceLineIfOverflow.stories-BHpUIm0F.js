import{R as e}from"./iframe-CQz631Nk.js";import{R as n}from"./zIndexSlice-BiY29BHb.js";import{C as p}from"./ComposedChart-B-N3Zjvf.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-zqpDe6L_.js";import{X as f}from"./XAxis-DHy0v3jD.js";import{Y as l}from"./YAxis-CWW4X-Ki.js";import{L as d}from"./Line-CQpvxMmw.js";import{R as h}from"./ReferenceLine-CfBTzxmB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-tlVaut9a.js";import"./index-DCbtYhHK.js";import"./index-CDndXHyS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BsWR9NdC.js";import"./isWellBehavedNumber-B7MN_LAX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Btix0jtf.js";import"./axisSelectors-SdSrtuX_.js";import"./d3-scale-DbP7sHTP.js";import"./index-BlfYBgju.js";import"./index-w2pZ54DA.js";import"./renderedTicksSlice-lkRk7heP.js";import"./index-CUVgoBSt.js";import"./CartesianChart-WE1bkj_w.js";import"./chartDataContext-ef-S8XKm.js";import"./CategoricalChart-6rYejfBQ.js";import"./CartesianAxis-Dd11BP7Z.js";import"./Layer-DGn6U-cs.js";import"./Text-CpmwLb5H.js";import"./DOMUtils-V3cEDC71.js";import"./useId-BSAAHf1D.js";import"./useBackwardsCompatibleTheme-DhqH6-Ub.js";import"./Label-DQhaNgKG.js";import"./ZIndexLayer-LgQGURcB.js";import"./types-qf3XACEN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-B1Y35Tq4.js";import"./step-DM9ed4F2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B3DzMe78.js";import"./useAnimationId-DN0POjqt.js";import"./ActivePoints-BbCYqZ1B.js";import"./Dot-Br265cWC.js";import"./RegisterGraphicalItemId-Bdyk4ltG.js";import"./ErrorBarContext-BVC7bug8.js";import"./GraphicalItemClipPath-Db7czniJ.js";import"./SetGraphicalItem-DLB5o72P.js";import"./getRadiusAndStrokeWidthFromDot-CtkJeIr5.js";import"./ActiveShapeUtils-BfK0DvMY.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ye=["IfOverflow"];export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
