import{R as t}from"./iframe-BMLr-N8m.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Cn7UNGEz.js";import{R as l}from"./zIndexSlice-CNoIWiIj.js";import{C as x}from"./ComposedChart-CRR_BNj7.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-aA6K6mbP.js";import{L as a}from"./Line-BtcKFTig.js";import{X as c}from"./XAxis-vhD_R5mq.js";import{T as g}from"./Tooltip-DCI5-BCa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CO8bLvFk.js";import"./Text-Cz3Pbtag.js";import"./resolveDefaultProps-jOc_O7Kv.js";import"./pageBackground-cNUAWp1v.js";import"./isWellBehavedNumber-gG-DUVNw.js";import"./useId-Dyawny2A.js";import"./useBackwardsCompatibleTheme-TjicyzGG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B6k-j2NC.js";import"./index-g4GeTxJm.js";import"./index-jx1ZEi_d.js";import"./axisSelectors-QHFm6bdo.js";import"./throttle-DpCsf_je.js";import"./d3-scale-uv4cuZVX.js";import"./CartesianAxis-Cy6jCwYH.js";import"./Layer-D25gMhyW.js";import"./types-ClqQg-f4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D6osv6XO.js";import"./index-B5o-g1JC.js";import"./index-BoO0kGmt.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-D6IV3yYd.js";import"./index-CL1KOieJ.js";import"./CartesianChart-crhgf43U.js";import"./chartDataContext-Ch0M7QOU.js";import"./CategoricalChart-D8IryVYJ.js";import"./activeStyles-Bwhdd0Sh.js";import"./useAnimationId--2Xv8oOg.js";import"./dataEntryStyles-BB_5qzNe.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DVvn14nh.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_iPwrws.js";import"./tooltipContext-Buu601Jv.js";import"./ErrorBarContext-CNWoIG-z.js";import"./GraphicalItemClipPath--PSqgLsU.js";import"./SetGraphicalItem-Bhbnxfc6.js";import"./getZIndexFromUnknown-51_r1wPI.js";import"./useEffectiveDataKey-BCNG7ZLV.js";import"./Curve-xHb5ea2i.js";import"./step-5G9v9Gpk.js";import"./path-DyVhHtw_.js";import"./ActivePoints-rASjYmBp.js";import"./Dot-DbGsYyOE.js";import"./getRadiusAndStrokeWidthFromDot-C_Z9reo5.js";import"./useElementOffset-CeqI-3BD.js";import"./uniqBy-CwBYrhp-.js";import"./iteratee-B3n8rbtL.js";import"./Cross-DgLTumD4.js";import"./Sector-B1wyfadM.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
