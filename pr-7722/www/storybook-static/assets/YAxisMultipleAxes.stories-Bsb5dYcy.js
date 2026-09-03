import{R as t}from"./iframe-DwwIEbnV.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Bawx2GP2.js";import{R as l}from"./zIndexSlice-CQLOtaPs.js";import{C as x}from"./ComposedChart-Cmp_uiAi.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CkV_S-a9.js";import{L as a}from"./Line-B-nrSDyv.js";import{X as c}from"./XAxis-Cz_Rnhgj.js";import{T as g}from"./Tooltip-DVs9hVjY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BBU3iKAi.js";import"./Text-CoeOXdGz.js";import"./resolveDefaultProps-BAdQSn8_.js";import"./DOMUtils-Da_EKwNY.js";import"./isWellBehavedNumber-8UixZU7J.js";import"./useId-ccy3SIu_.js";import"./useBackwardsCompatibleTheme-Fn2SpsbR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B_JcFefp.js";import"./index-8KuM36sP.js";import"./index-DybJUNaL.js";import"./RechartsWrapper-BuqxCVgz.js";import"./axisSelectors-Cxc5coFg.js";import"./throttle-Blsl_VHV.js";import"./d3-scale-DUeQ8AUA.js";import"./index-DnZ0PMCs.js";import"./index-Dy8lu7uT.js";import"./renderedTicksSlice-COQyRYk9.js";import"./index-DEjMF1lf.js";import"./CartesianAxis-Duh3rzkN.js";import"./Layer-6Fp4VzoQ.js";import"./types-DYVbiWe3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CyJUqNIj.js";import"./chartDataContext-UFw-Jz6V.js";import"./CategoricalChart-COFTchkj.js";import"./AnimatedItems-Ds3KeOI2.js";import"./useAnimationId-Cx0Chyvr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CGZsEs1f.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D4ijpv1W.js";import"./tooltipContext-BYzhs__g.js";import"./RegisterGraphicalItemId-BM_5HpC8.js";import"./ErrorBarContext-BgIeQnXJ.js";import"./GraphicalItemClipPath-CajkPYvX.js";import"./SetGraphicalItem-jtaJvjxx.js";import"./getZIndexFromUnknown-mhTMZkDS.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Cp48jKTe.js";import"./Curve-DrEaRkOl.js";import"./step-CWAHA4V_.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DJFnJVEG.js";import"./Dot-DmrEwaiX.js";import"./getRadiusAndStrokeWidthFromDot-jdfKPlMV.js";import"./useElementOffset-CXNuRQTj.js";import"./uniqBy-BnkYei7v.js";import"./iteratee-CU8R_nxk.js";import"./Cross-DSpczqE0.js";import"./Sector-B3F8CCU3.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Lt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
