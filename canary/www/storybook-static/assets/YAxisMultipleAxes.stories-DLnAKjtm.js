import{R as t}from"./iframe-D48Nzg7a.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B8Cc3RzQ.js";import{R as l}from"./zIndexSlice-Nz3qbcrc.js";import{C as x}from"./ComposedChart-C0XJcgvF.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C0StZq4c.js";import{L as a}from"./Line-wnmXZFNC.js";import{X as c}from"./XAxis-vF58_Zhz.js";import{T as g}from"./Tooltip-DYdz9UJp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dvc5-O45.js";import"./Text-BmDi8oon.js";import"./resolveDefaultProps-X4i4u3XO.js";import"./DOMUtils-MwbqvkJM.js";import"./isWellBehavedNumber-C7xfGJm3.js";import"./useBackwardsCompatibleTheme-D_bQGNKj.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C5gHLVh2.js";import"./index-1Ac2q3vk.js";import"./index-DZyliIRq.js";import"./RechartsWrapper-S_Xc00BH.js";import"./index-BpddMd5l.js";import"./index-Dqx9cZ4q.js";import"./throttle-DSE-ZCYP.js";import"./axisSelectors-CnpCzdAy.js";import"./d3-scale-BmAkfb5N.js";import"./renderedTicksSlice-DkSC6crE.js";import"./CartesianAxis-DNEYl1Os.js";import"./Layer-DQQ0bNB2.js";import"./types-DUxuHHgK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DqIlVucu.js";import"./chartDataContext-DiRp1I73.js";import"./CategoricalChart-DWr61JUe.js";import"./AnimatedItems-CvUvPizu.js";import"./useAnimationId-C-dtJewN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BLR_lgnH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C9yMl5UT.js";import"./tooltipContext-BIjf47GM.js";import"./RegisterGraphicalItemId-DFpeIKrt.js";import"./ErrorBarContext-D4VutYOM.js";import"./GraphicalItemClipPath-BHb4Wa01.js";import"./SetGraphicalItem-aeCrMt0o.js";import"./getZIndexFromUnknown-DrophhrA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C2xNQRdY.js";import"./Curve-C6kUZVG1.js";import"./step-Dw08AzPN.js";import"./path-DyVhHtw_.js";import"./ActivePoints-4s2DAq8-.js";import"./Dot-CABes5hO.js";import"./getRadiusAndStrokeWidthFromDot-DW3hhWH9.js";import"./useElementOffset-CWdvxxkR.js";import"./uniqBy-DBAMUzKM.js";import"./iteratee-Dm8hLA5j.js";import"./Cross-CBvfo1Yn.js";import"./Sector-C3TmLlhC.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
