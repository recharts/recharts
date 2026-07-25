import{R as t}from"./iframe-5yXyXnaZ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DrQXbr6a.js";import{R as l}from"./zIndexSlice-BDAt33KO.js";import{C as x}from"./ComposedChart-Dwgw5DNZ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-vfktTcFK.js";import{L as a}from"./Line-DVLh0I7m.js";import{X as c}from"./XAxis-DBNQ58f8.js";import{T as g}from"./Tooltip-DJ05kPZA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-B2yef_ws.js";import"./Layer-DvsJVPiG.js";import"./resolveDefaultProps-DO3cHs1F.js";import"./Text-CgBcsLfs.js";import"./DOMUtils-BV08T-c-.js";import"./isWellBehavedNumber-CjXf4Ny0.js";import"./Label-BYYKCmSa.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DtzoUjMA.js";import"./index-Bglp-BB_.js";import"./index-B8ryNKY3.js";import"./types-D9gPTTpR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C1OGHM2B.js";import"./throttle-Cv9w3d5_.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DA6sibZ3.js";import"./index-BHMzx10I.js";import"./index-sztAkQPC.js";import"./axisSelectors-BXq32W01.js";import"./d3-scale-qreNZqM_.js";import"./CartesianChart-9hlK9pZx.js";import"./chartDataContext-CuGicOh1.js";import"./CategoricalChart-DQJ8zgbM.js";import"./tooltipContext-CvAnpwYG.js";import"./AnimatedItems-B7Ugi4uF.js";import"./useAnimationId-C0yd1tvr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D75afbJD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C8Wl3VBj.js";import"./RegisterGraphicalItemId-BWyrz_yh.js";import"./ErrorBarContext-3caAFu0Q.js";import"./GraphicalItemClipPath-C3T_bjgu.js";import"./SetGraphicalItem-ChFugbQc.js";import"./getZIndexFromUnknown-CWbr-zOK.js";import"./graphicalItemSelectors-BCn9O9wd.js";import"./Curve-BJjaxUht.js";import"./step-7JpJFPkO.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CqHCG0xk.js";import"./Dot-Dqwh_5PD.js";import"./getRadiusAndStrokeWidthFromDot-CDO922ey.js";import"./useElementOffset-CD3Qxymn.js";import"./uniqBy-BUqkqiyG.js";import"./iteratee-_t3hDaip.js";import"./Cross-Cx3nyd1y.js";import"./Sector-PYTlOKi8.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
