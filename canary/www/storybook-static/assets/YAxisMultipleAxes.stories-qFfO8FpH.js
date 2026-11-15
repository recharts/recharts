import{R as t}from"./iframe-wopH9NdI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DOwO43VE.js";import{R as l}from"./zIndexSlice-xHMHa_PR.js";import{C as x}from"./ComposedChart-BEtvz8Ip.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DBONXf9b.js";import{L as a}from"./Line-DN2Hlr79.js";import{X as c}from"./XAxis-YQFRVy93.js";import{T as g}from"./Tooltip-CmXnO450.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-uu_QuzmT.js";import"./Text-CQcCEm7a.js";import"./resolveDefaultProps-CuS_1aTJ.js";import"./ZIndexLayer-BgWxLO1_.js";import"./index-DX2sAXBh.js";import"./index-ntp-0gr7.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DDYJm4ns.js";import"./throttle--YLxHTYU.js";import"./axisSelectors-H_-dwi8o.js";import"./d3-scale-BRxJIguS.js";import"./CartesianAxis-Bp916XbH.js";import"./Layer-Dt0UmkGr.js";import"./types-CUlNVHV2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BRp5IgAn.js";import"./index-CHX_ECB7.js";import"./index-xHMOPb5i.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-GnJJ2XUP.js";import"./index-BMZVXAmF.js";import"./fillDefinitions-DrqDcIvz.js";import"./CartesianChart-CN7jOg4q.js";import"./chartDataContext-bye5A1ly.js";import"./CategoricalChart-C9YwakJO.js";import"./dataEntryStyles-B3xBZvqn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CG1wwImr.js";import"./useAnimationId-Dc36A72L.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DA6QXZNg.js";import"./tooltipContext-DhZ9obrk.js";import"./ErrorBarContext-DV4gDnhM.js";import"./activeStyles-DEvOqenA.js";import"./SetGraphicalItem-X1KxmELY.js";import"./getZIndexFromUnknown-mtzI5ccg.js";import"./useEffectiveDataKey-SyLvQhGM.js";import"./omit-DOGdPpnh.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Cm3MAuem.js";import"./step-BDdQgN00.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D278KIFv.js";import"./Dot-BdzSE_Lm.js";import"./Symbols-Bbx6wwO8.js";import"./symbol-BLs3oZkc.js";import"./getRadiusAndStrokeWidthFromDot-CJXPoZCW.js";import"./useElementOffset-D-hq6pQE.js";import"./uniqBy-BzWKwNSK.js";import"./iteratee-BU4RoL4-.js";import"./Cross-BroUofIZ.js";import"./Sector-BWFGzxn-.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
