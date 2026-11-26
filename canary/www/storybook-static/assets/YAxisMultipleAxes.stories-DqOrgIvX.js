import{R as t}from"./iframe-B8h9Wvr9.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BfjaBbwl.js";import{R as l}from"./zIndexSlice-CVCC3Ewl.js";import{C as x}from"./ComposedChart-CihGBoly.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CUjULqRW.js";import{L as a}from"./Line-BMLS-AKi.js";import{X as c}from"./XAxis-ClvsjJJf.js";import{T as g}from"./Tooltip-DrFlV5HY.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DXlTd2CB.js";import"./get-CjriyByo.js";import"./Label-WZNKLfQt.js";import"./Text-DY2xd2YN.js";import"./ZIndexLayer-Bx5YOPf4.js";import"./index-CKXNY2A8.js";import"./index-R2j1A_a7.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DvWUU3lc.js";import"./throttle-BfhZgz01.js";import"./axisSelectors-DxXHcDkW.js";import"./diverging-B3tlBIXY.js";import"./CartesianAxis-CJ6VDRMk.js";import"./Layer-BE-J6P8G.js";import"./types-BVLhjsLl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CV8xyIus.js";import"./index-DoR62jFZ.js";import"./index-DqggoQHU.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-G4SBGBL6.js";import"./index-y0390T2N.js";import"./fillDefinitions-DTKKCxhO.js";import"./CartesianChart-Bkkx4Fnj.js";import"./chartDataContext-BVM5VACt.js";import"./CategoricalChart-CyVTcBSA.js";import"./dataEntryStyles-Ba3L9xmJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DWu49_Dg.js";import"./useAnimationId-D5-dWWo1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-pnsLPMUZ.js";import"./tooltipContext-DS16xuY4.js";import"./ErrorBarContext-Dq6hu0_F.js";import"./activeStyles-DVd5xcPq.js";import"./SetGraphicalItem-CUEe1yBW.js";import"./getZIndexFromUnknown-rYnYQ4W6.js";import"./useEffectiveDataKey-Bc62JqkW.js";import"./omit-Bw5jP466.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BP6vPVdN.js";import"./Curve-Cp-haaTZ.js";import"./step-YyTtc-k1.js";import"./path-BBMZd4YL.js";import"./ActivePoints-Bhmc1IMZ.js";import"./Dot-CDhU4o_-.js";import"./Symbols-F7LNdmbs.js";import"./symbol-DHr3iGUB.js";import"./useElementOffset-D5rr17de.js";import"./uniqBy-B4zow5Ey.js";import"./iteratee-BmZGYeAG.js";import"./Cross-TH3H6g8S.js";import"./Sector-9XoXTpoZ.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
