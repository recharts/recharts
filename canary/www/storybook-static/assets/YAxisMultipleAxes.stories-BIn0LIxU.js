import{R as t}from"./iframe-B5suke5B.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-6eL7FIQY.js";import{R as l}from"./zIndexSlice-D0kihEsS.js";import{C as x}from"./ComposedChart-sXWnmRwm.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BXplb2Fd.js";import{L as a}from"./Line-C5jas6pR.js";import{X as c}from"./XAxis-CtU2ba0a.js";import{T as g}from"./Tooltip-CjRE84pb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BAgGrzQX.js";import"./Text-rc7ZZmS8.js";import"./resolveDefaultProps-CLTE-4Yl.js";import"./DOMUtils-W5ZSww-v.js";import"./isWellBehavedNumber-BdM77gE7.js";import"./useId-BWjKNL9O.js";import"./useBackwardsCompatibleTheme-D8o_0ZGr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BCqg4Zz6.js";import"./index-D-nx8SRU.js";import"./index-0E1UP6ea.js";import"./RechartsWrapper-xDK7h46M.js";import"./axisSelectors-Bxd1L_G4.js";import"./throttle-yXst2GNy.js";import"./d3-scale-lqW361z6.js";import"./index-AUvHwQMM.js";import"./index-QzaRG_bO.js";import"./renderedTicksSlice-DN6DkPzy.js";import"./index-BJ8eFwlr.js";import"./CartesianAxis-DDYqByWb.js";import"./Layer-TMg83YAh.js";import"./types-AnLHRdTF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-an0uCQ19.js";import"./chartDataContext-7ysfjD_K.js";import"./CategoricalChart-am3Id38i.js";import"./AnimatedItems-vhEGvzj0.js";import"./useAnimationId-rfQUB_TF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BS91G8m4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHch558p.js";import"./tooltipContext-B3JMcLrm.js";import"./RegisterGraphicalItemId-BgozNBK6.js";import"./ErrorBarContext-DlJnMayP.js";import"./GraphicalItemClipPath-DRG66VTj.js";import"./SetGraphicalItem-CVhYGG_S.js";import"./getZIndexFromUnknown-C1v2ynrK.js";import"./useGraphicalItemIdentity-Caq5Yc5Z.js";import"./Curve-BEbKvH6j.js";import"./step-DAq7_1My.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BHQL7RSY.js";import"./Dot-i8VNrcLy.js";import"./getRadiusAndStrokeWidthFromDot-YwdC5Jzm.js";import"./useElementOffset-CZkTpHRI.js";import"./uniqBy-CKyk2yaQ.js";import"./iteratee-DqYRbI4z.js";import"./Cross-HkATJlAV.js";import"./Sector-Du7qp-ox.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
