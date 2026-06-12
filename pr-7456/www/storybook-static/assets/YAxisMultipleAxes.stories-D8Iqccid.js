import{R as t}from"./iframe-B7udcz8q.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-B456uVCj.js";import{R as l}from"./zIndexSlice-CtXztuzC.js";import{C as x}from"./ComposedChart-BH1TZk1K.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bdi7rTTq.js";import{L as a}from"./Line-D-LESVBA.js";import{X as c}from"./XAxis-DiPjyBYO.js";import{T as g}from"./Tooltip-BXldKG2S.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Tn0kxTo7.js";import"./CartesianAxis-Cfla_J1H.js";import"./Layer-CJbCrDcq.js";import"./resolveDefaultProps-B-U9qcdT.js";import"./Text-DijhQOvE.js";import"./DOMUtils-D_cLkzH2.js";import"./isWellBehavedNumber-BlYOzctW.js";import"./Label-DwDNb6uu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D4FmDVUU.js";import"./index-S5IzzpjS.js";import"./index-rAymN7LL.js";import"./types-bSkV0tKv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-LbTh7uAL.js";import"./immer-t_2Sayw7.js";import"./RechartsWrapper-RU_ueSyC.js";import"./index-BlkuEMuV.js";import"./index-Bml9ugX6.js";import"./axisSelectors-Cj3RkADr.js";import"./d3-scale-NB2wmaCb.js";import"./string-B6fdYHAA.js";import"./CartesianChart-94_kN34Y.js";import"./chartDataContext-BQtkj7i-.js";import"./CategoricalChart-Hmy3E080.js";import"./tooltipContext-YXrcIMlQ.js";import"./AnimatedItems-KJX7W3it.js";import"./useAnimationId-Ceo5Qx4Z.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ClGYLgbx.js";import"./ActiveShapeUtils-CuaFKTcX.js";import"./RegisterGraphicalItemId-NzEXLpZt.js";import"./ErrorBarContext-DUPlcwIm.js";import"./GraphicalItemClipPath-dDeN-gZy.js";import"./SetGraphicalItem-CbXxnaP2.js";import"./getZIndexFromUnknown-B5JjxKi3.js";import"./graphicalItemSelectors-D66E08OS.js";import"./Curve-CqYDgXu-.js";import"./step-BfmxT7JJ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-03Jr3wsv.js";import"./Dot-CT7VE7Ou.js";import"./getRadiusAndStrokeWidthFromDot-C1_PUQIm.js";import"./useElementOffset-qThfu9mS.js";import"./uniqBy-DJu4ehry.js";import"./iteratee-DoAiHgnQ.js";import"./Cross-DU6Hws-N.js";import"./Sector-BtvrIVQm.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
