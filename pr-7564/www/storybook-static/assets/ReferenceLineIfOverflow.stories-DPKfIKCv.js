import{R as e}from"./iframe-MCQmK-TG.js";import{R as n}from"./zIndexSlice-BMHpWHLe.js";import{C as p}from"./ComposedChart-CupTaTlB.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-UiabJrkf.js";import{X as f}from"./XAxis-xj8vDJ23.js";import{Y as l}from"./YAxis-BUA5jm-O.js";import{L as d}from"./Line-D58bgiXU.js";import{R as h}from"./ReferenceLine-RzDgfBit.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-exFJ19dN.js";import"./index-iUk-FcRS.js";import"./index-CGFRGdbT.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DF8ch7IU.js";import"./isWellBehavedNumber-DF6QZ0lN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSMirUgA.js";import"./index-DCwDEUXM.js";import"./index-4hl_PvHL.js";import"./renderedTicksSlice-5teDD8C_.js";import"./axisSelectors-t6G1HMN1.js";import"./d3-scale-1trsZxCl.js";import"./CartesianChart-CbiEQRIX.js";import"./chartDataContext-oq73vT2r.js";import"./CategoricalChart-DG8zA7C6.js";import"./CartesianAxis-B42rFi6U.js";import"./Layer-BUisE7Gh.js";import"./Text-LGFyNulV.js";import"./DOMUtils-DeN2A_86.js";import"./Label-DaldQZFv.js";import"./ZIndexLayer-BnKxJfbB.js";import"./types-Cz27ONEA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DfisrzMh.js";import"./step-DU3HZd3T.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Z_ZNAYUP.js";import"./useAnimationId-Ptyt1Cmf.js";import"./ActivePoints-DBM0wjQk.js";import"./Dot-CZGz3E6B.js";import"./RegisterGraphicalItemId-CwAmMMrt.js";import"./ErrorBarContext-7PhmiQse.js";import"./GraphicalItemClipPath-BDardp6y.js";import"./SetGraphicalItem-RVuvzcbz.js";import"./getRadiusAndStrokeWidthFromDot-00OVvYcl.js";import"./ActiveShapeUtils-BJxvN-bC.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const le=["IfOverflow"];export{t as IfOverflow,le as __namedExportsOrder,fe as default};
