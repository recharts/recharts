import{R as t}from"./iframe-CFiYbyYn.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DQzPAn8l.js";import{R as l}from"./zIndexSlice-CfnjI_J7.js";import{C as x}from"./ComposedChart-AVSPcUwt.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-0HoGx8JR.js";import{L as a}from"./Line-Bdu49nu9.js";import{X as c}from"./XAxis-RpmZ_jE_.js";import{T as g}from"./Tooltip-DXHLHEHF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BO6v_mC5.js";import"./Text-BvA3DBG3.js";import"./resolveDefaultProps-D5Jgld6M.js";import"./ZIndexLayer-BDfLEL3A.js";import"./index-BgXu95am.js";import"./index-D8Rvzs5o.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C73NV54c.js";import"./throttle-C32GRzNi.js";import"./axisSelectors-ZJRlSH7p.js";import"./d3-scale-BQZOe2uw.js";import"./CartesianAxis-D_9vstbH.js";import"./Layer-BfyvsZKx.js";import"./types-BgyTt6P7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DEUuAR6D.js";import"./index-CeN26RCh.js";import"./index-B2eeTemT.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DnJ3Lnfw.js";import"./index-CTcpyI6-.js";import"./fillDefinitions-DQn9hMkI.js";import"./CartesianChart-BI7GK76V.js";import"./chartDataContext-CxLvIdoH.js";import"./CategoricalChart-CA4HG4Fk.js";import"./dataEntryStyles-CEdPYhQz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BSxvUYTo.js";import"./useAnimationId-BDSeKkxz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CsNOZNpW.js";import"./tooltipContext-DxjlgEeX.js";import"./ErrorBarContext-DjJwPTFH.js";import"./activeStyles-P0GMx-UH.js";import"./SetGraphicalItem-CGu2i_Hy.js";import"./getZIndexFromUnknown-Dvyr5NgR.js";import"./useEffectiveDataKey-Dy2gs8KS.js";import"./omit-D6WkDfSd.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CKgWn92F.js";import"./step-DxzKinYr.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Dj8mj1pc.js";import"./Dot-DG45E_Jc.js";import"./Symbols-dPAJMo6f.js";import"./symbol-aLQJyVpc.js";import"./getRadiusAndStrokeWidthFromDot-Ce32xTZu.js";import"./useElementOffset-B4AwO3QR.js";import"./uniqBy-4Wq1ZNuh.js";import"./iteratee-B-Fq5cCX.js";import"./Cross-IGGmzroz.js";import"./Sector-BGw3hAub.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
