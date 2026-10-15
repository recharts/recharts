import{R as t}from"./iframe-ChR0bWJE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CGpwp8Ub.js";import{R as l}from"./zIndexSlice-BhLIr8Wn.js";import{C as x}from"./ComposedChart-ClNwId6E.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-HaqcqwBq.js";import{L as a}from"./Line-Bf1JxVE9.js";import{X as c}from"./XAxis-DMWQS67d.js";import{T as g}from"./Tooltip-Bkfw7jzk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-6wqjlAjr.js";import"./Text-C-MZlV37.js";import"./resolveDefaultProps-DDJR-IFM.js";import"./pageBackground-Ck_Bl7JJ.js";import"./isWellBehavedNumber-v660MqsB.js";import"./useId-Boe0dqcZ.js";import"./useBackwardsCompatibleTheme-vM76QVPo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-WvB5637-.js";import"./index-DG8BxRhE.js";import"./index-B9kAIK4B.js";import"./axisSelectors-D10lFE-B.js";import"./throttle-DlIXztO0.js";import"./d3-scale-Be-Yls2-.js";import"./CartesianAxis-ColQ2GQs.js";import"./Layer-sRcONOkX.js";import"./types-Db9gT7h1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DGFTmoGv.js";import"./index-C2XNNLS0.js";import"./index-CIRFvFA-.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DcESOjG2.js";import"./index-4WBQ6tEH.js";import"./CartesianChart-Csbt_4F2.js";import"./chartDataContext-B7Ty1jH-.js";import"./CategoricalChart-e5ydFkpC.js";import"./activeStyles-Dl6zrhPi.js";import"./useAnimationId-rUKK14dF.js";import"./dataEntryStyles-dyS1ZoD1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DhVq85Wn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DUs_pJxd.js";import"./tooltipContext-D7S4suB5.js";import"./ErrorBarContext-BeGWE2lF.js";import"./GraphicalItemClipPath-C95rKyMf.js";import"./SetGraphicalItem-AEMUK-yG.js";import"./getZIndexFromUnknown-DtXKMLb-.js";import"./useEffectiveDataKey-DlXPwpKd.js";import"./Curve-CCeOu5Un.js";import"./step-BH3hwvXb.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DAC5J4Og.js";import"./Dot-DFd9j2yF.js";import"./getRadiusAndStrokeWidthFromDot-D411Veho.js";import"./useElementOffset-DJkk5NRy.js";import"./uniqBy-D8tZ5Ja2.js";import"./iteratee-BlHCl97E.js";import"./Cross-BhKpEJ2j.js";import"./Sector-D0eICGeV.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
