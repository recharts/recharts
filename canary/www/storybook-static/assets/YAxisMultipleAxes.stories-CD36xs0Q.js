import{R as t}from"./iframe-1Nx1Hwd8.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CLaAdl_L.js";import{R as l}from"./zIndexSlice-BPgffy3O.js";import{C as x}from"./ComposedChart-DwgM-9LJ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B_Nqj4lj.js";import{L as a}from"./Line-N-ZSdJCU.js";import{X as c}from"./XAxis-Iy9-nOhv.js";import{T as g}from"./Tooltip-C0zSpESh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CzY3tv0Q.js";import"./Text-D7Dvlpl9.js";import"./resolveDefaultProps-BuS60Zcm.js";import"./DOMUtils-CyzSDn7U.js";import"./isWellBehavedNumber-BZkA4GqO.js";import"./useId-y9Z6ZhpG.js";import"./useBackwardsCompatibleTheme-CJcbMh-P.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CgXwR33B.js";import"./index-BxODcotD.js";import"./index-BxXrUDFi.js";import"./RechartsWrapper-DOZVWK-P.js";import"./index-DrfO8rcp.js";import"./index-DuNxWLhT.js";import"./throttle-BvcOGqjl.js";import"./axisSelectors-C77-vGCj.js";import"./d3-scale-B_Ed44y-.js";import"./renderedTicksSlice-DdDjPDgD.js";import"./CartesianAxis-zUKk9a_2.js";import"./Layer-CY3HNiYQ.js";import"./types-CW2QSzeT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CfBDZXwX.js";import"./chartDataContext-B9qtLtUj.js";import"./CategoricalChart-CmvqfSaL.js";import"./AnimatedItems-CvXLsYG2.js";import"./useAnimationId-BUamwr57.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DQ3akkPb.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-K1kvzU25.js";import"./tooltipContext-B1Zg-jqn.js";import"./RegisterGraphicalItemId-Ctsh4Fgt.js";import"./ErrorBarContext-aNneKhPH.js";import"./GraphicalItemClipPath-l6BikrPU.js";import"./SetGraphicalItem-CfAx1sDn.js";import"./getZIndexFromUnknown-BhNgmBUg.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CrnNOped.js";import"./Curve-BLyT9pX_.js";import"./step-DiCJ9NfT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C0mFYRu2.js";import"./Dot-CrNXlHuf.js";import"./getRadiusAndStrokeWidthFromDot-BvpolENt.js";import"./useElementOffset-CDb0HKNC.js";import"./uniqBy-o1WAa8Cs.js";import"./iteratee-BRVvFQUm.js";import"./Cross-E4IP8E6G.js";import"./Sector-CQHr_yNh.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
