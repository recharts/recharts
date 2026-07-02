import{R as t}from"./iframe-BiO1LFJs.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-JFjnQJGm.js";import{R as l}from"./zIndexSlice-CmtXwCpm.js";import{C as x}from"./ComposedChart-KVP1qpXF.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DG8Zn84m.js";import{L as a}from"./Line-1_BYKPYm.js";import{X as c}from"./XAxis-BRwCq2oj.js";import{T as g}from"./Tooltip-n88-j1Kq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Bp6siJa-.js";import"./Layer-H8Y9pDd0.js";import"./resolveDefaultProps-gKXUf8-9.js";import"./Text-BSmuYjPa.js";import"./DOMUtils-DsPsNFwh.js";import"./isWellBehavedNumber-Dxkk48kL.js";import"./Label-CZnmw5cu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-P1dNdSQJ.js";import"./index-CQxwz_yZ.js";import"./index-aP1SqDBB.js";import"./types-Bn2J_DOa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DYPlU4wm.js";import"./throttle-CSNtF4Q0.js";import"./RechartsWrapper-CzSMI4by.js";import"./index-De8uMPL0.js";import"./index-xoOEAtk6.js";import"./axisSelectors-C_E3bYBf.js";import"./d3-scale-B0MWpAf5.js";import"./CartesianChart-IjCJKDDX.js";import"./chartDataContext-Dd2hF0M7.js";import"./CategoricalChart-CD1H2W0S.js";import"./tooltipContext-COr2JgW0.js";import"./AnimatedItems-DgpiirzW.js";import"./useAnimationId-CvsS4m8J.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CTCiy3q0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bl46xbNE.js";import"./RegisterGraphicalItemId-DTynMESK.js";import"./ErrorBarContext-DCf_sWWl.js";import"./GraphicalItemClipPath-BeoHEVW6.js";import"./SetGraphicalItem-BmZzevIp.js";import"./getZIndexFromUnknown-BK4fb4N5.js";import"./graphicalItemSelectors-CTNphZph.js";import"./Curve-kUjOM15F.js";import"./step-CvpshmWh.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BKJaC1Uq.js";import"./Dot-B5F-cqV_.js";import"./getRadiusAndStrokeWidthFromDot-DCnDKADl.js";import"./useElementOffset-dpEKlp0x.js";import"./uniqBy-BVXibjHx.js";import"./iteratee-C9sw1IiS.js";import"./Cross-TOJOS5mm.js";import"./Sector-CAilI50V.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
