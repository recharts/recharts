import{R as t}from"./iframe-CChz1bjN.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D3lxiiSv.js";import{R as l}from"./zIndexSlice-J8dqmnLP.js";import{C as x}from"./ComposedChart-CYDZ6cYR.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-jD4Q7hGC.js";import{L as a}from"./Line-Bf8JTt31.js";import{X as c}from"./XAxis-Dz7Mu1Ti.js";import{T as g}from"./Tooltip-BMykeu_V.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BPWxH0ZN.js";import"./Text-BrAnNoDm.js";import"./resolveDefaultProps-DJguzPnh.js";import"./DOMUtils--GcIornt.js";import"./isWellBehavedNumber-PtazZpkz.js";import"./useId-K9oYYmyx.js";import"./useBackwardsCompatibleTheme-BGpxY7da.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CPJzWnIR.js";import"./index-CoE7QQC7.js";import"./index-CtYYpEHs.js";import"./RechartsWrapper-ChebgGg6.js";import"./axisSelectors-Bb5mJC8T.js";import"./throttle-DthdhVSw.js";import"./d3-scale-DDBYxdkW.js";import"./index-CFolhqr8.js";import"./index-By2IEA6Z.js";import"./renderedTicksSlice-CR60wYV2.js";import"./index-DDJfRyTp.js";import"./CartesianAxis-DfCGaEVk.js";import"./Layer-CvQSqWng.js";import"./types-7thkXqxr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DkExCOrE.js";import"./chartDataContext-QAaM8qFu.js";import"./CategoricalChart-9EjbSGzt.js";import"./AnimatedItems-BIr5SWwF.js";import"./useAnimationId-q2i8nWUT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DohuQVgo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DRMRiarj.js";import"./tooltipContext-T5Np760b.js";import"./RegisterGraphicalItemId-Bv9eLHhO.js";import"./ErrorBarContext-DOiMkOOX.js";import"./GraphicalItemClipPath-Dod_0DGM.js";import"./SetGraphicalItem-N_7Gn5e1.js";import"./getZIndexFromUnknown-BI92rzQK.js";import"./useGraphicalItemIdentity-DNZCCG3V.js";import"./Curve-QJYhnBl8.js";import"./step-BINpEDE3.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CNZPQxVC.js";import"./Dot-BKha21me.js";import"./getRadiusAndStrokeWidthFromDot-BWutJIdQ.js";import"./useElementOffset-DnV8f39A.js";import"./uniqBy-CPev9fIs.js";import"./iteratee-Bo1K-GJU.js";import"./Cross-DBaaGir1.js";import"./Sector-B3gLyYgB.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
