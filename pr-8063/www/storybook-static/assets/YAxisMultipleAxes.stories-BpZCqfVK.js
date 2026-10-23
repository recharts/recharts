import{R as t}from"./iframe-ByLAgMyT.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-VAKOhZSF.js";import{R as l}from"./zIndexSlice-DbH_vqN6.js";import{C as x}from"./ComposedChart-CZJUN3bH.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D4ausQjj.js";import{L as a}from"./Line-CHgQT9HL.js";import{X as c}from"./XAxis-6YbWYxrg.js";import{T as g}from"./Tooltip-CYncKF8P.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DiFVkyKf.js";import"./Text-K2cZEaeG.js";import"./resolveDefaultProps-ZOEnIxye.js";import"./pageBackground-CJjC7Pe6.js";import"./isWellBehavedNumber-ib3lWxb6.js";import"./useId-N2SJ_s2K.js";import"./useBackwardsCompatibleTheme-CAGUGjI_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-J8gq1KPk.js";import"./index-Bd0XDIKz.js";import"./index-DQDYz7Kn.js";import"./axisSelectors-1NzaQeZW.js";import"./throttle-CEah83BE.js";import"./d3-scale-C7CraIkv.js";import"./CartesianAxis-CuUPXULq.js";import"./Layer-g3XAbIKO.js";import"./types-B5PcYGv_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Rz2ip3G5.js";import"./index-BzVpSiBS.js";import"./index-Dm91Zbdm.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-8hL2knQK.js";import"./index-DiiEfgcg.js";import"./CartesianChart-CKytCKi1.js";import"./chartDataContext-xQwTU35T.js";import"./CategoricalChart-CKR8_K54.js";import"./activeStyles-Dj4g-rEk.js";import"./useAnimationId-CBnq7Z5z.js";import"./dataEntryStyles-Cy26GKXH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CzITLvl8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C4wijBbi.js";import"./tooltipContext-DuHQZm4D.js";import"./ErrorBarContext-CBilAMI3.js";import"./GraphicalItemClipPath-Bv7X_kga.js";import"./SetGraphicalItem-BhbU4A3u.js";import"./getZIndexFromUnknown-C5I6QwMC.js";import"./useEffectiveDataKey-DILJl117.js";import"./omit-U1v7Dk7_.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CcWf2VYJ.js";import"./step-CewcAd9T.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BaYU0Cf-.js";import"./Dot-C6LI6MNA.js";import"./getRadiusAndStrokeWidthFromDot-RbzC3joP.js";import"./useElementOffset-uQmAL4tB.js";import"./uniqBy-Bt5JPp1g.js";import"./iteratee-CZLX0qdh.js";import"./Cross-DfRQs8p7.js";import"./Sector-stkq1E_q.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
