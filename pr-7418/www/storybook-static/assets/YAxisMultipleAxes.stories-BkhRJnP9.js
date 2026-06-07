import{R as t}from"./iframe-B32UfMsX.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-4E9uo8Up.js";import{R as l}from"./zIndexSlice-DkyNtvIV.js";import{C as x}from"./ComposedChart-QBL839d_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DmuuFxqL.js";import{L as a}from"./Line-Bf6u9d83.js";import{X as c}from"./XAxis-DsOSB3OX.js";import{T as g}from"./Tooltip-C_vmEps_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CT3OO5rn.js";import"./CartesianAxis-CrAWHyC2.js";import"./Layer-M7lMUPI2.js";import"./resolveDefaultProps-SHHlCQDD.js";import"./Text-DenoxlLY.js";import"./DOMUtils-qhHnbbUp.js";import"./isWellBehavedNumber-B3ho9k16.js";import"./Label-Ba3mw93_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DIk8UPq9.js";import"./index-BAP72phy.js";import"./index-wjzF3nV2.js";import"./types-BFdTLIuF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DtIdXCHL.js";import"./immer-BidytqCU.js";import"./RechartsWrapper-BXDb61uY.js";import"./index-DzoQc6cZ.js";import"./index-Q93duC2Q.js";import"./axisSelectors-B8hXjmBG.js";import"./d3-scale-BwqG5DLv.js";import"./string-B6fdYHAA.js";import"./CartesianChart-s4vgD_mJ.js";import"./chartDataContext-d3sJv4oK.js";import"./CategoricalChart-svLbPFL5.js";import"./tooltipContext-BLrLP8j9.js";import"./AnimatedItems-CWOjCZuo.js";import"./useAnimationId-kKOEl60u.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Chp3lP1V.js";import"./ActiveShapeUtils-rTJK82Vs.js";import"./RegisterGraphicalItemId-BPd8SjvM.js";import"./ErrorBarContext-CC6gZVl6.js";import"./GraphicalItemClipPath-DtFSmlFx.js";import"./SetGraphicalItem-CLuszb-H.js";import"./getZIndexFromUnknown-CctZbkJb.js";import"./graphicalItemSelectors-CCBoqdYH.js";import"./Curve-BQ-BZdGC.js";import"./step-DXYrSD7K.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BOP5iqzh.js";import"./Dot-oj-oSIki.js";import"./getRadiusAndStrokeWidthFromDot-BZUf4vDk.js";import"./useElementOffset-Dj3OO3b3.js";import"./uniqBy-DT8uU73i.js";import"./iteratee-CxBZkxbt.js";import"./Cross-Dpp9czJE.js";import"./Sector-BPld6y2i.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
