import{R as t}from"./iframe-CatpbanJ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BZ1k9Ood.js";import{R as l}from"./zIndexSlice-BMWzHmEu.js";import{C as x}from"./ComposedChart-KfrZJSX3.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-S-CjY4LU.js";import{L as a}from"./Line-Dd-G5LHq.js";import{X as c}from"./XAxis-D8aO7K4u.js";import{T as g}from"./Tooltip-DNYEcnB4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CA5ryIJW.js";import"./Text-CG59Fli3.js";import"./resolveDefaultProps-BADc_Fld.js";import"./pageBackground-CULGASio.js";import"./useId-pkbKCVvH.js";import"./ZIndexLayer-ga9SMmxW.js";import"./index-EESjRsqH.js";import"./index-CWnngu7Y.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BGfelowG.js";import"./throttle-CW9K2jjI.js";import"./dataEntryStyles-DxsZOfoL.js";import"./axisSelectors-ByEpyZG7.js";import"./d3-scale-DWpKPZRY.js";import"./CartesianAxis-D1ZUqzID.js";import"./Layer-ElswMSOx.js";import"./types-BWsJ_4qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BgMwh8Is.js";import"./index-BeMb0fJc.js";import"./index-BmXPv5ws.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DLFC9k-P.js";import"./index-B_5mHYiA.js";import"./CartesianChart-DPS34irs.js";import"./chartDataContext-CYe6eIs4.js";import"./CategoricalChart-C1P-_dY1.js";import"./activeStyles-RllIEBru.js";import"./useAnimationId-BwwRxKkz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DPp-8w2u.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-MJJt-1xu.js";import"./tooltipContext-DP_p8xcm.js";import"./RegisterGraphicalItemId-DvaseCYm.js";import"./ErrorBarContext-CxZNMZBW.js";import"./SetGraphicalItem-Csb9S6BZ.js";import"./getZIndexFromUnknown-Drk4eXtB.js";import"./useEffectiveDataKey-YwyUQgbT.js";import"./omit-CY3zoyhJ.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CPjpKaHf.js";import"./step-uDZ4fNKk.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Neb4G9yW.js";import"./Dot-CO3qiad8.js";import"./getRadiusAndStrokeWidthFromDot-CAu9psjm.js";import"./useElementOffset-N652NpPr.js";import"./uniqBy-CMP_GnVX.js";import"./iteratee-d_6xpuw1.js";import"./Cross-D0i554_n.js";import"./Sector-DyIsjjrt.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
