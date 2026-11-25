import{R as t}from"./iframe-DkUPJ-sS.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DUp2X2GH.js";import{R as l}from"./zIndexSlice-12UiSTLm.js";import{C as x}from"./ComposedChart-3SzIkZlG.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BWBhdnwM.js";import{L as a}from"./Line-C2hOgETN.js";import{X as c}from"./XAxis-BWwIFA6B.js";import{T as g}from"./Tooltip-CWW4V7pP.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-R0X1asWy.js";import"./get-CjriyByo.js";import"./Label-8ZjagO8_.js";import"./Text-ChMlRx0j.js";import"./ZIndexLayer-BEv6P927.js";import"./index-CRD-EhW_.js";import"./index-t-OvK83N.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BXszvLGt.js";import"./throttle-B27eHaYH.js";import"./axisSelectors-DXomLufj.js";import"./d3-scale-CycPPIVV.js";import"./CartesianAxis-CPfh-d6g.js";import"./Layer-Dz0e5F_f.js";import"./types-BwlCxTmg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DufVH7D7.js";import"./index-C1Em399f.js";import"./index-Cvlsg4mt.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-mRcsep52.js";import"./index-BSGDHpsm.js";import"./fillDefinitions-z6sEEzMG.js";import"./CartesianChart-DoFuwDSF.js";import"./chartDataContext-90C9fl16.js";import"./CategoricalChart-B3U5Ej9_.js";import"./dataEntryStyles-BCBCgPLo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BG9rqJG5.js";import"./useAnimationId-2gl_z5Fx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dnx5Vb0n.js";import"./tooltipContext-zL5LcCIw.js";import"./ErrorBarContext-MZRvuvrv.js";import"./activeStyles-DgOrLWSA.js";import"./SetGraphicalItem-D8P9Tqtn.js";import"./getZIndexFromUnknown-DIfsP9xn.js";import"./useEffectiveDataKey-CN20ww8a.js";import"./omit-DJKGho52.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-CiiVoAk9.js";import"./Curve-CbuCUFZQ.js";import"./step-BRslF1pk.js";import"./path-BBMZd4YL.js";import"./ActivePoints-D6Ig6JoZ.js";import"./Dot-1lM7GFo1.js";import"./Symbols-u4sk2XTY.js";import"./symbol-C2La0w81.js";import"./useElementOffset-Bn3uQ3yx.js";import"./uniqBy-BDWNlPAq.js";import"./iteratee-WjMYvucc.js";import"./Cross-BtLlyYev.js";import"./Sector-jJcJmYqW.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
