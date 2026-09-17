import{R as t}from"./iframe-DzO9JHZD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DLr6Fu7l.js";import{R as l}from"./zIndexSlice-wXMOrHSA.js";import{C as x}from"./ComposedChart-nRRh8kX9.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-gfqukp2W.js";import{L as a}from"./Line-CKPli7Hi.js";import{X as c}from"./XAxis-s5CUDx62.js";import{T as g}from"./Tooltip-CtsRfwcP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CKmL6Jnj.js";import"./Text-CkTBNTFx.js";import"./resolveDefaultProps-B5PLlTs_.js";import"./DOMUtils-CiXbDn_A.js";import"./isWellBehavedNumber-F-o7IHqi.js";import"./useId-BB5zPEe_.js";import"./useBackwardsCompatibleTheme-DXGk--5K.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CYttbcyg.js";import"./index-D6SCMRFc.js";import"./index-DBwiuZT2.js";import"./RechartsWrapper-DFXgxjJb.js";import"./axisSelectors-Bktw6xhv.js";import"./throttle-_6vD_mzO.js";import"./d3-scale-BhZPhAmj.js";import"./index-HY8blrlW.js";import"./index-vlcan66w.js";import"./renderedTicksSlice-B6tapBnR.js";import"./index-DN5zS5di.js";import"./CartesianAxis-ITKfZFUK.js";import"./Layer-CnogDsGN.js";import"./types-Br-ctfN4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-aILzJ3W8.js";import"./chartDataContext-CW-xn50P.js";import"./CategoricalChart-BMeJEgn8.js";import"./AnimatedItems-najEeKMC.js";import"./useAnimationId-CV7fiXfg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BYTciqJx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CDs2CvAD.js";import"./tooltipContext-C5VMrJL3.js";import"./RegisterGraphicalItemId-DbTCddMf.js";import"./ErrorBarContext-DhSDR9CQ.js";import"./GraphicalItemClipPath-DycxALBl.js";import"./SetGraphicalItem-CLQaaH2S.js";import"./getZIndexFromUnknown-ByEwt6b8.js";import"./useGraphicalItemIdentity-CpX4qTkI.js";import"./Curve-Bq9mijgP.js";import"./step-CTH6I-yX.js";import"./path-DyVhHtw_.js";import"./ActivePoints-3ZBjUYQf.js";import"./Dot-Bz-gpTQG.js";import"./getRadiusAndStrokeWidthFromDot-Dl1O25XE.js";import"./useElementOffset-DrNC_Qs5.js";import"./uniqBy-Bcxxl2BA.js";import"./iteratee-DcFo3kqw.js";import"./Cross-DMr9TiE5.js";import"./Sector-CThHVGg7.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
