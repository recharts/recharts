import{R as t}from"./iframe-DdGnkOFo.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BBZ_UVPr.js";import{R as l}from"./zIndexSlice-Coao54AN.js";import{C as x}from"./ComposedChart-A-lxRNNH.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C_JCQSmY.js";import{L as a}from"./Line-DbTGCsdD.js";import{X as c}from"./XAxis-CwjUQWj_.js";import{T as g}from"./Tooltip-C3GMGeW6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Bo84uroF.js";import"./Layer-C_y1fxvr.js";import"./resolveDefaultProps-Btuog99o.js";import"./Text-DAM87njj.js";import"./DOMUtils-DV9Ec2hx.js";import"./isWellBehavedNumber-vlfZeEqT.js";import"./Label-BhIy96Hp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Ohjg-EB3.js";import"./index-CLyHvciH.js";import"./index-Z1BsW0X1.js";import"./types-D3VR5HmA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BOOh9KOs.js";import"./throttle-zZssU-Yn.js";import"./RechartsWrapper-CWAtSdtd.js";import"./index-BT6JmE6p.js";import"./index-Ikz32X_R.js";import"./axisSelectors-Cd50OEg7.js";import"./d3-scale-BvrGgEa2.js";import"./CartesianChart-BEpSJ7tS.js";import"./chartDataContext-DAj5ZKMQ.js";import"./CategoricalChart-B-_DRhy8.js";import"./tooltipContext-BLtqvj0j.js";import"./AnimatedItems-BUboBg0D.js";import"./useAnimationId-6rr0uMBz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dicu6Oub.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D54fuxpr.js";import"./RegisterGraphicalItemId-COu7yO2P.js";import"./ErrorBarContext-BD7rxjgN.js";import"./GraphicalItemClipPath-DAEO1IcC.js";import"./SetGraphicalItem-2sM575PE.js";import"./getZIndexFromUnknown-pd16Q2uH.js";import"./graphicalItemSelectors-DvuEKxlJ.js";import"./Curve-BxYGAEW6.js";import"./step-B8IQ9ApF.js";import"./path-DyVhHtw_.js";import"./ActivePoints-fBjIF9Nl.js";import"./Dot-CqaCoBUP.js";import"./getRadiusAndStrokeWidthFromDot-D5R5gYG2.js";import"./useElementOffset-4OHFNcW2.js";import"./uniqBy-CXPCyF4-.js";import"./iteratee-aK0dWx0L.js";import"./Cross-CiGCk2h5.js";import"./Sector-D0r8VPbQ.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
