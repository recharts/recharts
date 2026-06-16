import{R as t}from"./iframe-DMp7qWBc.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Csr1iP4L.js";import{R as l}from"./zIndexSlice-DwEqiBQ-.js";import{C as x}from"./ComposedChart-r_H9u5_0.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Dw0JmqF5.js";import{L as a}from"./Line-ChEIx0ob.js";import{X as c}from"./XAxis-BEU7rEXV.js";import{T as g}from"./Tooltip-DWEhkbfW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-xm_p6-0H.js";import"./CartesianAxis-BpcewqQP.js";import"./Layer-CuLdBvJ8.js";import"./resolveDefaultProps-CCMYu7HG.js";import"./Text-BUBM5ImZ.js";import"./DOMUtils-u8y8aNP3.js";import"./isWellBehavedNumber-B2IEwkWH.js";import"./Label-CTVwy9Ni.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-r-UQ7MHf.js";import"./index-DJULArvF.js";import"./index-FSdFZP1-.js";import"./types-nrPXTQ41.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-xTgogQQT.js";import"./immer-Cdu3yC2y.js";import"./RechartsWrapper-8C7w0fBl.js";import"./index-Bwz7camG.js";import"./index-BjkWDWFl.js";import"./axisSelectors-CBZu9wu4.js";import"./d3-scale-BXmCrXPd.js";import"./string-B6fdYHAA.js";import"./CartesianChart-k38Maw3n.js";import"./chartDataContext-CQxGEncO.js";import"./CategoricalChart-Wp3XMWTG.js";import"./tooltipContext-DKR079yv.js";import"./AnimatedItems-BdLU55_g.js";import"./useAnimationId-Bo28EVo_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-hZTYOPpO.js";import"./ActiveShapeUtils-B9LOxtfw.js";import"./RegisterGraphicalItemId-CQp3zThr.js";import"./ErrorBarContext-BXcE1fb6.js";import"./GraphicalItemClipPath-BhBDN4-E.js";import"./SetGraphicalItem-DeAOJWfR.js";import"./getZIndexFromUnknown-CYkR5FEl.js";import"./graphicalItemSelectors-S6DhiXfP.js";import"./Curve-ClaSDCwv.js";import"./step-BmHxAVOq.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BbdycfO-.js";import"./Dot-BLk4Ltpd.js";import"./getRadiusAndStrokeWidthFromDot-3yPUTvTw.js";import"./useElementOffset-DiViSUwj.js";import"./uniqBy-CQGZokB0.js";import"./iteratee-g85ug9Sr.js";import"./Cross-CwfmxRKV.js";import"./Sector-Di9ZlAww.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
