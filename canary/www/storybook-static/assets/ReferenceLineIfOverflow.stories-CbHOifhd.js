import{R as e}from"./iframe-jpw6hTzP.js";import{R as n}from"./zIndexSlice-0hywYSss.js";import{C as p}from"./ComposedChart-CLKvf99S.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B8YhQS5n.js";import{X as f}from"./XAxis-i-qKaY8p.js";import{Y as l}from"./YAxis-Cro589xA.js";import{L as d}from"./Line-C57CrOO0.js";import{R as h}from"./ReferenceLine-BarJRIoH.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CyRNR61p.js";import"./index-DO5hoWZ6.js";import"./index-BVY5iI86.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B-NoCwnk.js";import"./isWellBehavedNumber-Bpm3dXa6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DETDaPtv.js";import"./index-BAw2ZYTH.js";import"./index-B3JmkEsF.js";import"./renderedTicksSlice-DaJpGvtP.js";import"./axisSelectors-fmgxI94T.js";import"./d3-scale-DRfhHoT1.js";import"./CartesianChart-CgGbY7Vc.js";import"./chartDataContext-BOCAF6JU.js";import"./CategoricalChart-CgK2HWLH.js";import"./CartesianAxis-hrtgNZzr.js";import"./Layer-DBhjUf2v.js";import"./Text-CD-hvoQS.js";import"./DOMUtils-ByIChG1Y.js";import"./Label-Ddiq2mWQ.js";import"./ZIndexLayer-qT8qrsoe.js";import"./types-Q9eva-kl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-CvVzTtSx.js";import"./step-DQBQyc1L.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-QuI77x2Z.js";import"./useAnimationId-BDRU6NIW.js";import"./ActivePoints-Byy_7u33.js";import"./Dot-C9R0P-ig.js";import"./RegisterGraphicalItemId-BKfVpYlc.js";import"./ErrorBarContext-TSI08DrR.js";import"./GraphicalItemClipPath-BtpdwkC7.js";import"./SetGraphicalItem-B7bXtFbE.js";import"./getRadiusAndStrokeWidthFromDot-DOVdep_g.js";import"./ActiveShapeUtils-CdjeeMGu.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
