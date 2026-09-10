import{R as t}from"./iframe-C3cMgs7N.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CPQEML-M.js";import{R as l}from"./zIndexSlice-D-L1krEw.js";import{C as x}from"./ComposedChart-B0L49GOK.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bb8D2wYN.js";import{L as a}from"./Line-qJZBDGuF.js";import{X as c}from"./XAxis-FEXGRCPo.js";import{T as g}from"./Tooltip-armKHNsC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-p42oyH6O.js";import"./Text-BJKUimah.js";import"./resolveDefaultProps-VIGlyQ4Q.js";import"./DOMUtils-DEPBoe7u.js";import"./isWellBehavedNumber-loxwPj_L.js";import"./useId-B00C84E0.js";import"./useBackwardsCompatibleTheme-yxpwTzAk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Beq1j20z.js";import"./index-mPjB9LZ5.js";import"./index-DWDQXKDL.js";import"./RechartsWrapper-BBL8LSCF.js";import"./axisSelectors-CyFo4akS.js";import"./throttle-CwKbnzuB.js";import"./d3-scale-D9HAsSWg.js";import"./index-iS8UOd73.js";import"./index-CbpSVjN5.js";import"./renderedTicksSlice-BLxMgK4j.js";import"./index-CK2o4ASw.js";import"./CartesianAxis-Cm_mWvUj.js";import"./Layer-B4ssOgoe.js";import"./types-BRZWQnVt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BYHp5epD.js";import"./chartDataContext-CUGiPJA1.js";import"./CategoricalChart-BrdbHA9J.js";import"./AnimatedItems-CeXZD4iR.js";import"./useAnimationId-Bsfqf9JH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CfdBkyVH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CBqTe_nx.js";import"./tooltipContext-Cv7XVnGl.js";import"./RegisterGraphicalItemId-Ce557wgI.js";import"./ErrorBarContext-Bcyk1pto.js";import"./GraphicalItemClipPath-6iwmqxiy.js";import"./SetGraphicalItem-NnzstWhO.js";import"./getZIndexFromUnknown-BYoczOZs.js";import"./useGraphicalItemIdentity-BrYniqkC.js";import"./Curve-Cd2PH3uW.js";import"./step-BchzuBRK.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CeVGeC-b.js";import"./Dot-DHWsLk6I.js";import"./getRadiusAndStrokeWidthFromDot-Bp5N-w6q.js";import"./useElementOffset-C6z2yXVE.js";import"./uniqBy-D9evTCTx.js";import"./iteratee-DQXLPY2T.js";import"./Cross-C79SN9P2.js";import"./Sector-31CjT2g4.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
