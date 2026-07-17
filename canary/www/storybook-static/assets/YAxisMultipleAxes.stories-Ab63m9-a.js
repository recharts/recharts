import{R as t}from"./iframe-556vb-qw.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CUYZIBQF.js";import{R as l}from"./zIndexSlice-Dx_8tKSl.js";import{C as x}from"./ComposedChart-C3GwbD-o.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BOliZufY.js";import{L as a}from"./Line-CNegRi9e.js";import{X as c}from"./XAxis-C8oxlX6U.js";import{T as g}from"./Tooltip-vqhIBjmx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-C3UFcQ97.js";import"./Layer-BTltl-Cn.js";import"./resolveDefaultProps-FVjcPzTE.js";import"./Text-UXI8_ZCT.js";import"./DOMUtils-B14va7zq.js";import"./isWellBehavedNumber-Dc37N4M2.js";import"./Label-BaM1U3dt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BOwqliX9.js";import"./index-DiiXHLk0.js";import"./index-CiB0Io8X.js";import"./types-CA3u3vRt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CfWaZqlF.js";import"./throttle-Bki2cXyV.js";import"./RechartsWrapper-KC_7-tBU.js";import"./index-DQcKumtN.js";import"./index-BtPxInWz.js";import"./axisSelectors-BduM4NJa.js";import"./d3-scale-D2li86P1.js";import"./CartesianChart-D8G919J3.js";import"./chartDataContext-Bs-zR_b9.js";import"./CategoricalChart-CcDvDLSk.js";import"./tooltipContext-BlLTGOp5.js";import"./AnimatedItems-CxcoqNDa.js";import"./useAnimationId-ClUEd6We.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-dJLSMSgO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BLdFLviC.js";import"./RegisterGraphicalItemId-n-hAz8yp.js";import"./ErrorBarContext-DZjyWL-W.js";import"./GraphicalItemClipPath-CuuadlYj.js";import"./SetGraphicalItem-DRzPdsV9.js";import"./getZIndexFromUnknown-BRUWBuui.js";import"./graphicalItemSelectors-B4mj_ypA.js";import"./Curve-CQITscbT.js";import"./step-CFU3znK3.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CLr-JLZj.js";import"./Dot-J7G-brXT.js";import"./getRadiusAndStrokeWidthFromDot-C_DGpSn1.js";import"./useElementOffset-BH4PUdVa.js";import"./uniqBy-C7RA8kcG.js";import"./iteratee-DBVLQRkV.js";import"./Cross-CllkCknq.js";import"./Sector-DQYYUIu1.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
