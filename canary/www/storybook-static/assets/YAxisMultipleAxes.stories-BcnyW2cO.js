import{R as t}from"./iframe-Dt7VmJVd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BGz_S1YP.js";import{R as l}from"./zIndexSlice-CsJRlQGe.js";import{C as x}from"./ComposedChart-BEVdjL9z.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-lKzcet16.js";import{L as a}from"./Line-NbDON0kK.js";import{X as c}from"./XAxis-6DHVILmw.js";import{T as g}from"./Tooltip-BVGdfQP8.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D90LOu0B.js";import"./get-CjriyByo.js";import"./Label-DBOYMKjR.js";import"./Text-CcewevJy.js";import"./ZIndexLayer-DkTMeL_u.js";import"./index-DIUBesy2.js";import"./index-r5JwRAUa.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CfQ5T7pN.js";import"./throttle-DKLEp5Cv.js";import"./axisSelectors-DsQjGGXt.js";import"./diverging-DKSFl2hd.js";import"./CartesianAxis-D2lewiOd.js";import"./Layer-CKqAbqeS.js";import"./types-D6xyOnmX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dq9RCDmE.js";import"./index-L0jXhzhq.js";import"./index-4O_IsFKD.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DmetyJsw.js";import"./index-CJYqS20C.js";import"./fillDefinitions-cJ_Pkre2.js";import"./CartesianChart-DLv9S8DO.js";import"./chartDataContext-DwcTyBcz.js";import"./CategoricalChart-DfxrMEj6.js";import"./dataEntryStyles-BTAsZYzb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dhd8BSnf.js";import"./useAnimationId-CZxgU6AP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Boj2HH09.js";import"./tooltipContext-CB1f6TvU.js";import"./ErrorBarContext-BfQEnsTO.js";import"./activeStyles-CXzu6olF.js";import"./SetGraphicalItem-meI4aCtS.js";import"./getZIndexFromUnknown-CDVfEwyz.js";import"./useEffectiveDataKey-DfkEl2f7.js";import"./omit-BkInlzwT.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-Gis92voa.js";import"./Curve-zF9ULVmH.js";import"./step-C8vG3ka0.js";import"./path-BBMZd4YL.js";import"./ActivePoints-rxDVwUzw.js";import"./Dot-BNusXcbA.js";import"./Symbols-CEcN4H71.js";import"./symbol-BNyIiosb.js";import"./useElementOffset-D-hWuImz.js";import"./uniqBy-DBz81KvG.js";import"./iteratee-Csv0o0lQ.js";import"./Cross-DUJsKjqx.js";import"./Sector-Dq9-kf9w.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
