import{R as t}from"./iframe-BB3m-jQ-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DFvGwgRl.js";import{R as l}from"./zIndexSlice-FQKZcMr3.js";import{C as x}from"./ComposedChart-B0LqgEa_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BlYzhLLE.js";import{L as a}from"./Line-BbNuxZg2.js";import{X as c}from"./XAxis-pxNAoOYF.js";import{T as g}from"./Tooltip-MUgVRJs6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bu83WliH.js";import"./CartesianAxis-DNzSt2Ud.js";import"./Layer-Bqk0isqQ.js";import"./resolveDefaultProps-D0AMNGzs.js";import"./Text-CQr6lPUD.js";import"./DOMUtils-v0Nl75wH.js";import"./isWellBehavedNumber-CFV6UIHi.js";import"./Label-DntCvjB2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BGBP_zx3.js";import"./index-iRCZcjtj.js";import"./index-B5zT9Os4.js";import"./types-DSXkzfdz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-eHBrq3FU.js";import"./immer-Bb2hNnOx.js";import"./RechartsWrapper-BeVmqhAg.js";import"./index-AMNPHvWI.js";import"./index-CDnCFTh2.js";import"./axisSelectors-D1VEbPH5.js";import"./d3-scale-m2Sr9nLg.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CVsCYNZX.js";import"./chartDataContext-DDcaXf9b.js";import"./CategoricalChart-5b78-xMl.js";import"./tooltipContext-CnuDDGAi.js";import"./AnimatedItems-CAeOjIy6.js";import"./useAnimationId-D5BtmEUA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BZncl5wy.js";import"./ActiveShapeUtils-DMvn0j27.js";import"./RegisterGraphicalItemId-Co_tAnFn.js";import"./ErrorBarContext-BC4Vqnor.js";import"./GraphicalItemClipPath-Bd5aR1hb.js";import"./SetGraphicalItem-QprqGCl_.js";import"./getZIndexFromUnknown-CAsEoNUg.js";import"./graphicalItemSelectors-SYOYweJl.js";import"./Curve-DSs4mNcf.js";import"./step-BVafN2Sf.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C8hQhNqS.js";import"./Dot-D2XHIErC.js";import"./getRadiusAndStrokeWidthFromDot-V3DuSoMt.js";import"./useElementOffset-CexjbpfR.js";import"./uniqBy-CGQlZ1n7.js";import"./iteratee-B1717eE-.js";import"./Cross-N7Is12JC.js";import"./Sector-YzzTDgsn.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
