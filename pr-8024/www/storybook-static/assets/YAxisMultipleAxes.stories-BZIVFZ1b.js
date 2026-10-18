import{R as t}from"./iframe-Cs9VT9SX.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-vNX_kYng.js";import{R as l}from"./zIndexSlice-BdtHtScS.js";import{C as x}from"./ComposedChart-CBGO3KHX.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C3x5cHvJ.js";import{L as a}from"./Line-Cx0NJuWb.js";import{X as c}from"./XAxis-ZXwUP9Th.js";import{T as g}from"./Tooltip-DBB7x4xM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CtA6iQna.js";import"./Text-NwXvdk36.js";import"./resolveDefaultProps-BxA5_OWP.js";import"./pageBackground-Oh548Gvn.js";import"./isWellBehavedNumber-CVBN0S-y.js";import"./useId-pJJcLuGB.js";import"./useBackwardsCompatibleTheme-BWsBUWUZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-6baMIq5x.js";import"./index-xMFBNBU3.js";import"./index-Ccb8EBp4.js";import"./axisSelectors-gCAVib4T.js";import"./throttle-DO7D3GPa.js";import"./d3-scale-B33rCp3E.js";import"./CartesianAxis-CkxFyA6u.js";import"./Layer-DyApFY3D.js";import"./types-BderJbki.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CLNxhMWR.js";import"./index-Co8WVvE-.js";import"./index-Cjg5XPAC.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C5YZJO9f.js";import"./index-iO7lXoIC.js";import"./CartesianChart-BoDGj9iP.js";import"./chartDataContext-neHnT-17.js";import"./CategoricalChart-D0wW8A9V.js";import"./activeStyles-CIXVWOxz.js";import"./useAnimationId-1jmYsVjg.js";import"./dataEntryStyles-Bogdu71F.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B7LH8v7V.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DP1vY-Az.js";import"./tooltipContext-DYNUUDpd.js";import"./ErrorBarContext-Ba_qpzYN.js";import"./GraphicalItemClipPath-BhbyQIog.js";import"./SetGraphicalItem-Dqm-RVU6.js";import"./getZIndexFromUnknown-CmVQNegC.js";import"./useEffectiveDataKey-KP9u_G2c.js";import"./omit-CzgHehSs.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C5hSs_Mg.js";import"./step-C0n0sZGY.js";import"./path-DyVhHtw_.js";import"./ActivePoints-zHs9ig4S.js";import"./Dot-D9tJW78F.js";import"./getRadiusAndStrokeWidthFromDot-CqwHrRi4.js";import"./useElementOffset-Dsr0kKKf.js";import"./uniqBy-0hLfVEhM.js";import"./iteratee-DMBh3gc4.js";import"./Cross-D-h4cxnd.js";import"./Sector-D65AispO.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
