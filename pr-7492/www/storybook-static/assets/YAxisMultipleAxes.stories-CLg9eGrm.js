import{R as t}from"./iframe-BlvZN_ps.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CfoV_oqk.js";import{R as l}from"./zIndexSlice-D5hgUm6A.js";import{C as x}from"./ComposedChart--jP60YbA.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BJsP7AvT.js";import{L as a}from"./Line-H_lUcLKC.js";import{X as c}from"./XAxis-KWtoy5jB.js";import{T as g}from"./Tooltip-CQikDSKZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-ChlOH98w.js";import"./CartesianAxis-Bbwk-dKT.js";import"./Layer-BGC4J_xD.js";import"./resolveDefaultProps-BSk6HMjY.js";import"./Text-iORmPHTw.js";import"./DOMUtils-CsRoe294.js";import"./isWellBehavedNumber-D-GNZTzD.js";import"./Label-DWRV51vs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BWby1RF4.js";import"./index-gQ6L8YEG.js";import"./index-DqSoJz4u.js";import"./types-DQZAaZ_X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D8ZDt7ph.js";import"./immer-CGkt0g8p.js";import"./RechartsWrapper-DZiKfiby.js";import"./index-DM8R45IP.js";import"./index-Q4Uh5SEe.js";import"./axisSelectors-oNKIzGeo.js";import"./d3-scale-D-SQjsd3.js";import"./CartesianChart-Czz_wvXV.js";import"./chartDataContext-hk4GvDfq.js";import"./CategoricalChart-JZ4zyfB8.js";import"./tooltipContext-DdzM9sjv.js";import"./AnimatedItems-CK8w4tlK.js";import"./useAnimationId-FA58Q0Bf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BjArQHIN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D8MF483E.js";import"./RegisterGraphicalItemId-r44ao9oh.js";import"./ErrorBarContext-DIIvOPaT.js";import"./GraphicalItemClipPath-B9V208TL.js";import"./SetGraphicalItem-DGuU9f1e.js";import"./getZIndexFromUnknown-D8zVDgPW.js";import"./graphicalItemSelectors-Bmu143Am.js";import"./Curve-Bcq56GGu.js";import"./step-Cd6fl88T.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DBXxGTLr.js";import"./Dot-Do_OPL_B.js";import"./getRadiusAndStrokeWidthFromDot-sYFWnDzD.js";import"./useElementOffset-jc0N9IvC.js";import"./uniqBy-Gl9-Tg86.js";import"./iteratee-BSz8A-ph.js";import"./Cross-CMdzAsQv.js";import"./Sector-CkZnjYxr.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
