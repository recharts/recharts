import{R as t}from"./iframe-BKk44VOT.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DPFxody7.js";import{R as l}from"./zIndexSlice-BjWKOBUm.js";import{C as x}from"./ComposedChart-Bs9KweDK.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BWRg73Aa.js";import{L as a}from"./Line-BvewL5vb.js";import{X as c}from"./XAxis-2cJ7kaI0.js";import{T as g}from"./Tooltip-BgcLf1vL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BPr6N2Q-.js";import"./Text-BtR9CUIB.js";import"./resolveDefaultProps-CzfJP_I-.js";import"./DOMUtils-Dil5o6Lr.js";import"./isWellBehavedNumber-BPjqRkxS.js";import"./useId-hvzCLp2v.js";import"./useBackwardsCompatibleTheme-VDOEj1kR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-wqOp9Wsh.js";import"./index-BTZJ4Yum.js";import"./index-D9YNF8fg.js";import"./RechartsWrapper-CVGPHljF.js";import"./axisSelectors-BiJJw6in.js";import"./throttle-BdnDrpLZ.js";import"./d3-scale-rR_TqiZM.js";import"./index-BjsXzqOC.js";import"./index-CvfG5lr1.js";import"./renderedTicksSlice-BYjFoixx.js";import"./index-TeAPTJXJ.js";import"./CartesianAxis-D8EUtvdL.js";import"./Layer-6OjQkfig.js";import"./types-CjNR6i_K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DS36pb4k.js";import"./chartDataContext-O1WSQyDv.js";import"./CategoricalChart-C8xt7Kx0.js";import"./AnimatedItems-_iMVf6zS.js";import"./useAnimationId-DT580Fuf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CN77nqgF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DDxo2n_b.js";import"./tooltipContext-BLox9vj-.js";import"./RegisterGraphicalItemId-DFS7YVx4.js";import"./ErrorBarContext-BlzVudvo.js";import"./GraphicalItemClipPath-Bj844YW0.js";import"./SetGraphicalItem-BFQOKK6x.js";import"./getZIndexFromUnknown-8l31fZiV.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Ddb1xjud.js";import"./Curve-Bl3ua7_T.js";import"./step-Dtmfv3UM.js";import"./path-DyVhHtw_.js";import"./ActivePoints-RMI7wAiF.js";import"./Dot-CWbOoqzR.js";import"./getRadiusAndStrokeWidthFromDot-nIjLU3ma.js";import"./useElementOffset-CnoXh3Na.js";import"./uniqBy-CnjkiirN.js";import"./iteratee-Dk_Av1Hh.js";import"./Cross-D2ZCW4Jl.js";import"./Sector-BJAdyxZt.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Lt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
