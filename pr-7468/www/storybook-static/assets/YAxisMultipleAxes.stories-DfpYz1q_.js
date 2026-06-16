import{R as t}from"./iframe-Cgvurs-_.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BXqkMu3a.js";import{R as l}from"./zIndexSlice-B_EZWJad.js";import{C as x}from"./ComposedChart-CzftpN1s.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BXroguMb.js";import{L as a}from"./Line-gOmghgbw.js";import{X as c}from"./XAxis-CfwTV-KQ.js";import{T as g}from"./Tooltip-DBJ0bUIr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DKeAvde6.js";import"./CartesianAxis-BZbrDelp.js";import"./Layer-BfP1S3qE.js";import"./resolveDefaultProps-CKD-pks7.js";import"./Text-BoAtXQm_.js";import"./DOMUtils-DYR9owTl.js";import"./isWellBehavedNumber-wdbvvMft.js";import"./Label-CsnYNS62.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CAbZgrje.js";import"./index-qEaPtvJ4.js";import"./index-DUeZpKgX.js";import"./types-bZuMx1t8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CFCAMk-H.js";import"./immer-BqIPbCUY.js";import"./RechartsWrapper-Dz-OqOgD.js";import"./index-BumewqgT.js";import"./index-COSZGJYp.js";import"./axisSelectors-Qbk3cIqD.js";import"./d3-scale-C6AR89xW.js";import"./string-B6fdYHAA.js";import"./CartesianChart-F9cdjQs_.js";import"./chartDataContext-D5SqleTT.js";import"./CategoricalChart-vxMjiHHj.js";import"./tooltipContext-d2crV3t8.js";import"./AnimatedItems-DU8uToRY.js";import"./useAnimationId-DTgCoSkV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-SDGp320Q.js";import"./ActiveShapeUtils-mXcowNCt.js";import"./RegisterGraphicalItemId-Dza9jiXm.js";import"./ErrorBarContext-h79zKdGg.js";import"./GraphicalItemClipPath-BYm3GjGL.js";import"./SetGraphicalItem-B22TqrnA.js";import"./getZIndexFromUnknown-BpFbF3N-.js";import"./graphicalItemSelectors-DwW4vJEc.js";import"./Curve-fHqvHXD4.js";import"./step-BqWVDUYB.js";import"./path-DyVhHtw_.js";import"./ActivePoints-ByYPPJm9.js";import"./Dot-CWR0wmvP.js";import"./getRadiusAndStrokeWidthFromDot-CpehKYWF.js";import"./useElementOffset-BwaQaS3A.js";import"./uniqBy-6bgl0NGd.js";import"./iteratee-_BM_Lsph.js";import"./Cross-sKVT2Eib.js";import"./Sector-oFfzS_Kk.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
