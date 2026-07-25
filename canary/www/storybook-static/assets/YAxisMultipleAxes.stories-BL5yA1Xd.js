import{R as t}from"./iframe-jpw6hTzP.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Cro589xA.js";import{R as l}from"./zIndexSlice-0hywYSss.js";import{C as x}from"./ComposedChart-CLKvf99S.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CwW5sQEX.js";import{L as a}from"./Line-C57CrOO0.js";import{X as c}from"./XAxis-i-qKaY8p.js";import{T as g}from"./Tooltip-CQP5PMUx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-hrtgNZzr.js";import"./Layer-DBhjUf2v.js";import"./resolveDefaultProps-B-NoCwnk.js";import"./Text-CD-hvoQS.js";import"./DOMUtils-ByIChG1Y.js";import"./isWellBehavedNumber-Bpm3dXa6.js";import"./Label-Ddiq2mWQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-qT8qrsoe.js";import"./index-DO5hoWZ6.js";import"./index-BVY5iI86.js";import"./types-Q9eva-kl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DaJpGvtP.js";import"./throttle-CyRNR61p.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DETDaPtv.js";import"./index-BAw2ZYTH.js";import"./index-B3JmkEsF.js";import"./axisSelectors-fmgxI94T.js";import"./d3-scale-DRfhHoT1.js";import"./CartesianChart-CgGbY7Vc.js";import"./chartDataContext-BOCAF6JU.js";import"./CategoricalChart-CgK2HWLH.js";import"./tooltipContext-daoShmAn.js";import"./AnimatedItems-QuI77x2Z.js";import"./useAnimationId-BDRU6NIW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BLYrXLOh.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CdjeeMGu.js";import"./RegisterGraphicalItemId-BKfVpYlc.js";import"./ErrorBarContext-TSI08DrR.js";import"./GraphicalItemClipPath-BtpdwkC7.js";import"./SetGraphicalItem-B7bXtFbE.js";import"./getZIndexFromUnknown-Bs7pqycU.js";import"./graphicalItemSelectors-RdqMeZ9P.js";import"./Curve-CvVzTtSx.js";import"./step-DQBQyc1L.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Byy_7u33.js";import"./Dot-C9R0P-ig.js";import"./getRadiusAndStrokeWidthFromDot-DOVdep_g.js";import"./useElementOffset-C-e6OQM8.js";import"./uniqBy-Dn1sAR5T.js";import"./iteratee-ZOl5KNFh.js";import"./Cross-DJcvNMj3.js";import"./Sector-DTQnXnWe.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
