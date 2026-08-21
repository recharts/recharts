import{R as t}from"./iframe-DQS4myAB.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DYkI96_x.js";import{R as l}from"./zIndexSlice-CRKGO7km.js";import{C as x}from"./ComposedChart-BOQH8a6E.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D1NobRMK.js";import{L as a}from"./Line-DQDSu0_w.js";import{X as c}from"./XAxis-BNsLkqf_.js";import{T as g}from"./Tooltip-CxYlgvaJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BA6rOHS2.js";import"./Text-GAhVF71G.js";import"./resolveDefaultProps-BIteYQ9K.js";import"./DOMUtils-DInenL_7.js";import"./isWellBehavedNumber-zK_PJpDu.js";import"./useId-BeKVfcQc.js";import"./useBackwardsCompatibleTheme-CRkmgrCS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-HtJhw_Ro.js";import"./index-C2aL9BgM.js";import"./index-DDMxvxUH.js";import"./RechartsWrapper-A-SxCpKR.js";import"./index-Bqu6H91U.js";import"./index-CvvA9CVv.js";import"./throttle-BsoZ_hEn.js";import"./axisSelectors-DX4jdBfR.js";import"./d3-scale-5kESFzKL.js";import"./renderedTicksSlice-C2h8Z4jj.js";import"./CartesianAxis-C-8QqbQf.js";import"./Layer-BZTFzIOK.js";import"./types-lJpcgJl2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-T2RwwuUW.js";import"./chartDataContext-BIeQL6Ui.js";import"./CategoricalChart-bL4PqON3.js";import"./AnimatedItems-B7OZIGbB.js";import"./useAnimationId-C6swfQ_N.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CK6tGD2c.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BHK0lPEL.js";import"./tooltipContext-CRXDbcL6.js";import"./RegisterGraphicalItemId-Dq93b8dF.js";import"./ErrorBarContext-CpV7w0Pv.js";import"./GraphicalItemClipPath-CdlG8-5u.js";import"./SetGraphicalItem-CetdGSA-.js";import"./getZIndexFromUnknown-DydZiwiQ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DPXEtegD.js";import"./Curve-Biukq7ie.js";import"./step-CQkxY-v0.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Di6LpqPi.js";import"./Dot-DsGcbXq1.js";import"./getRadiusAndStrokeWidthFromDot-TGRMyQOP.js";import"./useElementOffset-C5KK8MoQ.js";import"./uniqBy-0l2iaavs.js";import"./iteratee-dvdUg7Fc.js";import"./Cross-Dbdnya2d.js";import"./Sector-2N_veHnt.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
