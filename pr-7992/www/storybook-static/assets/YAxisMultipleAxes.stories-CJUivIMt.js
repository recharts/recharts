import{R as t}from"./iframe-DpdlAHMd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DLQpEtie.js";import{R as l}from"./zIndexSlice-D40A4F5S.js";import{C as x}from"./ComposedChart-zgSZL8eg.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-2V_ZkQs1.js";import{L as a}from"./Line-CdUHiaZ_.js";import{X as c}from"./XAxis-BEUW7cLW.js";import{T as g}from"./Tooltip-BGbC_lRy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-E3aXJx_S.js";import"./Text-CoXwYvwY.js";import"./resolveDefaultProps-DK3XJvDH.js";import"./pageBackground-D9ogOXyk.js";import"./isWellBehavedNumber-ccQ0ki_-.js";import"./useId-CnP1W382.js";import"./useBackwardsCompatibleTheme-CGJLu250.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-lKfC9naY.js";import"./index-CKGLfYUI.js";import"./index-D9RL9gGT.js";import"./axisSelectors-DQOroxWm.js";import"./throttle-Bui1B-A-.js";import"./d3-scale-DPtZvEea.js";import"./CartesianAxis-Di7rigDv.js";import"./Layer-B8bai4JO.js";import"./types-BGps8a2x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BduPU7I5.js";import"./index-Dgc5VXFD.js";import"./index-CPgT1QoG.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Dd9femQq.js";import"./index-938zI0LN.js";import"./CartesianChart-Dhk6ePqg.js";import"./chartDataContext-t_vCqpmk.js";import"./CategoricalChart-Bt7APlp3.js";import"./activeStyles-D6HKGU7f.js";import"./useAnimationId-BE4SknEb.js";import"./dataEntryStyles-YsQ_uBBL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CK9sa7-j.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-fnlRVR3C.js";import"./tooltipContext-BJXngdCP.js";import"./ErrorBarContext-CNLce-HY.js";import"./GraphicalItemClipPath-Cs7E0DKS.js";import"./SetGraphicalItem-KfOC3T9M.js";import"./getZIndexFromUnknown-DamPCXHC.js";import"./useEffectiveDataKey-jGEWZ8Yk.js";import"./Curve-jCmK9z3l.js";import"./step-D1wWY9HN.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CLGOJg0k.js";import"./Dot-B-SHSrYh.js";import"./getRadiusAndStrokeWidthFromDot-DY_fHX61.js";import"./useElementOffset-DJ8RLuax.js";import"./uniqBy-D_yJRXK6.js";import"./iteratee-CYPCsLC3.js";import"./Cross-CHAbA02L.js";import"./Sector-3oNumv3W.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
