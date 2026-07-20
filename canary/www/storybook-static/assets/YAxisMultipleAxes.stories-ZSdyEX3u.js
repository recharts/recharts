import{R as t}from"./iframe-C749ZEo3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B2DRI57X.js";import{R as l}from"./zIndexSlice-DkHm22lp.js";import{C as x}from"./ComposedChart-BDBDopuV.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BrMNFoSQ.js";import{L as a}from"./Line-UPSPma38.js";import{X as c}from"./XAxis-B1Zyj3MJ.js";import{T as g}from"./Tooltip-DjfW9i_Q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CwN7eQSV.js";import"./Layer-FHePmoXC.js";import"./resolveDefaultProps-6zK50N0i.js";import"./Text-C7YPKDRG.js";import"./DOMUtils-D28hoCtk.js";import"./isWellBehavedNumber-tfpL7kaQ.js";import"./Label-SA_6xz2S.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BPz0-wLY.js";import"./index-BvdVRi_-.js";import"./index-BBhpwV9s.js";import"./types-CCzU3Dbp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B967Fzve.js";import"./throttle-CELIeDih.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-Mb5ys-Ox.js";import"./index-D27ZEbdc.js";import"./index-Cclh13Kt.js";import"./axisSelectors-DqDg1DKC.js";import"./d3-scale-DpaPidEg.js";import"./CartesianChart-B3fNYna3.js";import"./chartDataContext-D1rfIYla.js";import"./CategoricalChart-CQbOZOy_.js";import"./tooltipContext-DPlYRDQn.js";import"./AnimatedItems-D44ZJFQN.js";import"./useAnimationId-BXnZ6W5r.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-1n2gPHd-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-6Wqxn4P9.js";import"./RegisterGraphicalItemId-HD16Gn5o.js";import"./ErrorBarContext-CXrvXgEG.js";import"./GraphicalItemClipPath-DnnLxorK.js";import"./SetGraphicalItem-JwiICpaG.js";import"./getZIndexFromUnknown-Cm9nyx4T.js";import"./graphicalItemSelectors-DA-YAlWN.js";import"./Curve-D0zH9wUo.js";import"./step-BM8N9mx2.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Crx-wa0M.js";import"./Dot-CRKEafBC.js";import"./getRadiusAndStrokeWidthFromDot-YLlbYGyD.js";import"./useElementOffset-D5wCeLQL.js";import"./uniqBy-gAFj75uR.js";import"./iteratee-BUXNkTTn.js";import"./Cross-BjyZeZzk.js";import"./Sector-Dag_B3iS.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
