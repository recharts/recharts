import{R as t}from"./iframe-CnwzBkds.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-iu19I_Qe.js";import{R as l}from"./zIndexSlice-BpzqiTUQ.js";import{C as x}from"./ComposedChart-C1DfHVp4.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DdNs6xBo.js";import{L as a}from"./Line-DZz_6nuU.js";import{X as c}from"./XAxis-DbvG2C4p.js";import{T as g}from"./Tooltip-Cuy3FLW2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-B8n4OfLY.js";import"./CartesianAxis-BmrJk-2O.js";import"./Layer-BZqaMaXh.js";import"./resolveDefaultProps-DV3X3ep6.js";import"./Text-BltVqzsV.js";import"./DOMUtils-BbYzFqpk.js";import"./isWellBehavedNumber-ChDLwcgn.js";import"./Label-CslQeHKW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C4T4UXDK.js";import"./index-B17a-Fpl.js";import"./index-DKNFhV5H.js";import"./types-E3CxlAR_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CAlTfeNf.js";import"./immer-BZhv9pDN.js";import"./RechartsWrapper-BxrV5UFS.js";import"./index-DLJqppDu.js";import"./index-5-p3p247.js";import"./axisSelectors-BYBAWXh2.js";import"./d3-scale-CG2_6ote.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DJOSlpeY.js";import"./chartDataContext-BeCpsJVv.js";import"./CategoricalChart-ijSp3dOV.js";import"./tooltipContext-BS-I8LHO.js";import"./AnimatedItems-Cm-dfr_1.js";import"./useAnimationId-_xLlXMao.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DprBphTu.js";import"./ActiveShapeUtils-_gRdTSDq.js";import"./RegisterGraphicalItemId-CObDD7O1.js";import"./ErrorBarContext-B0xmk8dk.js";import"./GraphicalItemClipPath-B8izwUTw.js";import"./SetGraphicalItem-DAx4YtHH.js";import"./getZIndexFromUnknown-CptywOD8.js";import"./graphicalItemSelectors-YedpX9x1.js";import"./Curve-BxBABYqk.js";import"./step-DoliEjqo.js";import"./path-DyVhHtw_.js";import"./ActivePoints-PwKQf3Tu.js";import"./Dot-ChNZRKCC.js";import"./getRadiusAndStrokeWidthFromDot-BA9mIRYp.js";import"./useElementOffset-C-r6gAvG.js";import"./uniqBy-IJ-29Nzx.js";import"./iteratee-5Of9wb96.js";import"./Cross-C2nHJKOr.js";import"./Sector-6vHddUUb.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
