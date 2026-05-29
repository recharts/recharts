import{c as t}from"./iframe-CmE1Gw1b.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-sLz07qff.js";import{g as l}from"./zIndexSlice-CPvazyt5.js";import{C as x}from"./ComposedChart-B0hkf2v7.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-CwvnK4bZ.js";import{L as a}from"./Line-iL4IvS3b.js";import{X as A}from"./XAxis-CsAE-1wy.js";import{T as g}from"./Tooltip-_APSjxFC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Xs9eC5t9.js";import"./CartesianAxis-CAtPdKeh.js";import"./Layer-abY4Fjir.js";import"./resolveDefaultProps-DMnLPor7.js";import"./Text-BQZJ76YD.js";import"./DOMUtils-omFfYIeV.js";import"./isWellBehavedNumber-iiy358B8.js";import"./Label-Cvukc7WC.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DHcHf456.js";import"./index-Cxu3QwYw.js";import"./index-BRRHmhT0.js";import"./types-DmTRT5mp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CPDsz2oQ.js";import"./immer-D0ucvycs.js";import"./RechartsWrapper-D8R_Xy2B.js";import"./index-DBnd1KA6.js";import"./index-CVCvCqpB.js";import"./axisSelectors-DB3YTJ5D.js";import"./d3-scale-CvKKQLFm.js";import"./CartesianChart-CVLVFTZa.js";import"./chartDataContext-BRP4CbYg.js";import"./CategoricalChart-dsp09r-Q.js";import"./tooltipContext-ChOVTM28.js";import"./ReactUtils-BAXLe4Ge.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DC373LRb.js";import"./useAnimationId-D3nuvCaK.js";import"./ActiveShapeUtils-C_GLb3KM.js";import"./RegisterGraphicalItemId-B-oWQNZS.js";import"./ErrorBarContext-BpCSl48G.js";import"./GraphicalItemClipPath-BhaC-7pi.js";import"./SetGraphicalItem-DE9GuFyM.js";import"./getZIndexFromUnknown-_xYpBNHf.js";import"./graphicalItemSelectors-vcPysoTb.js";import"./Curve-DNUM0bVP.js";import"./step-CCTJ90gO.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BZYNmVQi.js";import"./Dot-mUoWRWq3.js";import"./getRadiusAndStrokeWidthFromDot-DrN6QQp7.js";import"./useElementOffset-D-LxG0BO.js";import"./uniqBy-BvaoGVQr.js";import"./iteratee-RsGkkcHy.js";import"./Cross-Cy-Vx90u.js";import"./Sector-CHt0xVVw.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Ct=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Ct as __namedExportsOrder,Et as default};
