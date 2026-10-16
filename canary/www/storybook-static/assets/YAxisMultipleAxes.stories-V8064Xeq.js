import{R as t}from"./iframe-Cuc-3wmn.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D3vkb_pr.js";import{R as l}from"./zIndexSlice-BsVN3Oy1.js";import{C as x}from"./ComposedChart-CD6T7lY1.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DIb5GQ3p.js";import{L as a}from"./Line-AdV0akim.js";import{X as c}from"./XAxis-BqOzDVbT.js";import{T as g}from"./Tooltip-BOZ61CcI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CIwD5k1e.js";import"./Text-BXtcMZ2N.js";import"./resolveDefaultProps-DeE8fKkX.js";import"./pageBackground-DrpZqn_y.js";import"./isWellBehavedNumber-BQdzkgjM.js";import"./useId-CpeFYMDs.js";import"./useBackwardsCompatibleTheme-Cg1iNggS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-LfSwjZQ4.js";import"./index-Dr1iXWUa.js";import"./index-DGxMJQlb.js";import"./axisSelectors-DM_2WB9O.js";import"./throttle-BHv1OzUd.js";import"./d3-scale-BS_R9TF_.js";import"./CartesianAxis-D_D6u5e-.js";import"./Layer-D8rIily6.js";import"./types-GMU9tJsf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BXySsU0c.js";import"./index-Dz3k4zem.js";import"./index-Do_NM7xQ.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-3cu-hXPY.js";import"./index-CYT75Ewh.js";import"./CartesianChart-C6H_Qcxl.js";import"./chartDataContext-B7_SZBh7.js";import"./CategoricalChart-DrO7g7YL.js";import"./activeStyles-CdxeGYpW.js";import"./useAnimationId-BpVC87C1.js";import"./dataEntryStyles-BJ1Gca6t.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-jrOmvPnS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CkArj8ub.js";import"./tooltipContext-GuRp0BaA.js";import"./ErrorBarContext-DdAUPC4x.js";import"./GraphicalItemClipPath-SJq0vZIV.js";import"./SetGraphicalItem-CaNq7kdy.js";import"./getZIndexFromUnknown-uD2mppy9.js";import"./useEffectiveDataKey-rVy1qnot.js";import"./Curve-DkDc-div.js";import"./step-DLRB17DG.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CVhx80tt.js";import"./Dot-DyPF6Lbp.js";import"./getRadiusAndStrokeWidthFromDot-iwqqPDMx.js";import"./useElementOffset-DWSWPlh_.js";import"./uniqBy-miHMS1-h.js";import"./iteratee-DHIVVYG7.js";import"./Cross-Bh1B-flk.js";import"./Sector-wjDHcoKV.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
