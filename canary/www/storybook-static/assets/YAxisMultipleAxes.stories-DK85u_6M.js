import{R as t}from"./iframe-J2FnkNkN.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DtzyVJ31.js";import{R as l}from"./zIndexSlice-CIfx3dbz.js";import{C as x}from"./ComposedChart-jyhVlhQd.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BF6f2qeb.js";import{L as a}from"./Line-BrRmSeyv.js";import{X as c}from"./XAxis-9YTS4CGv.js";import{T as g}from"./Tooltip-Dg32n1R1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bl3T8NIS.js";import"./Text-DoArQ2iR.js";import"./resolveDefaultProps-C36Ti6I7.js";import"./DOMUtils-DrtZ7889.js";import"./isWellBehavedNumber-Bda2kxwI.js";import"./useId-BqCnyWtn.js";import"./useBackwardsCompatibleTheme-iB5pgxqo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BcQVAnhI.js";import"./index-DOkoL7Wj.js";import"./index-DRH1Q61C.js";import"./RechartsWrapper-tuonj_dH.js";import"./index-udl5h_c3.js";import"./index-B1zoM-7H.js";import"./throttle-Dd6uK12C.js";import"./axisSelectors-XOgqlW54.js";import"./d3-scale-BnVmKfe4.js";import"./renderedTicksSlice-uiaDKKzv.js";import"./CartesianAxis-yBNynPDV.js";import"./Layer-B9c44e16.js";import"./types-cmsIqA-S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-7orgvIwE.js";import"./chartDataContext-DsIZ8kzc.js";import"./CategoricalChart-Dws3VtHh.js";import"./AnimatedItems-DaE3ZoZL.js";import"./useAnimationId-B8FTTFdD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B_K-GkWm.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DbeW4ISg.js";import"./tooltipContext-entPuZP8.js";import"./RegisterGraphicalItemId-4W54GOXR.js";import"./ErrorBarContext-nAJ3rKAi.js";import"./GraphicalItemClipPath-BR02B87f.js";import"./SetGraphicalItem-B2-Omghc.js";import"./getZIndexFromUnknown-DdfPvwcz.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CfGcF6Eu.js";import"./Curve-CNSL121i.js";import"./step-B2sXv2yh.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Cu9CSGsi.js";import"./Dot-BQU71g_n.js";import"./getRadiusAndStrokeWidthFromDot-DwBzFWb4.js";import"./useElementOffset-CcIe0GmH.js";import"./uniqBy-HD7GgsnH.js";import"./iteratee-Bg0tlSUT.js";import"./Cross-BRmVujOL.js";import"./Sector-CpcwYh-j.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
