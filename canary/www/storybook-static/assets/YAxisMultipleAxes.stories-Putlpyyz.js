import{R as t}from"./iframe-aStk4u5G.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-IZNj2QSL.js";import{R as l}from"./zIndexSlice-fM76ZZLK.js";import{C as x}from"./ComposedChart-DHDQZPyt.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-5Dh1lLRb.js";import{L as a}from"./Line-CaBl6OwL.js";import{X as c}from"./XAxis-ENAn7eOB.js";import{T as g}from"./Tooltip-C4y2fub7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CSHZSiX2.js";import"./Text-ByyFOVFg.js";import"./resolveDefaultProps-DDGoEIzP.js";import"./ZIndexLayer-CcTOehup.js";import"./index-D3-ZjHvX.js";import"./index-CudRwpbI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DXerv3y1.js";import"./throttle-DVcVwqMz.js";import"./axisSelectors-DBp9gfhA.js";import"./d3-scale-B6YLYpaJ.js";import"./CartesianAxis-B4XXfFP6.js";import"./Layer-BjWQQh7I.js";import"./types-DjvBJzo1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bb9pf7FB.js";import"./index-D44dfxkc.js";import"./index-C0ZJcZh_.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Ds4ZmDze.js";import"./index-CA0MPyj7.js";import"./fillDefinitions-Daf3k0lp.js";import"./CartesianChart-D7_rHSjg.js";import"./chartDataContext-Dl30_h0X.js";import"./CategoricalChart-C74L4aLC.js";import"./dataEntryStyles-BcmbbFXW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D6Wk_c6i.js";import"./useAnimationId-BKAZWpn4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BP2ijoKU.js";import"./tooltipContext-BP9m843V.js";import"./ErrorBarContext-ABxS7lmh.js";import"./activeStyles-CZ0hnhrg.js";import"./SetGraphicalItem-Yj9tvd7_.js";import"./getZIndexFromUnknown-D1mWXeFS.js";import"./useEffectiveDataKey-mYWLQ9Vk.js";import"./omit-8MYgr6Kv.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DVkDevWh.js";import"./step-CGueoSlz.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B2wgHnUT.js";import"./Dot-CNnV5EQe.js";import"./Symbols-CNyA1mlx.js";import"./symbol-C-8FiWil.js";import"./getRadiusAndStrokeWidthFromDot-D8PfYcSQ.js";import"./useElementOffset-Cls2pasg.js";import"./uniqBy-CRJApYUW.js";import"./iteratee-DClhMIbQ.js";import"./Cross-Cvt4uX90.js";import"./Sector-wgzDtkN-.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
