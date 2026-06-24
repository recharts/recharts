import{R as t}from"./iframe-BeltcMgq.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Dm0u982e.js";import{R as l}from"./zIndexSlice-ChbQV9za.js";import{C as x}from"./ComposedChart-naju1Utf.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-b7Q_u2oZ.js";import{L as a}from"./Line-jXfK2EIu.js";import{X as c}from"./XAxis-DT2umrlt.js";import{T as g}from"./Tooltip-VcPokJLr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Blzhyn8O.js";import"./CartesianAxis-SUuO_eM5.js";import"./Layer-CtUZ3qxP.js";import"./resolveDefaultProps-Bi5xr7q4.js";import"./Text-zWkWuZ8O.js";import"./DOMUtils-BiPI68kE.js";import"./isWellBehavedNumber-Ho-XzrAB.js";import"./Label-CRfC-ZbS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CXY-gIuZ.js";import"./index-DdbLs963.js";import"./index-D1BJqAdU.js";import"./types-BjpCNPaQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BWzIqvlP.js";import"./immer-BYDh_fcZ.js";import"./RechartsWrapper-afo15-1c.js";import"./index-DN-_Sx45.js";import"./index-BWKSKuqG.js";import"./axisSelectors-DoBuhKXQ.js";import"./d3-scale-D9qfoPRi.js";import"./CartesianChart-DU3tYN-2.js";import"./chartDataContext-BTBnexhV.js";import"./CategoricalChart-CYbFsyR9.js";import"./tooltipContext-DYDElE1r.js";import"./AnimatedItems-Dkw2Nvms.js";import"./useAnimationId-CnyBiRCJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-tmcejSqz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BaRNo4pA.js";import"./RegisterGraphicalItemId-B1kcHgmx.js";import"./ErrorBarContext-DUSNqADu.js";import"./GraphicalItemClipPath-CSrYVdhv.js";import"./SetGraphicalItem-D8n7ZbTI.js";import"./getZIndexFromUnknown-C9Oh7hor.js";import"./graphicalItemSelectors-rHdypOwQ.js";import"./Curve-CGP8Kyx3.js";import"./step-BCv6lKfH.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Ba7rTZZ7.js";import"./Dot-BQsxsBTP.js";import"./getRadiusAndStrokeWidthFromDot-BvOJydOS.js";import"./useElementOffset-RMclYIFs.js";import"./uniqBy-DrzaHxV1.js";import"./iteratee-CApTMtkb.js";import"./Cross-Cu-v3FDR.js";import"./Sector-D5WoZfqi.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
