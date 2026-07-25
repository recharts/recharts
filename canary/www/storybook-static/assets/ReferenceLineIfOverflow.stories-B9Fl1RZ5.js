import{R as e}from"./iframe-DX-hRh6v.js";import{R as n}from"./zIndexSlice-CF9qsbsG.js";import{C as p}from"./ComposedChart-C2X6i1Aj.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CMJ9x5i5.js";import{X as f}from"./XAxis-CYn79B9K.js";import{Y as l}from"./YAxis-DIovWrSv.js";import{L as d}from"./Line-BH8HaOE7.js";import{R as h}from"./ReferenceLine-aIsjIxeT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C3bKSARL.js";import"./index-C_co4uh9.js";import"./index-qEhkJMvm.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Dl_-nEqR.js";import"./isWellBehavedNumber-B2WkM8vL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ccwce-LO.js";import"./index-BkRrDgeK.js";import"./index-BityOqCw.js";import"./renderedTicksSlice-Cdw3MVyO.js";import"./axisSelectors-CnUP3J5o.js";import"./d3-scale-CyRwSV0J.js";import"./CartesianChart-nrO7ZyU0.js";import"./chartDataContext-BrdpOtNY.js";import"./CategoricalChart-wLfPHTeT.js";import"./CartesianAxis-D-d2ZuWG.js";import"./Layer-CI3urb_2.js";import"./Text-DrQewChW.js";import"./DOMUtils-DdDZ08pJ.js";import"./Label-C_1G92on.js";import"./ZIndexLayer-BUVc2LfK.js";import"./types-B5ssIei3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-DBTqjj17.js";import"./step-ghZz1pkQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D1fsZDjw.js";import"./useAnimationId-oXOpEwNt.js";import"./ActivePoints-C0NUOkGZ.js";import"./Dot-Dn04Kjs0.js";import"./RegisterGraphicalItemId-CpEpaHjk.js";import"./ErrorBarContext-DCgqaVYx.js";import"./GraphicalItemClipPath-DgEtuK8_.js";import"./SetGraphicalItem-BVTByb6H.js";import"./getRadiusAndStrokeWidthFromDot-k00jkWeK.js";import"./ActiveShapeUtils-CgP8l6zk.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
