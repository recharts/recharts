import{R as t}from"./iframe-CLfZCDGm.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DF5Jxdkx.js";import{R as l}from"./zIndexSlice-CA_idCig.js";import{C as x}from"./ComposedChart-2Labsqm5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B0p7ODcV.js";import{L as a}from"./Line-DeRPzJVR.js";import{X as c}from"./XAxis-BYpmzEP_.js";import{T as g}from"./Tooltip-CZlwquR_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DkSz9-jm.js";import"./CartesianAxis-CvEaQSy2.js";import"./Layer-Byvx6_V4.js";import"./resolveDefaultProps-x0HcBOxj.js";import"./Text-CGIrE8uN.js";import"./DOMUtils-BuwrxSLS.js";import"./isWellBehavedNumber-COd4_fF0.js";import"./Label-D3bkn6cZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DyKLPJQn.js";import"./index-DnUMf4Cl.js";import"./index-CDzW5wMM.js";import"./types-Dbi5OTiB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Chi1ci-p.js";import"./immer-QRpJ3co-.js";import"./RechartsWrapper-atPiLOuE.js";import"./index-DssGAL0P.js";import"./index-BOf2N6VY.js";import"./axisSelectors-DMG299p3.js";import"./d3-scale-Xh1lphWt.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B0jH1uhv.js";import"./chartDataContext-BNkTUWKr.js";import"./CategoricalChart-BbsCvjmJ.js";import"./tooltipContext-CHFypPPU.js";import"./AnimatedItems-2Sc0l-_O.js";import"./useAnimationId-vAkCmZi7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D_xKR8pa.js";import"./ActiveShapeUtils-CmBRxm29.js";import"./RegisterGraphicalItemId-BL3S-b5-.js";import"./ErrorBarContext-ltXyVCQ2.js";import"./GraphicalItemClipPath-DB3DHpQ4.js";import"./SetGraphicalItem-MghETS_R.js";import"./getZIndexFromUnknown-B-cH9CYE.js";import"./graphicalItemSelectors-DVpE8neB.js";import"./Curve-CEx7pPNr.js";import"./step-BvrgBlnG.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DxCVVL9F.js";import"./Dot-B2U87Uh_.js";import"./getRadiusAndStrokeWidthFromDot-Du9ACRIL.js";import"./useElementOffset-Chf_8u6m.js";import"./uniqBy-j6nY3OwR.js";import"./iteratee-BdSYYQdu.js";import"./Cross-D-qn9QcR.js";import"./Sector-CoUWNXY1.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
