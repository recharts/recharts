import{R as t}from"./iframe-BB3lVLoc.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DG4767Mj.js";import{R as l}from"./zIndexSlice-CfHP3A1Y.js";import{C as x}from"./ComposedChart-CylK8khp.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Ccm6G5ye.js";import{L as a}from"./Line-C9JbolpU.js";import{X as c}from"./XAxis-BBQp-Idt.js";import{T as g}from"./Tooltip-ChW1fGhT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Cn0Fp29B.js";import"./Text-DEC8wtTL.js";import"./resolveDefaultProps-CUfoVU2p.js";import"./DOMUtils-CldD4RXg.js";import"./isWellBehavedNumber-_9n5Uq-d.js";import"./useId-BaM-cyip.js";import"./useBackwardsCompatibleTheme-Cqzm3Lgs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DTgItK4v.js";import"./index-DcEJbqAh.js";import"./index-BKenMcKp.js";import"./RechartsWrapper-S-WqrQUy.js";import"./axisSelectors-CEA0dwEw.js";import"./throttle-QtsYQF8O.js";import"./d3-scale-CDtyCF0X.js";import"./index-DUlsk-Es.js";import"./index-B-cCuGfC.js";import"./renderedTicksSlice-Toi-dgcz.js";import"./index-yFQohn8S.js";import"./CartesianAxis-m8s8CMt8.js";import"./Layer-NQ3_WlgF.js";import"./types-KCNzlOcC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Kpp943Pu.js";import"./chartDataContext-CiYf8ag2.js";import"./CategoricalChart-CwlUzHNA.js";import"./AnimatedItems-DJZqC0i8.js";import"./useAnimationId-BDqb5MNR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BTqJh7jp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DiHdw4Rv.js";import"./tooltipContext-BFo4MnEz.js";import"./RegisterGraphicalItemId-BeJ9531v.js";import"./ErrorBarContext-BboOIeGg.js";import"./GraphicalItemClipPath-DHVb6D1Y.js";import"./SetGraphicalItem-B2jSBaNX.js";import"./getZIndexFromUnknown-PK6XOoIa.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B1_R2Hdb.js";import"./Curve-DzA4hX9V.js";import"./step-D6h1aeKq.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C2lE0Ysx.js";import"./Dot-bxm0u_di.js";import"./getRadiusAndStrokeWidthFromDot-D184pFcr.js";import"./useElementOffset-yO1LxUDf.js";import"./uniqBy-BBx3NQ59.js";import"./iteratee-CI9yimKx.js";import"./Cross-Cpmu6xPG.js";import"./Sector-qPpg4NhU.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
