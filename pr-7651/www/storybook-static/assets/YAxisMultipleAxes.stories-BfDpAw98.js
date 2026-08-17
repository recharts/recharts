import{R as t}from"./iframe-pNwHFSPW.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BhLAmjxa.js";import{R as l}from"./zIndexSlice-DugJPvbP.js";import{C as x}from"./ComposedChart-AJqQajBW.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Dqlr1thk.js";import{L as a}from"./Line-CVgLMECr.js";import{X as c}from"./XAxis-KNJz3bpH.js";import{T as g}from"./Tooltip-EUdUlDr7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bzd_UlcO.js";import"./Text-BBlVElsZ.js";import"./resolveDefaultProps-DWmH-vKe.js";import"./DOMUtils-BNxHxmQg.js";import"./isWellBehavedNumber-DROlGubD.js";import"./useBackwardsCompatibleTheme-Du48Xyly.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CUbdM7HK.js";import"./index-CPy1Xi6O.js";import"./index-PYvYT1WL.js";import"./RechartsWrapper-DLpwYUVG.js";import"./index-BghrGVl-.js";import"./index-C8JT8QJm.js";import"./throttle-B5IaBbRH.js";import"./axisSelectors-BSoQDh0E.js";import"./d3-scale-CYWGushN.js";import"./renderedTicksSlice-oWoSi7uM.js";import"./CartesianAxis-Bs05prYp.js";import"./Layer-CjujILu-.js";import"./types-DQ3XPolE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DzTN0VjC.js";import"./chartDataContext-DWAHv7Ax.js";import"./CategoricalChart-CpM9_I3K.js";import"./AnimatedItems-BZeu0cey.js";import"./useAnimationId-DPXGQUo9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CkjZyP7u.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-bOSJ1OgY.js";import"./tooltipContext-QNLT4wBX.js";import"./RegisterGraphicalItemId-Cqk6hpjs.js";import"./ErrorBarContext-DVdtlYtH.js";import"./GraphicalItemClipPath-CPEJp_aS.js";import"./SetGraphicalItem-nLd7ALhr.js";import"./getZIndexFromUnknown-DTRpx5bE.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BVXi8M17.js";import"./Curve-5mQV-JEl.js";import"./step-BsFkcvF5.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CCq-PEMS.js";import"./Dot-ByamxSDz.js";import"./getRadiusAndStrokeWidthFromDot-D0TIAu-Y.js";import"./useElementOffset-DBzzVBN1.js";import"./uniqBy-CN3CrqJk.js";import"./iteratee-uh7lygO_.js";import"./Cross-BHm6uyaP.js";import"./Sector-Db4NkV4b.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
