import{R as t}from"./iframe-CLIhRm7R.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CpKr4jH1.js";import{R as l}from"./zIndexSlice-cURKLlYU.js";import{C as x}from"./ComposedChart-DplTXjfB.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DodE2F49.js";import{L as a}from"./Line-CEDpZoGH.js";import{X as c}from"./XAxis-ClFJPrvR.js";import{T as g}from"./Tooltip-DLIwj_AL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DearAakw.js";import"./Text-JwQNyxYp.js";import"./resolveDefaultProps-D-eAHaNk.js";import"./ZIndexLayer-CVT-3Kt6.js";import"./index-DR1HnwII.js";import"./index-BUNiVZYu.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D5qsDUBS.js";import"./throttle-B7ykPIAJ.js";import"./axisSelectors-CDU9IwIv.js";import"./d3-scale-D44QmEnt.js";import"./CartesianAxis-xu52TX6T.js";import"./Layer-BbygySlV.js";import"./types-B-D67JLt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BBFFs0IH.js";import"./index-BRcZtsT0.js";import"./index-B_FXaL58.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DwQg3ppC.js";import"./index-CQ513AnM.js";import"./fillDefinitions-Y1HmkZBg.js";import"./CartesianChart-Cfp3axNC.js";import"./chartDataContext-CnJguSW_.js";import"./CategoricalChart-RViwWBSb.js";import"./dataEntryStyles-BrgkWZuf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-_VT99gpA.js";import"./useAnimationId-CFCPoirY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B5F3agWS.js";import"./tooltipContext-CF_VsdUz.js";import"./ErrorBarContext-D47utnLy.js";import"./activeStyles-DkO8dKQi.js";import"./SetGraphicalItem-Byj-zkni.js";import"./getZIndexFromUnknown-Q2U1gBg2.js";import"./useEffectiveDataKey-B6ZXrXvv.js";import"./omit-BzKSo3AK.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-4sZTg9_Z.js";import"./Curve-BOeChXDU.js";import"./step-b64WSsG3.js";import"./path-BBMZd4YL.js";import"./ActivePoints-C9r-WFdJ.js";import"./Dot-C3ytqCXy.js";import"./Symbols-CL9eWqJw.js";import"./symbol-DfjzGj-p.js";import"./useElementOffset-Dhc2h3vn.js";import"./uniqBy-CxU7f0Dn.js";import"./iteratee-uHzYhx_d.js";import"./Cross-D7p88CJS.js";import"./Sector-CRfs2O2v.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
