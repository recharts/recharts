import{R as t}from"./iframe-BMnEk6rk.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Bg-R0mkd.js";import{R as l}from"./zIndexSlice-AHK2lLDY.js";import{C as x}from"./ComposedChart-DXU97qLG.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DTDTUl4z.js";import{L as a}from"./Line-uhUVV2ZJ.js";import{X as c}from"./XAxis-DO8MMAbO.js";import{T as g}from"./Tooltip-CdRDsB00.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-h8wQzOus.js";import"./Text-C8Qyn2EQ.js";import"./resolveDefaultProps-B_QljJZX.js";import"./pageBackground-CtZK7idk.js";import"./ZIndexLayer-B5NKkV0N.js";import"./index-lkPNhlVs.js";import"./index-Bttv8G3u.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CeZI25QH.js";import"./throttle-BLJmRI7W.js";import"./axisSelectors-p5JtpZwX.js";import"./d3-scale-CFf5tOkL.js";import"./CartesianAxis-1xDTwGjL.js";import"./Layer-DhQvAzDq.js";import"./types-BEqbC_4a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CBxoq99O.js";import"./index-DVw0VuQJ.js";import"./index-Bk611d1z.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D4g7WfzD.js";import"./index-Cs2FdYvJ.js";import"./CartesianChart-D8VYP9Px.js";import"./ZIndexPortal-BccU1gyk.js";import"./CategoricalChart-CejU0SpF.js";import"./LabelList-Dd3JyrGq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CyQcxgx5.js";import"./useAnimationId-Ctda-hFk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BwTzV5YZ.js";import"./tooltipContext-AjAyigeH.js";import"./dataEntryStyles-DegCLzhf.js";import"./ErrorBarContext-dq2106Y0.js";import"./activeStyles-DlaO21qO.js";import"./SetGraphicalItem-C1JNOq53.js";import"./getZIndexFromUnknown-CXaa_OOR.js";import"./useEffectiveDataKey-DQstj3az.js";import"./omit-Bm1-4z2k.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D8kPdRuj.js";import"./step-OCTxecjD.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BPIJeIuh.js";import"./Dot-BOMHkylR.js";import"./Symbols-H6KF7Fzl.js";import"./symbol-BrVg2837.js";import"./getRadiusAndStrokeWidthFromDot-BNTnGfox.js";import"./useElementOffset-CKZUIDIC.js";import"./uniqBy-m6py-FT2.js";import"./iteratee-Dc85xDQN.js";import"./Cross-CkQASEDQ.js";import"./Sector-GHL6DImZ.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
