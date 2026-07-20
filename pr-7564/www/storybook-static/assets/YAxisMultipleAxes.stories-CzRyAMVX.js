import{R as t}from"./iframe-MCQmK-TG.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BUA5jm-O.js";import{R as l}from"./zIndexSlice-BMHpWHLe.js";import{C as x}from"./ComposedChart-CupTaTlB.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D1D6Sazc.js";import{L as a}from"./Line-D58bgiXU.js";import{X as c}from"./XAxis-xj8vDJ23.js";import{T as g}from"./Tooltip-DoSHN02A.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-B42rFi6U.js";import"./Layer-BUisE7Gh.js";import"./resolveDefaultProps-DF8ch7IU.js";import"./Text-LGFyNulV.js";import"./DOMUtils-DeN2A_86.js";import"./isWellBehavedNumber-DF6QZ0lN.js";import"./Label-DaldQZFv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BnKxJfbB.js";import"./index-iUk-FcRS.js";import"./index-CGFRGdbT.js";import"./types-Cz27ONEA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-5teDD8C_.js";import"./throttle-exFJ19dN.js";import"./RechartsWrapper-CSMirUgA.js";import"./index-DCwDEUXM.js";import"./index-4hl_PvHL.js";import"./axisSelectors-t6G1HMN1.js";import"./d3-scale-1trsZxCl.js";import"./CartesianChart-CbiEQRIX.js";import"./chartDataContext-oq73vT2r.js";import"./CategoricalChart-DG8zA7C6.js";import"./tooltipContext-DWjYKNyH.js";import"./AnimatedItems-Z_ZNAYUP.js";import"./useAnimationId-Ptyt1Cmf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dp_gpqgG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJxvN-bC.js";import"./RegisterGraphicalItemId-CwAmMMrt.js";import"./ErrorBarContext-7PhmiQse.js";import"./GraphicalItemClipPath-BDardp6y.js";import"./SetGraphicalItem-RVuvzcbz.js";import"./getZIndexFromUnknown-DuwgLHw0.js";import"./graphicalItemSelectors-DTYEBY2T.js";import"./Curve-DfisrzMh.js";import"./step-DU3HZd3T.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DBM0wjQk.js";import"./Dot-CZGz3E6B.js";import"./getRadiusAndStrokeWidthFromDot-00OVvYcl.js";import"./useElementOffset-IqQ0qYQD.js";import"./uniqBy-9wyvpuL-.js";import"./iteratee-D6dL79SH.js";import"./Cross-BuwOH600.js";import"./Sector-CSOrAi9m.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
