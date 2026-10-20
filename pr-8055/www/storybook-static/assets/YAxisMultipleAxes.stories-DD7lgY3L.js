import{R as t}from"./iframe-CugsIFqT.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DaK5xoY3.js";import{R as l}from"./zIndexSlice-DhzbqJ4_.js";import{C as x}from"./ComposedChart-B19W0OVJ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BYKM4Rcm.js";import{L as a}from"./Line-CaiOsEW_.js";import{X as c}from"./XAxis-6HDBvGN1.js";import{T as g}from"./Tooltip-DxX815jR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bo3nl74y.js";import"./Text-B6xMGXMn.js";import"./resolveDefaultProps-SYQsUzr-.js";import"./pageBackground-CAJ4za5K.js";import"./isWellBehavedNumber-De17yvdK.js";import"./useId-CrLN3MoL.js";import"./useBackwardsCompatibleTheme-IzBt0VQP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DwmQuX8A.js";import"./index-DnmvEXz4.js";import"./index-D41sdL0q.js";import"./axisSelectors-v31N2mNx.js";import"./throttle-DcWQ2VKw.js";import"./d3-scale-BE1RrYdy.js";import"./CartesianAxis-BJ-39moG.js";import"./Layer-Cn8FVO5-.js";import"./types-D00HSLdz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CiqEuPYb.js";import"./index-DZRNoO74.js";import"./index-SsBOmTOW.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B8Omcwd_.js";import"./index-DwBMtOAp.js";import"./CartesianChart-C9o0hhbA.js";import"./chartDataContext-BvCoW6A3.js";import"./CategoricalChart-B7Q725c1.js";import"./activeStyles-_GUbXh9K.js";import"./useAnimationId-D9Q9XIBx.js";import"./dataEntryStyles-Be_CuUea.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BTGg0Smx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5nThOoH4.js";import"./tooltipContext-CdJnrCrE.js";import"./ErrorBarContext-XAjwvqyS.js";import"./GraphicalItemClipPath-TUVXgEo2.js";import"./SetGraphicalItem-CIhe_dEk.js";import"./getZIndexFromUnknown-JHxCZ0JG.js";import"./useEffectiveDataKey-CDLJWg00.js";import"./omit-BzrrswHV.js";import"./isArguments-yB-y1yaH.js";import"./Curve-TcJOrOAj.js";import"./step-B1Iay_8G.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DdTGUghp.js";import"./Dot-CBYwyJvt.js";import"./getRadiusAndStrokeWidthFromDot-1Vrisa5h.js";import"./useElementOffset-BZwJ3BKY.js";import"./uniqBy-CE_ecxrY.js";import"./iteratee-Pb6iGz9n.js";import"./Cross-D6Fvih2B.js";import"./Sector-DWMdeq_4.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
