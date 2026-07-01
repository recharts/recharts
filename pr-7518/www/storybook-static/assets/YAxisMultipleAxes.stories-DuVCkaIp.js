import{R as t}from"./iframe-EI0Ls4hC.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BDDTXkrb.js";import{R as l}from"./zIndexSlice-yKXgbZM9.js";import{C as x}from"./ComposedChart-Be7puHYx.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Cmq4uzGB.js";import{L as a}from"./Line-B9NkJQGA.js";import{X as c}from"./XAxis-isMopIja.js";import{T as g}from"./Tooltip-Bw5DnfvW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BON1YutH.js";import"./CartesianAxis-C7eaHI9Q.js";import"./Layer-D2PSeBO4.js";import"./resolveDefaultProps-NPYXHAaZ.js";import"./Text-BwBPbfGl.js";import"./DOMUtils-DrXieiLo.js";import"./isWellBehavedNumber-DWxIjg9k.js";import"./Label-V9mTYK6m.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C3S5Zj6R.js";import"./index-nHjkW3_e.js";import"./index-D-rMjtE6.js";import"./types-C8rhvdfR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CoFXcUVC.js";import"./throttle-Cdlad3bH.js";import"./RechartsWrapper-CVfLxVvb.js";import"./index-CzoIO75z.js";import"./index-BIz2bYpH.js";import"./axisSelectors-Cok1HNra.js";import"./d3-scale-DBYKxB4y.js";import"./CartesianChart-DxsNLdfg.js";import"./chartDataContext-AgenIsJt.js";import"./CategoricalChart-DnbprEZ3.js";import"./tooltipContext-Bc4JHtO1.js";import"./AnimatedItems-CvuB6fQ_.js";import"./useAnimationId-B72UM_RE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dj6dtcwd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CplwhB-J.js";import"./RegisterGraphicalItemId-CXkeXAps.js";import"./ErrorBarContext-BeDV4HJb.js";import"./GraphicalItemClipPath-5KTFkQ5K.js";import"./SetGraphicalItem-BhScXCrX.js";import"./getZIndexFromUnknown-BkgdKLAJ.js";import"./graphicalItemSelectors-D30ePsgQ.js";import"./Curve-eRlCLt7Q.js";import"./step-B6IK1iGd.js";import"./path-DyVhHtw_.js";import"./ActivePoints-gc55JVjB.js";import"./Dot-Cx4WJ9n0.js";import"./getRadiusAndStrokeWidthFromDot-DzmGdQsa.js";import"./useElementOffset-CcBFNVWl.js";import"./uniqBy-DSBYfBdC.js";import"./iteratee-kPsQss5F.js";import"./Cross-C0YHKLl7.js";import"./Sector-BMV3V-O7.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
