import{R as t}from"./iframe-D_khPHZ1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CYrms82_.js";import{R as l}from"./zIndexSlice-KFlckT-7.js";import{C as x}from"./ComposedChart-v5twU8VD.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-SEmD42Jg.js";import{L as a}from"./Line-CHEB0oTV.js";import{X as c}from"./XAxis-CG7KNKev.js";import{T as g}from"./Tooltip-B6p5KddX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DNajAghq.js";import"./Text-CRLTQjiS.js";import"./resolveDefaultProps-BBG9DHK8.js";import"./pageBackground-Cdf9H4fo.js";import"./isWellBehavedNumber-DGsU9FBh.js";import"./useId-DisFqhsr.js";import"./useBackwardsCompatibleTheme-BLiMjfFD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BGvEmvHh.js";import"./index-CB03tEHO.js";import"./index-BuxDgG-t.js";import"./dataEntryStyles-2My5Q2VA.js";import"./axisSelectors-CBjKjY28.js";import"./throttle-BBn7lrSC.js";import"./d3-scale-BLOap0UK.js";import"./CartesianAxis-DtPap_2c.js";import"./Layer-D1docXzT.js";import"./types-DL7z7syQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Jho7gpOC.js";import"./index-syOpg8yK.js";import"./index-BI2dlpsL.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Do2gsgG0.js";import"./index-CHrlhwwU.js";import"./CartesianChart-Ci9HbE6G.js";import"./chartDataContext-DTR5p3jS.js";import"./CategoricalChart-Bfua2ObC.js";import"./activeStyles-DVSsJDko.js";import"./useAnimationId-BOA4oZA_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BifmVm-G.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C8SJzoVE.js";import"./tooltipContext-DVHndJ9j.js";import"./RegisterGraphicalItemId-CFGUNGbT.js";import"./ErrorBarContext-DWMtIAoI.js";import"./SetGraphicalItem-CGqBV4nA.js";import"./getZIndexFromUnknown-BcdX0_Uj.js";import"./useEffectiveDataKey-B2F1WAcU.js";import"./omit-BMLwajrp.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D4vzOHVD.js";import"./step-BnRh-hkR.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B4rNmWdt.js";import"./Dot-DSp-kazZ.js";import"./getRadiusAndStrokeWidthFromDot-ycj1XfTC.js";import"./useElementOffset-9IHiAY7G.js";import"./uniqBy-DXUw7-JM.js";import"./iteratee-C2BbWe9-.js";import"./Cross-BSu4ikXf.js";import"./Sector-B4BO-2Ae.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
