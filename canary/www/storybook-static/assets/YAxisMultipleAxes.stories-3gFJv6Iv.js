import{R as t}from"./iframe-PFnyvlis.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B7MGVxIC.js";import{R as l}from"./zIndexSlice-B0qSSbxG.js";import{C as x}from"./ComposedChart-CYoxv7K5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-jsNT1kq-.js";import{L as a}from"./Line-C8KN53PB.js";import{X as c}from"./XAxis-DhJ_whev.js";import{T as g}from"./Tooltip-DLtoj8G7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CHf8Dh9F.js";import"./Text-Bjtm-BnX.js";import"./resolveDefaultProps-w5xflEp3.js";import"./pageBackground-D9EVWege.js";import"./isWellBehavedNumber-fJrag4D_.js";import"./useId-B6VTORgN.js";import"./useBackwardsCompatibleTheme-BHl7LW2d.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B4ISEqyM.js";import"./index-Bnt3KeU-.js";import"./index-sAeTipYl.js";import"./RechartsWrapper-B3E-J46N.js";import"./axisSelectors-DhkVgott.js";import"./throttle-GW0_gATC.js";import"./d3-scale-Ct392CQc.js";import"./index-D5l8ABkB.js";import"./index-Cd7PqRR0.js";import"./renderedTicksSlice-CEcKwYs8.js";import"./index-Bz4JWd5z.js";import"./CartesianAxis-D8jcLweO.js";import"./Layer-8HYYz2ZX.js";import"./types-Cdq40KHv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CsLYaxaY.js";import"./chartDataContext-DOm0tmmB.js";import"./CategoricalChart-C-GflChV.js";import"./activeStyles-DeGfiuQP.js";import"./useAnimationId-E_cgqRBb.js";import"./dataEntryStyles-DVpontPM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BVeyAWJr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-1mgFNr1z.js";import"./tooltipContext--B4s3Fka.js";import"./ErrorBarContext-C5e-NQj7.js";import"./GraphicalItemClipPath-Bhp27ob6.js";import"./SetGraphicalItem-TVDRdMaU.js";import"./getZIndexFromUnknown-Bkf99BFy.js";import"./useGraphicalItemIdentity-YcO-x1ZM.js";import"./Curve-BDK-Xp5l.js";import"./step-DeVCdmYq.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DOitargu.js";import"./Dot-FM4Coi4D.js";import"./getRadiusAndStrokeWidthFromDot-fHs-9w3x.js";import"./useElementOffset-B06hB-J_.js";import"./uniqBy-BFzf7hr-.js";import"./iteratee-i8eYuUbO.js";import"./Cross-C9IeymZz.js";import"./Sector-CuI7D498.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
