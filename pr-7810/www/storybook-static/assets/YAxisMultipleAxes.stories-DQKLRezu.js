import{R as t}from"./iframe-bFSgLdPD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-bnO7DvP4.js";import{R as l}from"./zIndexSlice-D5upya8o.js";import{C as x}from"./ComposedChart-rnVwwIMy.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DtdoudMG.js";import{L as a}from"./Line-DgS_baGq.js";import{X as c}from"./XAxis-Bw0rvwCt.js";import{T as g}from"./Tooltip-CF-fAa6p.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CpotZ0Ob.js";import"./Text-BFarDq7U.js";import"./resolveDefaultProps-Dwo3cyUv.js";import"./DOMUtils-DvIkXWfS.js";import"./isWellBehavedNumber-CxGT-_DT.js";import"./useId-CXlgEyVd.js";import"./useBackwardsCompatibleTheme-DabWIItU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B1KbNkPu.js";import"./index-Dx35Wad7.js";import"./index-Bahp64_w.js";import"./RechartsWrapper-BY-4gTQl.js";import"./axisSelectors-jpWGPgQR.js";import"./throttle-u-v2gKhP.js";import"./d3-scale-DJKaPyhK.js";import"./index-CNz3Scut.js";import"./index-XM-eSlQm.js";import"./renderedTicksSlice-BcG7Kuye.js";import"./index-DzQCF7Uo.js";import"./CartesianAxis-CrKpg4w8.js";import"./Layer-B9YPmvvS.js";import"./types-D_jE8zAs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-tk8PYi9A.js";import"./chartDataContext-DUbpY4V-.js";import"./CategoricalChart-DBfHTq3P.js";import"./AnimatedItems-C1Ji84_q.js";import"./useAnimationId-C-HuNRtZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CtC0waIA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Tc7vH23C.js";import"./tooltipContext-CAqsdHhB.js";import"./RegisterGraphicalItemId-Ch2aaSbQ.js";import"./ErrorBarContext-BTgf3Fn1.js";import"./GraphicalItemClipPath-D0Gpm_sI.js";import"./SetGraphicalItem-BK4LEDF0.js";import"./getZIndexFromUnknown-CCd94QFN.js";import"./useGraphicalItemIdentity-BF3Qfnje.js";import"./Curve-C65UunW2.js";import"./step-my7iJLmD.js";import"./path-DyVhHtw_.js";import"./ActivePoints-t5f1lIKd.js";import"./Dot-DYaRHvIo.js";import"./getRadiusAndStrokeWidthFromDot-BeJ6jSsg.js";import"./useElementOffset-DgdUocH5.js";import"./uniqBy-C-W8pKck.js";import"./iteratee-BdAcVhmI.js";import"./Cross-DIq_YqZ2.js";import"./Sector-doVGkRfa.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
