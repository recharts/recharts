import{R as t}from"./iframe-ClZ97IhH.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-HP_sdQVr.js";import{R as l}from"./zIndexSlice-C5PhT0E1.js";import{C as x}from"./ComposedChart-B1E1zelw.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D1Ou1-wH.js";import{L as a}from"./Line-2hGhSOE2.js";import{X as c}from"./XAxis-CNZNRqSN.js";import{T as g}from"./Tooltip-uwiVUldc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BkbswnOw.js";import"./Layer-av8QWZYv.js";import"./resolveDefaultProps-CcaTf9gV.js";import"./Text-CUeHZ0Lm.js";import"./DOMUtils-C7DdSVbv.js";import"./isWellBehavedNumber-BOULWsxq.js";import"./Label-Bh1DkGaJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DzfxsJEt.js";import"./index-CrQHS0ha.js";import"./index-D9OO5l1d.js";import"./types-CfFSLUx9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cu1gA7XW.js";import"./throttle-CenVclrT.js";import"./RechartsWrapper-BLJ6xSnq.js";import"./index-CFJQbE9C.js";import"./index-6l3olgx1.js";import"./axisSelectors-YPPwLD-Y.js";import"./d3-scale-BrF_Bfnv.js";import"./CartesianChart-CLbAeK38.js";import"./chartDataContext-DXptRcnW.js";import"./CategoricalChart-CU7_I9di.js";import"./tooltipContext-2SEiETQf.js";import"./AnimatedItems-Ugycet-g.js";import"./useAnimationId-BXxNbWRb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DcxWrdiG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-SliXRAYD.js";import"./RegisterGraphicalItemId-XhYDb4e7.js";import"./ErrorBarContext-D5P-GrTa.js";import"./GraphicalItemClipPath-DgZI2AKv.js";import"./SetGraphicalItem-DzMBG2H0.js";import"./getZIndexFromUnknown-kZ-FQiNi.js";import"./graphicalItemSelectors-LqY6E-my.js";import"./Curve-DEZWs80m.js";import"./step-RKP5ji2w.js";import"./path-DyVhHtw_.js";import"./ActivePoints-JUHjUNnj.js";import"./Dot-C94-4eAI.js";import"./getRadiusAndStrokeWidthFromDot-CiF60Eet.js";import"./useElementOffset-Bq5Vxvej.js";import"./uniqBy-WOO0nBZ6.js";import"./iteratee-B_h2EV3R.js";import"./Cross-WVRf3tAf.js";import"./Sector-BInnoliH.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
