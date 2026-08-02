import{R as t}from"./iframe-B87Mdf3W.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-vKfYeEWT.js";import{R as l}from"./zIndexSlice-BIRpUMd-.js";import{C as x}from"./ComposedChart-CbdJJgaC.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CmasOwOZ.js";import{L as a}from"./Line-BBdGZ1Gw.js";import{X as c}from"./XAxis-CR6bWmBK.js";import{T as g}from"./Tooltip-COv8FQmh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D69_s3j-.js";import"./Text-CiS0vhWP.js";import"./resolveDefaultProps-DKsQyDke.js";import"./DOMUtils-Dj6lanE1.js";import"./isWellBehavedNumber-B3D8b1zU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CBz7KXzh.js";import"./index-CFlriD1l.js";import"./index-DOs9r3IB.js";import"./RechartsWrapper-CTH97mkX.js";import"./index-DzAi6-mi.js";import"./index-Kzzk0SfL.js";import"./throttle-B7C94OgR.js";import"./renderedTicksSlice--g9rzjaW.js";import"./axisSelectors-CjpQ8_nF.js";import"./d3-scale-BOgOxbfH.js";import"./CartesianAxis-Bnk9r_M-.js";import"./Layer-rvbR5IlK.js";import"./types-CS4XJdLR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-2ygZrkIo.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B1vhIJLv.js";import"./chartDataContext-qB4fiklo.js";import"./CategoricalChart-DkKx3P5s.js";import"./tooltipContext-FIMno2s6.js";import"./AnimatedItems-DhwNGwGQ.js";import"./useAnimationId-B04VzGQY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D3hzUcUp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dgoc85eT.js";import"./RegisterGraphicalItemId-B3POwG2t.js";import"./ErrorBarContext-DijL4Xrx.js";import"./GraphicalItemClipPath-DnF4EuGO.js";import"./SetGraphicalItem-BP9VRM5v.js";import"./getZIndexFromUnknown-DsPzlJcu.js";import"./graphicalItemSelectors-C2C4094n.js";import"./Curve-DIAAN1K7.js";import"./step-e5qRx30Q.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BuWd44OK.js";import"./Dot-CctAgg2L.js";import"./getRadiusAndStrokeWidthFromDot-Bhl0ZWck.js";import"./useElementOffset-B4Ud-MT_.js";import"./uniqBy-CB05smHV.js";import"./iteratee-CgJpmMi2.js";import"./Cross-CjMGaIX5.js";import"./Sector-DnrpkhtR.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Kt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Kt as __namedExportsOrder,vt as default};
