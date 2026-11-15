import{R as t}from"./iframe-Bs2Fwquo.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BIq5zgoj.js";import{R as l}from"./zIndexSlice-zNxU83Rq.js";import{C as x}from"./ComposedChart-BYL_ipm0.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C7mnOt2T.js";import{L as a}from"./Line-BDg9dyPy.js";import{X as c}from"./XAxis-Da7a1LVz.js";import{T as g}from"./Tooltip-CQk23inZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DziYhFsK.js";import"./Text-ggKHnocX.js";import"./resolveDefaultProps-D3UZ2IUt.js";import"./ZIndexLayer-C_DcULPk.js";import"./index-BKCm3YGD.js";import"./index-uk5XFsYy.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C5Qopf47.js";import"./throttle-CeO6b2ZD.js";import"./axisSelectors-DqQ1JIAI.js";import"./d3-scale-DLjk-fTH.js";import"./CartesianAxis-DRyjDMvy.js";import"./Layer-DSICE4z4.js";import"./types-BK-Q7FAz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BVtbpogk.js";import"./index-KgWNcN6T.js";import"./index-Czszie77.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-H7J0pkbh.js";import"./index-C74zadtv.js";import"./fillDefinitions-DLkwdqwS.js";import"./CartesianChart-C_O9Wt7i.js";import"./chartDataContext-0HCXDBF8.js";import"./CategoricalChart-DBu6n-Yr.js";import"./dataEntryStyles-BK9Z9etj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-bDkm_FXF.js";import"./useAnimationId-6uZicVw9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B_relbt6.js";import"./tooltipContext-BWit-ARE.js";import"./ErrorBarContext-DQsjNYcx.js";import"./activeStyles-B-3paNFW.js";import"./SetGraphicalItem-BoCWO9i9.js";import"./getZIndexFromUnknown-BHesTKRk.js";import"./useEffectiveDataKey-t4gS0ZeN.js";import"./omit-CByspQeK.js";import"./isArguments-yB-y1yaH.js";import"./Curve-FXEPgScl.js";import"./step-B-SD4ABD.js";import"./path-DyVhHtw_.js";import"./ActivePoints-wYZ7tQyZ.js";import"./Dot-x4ugbwnH.js";import"./Symbols-CbMvplMD.js";import"./symbol-DShCcapM.js";import"./getRadiusAndStrokeWidthFromDot-CATBlCH7.js";import"./useElementOffset-MuvUcavz.js";import"./uniqBy-CT6ciLFK.js";import"./iteratee-CuAFSfED.js";import"./Cross-ckzgyXQ_.js";import"./Sector-Cim8UNhj.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
