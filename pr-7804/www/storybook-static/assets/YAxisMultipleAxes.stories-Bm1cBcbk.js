import{R as t}from"./iframe-CKftEeOR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DtHNKlU_.js";import{R as l}from"./zIndexSlice-Rd7CQgQI.js";import{C as x}from"./ComposedChart-D4xLMnX4.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D5euRWY-.js";import{L as a}from"./Line-CtyxKqH8.js";import{X as c}from"./XAxis-IahfvaCM.js";import{T as g}from"./Tooltip-C-5yBIxR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BtMZmHcU.js";import"./Text-BY0JJbaS.js";import"./resolveDefaultProps-CUD-thP6.js";import"./DOMUtils-B_LhErBS.js";import"./isWellBehavedNumber-B15AKauy.js";import"./useId-j7axFfWl.js";import"./useBackwardsCompatibleTheme-BFpC_R2y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CfiakTBb.js";import"./index-B3U1nEt0.js";import"./index-CMyqNfgS.js";import"./RechartsWrapper-CBr2vBLf.js";import"./axisSelectors-DhTPihhT.js";import"./throttle-BNKYmND6.js";import"./d3-scale-DUU3auep.js";import"./index-CfJyz4zD.js";import"./index-CaONc0yZ.js";import"./renderedTicksSlice-4VCM87iZ.js";import"./index-D3UZJ1g6.js";import"./CartesianAxis-klHqdii2.js";import"./Layer-t7Sk-OLm.js";import"./types-CQiiKif5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-yCMxlTpO.js";import"./chartDataContext-4zvmbyyj.js";import"./CategoricalChart-DGT3qw3A.js";import"./AnimatedItems-ePjd4Kgp.js";import"./useAnimationId-cpDkl9it.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BOOPVSCO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B9DHSeBV.js";import"./tooltipContext-BvLftK3I.js";import"./RegisterGraphicalItemId-rDiVUOUt.js";import"./ErrorBarContext-DliiI0LB.js";import"./GraphicalItemClipPath-C7Us-zic.js";import"./SetGraphicalItem-DS6Pgf_p.js";import"./getZIndexFromUnknown-BwvuKeFG.js";import"./useGraphicalItemIdentity-C7mRPXGd.js";import"./Curve-DKcxqEob.js";import"./step-Bq5ebvyI.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D9o__0t3.js";import"./Dot-C7TV-TKY.js";import"./getRadiusAndStrokeWidthFromDot-CeZqJgOi.js";import"./useElementOffset-DJqx9A--.js";import"./uniqBy-CLIdSOOo.js";import"./iteratee-Dl0nvfyM.js";import"./Cross-CrrRIKEY.js";import"./Sector-DRJq0nZU.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
