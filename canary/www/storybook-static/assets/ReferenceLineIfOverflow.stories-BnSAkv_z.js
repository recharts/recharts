import{R as e}from"./iframe-8C24Tydd.js";import{R as a}from"./zIndexSlice-Dw4Oq4dL.js";import{C as p}from"./ComposedChart-B4z2qb51.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D1iVkTMn.js";import{X as f}from"./XAxis-CI8sx2Rv.js";import{Y as l}from"./YAxis-jbouJBfL.js";import{L as d}from"./Line-CdXXfIAJ.js";import{R as h}from"./ReferenceLine-9FgW58b-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-jF8yDnYL.js";import"./throttle-BnR0knX4.js";import"./index-BZrrsPsq.js";import"./index-B9s4wujy.js";import"./RechartsWrapper-CN9elUVX.js";import"./axisSelectors-wolYJBqC.js";import"./polarAxisSelectors-OkcN41hW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DhysOGqs.js";import"./index-C0a8p3x4.js";import"./index-DTGVc3OM.js";import"./renderedTicksSlice-pib7h8IS.js";import"./index-DqK9E7FS.js";import"./fillDefinitions-DW2cY3tE.js";import"./CartesianChart-CGDUobj1.js";import"./chartDataContext-31zmIAvn.js";import"./CategoricalChart-Bwnqw4e-.js";import"./CartesianAxis-CNwz3srm.js";import"./Layer-D45TlyFk.js";import"./Text-CBQ4JzNL.js";import"./ZIndexLayer-DlPMEPXU.js";import"./Label-D_2s_KcH.js";import"./types-BD1-xaIs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BP7tIwQM.js";import"./step-lTKWXilO.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-XtYPtKfF.js";import"./ActivePoints-Dhsdw6YW.js";import"./Dot-BqqZJubD.js";import"./activeStyles-D92_uiFB.js";import"./useAnimationId-CvLS5yyi.js";import"./Symbols-CsqovMSS.js";import"./symbol-C5k6tAwY.js";import"./ErrorBarContext-CfhLJDta.js";import"./SetGraphicalItem-BzYY5Na5.js";import"./getRadiusAndStrokeWidthFromDot-B9BUEQWm.js";import"./ActiveShapeUtils-CytN3lSp.js";import"./useEffectiveDataKey-DR3UcTsu.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
