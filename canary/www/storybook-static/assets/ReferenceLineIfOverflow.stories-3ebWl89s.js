import{R as e}from"./iframe-C_py9VKy.js";import{R as n}from"./zIndexSlice-CXPNbLh0.js";import{C as p}from"./ComposedChart-Dh9zcQ5L.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D7LbaWML.js";import{X as f}from"./XAxis-BQTm69sE.js";import{Y as l}from"./YAxis-1vUjo3Fh.js";import{L as d}from"./Line-COmMeHls.js";import{R as h}from"./ReferenceLine-CjsUCnX8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-y-97qzKM.js";import"./index-om3Avrtj.js";import"./index-DFxAgAdx.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DKxyIA_C.js";import"./isWellBehavedNumber-wktK8CV7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CyYB6xNR.js";import"./index-ConrPCjE.js";import"./index-B6PDA8Su.js";import"./renderedTicksSlice-XRbHFGyF.js";import"./axisSelectors-B-GKTKT_.js";import"./d3-scale-pH2VCnNX.js";import"./CartesianChart-Dc2BthVN.js";import"./chartDataContext-CG11iTCQ.js";import"./CategoricalChart-DJCSwk8E.js";import"./CartesianAxis-DS2REUGr.js";import"./Layer-CJpPulsx.js";import"./Text-CnffV04t.js";import"./DOMUtils-B2RmK7a8.js";import"./Label-DaE8MMQO.js";import"./ZIndexLayer-cfs89nNi.js";import"./types-BjPO6Abx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-Ca8nGQE4.js";import"./step-CMEfwDT5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BApiggtL.js";import"./useAnimationId-BmA3o4RX.js";import"./ActivePoints-VBrZY_w6.js";import"./Dot-CgRov5lu.js";import"./RegisterGraphicalItemId-BKPrbhTB.js";import"./ErrorBarContext-SwQJmcJ0.js";import"./GraphicalItemClipPath-oE60EnJf.js";import"./SetGraphicalItem-B_lgAFV8.js";import"./getRadiusAndStrokeWidthFromDot-CRhSkevf.js";import"./ActiveShapeUtils-SIhXzT4o.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
