import{R as t}from"./iframe-CgNYO6-5.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BVStaARi.js";import{R as l}from"./zIndexSlice-BB8bPu9P.js";import{C as x}from"./ComposedChart-CSBQfKzg.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-ByLvEFaA.js";import{L as a}from"./Line-BPx5nNHj.js";import{X as c}from"./XAxis-C0BZU2xf.js";import{T as g}from"./Tooltip-KbchcNmo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DE97QbhK.js";import"./Text-CjIgHDXs.js";import"./resolveDefaultProps-DdU6Jg07.js";import"./DOMUtils-Cwa2E0AM.js";import"./isWellBehavedNumber-hgWpBQUm.js";import"./useId-BaSa9afh.js";import"./useBackwardsCompatibleTheme-CvkC2w7r.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BByjeLs4.js";import"./index-CP-P0bP3.js";import"./index-CNUb9tOf.js";import"./RechartsWrapper-DQslZ_yd.js";import"./index-Dqgfl7Xj.js";import"./index-xSjlJOhZ.js";import"./throttle-CLMZeuK1.js";import"./axisSelectors-O08Nn3VB.js";import"./d3-scale-Bd_S1jK4.js";import"./renderedTicksSlice-BBv91KB4.js";import"./CartesianAxis-DiTVEOFJ.js";import"./Layer-TfcNVFTj.js";import"./types-Un7Q3Ppr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BI9vfx5j.js";import"./chartDataContext-NHEnIpFz.js";import"./CategoricalChart-JtBUTVNJ.js";import"./AnimatedItems-CL4P6dH7.js";import"./useAnimationId-B1M8XMfI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-FcnT4y7f.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DOY9-ZZr.js";import"./tooltipContext-_Boj1wYU.js";import"./RegisterGraphicalItemId-5U6GT5jV.js";import"./ErrorBarContext-DMrc2lGS.js";import"./GraphicalItemClipPath-CdOc_skb.js";import"./SetGraphicalItem-CAAg-5Jk.js";import"./getZIndexFromUnknown-CL1cGeCk.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B07WpZoW.js";import"./Curve-D6U3M4gK.js";import"./step-D20fkZ91.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CdA3IFED.js";import"./Dot-DR-c-Eu3.js";import"./getRadiusAndStrokeWidthFromDot-B5DnJ6_A.js";import"./useElementOffset-B9zbLAyy.js";import"./uniqBy-B_PyO5cU.js";import"./iteratee-BnYMKxdx.js";import"./Cross-DHAgmq7E.js";import"./Sector-Dll_hOcZ.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
