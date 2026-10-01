import{R as t}from"./iframe-Bs3p_tzt.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-7MDEiAH-.js";import{R as l}from"./zIndexSlice-DcX3AzLa.js";import{C as x}from"./ComposedChart-KuKgrM96.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-S93XsLQg.js";import{L as a}from"./Line-GIJ-1XxW.js";import{X as c}from"./XAxis-D4sncX3B.js";import{T as g}from"./Tooltip-CGFqiCcr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D1fZ0tZ3.js";import"./Text-fd4E17kL.js";import"./resolveDefaultProps-CZZ-mEKB.js";import"./DOMUtils-BuNDld79.js";import"./isWellBehavedNumber-BsuO-HCD.js";import"./useId-Bu7K8pR2.js";import"./useBackwardsCompatibleTheme-DDcrSO0e.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-bsBUBclv.js";import"./index-B1i9GgdA.js";import"./index-B2enMVi0.js";import"./RechartsWrapper-C611g8G8.js";import"./axisSelectors-C4-S1rEu.js";import"./throttle-BEGWT0nE.js";import"./d3-scale-D3QRU-MC.js";import"./index-DMMqTPnq.js";import"./index-UxLT5P2P.js";import"./renderedTicksSlice-CtTEEx-4.js";import"./index-BfdycSnH.js";import"./CartesianAxis-hsXt1MB3.js";import"./Layer-BnnxApB2.js";import"./types-DwWjBcLa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DvvRDnZV.js";import"./chartDataContext-Da2Hh662.js";import"./CategoricalChart-BaI0fWCj.js";import"./AnimatedItems-BKsmNJL9.js";import"./useAnimationId-BGb6X0s3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DGv7rq-A.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C1lnxfx5.js";import"./tooltipContext-D9KAOXWR.js";import"./RegisterGraphicalItemId-DLHqq9CD.js";import"./ErrorBarContext-Bf6tfPH3.js";import"./GraphicalItemClipPath-CW7J0A_O.js";import"./SetGraphicalItem-B-q3EqQB.js";import"./getZIndexFromUnknown-B_CJl0Ko.js";import"./useGraphicalItemIdentity-Bn1qTGOS.js";import"./dataEntryStyles-DToHeB0S.js";import"./Curve-OpKkiqhX.js";import"./step-B0GBXtEj.js";import"./path-DyVhHtw_.js";import"./ActivePoints-6kUizrYZ.js";import"./Dot-CT0CWpgM.js";import"./getRadiusAndStrokeWidthFromDot-ChgnJYUB.js";import"./useElementOffset-L8c5YtIC.js";import"./uniqBy-CTQygRzA.js";import"./iteratee-CcX_f7ol.js";import"./Cross-C27z34rY.js";import"./Sector-DBnEJkKd.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
