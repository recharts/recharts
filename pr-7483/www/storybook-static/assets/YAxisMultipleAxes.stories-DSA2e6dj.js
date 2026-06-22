import{R as t}from"./iframe-CvYyRmMb.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CjttnAc1.js";import{R as l}from"./zIndexSlice-Cp8J06te.js";import{C as x}from"./ComposedChart-B1VIvVBS.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CywyCTJv.js";import{L as a}from"./Line-Ox0BYUUe.js";import{X as c}from"./XAxis-3reDaDaV.js";import{T as g}from"./Tooltip-Dx8e65f1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CIMqXaai.js";import"./CartesianAxis-Be4--iUh.js";import"./Layer-C5boFLOM.js";import"./resolveDefaultProps-VEZFy5tu.js";import"./Text-B2fcvIhU.js";import"./DOMUtils-Bkzksssp.js";import"./isWellBehavedNumber-Lw6v0aAh.js";import"./Label-CYZiU-dh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BRD83X3W.js";import"./index-ximmRSZs.js";import"./index-GLYrDd_3.js";import"./types-Zq1Yq0zW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BWK4MGTQ.js";import"./immer-DxglGVhE.js";import"./RechartsWrapper-BcqH_-Dr.js";import"./index-D24-ZTWt.js";import"./index-BDFNdDeq.js";import"./axisSelectors-C-wRbz-D.js";import"./d3-scale-ZyzwHhuQ.js";import"./CartesianChart-BwCKHjXt.js";import"./chartDataContext-WmbcVDkE.js";import"./CategoricalChart-BVRGiY0N.js";import"./tooltipContext-CHMPJv0A.js";import"./AnimatedItems-C6-g87vu.js";import"./useAnimationId-BRj_sN3I.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BpNkhbV-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DSfdlNCJ.js";import"./RegisterGraphicalItemId-wnXP5bti.js";import"./ErrorBarContext-CaDNtEdt.js";import"./GraphicalItemClipPath-b7ayD98P.js";import"./SetGraphicalItem-Bggld1CO.js";import"./getZIndexFromUnknown-CYsi7ZAZ.js";import"./graphicalItemSelectors-C0p2i175.js";import"./Curve-B0ipnk9C.js";import"./step-CfQihZ4L.js";import"./path-DyVhHtw_.js";import"./ActivePoints-T9IVC-_m.js";import"./Dot-B1euizWe.js";import"./getRadiusAndStrokeWidthFromDot-Dx9iWsDu.js";import"./useElementOffset-CAsgb7km.js";import"./uniqBy-xgluxroo.js";import"./iteratee-B7aRbMAg.js";import"./Cross-C3DShcB5.js";import"./Sector-BTRwvM-7.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
