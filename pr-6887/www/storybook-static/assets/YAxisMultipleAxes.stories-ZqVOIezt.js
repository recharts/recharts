import{e as t}from"./iframe-BjHGzV_g.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CtpClMsJ.js";import{Y as r}from"./YAxis-ChYWGLAS.js";import{R as l}from"./arrayEqualityCheck-DSmzEAOj.js";import{C as x}from"./ComposedChart-B9pmH1Bx.js";import{B as o}from"./Bar-CxX80bPB.js";import{L as a}from"./Line-Dlxi6_bB.js";import{X as c}from"./XAxis-DS6la1y6.js";import{T as A}from"./Tooltip-Bz7pyy1o.js";import{R as g}from"./RechartsHookInspector-D9VSdGzF.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BgzxguqS.js";import"./CartesianAxis-BWIPgogw.js";import"./Layer-C_w7y8lS.js";import"./Text-D_R22YNN.js";import"./DOMUtils-DJKWXfCz.js";import"./Label-CYo-ySuR.js";import"./PolarUtils-DVfIyed4.js";import"./ZIndexLayer-CXQSohMh.js";import"./zIndexSlice-CeUR4dop.js";import"./types-CnIXHZZY.js";import"./hooks-j3l1IZT0.js";import"./axisSelectors-Dcbbky9Q.js";import"./RechartsWrapper-BpQ0Nvj-.js";import"./CartesianChart-NrBloX0j.js";import"./chartDataContext-CvBxgAkC.js";import"./CategoricalChart-DUk9fPa6.js";import"./tooltipContext-nxdyC6oO.js";import"./ReactUtils-B_OhT6T8.js";import"./ActiveShapeUtils-GRlfg2FZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DzPvnNyw.js";import"./useAnimationId-aInF8bWj.js";import"./Trapezoid-BmpvqocW.js";import"./Sector-DqpJYgqY.js";import"./Symbols-BMG8T0tH.js";import"./Curve-C15B5k0e.js";import"./RegisterGraphicalItemId-DQPUuqCc.js";import"./ErrorBarContext-B6rkjVms.js";import"./GraphicalItemClipPath-BSkbIiNd.js";import"./SetGraphicalItem-CZBegNK8.js";import"./getZIndexFromUnknown-C51lp983.js";import"./graphicalItemSelectors-yGG1F5ID.js";import"./ActivePoints-C5an_xbq.js";import"./Dot-DgNeiD7R.js";import"./getRadiusAndStrokeWidthFromDot-BLocnVTZ.js";import"./useElementOffset--3uo1L7M.js";import"./iteratee-BEelosjX.js";import"./Cross-BpvzPM3C.js";import"./index-D2ltde3K.js";import"./ChartSizeDimensions-RaKYClSi.js";import"./OffsetShower-CgzrN99U.js";import"./PlotAreaShower-CopDbqvE.js";const yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ut=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,ut as __namedExportsOrder,yt as default};
