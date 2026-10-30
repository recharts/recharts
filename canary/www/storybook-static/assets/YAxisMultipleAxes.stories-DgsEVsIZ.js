import{R as t}from"./iframe-C1szs8Ge.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BL_YScKz.js";import{R as l}from"./zIndexSlice-2Z2wgmDW.js";import{C as x}from"./ComposedChart-CENNwY7-.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BCMMQZF2.js";import{L as a}from"./Line-BHGjXSGr.js";import{X as c}from"./XAxis-DAR-gQPA.js";import{T as g}from"./Tooltip-CuajHWD2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DKy-t54T.js";import"./Text-BAXgr8vS.js";import"./resolveDefaultProps-CIiYtXni.js";import"./DOMUtils-DrwuOTMG.js";import"./ZIndexLayer-n44qhyKx.js";import"./index-Bs58vI0d.js";import"./index-DcPa8fOp.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Du9qp_Aq.js";import"./throttle-BnhEbDBT.js";import"./axisSelectors-D9npcJPs.js";import"./d3-scale-D4TUcbxA.js";import"./CartesianAxis-8dKjDOC0.js";import"./Layer-KO-TauTm.js";import"./types-DbKLPbYB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CTsziWKi.js";import"./index-CRFlBobz.js";import"./index-D0v9EDwx.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-xd3kaPdN.js";import"./index-BmvynZon.js";import"./CartesianChart-CXVzGtkA.js";import"./ZIndexPortal-DqFnA3uG.js";import"./CategoricalChart-dJgQ9xv_.js";import"./LabelList-iP8lFrAf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Qa1VLo8n.js";import"./useAnimationId-Cg9ej0wY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cmzt23TH.js";import"./tooltipContext-Qg5R6Zry.js";import"./dataEntryStyles-D1ZH1qoE.js";import"./ErrorBarContext-C-G-Mak5.js";import"./activeStyles-CqRrjByh.js";import"./SetGraphicalItem-DIZkXs21.js";import"./getZIndexFromUnknown-COGfRxGI.js";import"./themeFill-BkM1x4hA.js";import"./useEffectiveDataKey-SSLwUhsN.js";import"./fillDefinitions-DO3waM5C.js";import"./omit-C154lu3f.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BGMmiUdq.js";import"./step-CEIdKdZW.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CPsO1qxs.js";import"./Dot-DMbI3mI2.js";import"./Symbols-By-_RD8m.js";import"./symbol-D-xguMnA.js";import"./getRadiusAndStrokeWidthFromDot-DKxug9PK.js";import"./useElementOffset-B3huUP7p.js";import"./uniqBy-BgGgOORw.js";import"./iteratee-CroL2MN8.js";import"./Cross-D0i44YDT.js";import"./Sector-4Lf6e-B4.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Xt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Xt as __namedExportsOrder,Wt as default};
