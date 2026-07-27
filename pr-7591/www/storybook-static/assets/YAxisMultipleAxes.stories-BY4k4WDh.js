import{R as t}from"./iframe-9izd3D9f.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DDd0ZoO9.js";import{R as l}from"./zIndexSlice-j8GW4H6F.js";import{C as x}from"./ComposedChart-CUUhu7OO.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BgyD3TSL.js";import{L as a}from"./Line-DeweEXxf.js";import{X as c}from"./XAxis--s8YS1Wl.js";import{T as g}from"./Tooltip-D2A1sLSM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-C-mmkXWm.js";import"./Layer-CGfY9rzU.js";import"./resolveDefaultProps-CJPuqJ9q.js";import"./Text-DrtU0dSh.js";import"./DOMUtils-BT3FOC_T.js";import"./isWellBehavedNumber-Dt2_Y5DC.js";import"./Label-DH_iQkHv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CbN30hBP.js";import"./index-DfNj7uF8.js";import"./index-QeEXQkn5.js";import"./types-DZJVpBfQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-xsvpNcHR.js";import"./throttle-Dy12ptOd.js";import"./RechartsThemeContext-CsvLvw9-.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-CpTAS-BM.js";import"./index-DrKXWdQ6.js";import"./index-D25GhdX2.js";import"./axisSelectors-C_YuJB8n.js";import"./d3-scale-592QtAt9.js";import"./CartesianChart-Cdk7-_gT.js";import"./chartDataContext-D7Iq0aTs.js";import"./CategoricalChart-B8CDnPPF.js";import"./tooltipContext-8-j-pmHM.js";import"./AnimatedItems-BaOOJr-i.js";import"./useAnimationId-DwScawE-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CFwhI2o-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BG6vmKAa.js";import"./RegisterGraphicalItemId-DMscoraw.js";import"./ErrorBarContext-BIj0xSPV.js";import"./GraphicalItemClipPath-DPeQpV-c.js";import"./SetGraphicalItem-DzCkGHMg.js";import"./getZIndexFromUnknown-CxPEdDy6.js";import"./graphicalItemSelectors-CV94R21c.js";import"./Curve-CwmLK7S7.js";import"./step-BVbRt37Q.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DABmwt2C.js";import"./Dot-BOLG4WLO.js";import"./getRadiusAndStrokeWidthFromDot-BjpuMrzG.js";import"./useElementOffset-BkW_M-s3.js";import"./uniqBy-BUkiiJvI.js";import"./iteratee-BCGyVx9n.js";import"./Cross-c7J_UcAh.js";import"./Sector-CjIuMRVG.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
