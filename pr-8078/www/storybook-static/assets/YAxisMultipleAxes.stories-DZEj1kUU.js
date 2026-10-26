import{R as t}from"./iframe-DQVzMSYD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C77qq_aV.js";import{R as l}from"./zIndexSlice-COaPk7HG.js";import{C as x}from"./ComposedChart-C_Pl0aog.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BO1LvaVO.js";import{L as a}from"./Line-D2xiXoDa.js";import{X as c}from"./XAxis-EcPa3Cb-.js";import{T as g}from"./Tooltip-DY53DxeQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-D0zJX0d_.js";import"./Text-CPLLX1IN.js";import"./resolveDefaultProps-B_q_xmSS.js";import"./pageBackground-Bn8h5x5L.js";import"./useId-DXg-zq7I.js";import"./ZIndexLayer-BnIZToy7.js";import"./index-BwLkx-9j.js";import"./index-E8O3UkuU.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BSp_MBDw.js";import"./throttle-RO9RTr3r.js";import"./dataEntryStyles-CJ67-Ft7.js";import"./axisSelectors-D2aZ2Nk7.js";import"./d3-scale-CB3Nn2aV.js";import"./CartesianAxis-D4euaSSo.js";import"./Layer-Bj9bz4HQ.js";import"./types-DP1nwDJM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-h-EAnLPI.js";import"./index-mH-U0iC2.js";import"./index-BedQbpOM.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C-LDIUUV.js";import"./index-eU6OKF0g.js";import"./CartesianChart-DUEad30c.js";import"./chartDataContext-FD6VhEJQ.js";import"./CategoricalChart-Doih-QNH.js";import"./activeStyles-BOapb_qi.js";import"./useAnimationId-BChg9XFS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BkBeu2DV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cp3IBj9J.js";import"./tooltipContext-CAUFXK5m.js";import"./RegisterGraphicalItemId-B0YbUPXE.js";import"./ErrorBarContext-CI8iDnvM.js";import"./SetGraphicalItem-DFlRgyvC.js";import"./getZIndexFromUnknown-CXyeEP5O.js";import"./useEffectiveDataKey-CkAzTA5N.js";import"./omit-Db9RjaTb.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Bt3n70L8.js";import"./step-BQC9MPym.js";import"./path-DyVhHtw_.js";import"./ActivePoints-rQZSXr73.js";import"./Dot-BkzLITlZ.js";import"./getRadiusAndStrokeWidthFromDot-C00hbLzP.js";import"./useElementOffset-DyUzreY7.js";import"./uniqBy-BJn9ALDR.js";import"./iteratee-BPCNyx3w.js";import"./Cross-DyQZyHKO.js";import"./Sector-ssOD9QbL.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
