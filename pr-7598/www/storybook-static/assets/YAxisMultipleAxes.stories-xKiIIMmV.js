import{R as t}from"./iframe-DuK0Qil1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DUlzRBIx.js";import{R as l}from"./zIndexSlice-CDnfQqmd.js";import{C as x}from"./ComposedChart-CoDAatDa.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D_H4ss22.js";import{L as a}from"./Line-DNdMLtbX.js";import{X as c}from"./XAxis-5-F4R60_.js";import{T as g}from"./Tooltip-CiBanZOe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-D2hc_RJR.js";import"./Layer-DkfKlAwf.js";import"./resolveDefaultProps-oCmlrVLK.js";import"./Text-D4DIOP-8.js";import"./DOMUtils-n5aJojsY.js";import"./isWellBehavedNumber-DX_vizwS.js";import"./Label-BVUrQ6r5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BaKptJ0d.js";import"./index-tfefZ_nO.js";import"./index-CKpzsMgh.js";import"./types-Ch2-4RAi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CSJ2A-w6.js";import"./throttle-DSTeDcIR.js";import"./RechartsThemeContext-CZE5IotG.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DniM3uOm.js";import"./index-DwA8b1Ou.js";import"./index-DhoW-uSW.js";import"./axisSelectors-_6NgKNdR.js";import"./d3-scale-DuTdgHoH.js";import"./CartesianChart-BQw3D51-.js";import"./chartDataContext-CfvZMLTP.js";import"./CategoricalChart-D9Svi6qf.js";import"./tooltipContext-DVN15Dsi.js";import"./AnimatedItems-CBhdDdvc.js";import"./useAnimationId-nnglBd7S.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BwZ6jX28.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B7fe-RtC.js";import"./RegisterGraphicalItemId-BqmtVyAz.js";import"./ErrorBarContext-84EKHKmH.js";import"./GraphicalItemClipPath-BN5jaNNE.js";import"./SetGraphicalItem-D4hSZyvD.js";import"./getZIndexFromUnknown-ToDSAPVU.js";import"./graphicalItemSelectors-D9CHw2Gm.js";import"./Curve-CAqM1U-K.js";import"./step-BW4Xq2ef.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Dq5H8yZY.js";import"./Dot-C7D6mqds.js";import"./getRadiusAndStrokeWidthFromDot-DcB-LW-j.js";import"./useElementOffset-B2PIp49y.js";import"./uniqBy-eNjjwLbW.js";import"./iteratee-BKzRmdu1.js";import"./Cross-CnY9yMSL.js";import"./Sector-Drp5OGvW.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Kt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Kt as __namedExportsOrder,vt as default};
