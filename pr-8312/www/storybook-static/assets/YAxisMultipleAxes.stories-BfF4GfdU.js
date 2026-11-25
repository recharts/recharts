import{R as t}from"./iframe-CVu8zrUS.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CbExEBw4.js";import{R as l}from"./zIndexSlice-Bq6bmQlp.js";import{C as x}from"./ComposedChart-DxlxWjOw.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-xWnk4k-f.js";import{L as a}from"./Line-CcBwkv4q.js";import{X as c}from"./XAxis-Cmp_u62X.js";import{T as g}from"./Tooltip-8ZVz6rt9.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bb5e-Ri9.js";import"./get-CjriyByo.js";import"./Label-Cx8AJG-1.js";import"./Text-R7SqSI0E.js";import"./ZIndexLayer-B1JZDtFw.js";import"./index-CnHWc7sj.js";import"./index-DtrO1U5O.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-MtWLdCCF.js";import"./throttle-DhpuiNc1.js";import"./axisSelectors-Sot67Aim.js";import"./d3-scale-BfJtYZLb.js";import"./CartesianAxis-Ctwjf5Ws.js";import"./Layer-Cu87ioWV.js";import"./types-DISj1D7D.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C88oJ44U.js";import"./index-9zr5wxfL.js";import"./index-BuvxFglF.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BMgc3fuA.js";import"./index-CTNfzL7A.js";import"./fillDefinitions-nObHHCVo.js";import"./CartesianChart-CcPXlhV4.js";import"./chartDataContext-Dg0Jj1rs.js";import"./CategoricalChart-DIJd4lOu.js";import"./dataEntryStyles-BbIoPGWl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BixLzELc.js";import"./useAnimationId-HRjjYmjj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BVHA2GWO.js";import"./tooltipContext-Ccv8zWbS.js";import"./ErrorBarContext-v1LyTi-B.js";import"./activeStyles-BYV0uDWS.js";import"./SetGraphicalItem-BzQ3GKka.js";import"./getZIndexFromUnknown-Czbq2HvR.js";import"./useEffectiveDataKey-BkqeFEex.js";import"./omit-BEZij6l-.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-C0Ej1DHm.js";import"./Curve-DnKmeSPX.js";import"./step-B759BuMX.js";import"./path-BBMZd4YL.js";import"./ActivePoints-y_nl0SSe.js";import"./Dot-CJSjjEfy.js";import"./Symbols-CPBzhLNS.js";import"./symbol-BnOQ6fEU.js";import"./useElementOffset-J7kEM2re.js";import"./uniqBy-CRfw9j4K.js";import"./iteratee-ExFm1WSh.js";import"./Cross-Bguv1Xns.js";import"./Sector-Cdqieute.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
