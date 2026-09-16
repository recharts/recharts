import{R as t}from"./iframe-BCNgueVp.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-FgW2NdaC.js";import{R as l}from"./zIndexSlice-CCtmziB1.js";import{C as x}from"./ComposedChart-BZSfKAao.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BQjaIkG_.js";import{L as a}from"./Line-HqO7F7wl.js";import{X as c}from"./XAxis-LOCckWX5.js";import{T as g}from"./Tooltip-BzPJ_8Vl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B2ReDrEH.js";import"./Text-DAXsYFxH.js";import"./resolveDefaultProps-BtKNVX8w.js";import"./DOMUtils-C7-Ag6_9.js";import"./isWellBehavedNumber-DQrQxdGi.js";import"./useId-Ckkf-sDd.js";import"./useBackwardsCompatibleTheme-CFJvwoVT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Ccrtcbr9.js";import"./index-DknrhM99.js";import"./index-C90YdW0D.js";import"./RechartsWrapper-DbCJx0GW.js";import"./axisSelectors-D-nEX4IG.js";import"./throttle-NhPjNryy.js";import"./d3-scale-buoP3Yb_.js";import"./index-WR8kAZrp.js";import"./index-D7hqs4ef.js";import"./renderedTicksSlice-mO9WeRkh.js";import"./index-DhCnaeYc.js";import"./CartesianAxis-cRNPmBWR.js";import"./Layer-DVqtOL17.js";import"./types-Dv8LLmcq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-zbkVSw3C.js";import"./chartDataContext-Di3BbchU.js";import"./CategoricalChart-DQPW05OG.js";import"./AnimatedItems-DV3N7EYj.js";import"./useAnimationId-CBbWVRap.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B8Pg3yvs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cz6FzTvm.js";import"./tooltipContext-DPQKqAtu.js";import"./RegisterGraphicalItemId-D_OLUlPr.js";import"./ErrorBarContext-Bgs6nhLR.js";import"./GraphicalItemClipPath-DQ0b-CJJ.js";import"./SetGraphicalItem-CDaxvQAk.js";import"./getZIndexFromUnknown-hvwCKvcC.js";import"./useGraphicalItemIdentity-CyGmZ9Hw.js";import"./Curve-NDvVIG-e.js";import"./step-CsaqBRl_.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CUqn1Bgc.js";import"./Dot-D59YTPJi.js";import"./getRadiusAndStrokeWidthFromDot-Cb21_3vS.js";import"./useElementOffset-Dddhvd44.js";import"./uniqBy-DZMfENsr.js";import"./iteratee-B15ojktg.js";import"./Cross-CfJFSw2u.js";import"./Sector-BHVdZXzR.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
