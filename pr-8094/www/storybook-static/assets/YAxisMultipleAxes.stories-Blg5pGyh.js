import{R as t}from"./iframe-CKYCIS4O.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-3_O2t6O0.js";import{R as l}from"./zIndexSlice-BVoHtIGl.js";import{C as x}from"./ComposedChart-CcDPS2UA.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C7EQz-u5.js";import{L as a}from"./Line-CLzVB0nb.js";import{X as c}from"./XAxis-BwOdDkr3.js";import{T as g}from"./Tooltip-CCekjfs3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-V3vvxFs1.js";import"./Text-BLfI62nN.js";import"./resolveDefaultProps-DJardr3Q.js";import"./pageBackground-CEf563-A.js";import"./ZIndexLayer-DQE-ht00.js";import"./index-nd3hpzmK.js";import"./index-JI8M9eCs.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-pOJJRSzh.js";import"./throttle-DZYj3iOj.js";import"./dataEntryStyles-DAzCaz5j.js";import"./axisSelectors-BFrdOsRC.js";import"./d3-scale-Chzts2tO.js";import"./CartesianAxis-8nzccMKS.js";import"./Layer-BD9gaLyO.js";import"./types-CmrXNY74.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BxS1V27b.js";import"./index-SMQozWXj.js";import"./index-DaDG0cBs.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Dem0F1Iz.js";import"./index-Da8MkAXq.js";import"./CartesianChart-CI5sjVIs.js";import"./ZIndexPortal-DdwrmGrM.js";import"./CategoricalChart-CFFWqlhP.js";import"./LabelList-DIy8rGs9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C9OOv2OS.js";import"./useAnimationId-CSk2ZRUZ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ci-vluy8.js";import"./tooltipContext-BQUele7p.js";import"./RegisterGraphicalItemId-DJiw9mNN.js";import"./ErrorBarContext-Btx89lB4.js";import"./activeStyles-CNm0YTHp.js";import"./SetGraphicalItem-B3OCK4rf.js";import"./getZIndexFromUnknown-DUsSha-X.js";import"./useEffectiveDataKey-Bc5Nhcfg.js";import"./omit-C7f353ha.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DLtusU6K.js";import"./step-DsdN-LIO.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CHG1KhF9.js";import"./Dot-ndGMMR9M.js";import"./Symbols-CDAoERqX.js";import"./symbol-Dw776g78.js";import"./getRadiusAndStrokeWidthFromDot-B53SAheV.js";import"./useElementOffset-B3lS8dsi.js";import"./uniqBy-DiBJQ8ne.js";import"./iteratee-npSfVfao.js";import"./Cross-6coidCzg.js";import"./Sector-B0ghbJbx.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
