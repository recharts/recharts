import{R as t}from"./iframe-pb0eGUzQ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CZ5C3-Kt.js";import{R as l}from"./zIndexSlice-Cv3joHsa.js";import{C as x}from"./ComposedChart-BYOHyhAB.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-sbJzGRZ-.js";import{L as a}from"./Line-BK-thIbQ.js";import{X as c}from"./XAxis-C8pfECSp.js";import{T as g}from"./Tooltip-DiQYdaUL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C-65Vs2n.js";import"./Text-Bq7mJ7MP.js";import"./resolveDefaultProps-BIcSgHHm.js";import"./DOMUtils-C_JPJk8X.js";import"./isWellBehavedNumber-sYswO0zz.js";import"./useId-xKOkSlvZ.js";import"./useBackwardsCompatibleTheme-DGBzFLd0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BlGsGj6Y.js";import"./index-CadbAa9f.js";import"./index-B3wblxBJ.js";import"./RechartsWrapper-BvkKxzHL.js";import"./index-Ci6SDbSO.js";import"./index-DmA7_hIT.js";import"./throttle-CLVKwQCr.js";import"./axisSelectors-RMGVuaxT.js";import"./d3-scale-D40q8NYs.js";import"./renderedTicksSlice-BIUrSjZy.js";import"./CartesianAxis-DVH187SM.js";import"./Layer-CsF7idKX.js";import"./types-CuZ7ciTr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D9u_fkX_.js";import"./chartDataContext-tQQ7C7rr.js";import"./CategoricalChart-DraDT8M3.js";import"./AnimatedItems-DvU5M9qH.js";import"./useAnimationId-hkXeXWT6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-A7Xjxu5S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DGHBRMQa.js";import"./tooltipContext-DNDDUbyD.js";import"./RegisterGraphicalItemId-BA80SMDx.js";import"./ErrorBarContext-BE4oep3j.js";import"./GraphicalItemClipPath-B6_R3NgE.js";import"./SetGraphicalItem-DoaJ7VXW.js";import"./getZIndexFromUnknown-Dzrb_Phf.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-7aPo6C0-.js";import"./Curve-CGTwaLHs.js";import"./step-BNEQKmaP.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CH_dCX-F.js";import"./Dot-DmEXtJXC.js";import"./getRadiusAndStrokeWidthFromDot-DyhskonW.js";import"./useElementOffset-BhgReHS5.js";import"./uniqBy-B7PLiSrR.js";import"./iteratee-DkLl-_WR.js";import"./Cross-BP7WwU5P.js";import"./Sector-D61FKZNa.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
