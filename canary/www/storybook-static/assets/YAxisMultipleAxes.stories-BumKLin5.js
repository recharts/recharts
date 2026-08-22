import{R as t}from"./iframe-CbdG93Rp.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Dmha2qJn.js";import{R as l}from"./zIndexSlice-BBA2vYL9.js";import{C as x}from"./ComposedChart-BlErnFXo.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DL_z0dKJ.js";import{L as a}from"./Line-U7gysocc.js";import{X as c}from"./XAxis-gGpg7lh6.js";import{T as g}from"./Tooltip-QYlwlXxX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DXZsEXpn.js";import"./Text-DuH_mhct.js";import"./resolveDefaultProps-BNACGTBd.js";import"./DOMUtils-CqvRu_MB.js";import"./isWellBehavedNumber-DBJb9JTb.js";import"./useId-Ca5c2KHs.js";import"./useBackwardsCompatibleTheme-CqJEL2NO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-FtCXwXjd.js";import"./index-yQCZGhVI.js";import"./index-BiGXtIk6.js";import"./RechartsWrapper-Bx7VgKe3.js";import"./index-D8WEHlsH.js";import"./index-ybXde8ox.js";import"./throttle-k7AnGod1.js";import"./axisSelectors-BHZKzxax.js";import"./d3-scale-CLJM1nE7.js";import"./renderedTicksSlice-H0Ext-F-.js";import"./CartesianAxis-D93bSTxK.js";import"./Layer-BZ6Fc3lQ.js";import"./types-CpUmxW-2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-KT4JQkAx.js";import"./chartDataContext-fDUY1EA6.js";import"./CategoricalChart-BZ6Syier.js";import"./AnimatedItems-LAFrqwsd.js";import"./useAnimationId-Ctl7EN5N.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CwYRuFSD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DQoUFAUU.js";import"./tooltipContext-D5Q41Klp.js";import"./RegisterGraphicalItemId-VTOA4vtw.js";import"./ErrorBarContext-DKNTm7fJ.js";import"./GraphicalItemClipPath-B5C5ys39.js";import"./SetGraphicalItem-OAT4QAS1.js";import"./getZIndexFromUnknown-B0qIceOM.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Beqitca1.js";import"./Curve-Dl3donnJ.js";import"./step-DJlKpvLR.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BK9QhdV8.js";import"./Dot-CTYtj4mc.js";import"./getRadiusAndStrokeWidthFromDot-CZbk3-9Z.js";import"./useElementOffset-g697mWa_.js";import"./uniqBy-BjmPaqQH.js";import"./iteratee-mNdZ8SiJ.js";import"./Cross-DYExr5pf.js";import"./Sector-DfHIsp93.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
