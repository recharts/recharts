import{R as t}from"./iframe-BNtNFygj.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BOh_LEcr.js";import{R as l}from"./zIndexSlice-B5_48POF.js";import{C as x}from"./ComposedChart-D__S-XeQ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DSpok09j.js";import{L as a}from"./Line-jOR65EnP.js";import{X as c}from"./XAxis-CD7gPBRF.js";import{T as g}from"./Tooltip-CbPx-O8K.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CtODaKOy.js";import"./Text-CVsQWuYy.js";import"./resolveDefaultProps-DL7SVEd6.js";import"./DOMUtils-rxSz7zRH.js";import"./ZIndexLayer-DDjEreuo.js";import"./index-W1q-JWvv.js";import"./index-Da7ZrvvU.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-1cb9nRSh.js";import"./throttle-D7zSzoPk.js";import"./axisSelectors-mpzDPz7I.js";import"./d3-scale-AvjMremu.js";import"./CartesianAxis-B0AA9leW.js";import"./Layer-BWvVPR01.js";import"./types-Bv6DwZgB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Gd5JIWsJ.js";import"./index-CfoYvP3O.js";import"./index-BaHcdURT.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CuiNtI3q.js";import"./index-DIbrCmVg.js";import"./fillDefinitions-DMQk4akV.js";import"./CartesianChart-BuwWmjhG.js";import"./ZIndexPortal-yiaw4zX4.js";import"./CategoricalChart-xvnPgk-J.js";import"./LabelList-BMYELo_i.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BeuBChLi.js";import"./useAnimationId-DUqQXAVR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BNpZBMKl.js";import"./tooltipContext-DG0MKKsE.js";import"./dataEntryStyles-Bi8dthc7.js";import"./ErrorBarContext-BnU4GK2I.js";import"./activeStyles-B8Yp5U6S.js";import"./SetGraphicalItem-D8wY5DBd.js";import"./getZIndexFromUnknown-Bj9xgBux.js";import"./useEffectiveDataKey-BUQC0_MU.js";import"./omit-CGPykWMN.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CzR2ia5J.js";import"./step-3Vwob_iR.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CXNwUvpE.js";import"./Dot-DlYRSPs_.js";import"./Symbols-DqFb5GoD.js";import"./symbol-z9UqeDk-.js";import"./getRadiusAndStrokeWidthFromDot-BCWYzwNk.js";import"./useElementOffset-BAzX0SkM.js";import"./uniqBy-dp3XQ01K.js";import"./iteratee-CSMACznW.js";import"./Cross-Ch0LMa9x.js";import"./Sector-p7c5jngg.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
